import { useState } from 'react'
import styled from '@emotion/styled'

// Import CButton from both style systems
import { CButton as CButtonShadcn } from '@/components/shadcn/CButton'
import { CButton as CButtonEmotion } from '@/components/emotion/CButton'

// Import Table from both style systems
import { Table as TableShadcn, type Column } from '@/components/shadcn/Table'
import { Table as TableEmotion } from '@/components/emotion/Table'

// Import Toggle from both style systems
import { Toggle as ToggleShadcn } from '@/components/shadcn/Toggle'
import { Toggle as ToggleEmotion } from '@/components/emotion/Toggle'

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

// Sample data for table demonstration
interface SampleData {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const sampleData: SampleData[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', status: 'Active' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'QA', status: 'Active' },
]

const columns: Column<SampleData>[] = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (value) => (
      <span style={{
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: value === 'Active' ? '#10b981' : '#ef4444',
        color: 'white'
      }}>
        {value}
      </span>
    )
  },
]

function App() {
  const [count, setCount] = useState(0)
  const [selectedRowsShadcn, setSelectedRowsShadcn] = useState<SampleData[]>([])
  const [selectedRowsEmotion, setSelectedRowsEmotion] = useState<SampleData[]>([])
  const [enableSelection, setEnableSelection] = useState(true)

  // Toggle states
  const [toggleShadcnChecked, setToggleShadcnChecked] = useState(false)
  const [toggleEmotionChecked, setToggleEmotionChecked] = useState(false)
  const [toggleDisabled, setToggleDisabled] = useState(false)

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

          {/* Table Row */}
          <MatrixRow>
            <MatrixCell>Table</MatrixCell>
            <MatrixCell>
              <div style={{ width: '100%' }}>
                <div className="mb-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={enableSelection}
                      onChange={(e) => setEnableSelection(e.target.checked)}
                      className="rounded"
                    />
                    Enable Selection
                  </label>
                </div>
                <TableShadcn
                  data={sampleData}
                  columns={columns}
                  enableSelection={enableSelection}
                  onSelectionChange={setSelectedRowsShadcn}
                />
                {selectedRowsShadcn.length > 0 && (
                  <div className="mt-2 text-sm text-gray-600">
                    Selected: {selectedRowsShadcn.map(r => r.name).join(', ')}
                  </div>
                )}
              </div>
            </MatrixCell>
            <MatrixCell>
              <div style={{ width: '100%' }}>
                <div style={{ marginBottom: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                    <input
                      type="checkbox"
                      checked={enableSelection}
                      onChange={(e) => setEnableSelection(e.target.checked)}
                      style={{ borderRadius: '4px' }}
                    />
                    Enable Selection
                  </label>
                </div>
                <TableEmotion
                  data={sampleData}
                  columns={columns}
                  enableSelection={enableSelection}
                  onSelectionChange={setSelectedRowsEmotion}
                />
                {selectedRowsEmotion.length > 0 && (
                  <div style={{ marginTop: '8px', fontSize: '14px', color: '#4b5563' }}>
                    Selected: {selectedRowsEmotion.map(r => r.name).join(', ')}
                  </div>
                )}
              </div>
            </MatrixCell>
          </MatrixRow>

          {/* Toggle Row */}
          <MatrixRow>
            <MatrixCell>Toggle</MatrixCell>
            <MatrixCell>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                  <label className="flex items-center gap-2 text-sm mb-2">
                    <input
                      type="checkbox"
                      checked={toggleDisabled}
                      onChange={(e) => setToggleDisabled(e.target.checked)}
                      className="rounded"
                    />
                    Disabled State
                  </label>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Off</span>
                    <ToggleShadcn
                      checked={toggleShadcnChecked}
                      disabled={toggleDisabled}
                      onChange={setToggleShadcnChecked}
                      aria-label="Shadcn Toggle"
                    />
                    <span className="text-sm">On</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  States: Default, Hover, Focus, Disabled
                </div>
              </div>
            </MatrixCell>
            <MatrixCell>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginBottom: '8px' }}>
                    <input
                      type="checkbox"
                      checked={toggleDisabled}
                      onChange={(e) => setToggleDisabled(e.target.checked)}
                      style={{ borderRadius: '4px' }}
                    />
                    Disabled State
                  </label>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px' }}>Off</span>
                    <ToggleEmotion
                      checked={toggleEmotionChecked}
                      disabled={toggleDisabled}
                      onChange={setToggleEmotionChecked}
                      aria-label="Emotion Toggle"
                    />
                    <span style={{ fontSize: '14px' }}>On</span>
                  </div>
                </div>

                <div style={{ fontSize: '12px', color: '#6b7280' }}>
                  States: Default, Hover, Focus, Disabled
                </div>
              </div>
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
