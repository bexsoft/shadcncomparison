import { useState } from 'react'
import styled from '@emotion/styled'

// Import CButton from both style systems
import { CButton as CButtonShadcn } from '@/components/shadcn/CButton'
import { CButton as CButtonEmotion } from '@/components/emotion/CButton'

const StyledContainer = styled.div`
  padding: 2rem;
`

const ComponentMatrix = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const MatrixRow = styled.div`
  display: table-row;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`

const MatrixHeader = styled.div`
  display: table-cell;
  padding: 16px;
  font-weight: 600;
  background: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
  text-align: left;
  vertical-align: middle;
`

const MatrixCell = styled.div`
  display: table-cell;
  padding: 16px;
  vertical-align: middle;

  &:first-of-type {
    font-weight: 500;
    background: #f9fafb;
    min-width: 150px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledContainer>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          Component Library Comparison
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Shadcn/UI (Tailwind) vs Emotion (CSS-in-JS) Implementation
        </p>

        <ComponentMatrix>
          {/* Header Row */}
          <MatrixRow>
            <MatrixHeader>Component</MatrixHeader>
            <MatrixHeader>Shadcn/UI (Tailwind)</MatrixHeader>
            <MatrixHeader>Emotion (CSS-in-JS)</MatrixHeader>
          </MatrixRow>

          {/* CButton Row */}
          <MatrixRow>
            <MatrixCell>CButton</MatrixCell>
            <MatrixCell>
              <ButtonGroup>
                <CButtonShadcn onClick={() => setCount(count + 1)}>
                  Button
                </CButtonShadcn>
                <CButtonShadcn variant="secondary">
                  Secondary
                </CButtonShadcn>
                <CButtonShadcn variant="ghost">
                  Ghost
                </CButtonShadcn>
                <CButtonShadcn variant="destructive">
                  Destructive
                </CButtonShadcn>
                <CButtonShadcn size="large">
                  Large
                </CButtonShadcn>
                <CButtonShadcn onlyIcon>
                  🚀
                </CButtonShadcn>
              </ButtonGroup>
            </MatrixCell>
            <MatrixCell>
              <ButtonGroup>
                <CButtonEmotion onClick={() => setCount(count + 1)}>
                  Button
                </CButtonEmotion>
                <CButtonEmotion variant="secondary">
                  Secondary
                </CButtonEmotion>
                <CButtonEmotion variant="ghost">
                  Ghost
                </CButtonEmotion>
                <CButtonEmotion variant="destructive">
                  Destructive
                </CButtonEmotion>
                <CButtonEmotion size="large">
                  Large
                </CButtonEmotion>
                <CButtonEmotion onlyIcon>
                  🚀
                </CButtonEmotion>
              </ButtonGroup>
            </MatrixCell>
          </MatrixRow>

          {/* Placeholder for future components */}
          <MatrixRow>
            <MatrixCell>More Components</MatrixCell>
            <MatrixCell>
              <span className="text-gray-400">Coming soon...</span>
            </MatrixCell>
            <MatrixCell>
              <span style={{ color: '#9ca3af' }}>Coming soon...</span>
            </MatrixCell>
          </MatrixRow>
        </ComponentMatrix>

        {/* Counter Display */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-lg font-semibold text-gray-700">
            Button Click Count: <span className="text-2xl text-blue-600">{count}</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Click any button above to increment the counter
          </p>
        </div>
      </div>
    </StyledContainer>
  )
}

export default App
