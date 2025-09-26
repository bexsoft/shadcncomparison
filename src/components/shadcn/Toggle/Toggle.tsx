import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToggleProps {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  id?: string
  'aria-label'?: string
  'aria-labelledby'?: string
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({
    checked = false,
    disabled = false,
    onChange,
    className,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    ...props
  }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false)

    const handleClick = () => {
      if (!disabled) {
        onChange?.(!checked)
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (!disabled) {
          setIsPressed(true)
          onChange?.(!checked)
        }
      }
    }

    const handleKeyUp = (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        setIsPressed(false)
      }
    }

    const getTrackStyles = () => {
      if (disabled) {
        return "bg-[#edeef1] border-[1.4px] border-[#d6dae1]"
      }
      if (checked) {
        return cn(
          "bg-[#1b4be1] border-0",
          "hover:bg-[#1a40ca]",
          "focus-visible:shadow-[0px_0px_0px_4px_rgba(43,100,229,0.3)]"
        )
      }
      return cn(
        "bg-[#f6f7f9] border-[1.4px] border-[#d6dae1]",
        "hover:border-[#8995a7]",
        "focus-visible:border-[#1b4be1] focus-visible:shadow-[0px_0px_0px_4px_rgba(43,100,229,0.3)]"
      )
    }

    const getThumbStyles = () => {
      return cn(
        "absolute bg-white rounded-[12px] size-[10px] top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out",
        "shadow-[0px_1px_4px_-1px_rgba(61,62,65,0.15),0px_1px_2px_0px_rgba(61,62,65,0.15)]",
        checked ? "right-[3px]" : "left-[3px]"
      )
    }

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        id={id}
        className={cn(
          "relative inline-flex h-5 w-8 items-center rounded-[16px] transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-0",
          disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
          className
        )}
        {...props}
      >
        <div className={cn(
          "h-4 w-7 rounded-[16px] border-solid transition-all duration-200",
          getTrackStyles()
        )}>
          <div className={getThumbStyles()} />
        </div>
      </button>
    )
  }
)

Toggle.displayName = "Toggle"

export { Toggle }