import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

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

const Container = styled.div`
  background-color: #f6f7f9;
  min-height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const TopBar = styled.div`
  background-color: #f6f7f9;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const BreadcrumbTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
`

const BreadcrumbSeparator = styled.span`
  color: #9ca3af;
`

const BreadcrumbItem = styled.span`
  color: #374151;
`

const PageHeader = styled.div`
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
`

const IconWrapper = styled.div`
  background-color: #edeef1;
  padding: 16px;
  border-radius: 12px;

  svg {
    display: block;
  }
`

const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
  color: rgba(0, 0, 0, 0.88);
  margin: 0;
`

const TitleWrapper = styled.div`
  flex: 1;
`

const MetaData = styled.div`
  display: flex;
  gap: 24px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
`

const MetaItem = styled.div`
  display: flex;
  gap: 8px;

  span:last-child {
    font-weight: 600;
  }
`

const MainContent = styled.div`
  flex: 1;
  background-color: white;
  padding: 24px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ActionsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PathSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const BackButton = styled.button`
  padding: 6px;
  border: 1px solid #d6dae1;
  border-radius: 4px;
  background: white;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }

  svg {
    display: block;
  }
`

const PathBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
`

const PathItem = styled.span`
  padding: 0 4px;
`

const PathInput = styled.input`
  padding: 0 4px;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`

const ActionsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const FilterInputWrapper = styled.div`
  position: relative;
`

const FilterInput = styled.input`
  padding: 4px 32px 4px 12px;
  font-size: 14px;
  background-color: #edeef1;
  border: 1px solid #d6dae1;
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:focus {
    border-color: #1b4be1;
  }
`

const SearchIcon = styled.svg`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: rgba(0, 0, 0, 0.45);
`

const UploadButton = styled.button`
  padding: 4px 12px;
  background-color: #edeef1;
  color: rgba(0, 0, 0, 0.25);
  border: 1px solid #d6dae1;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  cursor: not-allowed;

  &:disabled {
    opacity: 1;
  }
`

const EmptyStateContainer = styled.div`
  background-color: #f6f7f9;
  border-radius: 6px;
  min-height: 630px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  max-width: 448px;
  padding: 24px 32px;
`

const IconsContainer = styled.div`
  position: relative;
  width: 224px;
  height: 108px;
`

const FloatingCard = styled.div<{ position: 'left' | 'center' | 'right'; rotation?: string }>`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
  padding: 28px 22px;
  border: 1px solid #f3f4f6;

  ${props => props.position === 'left' && css`
    left: 0;
    top: 6px;
    transform: rotate(-30deg);
  `}

  ${props => props.position === 'center' && css`
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  `}

  ${props => props.position === 'right' && css`
    right: 0;
    top: 4px;
    transform: rotate(17deg);
  `}
`

const TextContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const MainHeading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.88);
  margin: 0;
  line-height: 1.3;
`

const SubText = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin: 0;
  line-height: 1.4;
`

const LearnMoreLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #1b4be1;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`

const SecondaryButton = styled.button`
  padding: 8px 16px;
  background: white;
  border: 1px solid #d6dae1;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.88);

  &:hover {
    background-color: #f9fafb;
  }
`

const PrimaryButton = styled.button`
  padding: 8px 16px;
  background: linear-gradient(180deg, #0057ff 0%, #1b4be1 100%);
  color: white;
  border: 1px solid #1b4be1;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.25);

  &:hover {
    opacity: 0.9;
  }
`

const BucketEmpty: React.FC<BucketEmptyProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Wrapper>
        <TopBar>
          <Breadcrumb>
            <BreadcrumbTitle>Object Browser</BreadcrumbTitle>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>shortcut-bucket</BreadcrumbItem>
          </Breadcrumb>
        </TopBar>

        <PageHeader>
          <IconWrapper>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 11H5L7 6H17L19 11Z" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 11V18C5 19 6 20 7 20H17C18 20 19 19 19 18V11" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V4" stroke="#000000a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </IconWrapper>

          <TitleWrapper>
            <PageTitle>shortcut-bucket</PageTitle>
          </TitleWrapper>

          <MetaData>
            <MetaItem>
              <span>Created</span>
              <span>Tue, Sep 24 2024 15:01:49 (CST)</span>
            </MetaItem>
            <MetaItem>
              <span>Access</span>
              <span>Public</span>
            </MetaItem>
            <MetaItem>
              <span>Type</span>
              <span>Versioning</span>
            </MetaItem>
          </MetaData>
        </PageHeader>

        <MainContent>
          <ContentWrapper>
            <ActionsBar>
              <PathSection>
                <BackButton>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </BackButton>

                <PathBreadcrumb>
                  <PathItem>/</PathItem>
                  <PathItem>first-folder</PathItem>
                  <PathItem>/</PathItem>
                  <PathItem>...</PathItem>
                  <PathItem>/</PathItem>
                  <PathItem>current-folder</PathItem>
                  <PathItem>/</PathItem>
                  <PathInput type="text" placeholder="[$new-name-path]" />
                </PathBreadcrumb>
              </PathSection>

              <ActionsSection>
                <FilterInputWrapper>
                  <FilterInput type="text" placeholder="Filter Objects" />
                  <SearchIcon fill="none" stroke="currentColor" viewBox="0 0 16 16">
                    <circle cx="7" cy="7" r="4" strokeWidth="1.5"/>
                    <path d="M10 10L13 13" strokeWidth="1.5" strokeLinecap="round"/>
                  </SearchIcon>
                </FilterInputWrapper>

                <UploadButton disabled>
                  <UploadIcon />
                  <span>Upload</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </UploadButton>
              </ActionsSection>
            </ActionsBar>

            <EmptyStateContainer>
              <EmptyStateContent>
                <IconsContainer>
                  <FloatingCard position="left">
                    <FileVideoIcon />
                  </FloatingCard>

                  <FloatingCard position="center">
                    <FileImageIcon />
                  </FloatingCard>

                  <FloatingCard position="right">
                    <FileJsonIcon />
                  </FloatingCard>
                </IconsContainer>

                <TextContent>
                  <MainHeading>
                    Click to upload or<br />drag and drop an object.
                  </MainHeading>
                  <SubText>
                    Support any file type, from PNGs,<br />
                    JPEGs, GIFs, etc.
                  </SubText>

                  <LearnMoreLink>
                    Learn more
                    <ArrowUpRightIcon />
                  </LearnMoreLink>
                </TextContent>

                <ButtonGroup>
                  <SecondaryButton>
                    <FolderUpIcon />
                    Upload Folder
                  </SecondaryButton>

                  <PrimaryButton>
                    <UploadIcon />
                    Upload Object
                  </PrimaryButton>
                </ButtonGroup>
              </EmptyStateContent>
            </EmptyStateContainer>
          </ContentWrapper>
        </MainContent>
      </Wrapper>
    </Container>
  )
}

BucketEmpty.displayName = "BucketEmpty"

export { BucketEmpty }