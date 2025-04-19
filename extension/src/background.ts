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