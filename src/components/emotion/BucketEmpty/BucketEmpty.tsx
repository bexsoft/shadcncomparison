import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export interface BucketEmptyProps {
  className?: string
}

const bucketEmptyStyles = {
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
    backgroundColor: '#dbeafe',
    borderRadius: '8px',
    border: '1px solid #bfdbfe',
  }),

  infoText: css({
    fontSize: '14px',
    color: '#1d4ed8',
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
  ${bucketEmptyStyles.container}
`

const Content = styled.div`
  ${bucketEmptyStyles.content}
`

const IconContainer = styled.div`
  ${bucketEmptyStyles.iconContainer}
`

const TitleSection = styled.div`
  ${bucketEmptyStyles.titleSection}
`

const Title = styled.h1`
  ${bucketEmptyStyles.title}
`

const Subtitle = styled.p`
  ${bucketEmptyStyles.subtitle}
`

const InfoBox = styled.div`
  ${bucketEmptyStyles.infoBox}
`

const InfoText = styled.p`
  ${bucketEmptyStyles.infoText}
`

const FeaturesSection = styled.div`
  ${bucketEmptyStyles.featuresSection}
`

const FeaturesTitle = styled.h3`
  ${bucketEmptyStyles.featuresTitle}
`

const FeaturesList = styled.ul`
  ${bucketEmptyStyles.featuresList}
`

const BucketEmpty: React.FC<BucketEmptyProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Content>
        <IconContainer>
          <svg css={bucketEmptyStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </IconContainer>

        <TitleSection>
          <Title>Bucket Empty</Title>
          <Subtitle>Emotion Version</Subtitle>
        </TitleSection>

        <InfoBox>
          <InfoText>
            This is a placeholder page for the Bucket Empty component built with @emotion and CSS-in-JS.
          </InfoText>
        </InfoBox>

        <FeaturesSection>
          <FeaturesTitle>Planned Features:</FeaturesTitle>
          <FeaturesList>
            <li>• Empty state illustration</li>
            <li>• Call-to-action buttons</li>
            <li>• Upload functionality</li>
            <li>• Responsive design</li>
          </FeaturesList>
        </FeaturesSection>
      </Content>
    </Container>
  )
}

BucketEmpty.displayName = "BucketEmpty"

export { BucketEmpty }