import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export interface ToggleProps {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  id?: string
  'aria-label'?: string
  'aria-labelledby'?: string
}

const toggleStyles = {
  button: {
    base: css({
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      height: '20px',
      width: '32px',
      borderRadius: '16px',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
      '&:focus-visible': {
        outline: 'none',
      },
    }),
    disabled: css({
      cursor: 'not-allowed',
      opacity: 0.6,
    }),
  },

  track: {
    base: css({
      height: '16px',
      width: '28px',
      borderRadius: '16px',
      borderStyle: 'solid',
      transition: 'all 200ms ease-in-out',
      position: 'relative',
    }),

    // Default states
    uncheckedDefault: css({
      backgroundColor: '#f6f7f9',
      borderWidth: '1.4px',
      borderColor: '#d6dae1',
    }),
    checkedDefault: css({
      backgroundColor: '#1b4be1',
      borderWidth: 0,
    }),

    // Hover states
    uncheckedHover: css({
      '&:hover': {
        borderColor: '#8995a7',
      },
    }),
    checkedHover: css({
      '&:hover': {
        backgroundColor: '#1a40ca',
      },
    }),

    // Focus states
    uncheckedFocus: css({
      '&:focus-visible': {
        borderColor: '#1b4be1',
        boxShadow: '0px 0px 0px 4px rgba(43, 100, 229, 0.3)',
      },
    }),
    checkedFocus: css({
      '&:focus-visible': {
        boxShadow: '0px 0px 0px 4px rgba(43, 100, 229, 0.3)',
      },
    }),

    // Disabled states
    disabled: css({
      backgroundColor: '#edeef1',
      borderWidth: '1.4px',
      borderColor: '#d6dae1',
    }),
  },

  thumb: {
    base: css({
      position: 'absolute',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      width: '10px',
      height: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      transition: 'all 200ms ease-in-out',
      boxShadow: '0px 1px 4px -1px rgba(61, 62, 65, 0.15), 0px 1px 2px 0px rgba(61, 62, 65, 0.15)',
    }),
    unchecked: css({
      left: '3px',
    }),
    checked: css({
      right: '3px',
    }),
  },
}

const StyledButton = styled.button<{ checked: boolean; disabled: boolean }>`
  ${toggleStyles.button.base}
  ${props => props.disabled && toggleStyles.button.disabled}
`

const Track = styled.div<{ checked: boolean; disabled: boolean }>`
  ${toggleStyles.track.base}
  ${props => props.disabled
    ? toggleStyles.track.disabled
    : props.checked
      ? [
          toggleStyles.track.checkedDefault,
          toggleStyles.track.checkedHover,
          toggleStyles.track.checkedFocus,
        ]
      : [
          toggleStyles.track.uncheckedDefault,
          toggleStyles.track.uncheckedHover,
          toggleStyles.track.uncheckedFocus,
        ]
  }
`

const Thumb = styled.div<{ checked: boolean }>`
  ${toggleStyles.thumb.base}
  ${props => props.checked
    ? toggleStyles.thumb.checked
    : toggleStyles.thumb.unchecked
  }
`

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

    return (
      <StyledButton
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        checked={checked}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        id={id}
        className={className}
        {...props}
      >
        <Track checked={checked} disabled={disabled}>
          <Thumb checked={checked} />
        </Track>
      </StyledButton>
    )
  }
)

Toggle.displayName = "Toggle"

export { Toggle }