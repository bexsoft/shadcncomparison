import * as React from "react"
import { cn } from "@/lib/utils"

export interface LoginProps {
  className?: string
}

const MinIOLogo = () => (
  <svg width="185" height="55" viewBox="0 0 185 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M43.5 14.7L30.8 2L18.1 14.7V40.2L30.8 52.9L43.5 40.2V14.7Z" fill="#CF163E"/>
      <path d="M30.8 2L6 26.8V40.2L30.8 15.4V2Z" fill="#CF163E"/>
      <path d="M55.6 26.8L30.8 2V15.4L55.6 40.2V26.8Z" fill="#CF163E"/>
      <path d="M80.3 40.1L74.1 25.8H72.6L66.4 40.1H68.2L70 35.8H76.6L78.4 40.1H80.3ZM71 33.8L73.3 28L75.6 33.8H71Z" fill="#0A1628"/>
      <path d="M93.3 40.1V25.8H91.4V31.8L85 25.8H83.3V40.1H85.2V33.6L91.9 40.1H93.3Z" fill="#0A1628"/>
      <path d="M103.5 40.1V25.8H101.6V40.1H103.5Z" fill="#0A1628"/>
      <path d="M117.8 32.9C117.8 28.7 114.9 25.6 110.5 25.6C106.1 25.6 103.2 28.7 103.2 32.9C103.2 37.1 106.1 40.3 110.5 40.3C114.9 40.3 117.8 37.1 117.8 32.9ZM105.2 32.9C105.2 29.8 107.2 27.6 110.5 27.6C113.8 27.6 115.8 29.8 115.8 32.9C115.8 36.1 113.8 38.3 110.5 38.3C107.2 38.3 105.2 36.1 105.2 32.9Z" fill="#0A1628"/>
    </g>
    <text x="60" y="20" fill="#0A1628" fontSize="14" fontWeight="600">OBJECT STORE</text>
    <text x="60" y="52" fill="#CF163E" fontSize="10">HIGH PERFORMANCE</text>
  </svg>
)

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="8" r="2.5" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.96 11.96A6.97 6.97 0 018 13c-4.5 0-7-5-7-5a12.88 12.88 0 012.04-2.96M6.5 3.13A3.27 3.27 0 018 3c4.5 0 7 5 7 5a12.84 12.84 0 01-1.38 2.02" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 1L15 15" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.88 5.88a2.5 2.5 0 003.54 3.54" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <span className="ml-1 text-xs">↗</span>
)

const Login: React.FC<LoginProps> = ({ className }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<'username' | 'sts'>('username')

  return (
    <div className={cn("flex min-h-screen bg-white", className)}>
      {/* Left Side - Content */}
      <div className="flex-1 flex items-center justify-center px-16 relative overflow-hidden">
        {/* Background Gradient Decoration */}
        <div className="absolute top-0 right-0 w-[686px] h-[684px] opacity-80">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-green-300 blur-3xl transform rotate-180" />
        </div>

        <div className="relative z-10 max-w-[689px] w-full">
          <div className="mb-12">
            <MinIOLogo />
          </div>

          <h1 className="text-[72px] leading-[88px] font-bold text-[#011234] mb-8">
            <span className="text-[#cf163e]">High—Performance </span>
            Object Storage
          </h1>

          <p className="text-base leading-7 text-black">
            MinIO is a cloud-native object store built to run on any infrastructure - public,
            private or edge clouds. Primary use cases include data lakes, databases, AI/ML,
            SaaS applications and fast backup & recovery. MinIO is dual licensed under GNU
            AGPL v3 and commercial license.{" "}
            <a href="https://min.io/?ref=con" className="text-[#1b4be1] hover:underline">
              www.min.io
              <ExternalLinkIcon />
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-[488px] bg-[#f9f9fe] flex flex-col justify-between px-14 py-[130px]">
        <div className="w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#000000e0] mb-2">
              Sign in to OBJECT STORE
            </h2>
            <p className="text-lg text-black">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="space-y-6">
            {/* Tab Navigation */}
            <div className="flex border-b border-[#d6dae1]">
              <button
                type="button"
                onClick={() => setActiveTab('username')}
                className={cn(
                  "flex-1 py-2 text-sm font-semibold transition-colors relative",
                  activeTab === 'username'
                    ? "text-[#1b4be1] border-b border-[#1b4be1]"
                    : "text-[#00000065] border-b border-transparent"
                )}
              >
                Username
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sts')}
                className={cn(
                  "flex-1 py-2 text-sm font-semibold transition-colors relative",
                  activeTab === 'sts'
                    ? "text-[#1b4be1] border-b border-[#1b4be1]"
                    : "text-[#00000065] border-b border-transparent"
                )}
              >
                STS
              </button>
            </div>

            {/* Username Field */}
            <div className="space-y-1">
              <label className="block text-sm text-[#00000065]">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-2 py-2 bg-[#fcfcff] border border-[#d6dae1] rounded text-sm placeholder-[#00000040] focus:outline-none focus:border-[#1b4be1] focus:ring-1 focus:ring-[#1b4be1]"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="block text-sm text-[#00000065]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-2 py-2 pr-10 bg-[#fcfcff] border border-[#d6dae1] rounded text-sm placeholder-[#00000040] focus:outline-none focus:border-[#1b4be1] focus:ring-1 focus:ring-[#1b4be1]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-2 flex items-center justify-center border-l border-[#d6dae1] bg-white hover:bg-gray-50"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-b from-[#2356f6] to-[#284ad9] text-white text-sm rounded shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] border border-[#1b4be1] hover:opacity-90 transition-opacity"
            >
              Login
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-4 text-sm text-[#1b4be1]">
          <a href="#" className="hover:underline">
            Documentation
            <ExternalLinkIcon />
          </a>
          <a href="#" className="hover:underline">
            Github
            <ExternalLinkIcon />
          </a>
          <a href="#" className="hover:underline">
            Support
            <ExternalLinkIcon />
          </a>
          <a href="#" className="hover:underline">
            Download
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

Login.displayName = "Login"

export { Login }