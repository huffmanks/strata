import { useMemo } from 'react'
import DefaultFilter from './DefaultFilter'

export const fuzzyTextFilter = (rows, id, filterValue) => {
    return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] })
}

export const filterTypes = useMemo(
    () => ({
        fuzzyText: fuzzyTextFilter,

        text: (rows, id, filterValue) => {
            return rows.filter((row) => {
                const rowValue = row.values[id]
                return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true
            })
        },
    }),
    []
)

export const defaultColumn = useMemo(
    () => ({
        Filter: DefaultFilter,
    }),
    []
)
