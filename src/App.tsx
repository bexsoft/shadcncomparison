import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styled from '@emotion/styled'

// Import page components
import HomePage from './HomePage'
import { BucketEmpty as BucketEmptyShadcn } from '@/components/shadcn/BucketEmpty'
import { BucketEmpty as BucketEmptyEmotion } from '@/components/emotion/BucketEmpty'
import { Login as LoginShadcn } from '@/components/shadcn/Login'
import { Login as LoginEmotion } from '@/components/emotion/Login'
import { Identity as IdentityShadcn } from '@/components/shadcn/Identity'
import { Identity as IdentityEmotion } from '@/components/emotion/Identity'

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`

const Navigation = styled.nav`
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  text-decoration: none;

  &:hover {
    color: #1f2937;
  }
`

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
`

const NavLink = styled(Link)`
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s;

  &:hover {
    color: #111827;
    background-color: #f3f4f6;
  }

  &.active {
    color: #1d4ed8;
    background-color: #dbeafe;
  }
`

const PageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const SectionLabel = styled.span`
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-right: 0.5rem;
`

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation>
          <NavContainer>
            <Logo to="/">
              Component Library
            </Logo>

            <NavLinks>
              <NavLink to="/">Home</NavLink>

              <PageSection>
                <SectionLabel>Bucket:</SectionLabel>
                <NavLink to="/bucket-empty-shadcn">Shadcn</NavLink>
                <NavLink to="/bucket-empty-emotion">Emotion</NavLink>
              </PageSection>

              <PageSection>
                <SectionLabel>Login:</SectionLabel>
                <NavLink to="/login-shadcn">Shadcn</NavLink>
                <NavLink to="/login-emotion">Emotion</NavLink>
              </PageSection>

              <PageSection>
                <SectionLabel>Identity:</SectionLabel>
                <NavLink to="/identity-shadcn">Shadcn</NavLink>
                <NavLink to="/identity-emotion">Emotion</NavLink>
              </PageSection>
            </NavLinks>
          </NavContainer>
        </Navigation>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bucket-empty-shadcn" element={<BucketEmptyShadcn />} />
            <Route path="/bucket-empty-emotion" element={<BucketEmptyEmotion />} />
            <Route path="/login-shadcn" element={<LoginShadcn />} />
            <Route path="/login-emotion" element={<LoginEmotion />} />
            <Route path="/identity-shadcn" element={<IdentityShadcn />} />
            <Route path="/identity-emotion" element={<IdentityEmotion />} />
          </Routes>
        </main>
      </AppContainer>
    </Router>
  )
}

export default App