import * as React from "react"
import { cn } from "@/lib/utils"

export interface BucketEmptyProps {
  className?: string
}

const BucketEmpty: React.FC<BucketEmptyProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen p-8", className)}>
      <div className="max-w-md text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Bucket Empty</h1>
          <p className="text-lg text-gray-600">Shadcn/UI Version</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            This is a placeholder page for the Bucket Empty component built with Shadcn/UI and Tailwind CSS.
          </p>
        </div>

        <div className="space-y-2 text-left">
          <h3 className="font-semibold text-gray-900">Planned Features:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Empty state illustration</li>
            <li>• Call-to-action buttons</li>
            <li>• Upload functionality</li>
            <li>• Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

BucketEmpty.displayName = "BucketEmpty"

export { BucketEmpty }