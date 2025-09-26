import * as React from "react"
import { cn } from "@/lib/utils"

export interface BucketEmptyProps {
  className?: string
}

const FileImageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 15L9 10L13 14L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FileVideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 8V16L16 12L10 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FileJsonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FolderUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4.5C2 3.67157 2.67157 3 3.5 3H5.5L7 4.5H12.5C13.3284 4.5 14 5.17157 14 6V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10.5V7M8 7L6 9M8 7L10 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const UploadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.3333 5.33333L8 2L4.66667 5.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 2V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.66667 11.3333L11.3333 4.66667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33333 4.66667H11.3333V10.6667" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BucketEmpty: React.FC<BucketEmptyProps> = ({ className }) => {
  return (
    <div className={cn("bg-[#f6f7f9] min-h-screen", className)}>
      <div className="flex flex-col h-full">
        <div className="bg-[#f6f7f9] px-6 py-2 flex items-center justify-between border-b border-[#e5e7eb]">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold text-gray-900">Object Browser</div>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">shortcut-bucket</span>
          </div>
        </div>

        <div className="px-6 py-3 flex items-center gap-4">
          <div className="bg-[#edeef1] p-4 rounded-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5L7 6H17L19 11Z" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 11V18C5 19 6 20 7 20H17C18 20 19 19 19 18V11" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V4" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex-1">
            <h1 className="text-[30px] font-semibold leading-[38px] text-[#000000e0]">shortcut-bucket</h1>
          </div>

          <div className="flex gap-6 text-xs text-[#00000073]">
            <div className="flex gap-2">
              <span>Created</span>
              <span className="font-semibold">Tue, Sep 24 2024 15:01:49 (CST)</span>
            </div>
            <div className="flex gap-2">
              <span>Access</span>
              <span className="font-semibold">Public</span>
            </div>
            <div className="flex gap-2">
              <span>Type</span>
              <span className="font-semibold">Versioning</span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="p-1.5 border border-[#d6dae1] rounded bg-white hover:bg-gray-50">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="flex items-center text-xs text-[#00000073]">
                  <span className="px-1">/</span>
                  <span className="px-1">first-folder</span>
                  <span className="px-1">/</span>
                  <span className="px-1">...</span>
                  <span className="px-1">/</span>
                  <span className="px-1">current-folder</span>
                  <span className="px-1">/</span>
                  <input
                    type="text"
                    placeholder="[$new-name-path]"
                    className="px-1 bg-transparent outline-none text-[#00000073] placeholder-[#00000040]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Filter Objects"
                    className="px-3 py-1 pr-8 text-sm bg-[#edeef1] rounded border border-[#d6dae1] outline-none placeholder-[#00000040] focus:border-[#1b4be1]"
                  />
                  <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00000073]" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                    <circle cx="7" cy="7" r="4" strokeWidth="1.5"/>
                    <path d="M10 10L13 13" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                <button className="px-3 py-1 bg-[#edeef1] text-[#00000040] rounded border border-[#d6dae1] flex items-center gap-1 text-sm cursor-not-allowed" disabled>
                  <UploadIcon />
                  <span>Upload</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-[#f6f7f9] rounded-md min-h-[630px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-12 max-w-md px-8 py-6">
                <div className="relative w-[224px] h-[108px]">
                  <div className="absolute left-0 top-[6px] rotate-[-30deg]">
                    <div className="bg-white rounded-lg shadow-sm p-7 border border-gray-100">
                      <FileVideoIcon />
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <div className="bg-white rounded-lg shadow-sm p-7 border border-gray-100">
                      <FileImageIcon />
                    </div>
                  </div>

                  <div className="absolute right-0 top-[4px] rotate-[17deg]">
                    <div className="bg-white rounded-lg shadow-sm p-7 border border-gray-100">
                      <FileJsonIcon />
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-semibold text-[#000000e0]">
                    Click to upload or<br />drag and drop an object.
                  </h2>
                  <p className="text-sm text-[#00000073]">
                    Support any file type, from PNGs,<br />
                    JPEGs, GIFs, etc.
                  </p>

                  <button className="inline-flex items-center gap-1 text-xs text-[#1b4be1] hover:underline mt-2">
                    Learn more
                    <ArrowUpRightIcon />
                  </button>
                </div>

                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-white border border-[#d6dae1] rounded text-sm flex items-center gap-2 hover:bg-gray-50 text-[#000000e0]">
                    <FolderUpIcon />
                    Upload Folder
                  </button>

                  <button className="px-4 py-2 bg-gradient-to-b from-[#0057ff] to-[#1b4be1] text-white rounded text-sm flex items-center gap-2 hover:opacity-90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] border border-[#1b4be1]">
                    <UploadIcon />
                    Upload Object
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BucketEmpty.displayName = "BucketEmpty"

export { BucketEmpty }