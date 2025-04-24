import React, { useEffect, useState } from 'react';
import { Timer, Heart, Shield, ArrowRight, Star } from 'lucide-react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [macInstallMethod, setMacInstallMethod] = useState("website");
  const [winInstallMethod, setWinInstallMethod] = useState("website");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-indigo-500/10 animate-pulse"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.05
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.15),rgba(255,255,255,0))] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="pt-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="Logo" className="w-16 h-16" />
              <span className="text-white font-bold text-2xl">Coincentrate</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#installation" className="text-gray-300 hover:text-white transition-colors">Installation Guide</a>
              <a href="#impact" className="text-gray-300 hover:text-white transition-colors">Impact</a>
            </div>
          </nav>

          <div className={`pt-20 pb-16 text-center lg:pt-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Star className="w-4 h-4 mr-2" /> Redefine Your Productivity
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Transform Your Productivity</span>
              <span className="block mt-3">
                With <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Coincentrate</span>
              </span>
            </h1>
            
            <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              "Your commitment becomes everyone's victory. Succeed and prosper, or empower charitable causes."
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <a href="https://github.com/anas4519/HackHazardsProject/releases/download/1.0.0/coincentrate.dmg" download>
                <button className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-xl text-white bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                  <svg className="w-6 h-6 mr-3 text-white/90 group-hover:text-white transition-colors duration-300 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="relative font-semibold z-10">Download for macOS</span>
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                </button>
              </a>
              
              <a href="https://github.com/sarthakkjha/session-success-stack">
                <button className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 mt-4 sm:mt-0 border border-transparent text-base font-medium rounded-xl shadow-xl text-white bg-gradient-to-br from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg" 
                    alt="Windows Logo" 
                    className="w-6 h-6 mr-3 filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                  />
                  <span className="font-semibold relative z-10">Download for Windows</span>
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Unlock Your Full Potential
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Our powerful features help you stay accountable and make a positive impact with every goal you achieve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:border-indigo-500/50 group transform hover:-translate-y-2">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <Timer className="h-7 w-7 text-indigo-400 group-hover:text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Progress Tracking</h3>
              <p className="text-gray-400 leading-relaxed">
                Our intelligent system monitors your productivity habits, providing personalized insights and actionable data to help you optimize your workflow.
              </p>
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Feature 2 */}
            <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:border-indigo-500/50 group transform hover:-translate-y-2">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <Shield className="h-7 w-7 text-indigo-400 group-hover:text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Accountability System</h3>
              <p className="text-gray-400 leading-relaxed">
                Put your money where your motivation is. Set stakes on your goals, succeed and keep your investment, or let it benefit causes you care about.
              </p>
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Feature 3 */}
            <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:border-indigo-500/50 group transform hover:-translate-y-2">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <Heart className="h-7 w-7 text-indigo-400 group-hover:text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Meaningful Impact</h3>
              <p className="text-gray-400 leading-relaxed">
                Transform even your setbacks into positive change. Every missed goal becomes a charitable contribution to causes making real difference in the world.
              </p>
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Guide Section - replacing Testimonials */}
      <div id="installation" className="py-24 relative bg-gray-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Installation Guide
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Follow these simple steps to get started with Coincentrate on your system.
            </p>
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-300 mx-auto max-w-3xl">
              <p className="font-medium">Important Note:</p>
              <p className="mt-1">Due to integration issues with Screenpipe, the application may not function properly in production environments. We kindly request that you evaluate our project through our demonstration video (<a href="https://youtu.be/uHFlMRPbpEc" className="underline">video link</a>). If you would like to test the application directly, please visit our GitHub repository (<a href="https://github.com/sarthakkjha/session-success-stack" className="underline">github link</a>) and follow the instructions to install and run it in development mode.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* macOS Installation */}
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 relative">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">macOS Installation</h3>
              </div>
              
              <ol className="space-y-6 text-gray-300">
                <li className="flex">
                  <span className="flex-shrink-0 font-bold text-indigo-400 mr-3">1.</span>
                  <div>
                    <p className="font-medium">Install Screenpipe on your system.</p>
                    <div className="mt-1 text-gray-400 flex space-x-4">
                      <button 
                        className={`px-3 py-1 rounded-md transition-colors ${macInstallMethod === 'website' ? 'bg-indigo-500/20 text-white' : 'bg-gray-700/50 hover:bg-gray-700/70'}`}
                        onClick={() => setMacInstallMethod('website')}
                      >
                        Website Download
                      </button>
                      <button 
                        className={`px-3 py-1 rounded-md transition-colors ${macInstallMethod === 'cli' ? 'bg-indigo-500/20 text-white' : 'bg-gray-700/50 hover:bg-gray-700/70'}`}
                        onClick={() => setMacInstallMethod('cli')}
                      >
                        CLI Installation
                      </button>
                    </div>
                  </div>
                </li>
                
                {/* Website Installation Method */}
                <div className={`pl-6 border-l border-indigo-500/20 ${macInstallMethod === 'website' ? 'block' : 'hidden'}`}>
                  <h4 className="text-indigo-400 font-medium mb-3">Website Installation</h4>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 font-bold text-indigo-400 mr-3">1.</span>
                      <div>
                        <p className="font-medium">Download the installer</p>
                        <p className="mt-1 text-gray-400">Visit the official website Screenpipe website (<a href="https://screenpi.pe/" className="text-indigo-400 hover:text-indigo-300">screenpipe.pe</a>) and download the latest version.</p>
                      </div>
                    </li>
                    
                  </ol>
                </div>
                
                {/* CLI Installation Method */}
                <div className={`pl-6 border-l border-indigo-500/20 ${macInstallMethod === 'cli' ? 'block' : 'hidden'}`}>
                  <h4 className="text-indigo-400 font-medium mb-3">CLI Installation</h4>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 font-bold text-indigo-400 mr-3">1.</span>
                      <div>
                        <p className="font-medium">Open Terminal</p>
                        <p className="mt-1 text-gray-400">Launch Terminal from anywhere on your system.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 font-bold text-indigo-400 mr-3">2.</span>
                      <div>
                        <p className="font-medium">Install with Command</p>
                        <p className="mt-1 text-gray-400">Run the command: <code className="bg-gray-800 px-2 py-0.5 rounded">curl -fsSL get.screenpi.pe/cli | sh</code></p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 font-bold text-indigo-400 mr-3">3.</span>
                      <div>
                        <p className="font-medium">Verify installation</p>
                        <p className="mt-1 text-gray-400">Run <code className="bg-gray-800 px-2 py-0.5 rounded">screenpipe</code> to confirm successful installation.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <li className="flex">
  <span className="font-bold text-indigo-400 mr-3">2.</span>
  <div>
    <p className="font-medium">Setup Coincentrate</p>
    <ul className="mt-1 text-gray-400 list-disc list-inside ml-4 space-y-1">
      <li>Download the .dmg file from the button above and install it.</li>
      <li>
        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded mr-2">Recommended</span>
        Follow the instructions in our <a href="https://github.com/sarthakkjha/session-success-stack" className="text-indigo-400 hover:text-indigo-300">GitHub repository</a> to run it in development mode.
      </li>
    </ul>
  </div>
</li>

              </ol>
            </div>
            
            {/* Windows Installation */}
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 relative">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg" 
                    alt="Windows Logo" 
                    className="w-6 h-6 filter brightness-0 invert opacity-90"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">Windows Installation</h3>
              </div>
              
              <ol className="space-y-6 text-gray-300">
                <li className="flex">
                  <span className="flex-shrink-0 font-bold text-blue-400 mr-3">1.</span>
                  <div>
                    <p className="font-medium">Install Screenpipe via CLI</p>
                    <p className="mt-1 text-gray-400">Screenpipe is only available via CLI installation on Windows.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="flex-shrink-0 font-bold text-blue-400 mr-3">2.</span>
                  <div>
                    <p className="font-medium">Open PowerShell</p>
                    <p className="mt-1 text-gray-400">Launch PowerShell as Administrator.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="flex-shrink-0 font-bold text-blue-400 mr-3">3.</span>
                  <div>
                    <p className="font-medium">Install with Command</p>
                    <p className="mt-1 text-gray-400">Run the command: <code className="bg-gray-800 px-2 py-0.5 rounded">iwr get.screenpi.pe/cli.ps1 | iex</code></p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="flex-shrink-0 font-bold text-blue-400 mr-3">4.</span>
                  <div>
                    <p className="font-medium">Verify installation</p>
                    <p className="mt-1 text-gray-400">Run <code className="bg-gray-800 px-2 py-0.5 rounded">screenpipe</code> to confirm successful installation.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="flex-shrink-0 font-bold text-blue-400 mr-3">5.</span>
                  <div>
                    <p className="font-medium">Setup Coincentrate</p>
                    <p className="mt-1 text-gray-400">Visit our <a href="https://github.com/sarthakkjha/session-success-stack" className="text-blue-400 hover:text-blue-300">GitHub repository</a> and follow the instructions in the README to install and run Coincentrate in development mode.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      {/* Impact Section - replacing Pricing */}
      <div id="impact" className="py-24 relative bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),rgba(255,255,255,0))] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
              <Heart className="w-4 h-4 mr-2" /> Making A Difference
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your Productivity Fuels Positive Change
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Coincentrate transforms your productivity into educational opportunities for underprivileged children in rural India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* How It Works */}
            <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/30 group overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                <svg className="h-7 w-7 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Stake ETH</h3>
              <p className="text-gray-400 leading-relaxed">
                Before starting a productivity session, stake ETH from your Base wallet as a commitment to your goals. This creates accountability through a financial incentive.
              </p>
            </div>

            {/* Impact 2 */}
            <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/30 group overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                <svg className="h-7 w-7 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Complete or Contribute</h3>
              <p className="text-gray-400 leading-relaxed">
                Successfully complete your session and get your ETH back. If you get distracted or fail to meet your goals, your stake automatically funds education for children in need.
              </p>
            </div>

            {/* Impact 3 */}
            <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/30 group overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                <svg className="h-7 w-7 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5.48999V20.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.75 8.48999H5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 11.49H5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Educational Impact</h3>
              <p className="text-gray-400 leading-relaxed">
                Your contributions provide educational resources, school supplies, and learning opportunities for children in rural India who would otherwise lack access to quality education.
              </p>
            </div>
          </div>

          {/* Image Gallery of Underprivileged Kids */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">How your contributions help others</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <img 
                  src="/assets/rural bihar school.avif" 
                  alt="Smiling school children in rural Bihar" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-medium">Rural School in Bihar</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <img 
                  src="/assets/learn together.jpg" 
                  alt="Children learning together in a rural classroom" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-medium">Learning Together</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <img 
                  src="/assets/access to education.webp" 
                  alt="Child gaining access to education resources" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-medium">Access to Education</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <img 
                  src="/assets/building futures.avif" 
                  alt="Children building their futures through education" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-medium">Building Futures</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Impact Transparency</h3>
                <p className="text-gray-400 max-w-2xl">
                  All contributions are recorded on the blockchain, providing complete transparency. We will partner with verified educational NGOs in India to ensure your contributions create meaningful change.
                </p>
              </div>
              <div className="shrink-0">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500/30 text-base font-medium rounded-lg shadow-lg text-white bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-200">
                  View Impact Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-950 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2">
                <img src="/assets/logo.png" alt="Logo" className="w-16 h-16" />
                <span className="text-white font-bold text-2xl">Coincentrate</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-md">
                Transforming productivity with meaningful accountability and positive impact.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-medium mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impact</a></li>
                  <li><a href="#installation" className="text-gray-400 hover:text-white transition-colors">Installation</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Coincentrate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}