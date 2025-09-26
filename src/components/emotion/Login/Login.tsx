import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export interface LoginProps {
  className?: string
}

const loginStyles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '32px',
  }),

  content: css({
    maxWidth: '448px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  }),

  iconContainer: css({
    width: '96px',
    height: '96px',
    margin: '0 auto',
    backgroundColor: '#f3f4f6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  icon: css({
    width: '48px',
    height: '48px',
    color: '#9ca3af',
  }),

  titleSection: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }),

  title: css({
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0,
  }),

  subtitle: css({
    fontSize: '18px',
    color: '#4b5563',
    margin: 0,
  }),

  infoBox: css({
    padding: '16px',
    backgroundColor: '#dcfce7',
    borderRadius: '8px',
    border: '1px solid #bbf7d0',
  }),

  infoText: css({
    fontSize: '14px',
    color: '#15803d',
    margin: 0,
  }),

  featuresSection: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'left',
  }),

  featuresTitle: css({
    fontWeight: 600,
    color: '#111827',
    margin: 0,
  }),

  featuresList: css({
    fontSize: '14px',
    color: '#4b5563',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  }),
}

const Container = styled.div`
  ${loginStyles.container}
`

const Content = styled.div`
  ${loginStyles.content}
`

const IconContainer = styled.div`
  ${loginStyles.iconContainer}
`

const TitleSection = styled.div`
  ${loginStyles.titleSection}
`

const Title = styled.h1`
  ${loginStyles.title}
`

const Subtitle = styled.p`
  ${loginStyles.subtitle}
`

const InfoBox = styled.div`
  ${loginStyles.infoBox}
`

const InfoText = styled.p`
  ${loginStyles.infoText}
`

const FeaturesSection = styled.div`
  ${loginStyles.featuresSection}
`

const FeaturesTitle = styled.h3`
  ${loginStyles.featuresTitle}
`

const FeaturesList = styled.ul`
  ${loginStyles.featuresList}
`

const Login: React.FC<LoginProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Content>
        <IconContainer>
          <svg css={loginStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </IconContainer>

        <TitleSection>
          <Title>Login</Title>
          <Subtitle>Emotion Version</Subtitle>
        </TitleSection>

        <InfoBox>
          <InfoText>
            This is a placeholder page for the Login component built with @emotion and CSS-in-JS.
          </InfoText>
        </InfoBox>

        <FeaturesSection>
          <FeaturesTitle>Planned Features:</FeaturesTitle>
          <FeaturesList>
            <li>• Email/password input fields</li>
            <li>• Form validation</li>
            <li>• Social login options</li>
            <li>• Remember me checkbox</li>
            <li>• Forgot password link</li>
          </FeaturesList>
        </FeaturesSection>
      </Content>
    </Container>
  )
}

Login.displayName = "Login"

export { Login }