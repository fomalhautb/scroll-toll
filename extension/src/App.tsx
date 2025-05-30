import { useEffect, useState } from "react";

interface TrackingResponse {
  success: boolean;
  message: string;
  currentRequestCount: number;
  minimumCharge: number;
  currentCharge: number;
  url: string;
}

// Function to fetch the current cost from the API
const fetchCurrentCost = async (
  sessionToken: string
): Promise<TrackingResponse | null> => {
  try {
    // Only proceed if we have a session token
    if (!sessionToken) {
      console.error("No session token available");
      return null;
    }

    const response = await fetch("http://localhost:3000/api/track-request", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching current cost:", error);
    return null;
  }
};

function App() {
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [trackingData, setTrackingData] = useState<TrackingResponse | null>(null);

  useEffect(() => {
    // Only run Chrome-specific code if we're in a Chrome extension context
    if (typeof chrome !== "undefined" && chrome.tabs) {
      // Get the current active tab URL
      chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs: chrome.tabs.Tab[]) => {
          if (tabs[0]?.url) {
            setCurrentUrl(tabs[0].url);
          }
        }
      );

      // Get the stored session token
      chrome.storage.local.get(["sessionToken"], (result) => {
        if (result.sessionToken) {
          setSessionToken(result.sessionToken);
        }
      });
    }
  }, []);

  useEffect(() => {
    // Function to fetch and update the cost
    const updateCost = async () => {
      if (sessionToken) {
        const data = await fetchCurrentCost(sessionToken);
        setTrackingData(data);
      }
    };

    // Call immediately on mount
    updateCost();

    // Set up interval to fetch cost every 5 seconds
    const intervalId = setInterval(updateCost, 500);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [sessionToken]);

  const handleOpenLocalhost = () => {
    if (typeof chrome !== "undefined" && chrome.windows) {
      chrome.windows.create({
        url: "http://localhost:3000",
        type: "popup",
        width: 800,
        height: 600,
      });
    } else {
      window.open("http://localhost:3000", "_blank");
    }
  };

  return (
    <div className="min-w-[400px] bg-gray-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Scroll Toll</h1>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Current URL
            </h2>
            <p className="text-sm text-gray-800 break-all">
              {trackingData?.url || currentUrl || "Loading..."}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Session Status
            </h2>
            <div className="flex items-center">
              {sessionToken ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Connected
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Disconnected
                </span>
              )}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Usage Statistics
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Request Count:</span>
                <span className="text-sm font-medium text-gray-800">
                  {trackingData?.currentRequestCount ?? "Loading..."}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Minimum Charge:</span>
                <span className="text-sm font-medium text-gray-800">
                  ${trackingData?.minimumCharge?.toFixed(2) ?? "Loading..."}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Current Charge:</span>
                <span className="text-2xl font-bold text-gray-800">
                  ${trackingData?.currentCharge?.toFixed(2) ?? "Loading..."}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleOpenLocalhost}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Open Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
