import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cbuttonVariants = cva(
  "relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-[4px] text-[14px] font-normal leading-[20px] tracking-[0.16px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-b from-[#0057ff] to-[#1b4be1] text-white shadow-[0px_1px_0px_1px_inset_rgba(255,255,255,0.25)] border border-[#1b4be1] hover:from-[#0047dd] hover:to-[#1a3fc0] active:from-[#0037bb] active:to-[#1935a0]",
        secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 active:bg-gray-100",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        destructive: "bg-gradient-to-b from-red-500 to-red-600 text-white border border-red-600 hover:from-red-600 hover:to-red-700",
      },
      size: {
        small: "px-3 py-1 h-7",
        medium: "px-4 py-2 h-9",
        large: "px-6 py-3 h-11 text-base",
      },
      onlyIcon: {
        true: "p-1 aspect-square",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
      onlyIcon: false,
    },
  }
)

export interface CButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cbuttonVariants> {
  children: React.ReactNode
}

const CButton = React.forwardRef<HTMLButtonElement, CButtonProps>(
  ({ className, variant, size, onlyIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(cbuttonVariants({ variant, size, onlyIcon, className }))}
        {...props}
      >
        <div className="relative z-10 flex items-center justify-center gap-1">
          {children}
        </div>
      </button>
    )
  }
)
CButton.displayName = "CButton"

export { CButton, cbuttonVariants }