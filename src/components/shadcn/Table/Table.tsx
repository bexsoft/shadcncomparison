import * as React from "react"
import { cn } from "@/lib/utils"

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
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            {enableSelection && (
              <th className="text-left p-4 font-medium text-gray-700 bg-gray-50">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={input => {
                    if (input) {
                      input.indeterminate = isIndeterminate
                    }
                  }}
                  onChange={handleSelectAll}
                  className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "text-left p-4 font-medium text-gray-700 bg-gray-50",
                  column.sortable && "cursor-pointer hover:bg-gray-100 select-none"
                )}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.header}
                  {column.sortable && (
                    <div className="flex flex-col">
                      <svg
                        className={cn(
                          "w-3 h-3 -mb-1",
                          sortConfig.key === column.key && sortConfig.direction === 'asc'
                            ? "text-blue-600"
                            : "text-gray-400"
                        )}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 14l5-5 5 5z" />
                      </svg>
                      <svg
                        className={cn(
                          "w-3 h-3 -mt-1",
                          sortConfig.key === column.key && sortConfig.direction === 'desc'
                            ? "text-blue-600"
                            : "text-gray-400"
                        )}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                "border-b border-gray-200 hover:bg-gray-50",
                selectedRows.has(rowIndex) && "bg-blue-50"
              )}
            >
              {enableSelection && (
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(rowIndex)}
                    onChange={() => handleRowSelection(rowIndex)}
                    className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={String(column.key)} className="p-4 text-gray-900">
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {sortedData.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          No data available
        </div>
      )}
    </div>
  )
}

Table.displayName = "Table"

export { Table }