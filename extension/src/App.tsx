import { useEffect, useState } from 'react'

function App() {
  const [currentUrl, setCurrentUrl] = useState<string>('')

  useEffect(() => {
    // Get the current active tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
      if (tabs[0]?.url) {
        setCurrentUrl(tabs[0].url)
      }
    })
  }, [])

  return (
    <div style={{ padding: '16px', minWidth: '300px' }}>
      <h1 style={{ margin: 0, fontSize: '20px' }}>Scroll Toll</h1>
      <div style={{ marginTop: '16px' }}>
        <p style={{ margin: '8px 0', wordBreak: 'break-all' }}>
          Current URL: {currentUrl || 'Loading...'}
        </p>
      </div>
    </div>
  )
}

export default App
