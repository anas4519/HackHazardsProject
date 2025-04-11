import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Check, X, Loader2 } from 'lucide-react';
import { getSystemApps, SystemApp } from '../utils/getSystemApps';

export default function AppWhitelist() {
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [showWarning, setShowWarning] = useState(true);
  const [systemApps, setSystemApps] = useState<SystemApp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const apps = await getSystemApps();
        setSystemApps(apps);
      } catch (err) {
        setError('Failed to load system applications');
        console.error('Error fetching apps:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  const toggleApp = (appName: string) => {
    setSelectedApps(prev => 
      prev.includes(appName) 
        ? prev.filter(app => app !== appName)
        : [...prev, appName]
    );
  };

  const getAppIcon = (app: SystemApp) => {
    // This would be replaced with actual app icon loading in production
    const defaultIcons: { [key: string]: string } = {
      'Chrome': '🌐',
      'Safari': '🌐',
      'Firefox': '🌐',
      'Visual Studio Code': '💻',
      'Terminal': '💻',
      'Slack': '💬',
      'Discord': '💬',
      'Spotify': '🎵',
      'Apple Music': '🎵',
      'Messages': '💬',
      'Mail': '📧',
      'Calendar': '📅',
      'Notes': '📝',
      'Reminders': '⏰',
      'Photos': '📷'
    };
    return defaultIcons[app.name] || '📱';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Configure Your Study Session</h1>
          <p className="text-gray-300">Select the apps you want to allow during your study session</p>
        </div>

        {showWarning && (
          <div className="mb-8 p-4 bg-red-900/30 border border-red-800 rounded-lg backdrop-blur-sm">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-400 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Important Warning</h3>
                <p className="text-gray-300">
                  Only select apps that are essential for your study session. Any app not in this list will be blocked during your study time.
                  Remember, the goal is to minimize distractions and maximize productivity.
                </p>
                <button 
                  onClick={() => setShowWarning(false)}
                  className="mt-4 text-red-400 hover:text-red-300 transition-colors"
                >
                  I understand
                </button>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 text-indigo-500 animate-spin" />
            <span className="ml-3 text-gray-300">Loading system applications...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <p className="text-gray-300">{error}</p>
            <p className="text-gray-400 mt-2">Please try refreshing the page</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemApps.map((app) => (
                <div
                  key={app.path}
                  onClick={() => toggleApp(app.name)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedApps.includes(app.name)
                      ? 'bg-indigo-900/50 border-indigo-500'
                      : 'bg-gray-900/50 border-gray-800'
                  } border hover:border-indigo-500/50 group`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{getAppIcon(app)}</span>
                      <div>
                        <span className="text-white font-medium block">{app.name}</span>
                        <span className="text-gray-400 text-sm block truncate max-w-[200px]">{app.path}</span>
                      </div>
                    </div>
                    {selectedApps.includes(app.name) ? (
                      <Check className="h-5 w-5 text-green-400" />
                    ) : (
                      <X className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-indigo-700 hover:bg-indigo-600 transition-all duration-200 transform hover:scale-105"
              >
                <Shield className="h-5 w-5 mr-2" />
                Start Study Session
              </button>
              <p className="mt-4 text-sm text-gray-400">
                {selectedApps.length} app{selectedApps.length !== 1 ? 's' : ''} selected
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 