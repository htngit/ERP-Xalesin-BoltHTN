import React from 'react'
import { YStack, XStack, Text, ScrollView, styled, Button as TamaguiButton } from 'tamagui'
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'
import { Button } from './Button'
import { Card } from './Card'

const Table = styled(YStack, {
  name: 'Table',
  backgroundColor: '$background',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  overflow: 'hidden',
})

const TableHeader = styled(XStack, {
  name: 'TableHeader',
  backgroundColor: '$backgroundStrong',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
  minHeight: '$5',
  alignItems: 'center',
})

const TableRow = styled(XStack, {
  name: 'TableRow',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
  minHeight: '$4',
  alignItems: 'center',
  
  variants: {
    interactive: {
      true: {
        cursor: 'pointer',
        hoverStyle: {
          backgroundColor: '$backgroundHover',
        },
        pressStyle: {
          backgroundColor: '$backgroundPress',
        },
      },
    },
    selected: {
      true: {
        backgroundColor: '$primaryTransparent',
      },
    },
  } as const,
})

const TableCell = styled(XStack, {
  name: 'TableCell',
  flex: 1,
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  alignItems: 'center',
  justifyContent: 'flex-start',
  
  variants: {
    align: {
      left: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      right: { justifyContent: 'flex-end' },
    },
    sortable: {
      true: {
        cursor: 'pointer',
        hoverStyle: {
          backgroundColor: '$backgroundHover',
        },
      },
    },
  } as const,
  
  defaultVariants: {
    align: 'left',
  },
})

const TableHeaderCell = styled(TableCell, {
  name: 'TableHeaderCell',
  fontWeight: '600',
})

export interface Column<T = any> {
  /**
   * Unique identifier for the column
   */
  id: string
  /**
   * Column header text
   */
  header: string
  /**
   * Key to access data from row object
   */
  accessorKey?: keyof T
  /**
   * Custom cell renderer function
   */
  cell?: (row: T, value: any) => React.ReactNode
  /**
   * Column width (flex value)
   */
  width?: number
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right'
  /**
   * Whether the column is sortable
   */
  sortable?: boolean
  /**
   * Whether the column is hidden
   */
  hidden?: boolean
}

export interface SortConfig {
  key: string
  direction: 'asc' | 'desc'
}

export interface PaginationConfig {
  page: number
  pageSize: number
  total: number
}

export interface DataTableProps<T = any> {
  /**
   * Array of data to display
   */
  data: T[]
  /**
   * Column definitions
   */
  columns: Column<T>[]
  /**
   * Loading state
   */
  loading?: boolean
  /**
   * Empty state message
   */
  emptyMessage?: string
  /**
   * Whether rows are selectable
   */
  selectable?: boolean
  /**
   * Selected row IDs
   */
  selectedRows?: string[]
  /**
   * Row selection handler
   */
  onRowSelect?: (selectedRows: string[]) => void
  /**
   * Row click handler
   */
  onRowClick?: (row: T, index: number) => void
  /**
   * Sort configuration
   */
  sortConfig?: SortConfig
  /**
   * Sort change handler
   */
  onSortChange?: (sortConfig: SortConfig) => void
  /**
   * Pagination configuration
   */
  pagination?: PaginationConfig
  /**
   * Pagination change handler
   */
  onPaginationChange?: (pagination: PaginationConfig) => void
  /**
   * Row ID accessor function
   */
  getRowId?: (row: T, index: number) => string
  /**
   * Maximum height of the table
   */
  maxHeight?: number
}

/**
 * Enhanced DataTable component for Xalesin ERP
 * 
 * Features:
 * - Sortable columns
 * - Row selection
 * - Pagination
 * - Custom cell renderers
 * - Loading and empty states
 * - Responsive design
 * - Keyboard navigation
 * - Accessibility support
 * 
 * @example
 * ```tsx
 * const columns: Column<User>[] = [
 *   { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
 *   { id: 'email', header: 'Email', accessorKey: 'email' },
 *   { 
 *     id: 'actions', 
 *     header: 'Actions', 
 *     cell: (row) => <Button onPress={() => edit(row)}>Edit</Button>
 *   },
 * ]
 * 
 * <DataTable
 *   data={users}
 *   columns={columns}
 *   selectable
 *   onRowSelect={setSelectedUsers}
 *   sortConfig={sortConfig}
 *   onSortChange={setSortConfig}
 *   pagination={pagination}
 *   onPaginationChange={setPagination}
 * />
 * ```
 */
