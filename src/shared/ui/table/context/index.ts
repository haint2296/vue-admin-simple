import { provide } from 'vue'

import { useContext } from '@/shared/lib/utils'

const TableContextKey = Symbol('TableContext')
const TableHeaderContextKey = Symbol('TableHeaderContext')
const TableBodyContextKey = Symbol('TableBodyContext')
const TableHeadContextKey = Symbol('TableHeadContext')
const TableRowContextKey = Symbol('TableRowContext')
const TableCellContextKey = Symbol('TableCellContext')

function provideTableContext() {
  provide(TableContextKey, true)
}

function provideTableHeaderContext() {
  provide(TableHeaderContextKey, true)
}

function provideTableBodyContext() {
  provide(TableBodyContextKey, true)
}

function provideTableHeadContext() {
  provide(TableHeadContextKey, true)
}

function provideTableRowContext() {
  provide(TableRowContextKey, true)
}

function provideTableCellContext() {
  provide(TableCellContextKey, true)
}

function useTableContext() {
  return useContext(TableContextKey)
}

function useTableHeaderContext() {
  return useContext(TableHeaderContextKey)
}

function useTableBodyContext() {
  return useContext(TableBodyContextKey)
}

function useTableHeadContext() {
  return useContext(TableHeadContextKey)
}

function useTableRowContext() {
  return useContext(TableRowContextKey)
}

function useTableCellContext() {
  return useContext(TableCellContextKey)
}

export {
  provideTableBodyContext,
  provideTableCellContext,
  provideTableContext,
  provideTableHeadContext,
  provideTableHeaderContext,
  provideTableRowContext,
  useTableBodyContext,
  useTableCellContext,
  useTableContext,
  useTableHeadContext,
  useTableHeaderContext,
  useTableRowContext,
}
