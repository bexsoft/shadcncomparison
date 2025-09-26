import * as React from "react"
import { cn } from "@/lib/utils"

export interface LoginProps {
  className?: string
}

const Login: React.FC<LoginProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen p-8", className)}>
      <div className="max-w-md text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Login</h1>
          <p className="text-lg text-gray-600">Shadcn/UI Version</p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-700">
            This is a placeholder page for the Login component built with Shadcn/UI and Tailwind CSS.
          </p>
        </div>

        <div className="space-y-2 text-left">
          <h3 className="font-semibold text-gray-900">Planned Features:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Email/password input fields</li>
            <li>• Form validation</li>
            <li>• Social login options</li>
            <li>• Remember me checkbox</li>
            <li>• Forgot password link</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Login.displayName = "Login"

export { Login }