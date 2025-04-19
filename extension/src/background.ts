// Listen for external connections from localhost:3000
chrome.runtime.onMessageExternal.addListener(
    (request, sender, sendResponse) => {
        // Verify the sender is from localhost:3000
        if (sender.origin !== 'http://localhost:3000') return;

        console.log('External message received:', request);

        // Handle the message and send response
        if (request.type === 'SESSION_TOKEN') {
            // Store the token in chrome.storage
            chrome.storage.local.set({ sessionToken: request.token }, () => {
                console.log('Session token stored');
                sendResponse({ success: true });
            });
            return true; // Will respond asynchronously
        }

        sendResponse({ success: false });
    }
);


const backend = "http://localhost:3000";

const reportUsage = async (url: string, tabId: number) => {
    const sessionToken = await chrome.storage.local.get('sessionToken');

    if (!sessionToken) {
        console.error('No session token found');
        return;
    }

    const response = await fetch(`${backend}/api/track-request`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken.accessToken}`
        },
        body: JSON.stringify({ url, tabId })
    });
    return response.json();
}

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received:', message, sender, sendResponse);
    if (message.type === 'SESSION_TOKEN') {
        // Store the token in chrome.storage

        chrome.storage.local.set({ sessionToken: message.token }, () => {
            console.log('Session token stored');
        });
    }
});

// Listen for tab updates
chrome.tabs.onActivated.addListener(async (activeInfo) => {
    try {
        const tab = await chrome.tabs.get(activeInfo.tabId);
        console.log('Current active tab:', tab);
    } catch (error) {
        console.error('Error getting tab info:', error);
    }
});

// Also log when a tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log('Tab updated:', tabId, changeInfo, tab);
    if (changeInfo.status === 'complete') {
        console.log('Tab updated:', tab);
    }
});


// Set up a periodic check for the active tab URL
setInterval(async () => {
    try {
        // Get the current active tab
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

        if (tabs.length > 0 && tabs[0].url) {
            // Report the URL of the active tab
            console.log('Reporting usage for:', tabs[0].url);
            await reportUsage(tabs[0].url, tabs[0].id ?? 0);
        } else {
            console.log('No active tab found or URL is undefined');
        }
    } catch (error) {
        console.error('Error in periodic URL reporting:', error);
    }
}, 10000); // Run every 10 seconds (10000 milliseconds)
