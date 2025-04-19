import { useEffect, useState } from 'react'

function App() {
  const [currentUrl, setCurrentUrl] = useState<string>('')
  const [sessionToken, setSessionToken] = useState<string | null>(null)

  useEffect(() => {
    // Only run Chrome-specific code if we're in a Chrome extension context
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      // Get the current active tab URL
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
        if (tabs[0]?.url) {
          setCurrentUrl(tabs[0].url)
        }
      })

      // Get the stored session token
      chrome.storage.local.get(['sessionToken'], (result) => {
        if (result.sessionToken) {
          setSessionToken(result.sessionToken)
        }
      })
    }
  }, [])

  const handleOpenLocalhost = () => {
    if (typeof chrome !== 'undefined' && chrome.windows) {
      chrome.windows.create({
        url: 'http://localhost:3000',
        type: 'popup',
        width: 800,
        height: 600
      });
    } else {
      window.open('http://localhost:3000', '_blank');
    }
  };

  return (
    <div className="p-4 min-w-[400px]">
      <div style={{ marginTop: '16px' }}>
        <p style={{ margin: '8px 0', wordBreak: 'break-all' }}>
          Current URL: {currentUrl || 'Loading...'}
        </p>
        <p style={{ margin: '8px 0', wordBreak: 'break-all' }}>
          Session Token: {sessionToken ? '✅ Received' : '❌ Not received'}
        </p>
        <button
          onClick={handleOpenLocalhost}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Open Localhost
        </button>
      </div>
    </div>
  )
}

export default App
