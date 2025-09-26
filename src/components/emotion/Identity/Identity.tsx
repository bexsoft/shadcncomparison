import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export interface IdentityProps {
  className?: string
}

const identityStyles = {
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
    backgroundColor: '#faf5ff',
    borderRadius: '8px',
    border: '1px solid #e9d5ff',
  }),

  infoText: css({
    fontSize: '14px',
    color: '#7c3aed',
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
  ${identityStyles.container}
`

const Content = styled.div`
  ${identityStyles.content}
`

const IconContainer = styled.div`
  ${identityStyles.iconContainer}
`

const TitleSection = styled.div`
  ${identityStyles.titleSection}
`

const Title = styled.h1`
  ${identityStyles.title}
`

const Subtitle = styled.p`
  ${identityStyles.subtitle}
`

const InfoBox = styled.div`
  ${identityStyles.infoBox}
`

const InfoText = styled.p`
  ${identityStyles.infoText}
`

const FeaturesSection = styled.div`
  ${identityStyles.featuresSection}
`

const FeaturesTitle = styled.h3`
  ${identityStyles.featuresTitle}
`

const FeaturesList = styled.ul`
  ${identityStyles.featuresList}
`

const Identity: React.FC<IdentityProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Content>
        <IconContainer>
          <svg css={identityStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        </IconContainer>

        <TitleSection>
          <Title>Identity</Title>
          <Subtitle>Emotion Version</Subtitle>
        </TitleSection>

        <InfoBox>
          <InfoText>
            This is a placeholder page for the Identity component built with @emotion and CSS-in-JS.
          </InfoText>
        </InfoBox>

        <FeaturesSection>
          <FeaturesTitle>Planned Features:</FeaturesTitle>
          <FeaturesList>
            <li>• User profile management</li>
            <li>• Identity verification</li>
            <li>• Personal information forms</li>
            <li>• Security settings</li>
            <li>• Account preferences</li>
          </FeaturesList>
        </FeaturesSection>
      </Content>
    </Container>
  )
}

Identity.displayName = "Identity"

export { Identity }