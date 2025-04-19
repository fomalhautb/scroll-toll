// Listen for messages from the website
window.addEventListener('message', (event) => {
    // Verify the message is from our trusted domain
    if (event.origin !== 'http://localhost:3000') return;

    // Check if the message contains a session token
    if (event.data.type === 'SESSION_TOKEN') {
        // Send the token to the extension's background script
        chrome.runtime.sendMessage({
            type: 'SESSION_TOKEN',
            token: event.data.token
        });
    }
});

// Notify the website that the content script is ready
window.postMessage({ type: 'EXTENSION_READY' }, 'http://localhost:3000'); 