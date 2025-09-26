import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

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

const ExternalLinkIcon = styled.span`
  margin-left: 4px;
  font-size: 12px;
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: white;
`

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 64px;
  position: relative;
  overflow: hidden;
`

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 686px;
  height: 684px;
  opacity: 0.8;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a78bfa, #f9a8d4, #6ee7b7);
    filter: blur(60px);
    transform: rotate(180deg);
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 689px;
  width: 100%;
`

const LogoWrapper = styled.div`
  margin-bottom: 48px;
`

const MainHeading = styled.h1`
  font-size: 72px;
  line-height: 88px;
  font-weight: bold;
  color: #011234;
  margin-bottom: 32px;
`

const HighlightText = styled.span`
  color: #cf163e;
`

const Description = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: black;
`

const Link = styled.a`
  color: #1b4be1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const RightSection = styled.div`
  width: 488px;
  background-color: #f9f9fe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 130px 56px 40px;
`

const FormContainer = styled.div`
  width: 100%;
`

const FormHeader = styled.div`
  margin-bottom: 24px;
`

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.88);
  margin-bottom: 8px;
`

const FormSubtitle = styled.p`
  font-size: 18px;
  color: black;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #d6dae1;
`

const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  position: relative;

  ${props => props.isActive ? css`
    color: #1b4be1;
    border-bottom: 1px solid #1b4be1;
  ` : css`
    color: rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid transparent;
  `}
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Label = styled.label`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fcfcff;
  border: 1px solid #d6dae1;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:focus {
    border-color: #1b4be1;
    box-shadow: 0 0 0 1px #1b4be1;
  }
`

const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
`

const PasswordInput = styled(Input)`
  padding-right: 40px;
`

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #d6dae1;
  background: white;
  cursor: pointer;
  border: none;
  border-left: 1px solid #d6dae1;

  &:hover {
    background-color: #f9fafb;
  }
`

const LoginButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  background: linear-gradient(180deg, #2356f6 0%, #284ad9 100%);
  color: white;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #1b4be1;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 14px;
`

const FooterLink = styled.a`
  color: #1b4be1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Login: React.FC<LoginProps> = ({ className }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<'username' | 'sts'>('username')

  return (
    <Container className={className}>
      <LeftSection>
        <GradientBackground />

        <ContentWrapper>
          <LogoWrapper>
            <MinIOLogo />
          </LogoWrapper>

          <MainHeading>
            <HighlightText>High—Performance </HighlightText>
            Object Storage
          </MainHeading>

          <Description>
            MinIO is a cloud-native object store built to run on any infrastructure - public,
            private or edge clouds. Primary use cases include data lakes, databases, AI/ML,
            SaaS applications and fast backup & recovery. MinIO is dual licensed under GNU
            AGPL v3 and commercial license.{" "}
            <Link href="https://min.io/?ref=con">
              www.min.io
              <ExternalLinkIcon>↗</ExternalLinkIcon>
            </Link>
          </Description>
        </ContentWrapper>
      </LeftSection>

      <RightSection>
        <FormContainer>
          <FormHeader>
            <FormTitle>Sign in to OBJECT STORE</FormTitle>
            <FormSubtitle>Welcome back! Please enter your details.</FormSubtitle>
          </FormHeader>

          <Form>
            <TabContainer>
              <TabButton
                type="button"
                isActive={activeTab === 'username'}
                onClick={() => setActiveTab('username')}
              >
                Username
              </TabButton>
              <TabButton
                type="button"
                isActive={activeTab === 'sts'}
                onClick={() => setActiveTab('sts')}
              >
                STS
              </TabButton>
            </TabContainer>

            <FieldGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter your username"
              />
            </FieldGroup>

            <FieldGroup>
              <Label>Password</Label>
              <PasswordInputWrapper>
                <PasswordInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <TogglePasswordButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </TogglePasswordButton>
              </PasswordInputWrapper>
            </FieldGroup>

            <LoginButton type="submit">
              Login
            </LoginButton>
          </Form>
        </FormContainer>

        <FooterLinks>
          <FooterLink href="#">
            Documentation
            <ExternalLinkIcon>↗</ExternalLinkIcon>
          </FooterLink>
          <FooterLink href="#">
            Github
            <ExternalLinkIcon>↗</ExternalLinkIcon>
          </FooterLink>
          <FooterLink href="#">
            Support
            <ExternalLinkIcon>↗</ExternalLinkIcon>
          </FooterLink>
          <FooterLink href="#">
            Download
            <ExternalLinkIcon>↗</ExternalLinkIcon>
          </FooterLink>
        </FooterLinks>
      </RightSection>
    </Container>
  )
}

Login.displayName = "Login"

export { Login }