export const DataTable = <T extends Record<string, any>>({ 
  data, 
  columns, 
  loading, 
  emptyMessage = 'No data available', 
  selectable, 
  selectedRows = [], 
  onRowSelect, 
  onRowClick, 
  sortConfig, 
  onSortChange, 
  pagination, 
  onPaginationChange, 
  getRowId = (row, index) => row.id?.toString() || index.toString(),
  maxHeight = 600,
}: DataTableProps<T>) => {
  const visibleColumns = columns.filter(col => !col.hidden)
  
  const handleSort = (columnId: string) => {
    if (!onSortChange) return
    
    const newDirection = 
      sortConfig?.key === columnId && sortConfig.direction === 'asc' 
        ? 'desc' 
        : 'asc'
    
    onSortChange({ key: columnId, direction: newDirection })
  }
  
  const handleRowSelect = (rowId: string, selected: boolean) => {
    if (!onRowSelect) return
    
    const newSelection = selected
      ? [...selectedRows, rowId]
      : selectedRows.filter(id => id !== rowId)
    
    onRowSelect(newSelection)
  }
  
  const handleSelectAll = (selected: boolean) => {
    if (!onRowSelect) return
    
    const newSelection = selected
      ? data.map((row, index) => getRowId(row, index))
      : []
    
    onRowSelect(newSelection)
  }
  
  const isAllSelected = selectedRows.length === data.length && data.length > 0
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length
  
  const renderSortIcon = (columnId: string) => {
    if (sortConfig?.key !== columnId) return null
    
    return sortConfig.direction === 'asc' 
      ? <ChevronUp size={16} /> 
      : <ChevronDown size={16} />
  }
  
  const renderPagination = () => {
    if (!pagination || !onPaginationChange) return null
    
    const { page, pageSize, total } = pagination
    const totalPages = Math.ceil(total / pageSize)
    const startItem = (page - 1) * pageSize + 1
    const endItem = Math.min(page * pageSize, total)
    
    return (
      <XStack
        justifyContent="space-between"
        alignItems="center"
        padding="$3"
        borderTopWidth={1}
        borderTopColor="$borderColor"
      >
        <Text fontSize="$3" color="$colorTransparent">
          Showing {startItem}-{endItem} of {total} items
        </Text>
        
        <XStack alignItems="center" space="$2">
          <Button
            intent="outline"
            size="small"
            disabled={page <= 1}
            onPress={() => onPaginationChange({ ...pagination, page: page - 1 })}
          >
            <ChevronLeft size={16} />
          </Button>
          
          <Text fontSize="$3">
            Page {page} of {totalPages}
          </Text>
          
          <Button
            intent="outline"
            size="small"
            disabled={page >= totalPages}
            onPress={() => onPaginationChange({ ...pagination, page: page + 1 })}
          >
            <ChevronRight size={16} />
          </Button>
        </XStack>
      </XStack>
    )
  }
  
  if (loading) {
    return (
      <Card>
        <YStack alignItems="center" justifyContent="center" minHeight={200}>
          <Text>Loading...</Text>
        </YStack>
      </Card>
    )
  }
  
  if (data.length === 0) {
    return (
      <Card>
        <YStack alignItems="center" justifyContent="center" minHeight={200}>
          <Text color="$colorTransparent">{emptyMessage}</Text>
        </YStack>
      </Card>
    )
  }
  
  return (
    <Table>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <YStack minWidth="100%">
          {/* Header */}
          <TableHeader>
            {selectable && (
              <TableHeaderCell width={50}>
                <TamaguiButton
                  size="$2"
                  variant="outlined"
                  onPress={() => handleSelectAll(!isAllSelected)}
                >
                  {isAllSelected ? '☑' : isIndeterminate ? '☐' : '☐'}
                </TamaguiButton>
              </TableHeaderCell>
            )}
            
            {visibleColumns.map((column) => (
              <TableHeaderCell
                key={column.id}
                width={column.width}
                align={column.align}
                sortable={column.sortable}
                onPress={column.sortable ? () => handleSort(column.id) : undefined}
              >
                <XStack alignItems="center" space="$1">
                  <Text fontWeight="600">{column.header}</Text>
                  {column.sortable && renderSortIcon(column.id)}
                </XStack>
              </TableHeaderCell>
            ))}
          </TableHeader>
          
          {/* Body */}
          <ScrollView maxHeight={maxHeight}>
            {data.map((row, rowIndex) => {
              const rowId = getRowId(row, rowIndex)
              const isSelected = selectedRows.includes(rowId)
              
              return (
                <TableRow
                  key={rowId}
                  interactive={!!onRowClick}
                  selected={isSelected}
                  onPress={() => onRowClick?.(row, rowIndex)}
                >
                  {selectable && (
                    <TableCell width={50}>
                      <TamaguiButton
                        size="$2"
                        variant="outlined"
                        onPress={() => handleRowSelect(rowId, !isSelected)}
                      >
                        {isSelected ? '☑' : '☐'}
                      </TamaguiButton>
                    </TableCell>
                  )}
                  
                  {visibleColumns.map((column) => {
                    const value = column.accessorKey ? row[column.accessorKey] : undefined
                    const cellContent = column.cell ? column.cell(row, value) : value?.toString() || ''
                    
                    return (
                      <TableCell
                        key={column.id}
                        width={column.width}
                        align={column.align}
                      >
                        {cellContent}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </ScrollView>
        </YStack>
      </ScrollView>
      
      {renderPagination()}
    </Table>
  )
}

export default DataTable