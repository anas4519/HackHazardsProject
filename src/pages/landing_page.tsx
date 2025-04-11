import React from 'react';
import { Timer, Heart, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),rgba(255,255,255,0))] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pt-20 pb-16 text-center lg:pt-32">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Productivity</span>
              <span className="block text-indigo-500 mt-3">With Purpose</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
              "Your commitment becomes everyone's victory. Succeed and prosper, or empower charitable causes."
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-white hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 group">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-gray-900 group-hover:text-gray-800">Sign in with Google</span>
              </button>
              <button 
                onClick={() => navigate('/whitelist')}
                className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg shadow-lg text-white bg-transparent hover:bg-gray-800/50 transition-all duration-200 transform hover:scale-105"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-200 hover:border-indigo-500/50 group">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors duration-200">
                <Timer className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">Track Your Progress</h3>
              <p className="mt-2 text-gray-300">
                Monitor your screen time and productivity habits with our intelligent tracking system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-200 hover:border-indigo-500/50 group">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors duration-200">
                <Shield className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">Stake Your Success</h3>
              <p className="mt-2 text-gray-300">
                Put your money where your motivation is. Succeed and keep your stake, or let it benefit others.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-200 hover:border-indigo-500/50 group">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors duration-200">
                <Heart className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">Impact Through Action</h3>
              <p className="mt-2 text-gray-300">
                Your commitment drives positive change. Every setback becomes a charitable contribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}