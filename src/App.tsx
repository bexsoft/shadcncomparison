import { useState } from 'react'
import styled from '@emotion/styled'
import { Button } from '@/components/ui/button'

const StyledContainer = styled.div`
  padding: 2rem;
  text-align: center;
`

const EmotionButton = styled.button`
  background-color: #8b5cf6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin: 0.5rem;

  &:hover {
    background-color: #7c3aed;
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledContainer>
      <div className="max-w-4xl mx-auto p-8">
        {/* Test Tailwind with obvious styles */}
        <div className="bg-red-500 text-white p-4 mb-4 rounded">
          If this box is RED with WHITE text, Tailwind is working!
        </div>
        <h1 className="text-4xl font-bold mb-8 text-blue-600">
          Vite + React + TypeScript + Shadcn + Emotion
        </h1>

        <div className="space-y-6">
          <div className="p-6 bg-gray-100 rounded-lg border border-gray-300">
            <h2 className="text-2xl font-semibold mb-4">Shadcn/UI Button Component</h2>
            <div className="space-x-4">
              <Button onClick={() => setCount((count) => count + 1)}>
                Count is {count}
              </Button>
              <Button variant="secondary" onClick={() => setCount((count) => count + 1)}>
                Secondary
              </Button>
              <Button variant="outline" onClick={() => setCount((count) => count + 1)}>
                Outline
              </Button>
              <Button variant="destructive" onClick={() => setCount(0)}>
                Reset
              </Button>
            </div>
            <div className="mt-4 p-2 bg-yellow-200 text-black rounded">
              Test: This should have a yellow background
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">@emotion/styled Component</h2>
            <EmotionButton onClick={() => setCount((count) => count + 2)}>
              Increment by 2 (Emotion Button)
            </EmotionButton>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <p className="text-muted-foreground">
              This project is configured with Vite, React, TypeScript, Shadcn/UI (with Tailwind CSS), and @emotion for styling.
            </p>
          </div>
        </div>
      </div>
    </StyledContainer>
  )
}

export default App
