import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export interface CButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'small' | 'medium' | 'large'
  onlyIcon?: boolean
  children: React.ReactNode
}

const buttonStyles = {
  base: css({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    whiteSpace: 'nowrap',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.16px',
    fontFamily: '"Geist", sans-serif',
    transition: 'all 150ms ease',
    cursor: 'pointer',
    border: '1px solid transparent',
    '&:focus-visible': {
      outline: '2px solid #0057ff',
      outlineOffset: '2px',
    },
    '&:disabled': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  }),

  variants: {
    primary: css({
      background: 'linear-gradient(to bottom, #0057ff, #1b4be1)',
      color: '#ffffff',
      borderColor: '#1b4be1',
      boxShadow: '0px 1px 0px 1px inset rgba(255, 255, 255, 0.25)',
      '&:hover': {
        background: 'linear-gradient(to bottom, #0047dd, #1a3fc0)',
      },
      '&:active': {
        background: 'linear-gradient(to bottom, #0037bb, #1935a0)',
      },
    }),
    secondary: css({
      background: '#ffffff',
      color: '#111827',
      borderColor: '#d1d5db',
      '&:hover': {
        background: '#f9fafb',
      },
      '&:active': {
        background: '#f3f4f6',
      },
    }),
    ghost: css({
      background: 'transparent',
      color: '#374151',
      borderColor: 'transparent',
      '&:hover': {
        background: '#f3f4f6',
        color: '#111827',
      },
    }),
    destructive: css({
      background: 'linear-gradient(to bottom, #ef4444, #dc2626)',
      color: '#ffffff',
      borderColor: '#dc2626',
      '&:hover': {
        background: 'linear-gradient(to bottom, #dc2626, #b91c1c)',
      },
    }),
  },

  sizes: {
    small: css({
      padding: '4px 12px',
      minHeight: '28px',
    }),
    medium: css({
      padding: '8px 16px',
      minHeight: '36px',
    }),
    large: css({
      padding: '12px 24px',
      minHeight: '44px',
      fontSize: '16px',
    }),
  },

  onlyIcon: {
    true: css({
      padding: '4px',
      aspectRatio: '1/1',
    }),
    false: css({}),
  },
}

const StyledButton = styled.button<CButtonProps>`
  ${buttonStyles.base};
  ${props => buttonStyles.variants[props.variant || 'primary']};
  ${props => buttonStyles.sizes[props.size || 'small']};
  ${props => buttonStyles.onlyIcon[props.onlyIcon ? 'true' : 'false']};
`

const ButtonContent = styled.div({
  position: 'relative',
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
})

const CButton = React.forwardRef<HTMLButtonElement, CButtonProps>(
  ({ variant = 'primary', size = 'small', onlyIcon = false, children, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        onlyIcon={onlyIcon}
        {...props}
      >
        <ButtonContent>
          {children}
        </ButtonContent>
      </StyledButton>
    )
  }
)

CButton.displayName = "CButton"

export { CButton }