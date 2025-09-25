import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export interface Column<T> {
  key: keyof T
  header: string
  sortable?: boolean
  render?: (value: any, row: T) => React.ReactNode
}

export interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  enableSelection?: boolean
  onSelectionChange?: (selectedRows: T[]) => void
  className?: string
}

type SortDirection = 'asc' | 'desc' | null

const tableStyles = {
  wrapper: css({
    width: '100%',
    overflowX: 'auto',
    overflowY: 'visible',
  }),

  table: css({
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  }),

  thead: css({
    borderBottom: '1px solid #e5e7eb',
  }),

  th: {
    base: css({
      textAlign: 'left',
      padding: '16px',
      fontWeight: 500,
      color: '#374151',
      backgroundColor: '#f9fafb',
      position: 'relative',
    }),
    sortable: css({
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover': {
        backgroundColor: '#f3f4f6',
      },
    }),
  },

  headerContent: css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }),

  sortIcons: css({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '4px',
  }),

  sortIcon: {
    base: css({
      width: '12px',
      height: '12px',
      fill: 'currentColor',
    }),
    active: css({
      color: '#2563eb',
    }),
    inactive: css({
      color: '#9ca3af',
    }),
    up: css({
      marginBottom: '-4px',
    }),
    down: css({
      marginTop: '-4px',
    }),
  },

  tbody: css({}),

  tr: {
    base: css({
      borderBottom: '1px solid #e5e7eb',
      transition: 'background-color 150ms',
      '&:hover': {
        backgroundColor: '#f9fafb',
      },
    }),
    selected: css({
      backgroundColor: '#dbeafe',
      '&:hover': {
        backgroundColor: '#bfdbfe',
      },
    }),
  },

  td: css({
    padding: '16px',
    color: '#111827',
  }),

  checkbox: css({
    width: '16px',
    height: '16px',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
    cursor: 'pointer',
    '&:checked': {
      backgroundColor: '#2563eb',
      borderColor: '#2563eb',
    },
    '&:focus': {
      outline: '2px solid #60a5fa',
      outlineOffset: '2px',
    },
    '&:indeterminate': {
      backgroundColor: '#2563eb',
      borderColor: '#2563eb',
    },
  }),

  emptyState: css({
    padding: '32px',
    textAlign: 'center',
    color: '#6b7280',
  }),
}

const TableWrapper = styled.div`
  ${tableStyles.wrapper}
`

const StyledTable = styled.table`
  ${tableStyles.table}
`

const THead = styled.thead`
  ${tableStyles.thead}
`

const TH = styled.th<{ sortable?: boolean }>`
  ${tableStyles.th.base}
  ${props => props.sortable && tableStyles.th.sortable}
`

const HeaderContent = styled.div`
  ${tableStyles.headerContent}
`

const SortIcons = styled.div`
  ${tableStyles.sortIcons}
`

const TBody = styled.tbody`
  ${tableStyles.tbody}
`

const TR = styled.tr<{ selected?: boolean }>`
  ${tableStyles.tr.base}
  ${props => props.selected && tableStyles.tr.selected}
`

const TD = styled.td`
  ${tableStyles.td}
`

const Checkbox = styled.input`
  ${tableStyles.checkbox}
`

const EmptyState = styled.div`
  ${tableStyles.emptyState}
`

const Table = <T extends Record<string, any>>({
  data,
  columns,
  enableSelection = false,
  onSelectionChange,
  className
}: TableProps<T>) => {
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(new Set())
  const [sortConfig, setSortConfig] = React.useState<{
    key: keyof T | null
    direction: SortDirection
  }>({ key: null, direction: null })

  const handleSort = (key: keyof T) => {
    let direction: SortDirection = 'asc'
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc'
      } else if (sortConfig.direction === 'desc') {
        direction = null
      }
    }
    setSortConfig({ key: direction ? key : null, direction })
  }

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return data

    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key as keyof T]
      const bVal = b[sortConfig.key as keyof T]

      if (aVal === bVal) return 0

      if (sortConfig.direction === 'asc') {
        return aVal > bVal ? 1 : -1
      } else {
        return aVal < bVal ? 1 : -1
      }
    })
  }, [data, sortConfig])

  const handleRowSelection = (index: number) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(index)) {
      newSelected.delete(index)
    } else {
      newSelected.add(index)
    }
    setSelectedRows(newSelected)

    if (onSelectionChange) {
      const selectedData = sortedData.filter((_, i) => newSelected.has(i))
      onSelectionChange(selectedData)
    }
  }

  const handleSelectAll = () => {
    if (selectedRows.size === sortedData.length) {
      setSelectedRows(new Set())
      onSelectionChange?.([])
    } else {
      const allIndexes = new Set(sortedData.map((_, i) => i))
      setSelectedRows(allIndexes)
      onSelectionChange?.(sortedData)
    }
  }

  const isAllSelected = selectedRows.size === sortedData.length && sortedData.length > 0
  const isIndeterminate = selectedRows.size > 0 && selectedRows.size < sortedData.length

  return (
    <TableWrapper className={className}>
      <StyledTable>
        <THead>
          <tr>
            {enableSelection && (
              <TH>
                <Checkbox
                  type="checkbox"
                  checked={isAllSelected}
                  ref={input => {
                    if (input) {
                      input.indeterminate = isIndeterminate
                    }
                  }}
                  onChange={handleSelectAll}
                />
              </TH>
            )}
            {columns.map((column) => (
              <TH
                key={String(column.key)}
                sortable={column.sortable}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <HeaderContent>
                  {column.header}
                  {column.sortable && (
                    <SortIcons>
                      <svg
                        css={[
                          tableStyles.sortIcon.base,
                          tableStyles.sortIcon.up,
                          sortConfig.key === column.key && sortConfig.direction === 'asc'
                            ? tableStyles.sortIcon.active
                            : tableStyles.sortIcon.inactive
                        ]}
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 14l5-5 5 5z" />
                      </svg>
                      <svg
                        css={[
                          tableStyles.sortIcon.base,
                          tableStyles.sortIcon.down,
                          sortConfig.key === column.key && sortConfig.direction === 'desc'
                            ? tableStyles.sortIcon.active
                            : tableStyles.sortIcon.inactive
                        ]}
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </SortIcons>
                  )}
                </HeaderContent>
              </TH>
            ))}
          </tr>
        </THead>
        <TBody>
          {sortedData.map((row, rowIndex) => (
            <TR
              key={rowIndex}
              selected={selectedRows.has(rowIndex)}
            >
              {enableSelection && (
                <TD>
                  <Checkbox
                    type="checkbox"
                    checked={selectedRows.has(rowIndex)}
                    onChange={() => handleRowSelection(rowIndex)}
                  />
                </TD>
              )}
              {columns.map((column) => (
                <TD key={String(column.key)}>
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key] ?? '')}
                </TD>
              ))}
            </TR>
          ))}
        </TBody>
      </StyledTable>
      {sortedData.length === 0 && (
        <EmptyState>
          No data available
        </EmptyState>
      )}
    </TableWrapper>
  )
}

Table.displayName = "Table"

export { Table }