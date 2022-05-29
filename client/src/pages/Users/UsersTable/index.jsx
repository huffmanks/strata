import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table'

import Table from '../../../components/Table'
import UserImage from '../../../components/Image/UserImage'

import { MdDelete, MdModeEdit, MdVisibility } from 'react-icons/md'
import { fuzzyTextFilter, defaultColumn, filterTypes } from '../../../components/Search/filterUtils'

const UsersTable = ({ tableData, clickHandler }) => {
    fuzzyTextFilter.autoRemove = (val) => !val

    const [columns, data] = useMemo(() => {
        const columns = [
            {
                Header: 'Image',
                accessor: 'profileImage',
                disableSortBy: true,
                Cell: (tableProps) => (
                    <UserImage hasImage={true} imageSrc={`${tableProps.row.original.profileImage}?${tableProps.row.original.updatedAt}`} imageAlt={tableProps.row.original.userName} imageSize={10} />
                ),
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Role',
                accessor: 'role',
            },
            {
                Header: 'View',
                Cell: (tableProps) => (
                    <Link className='flex w-full justify-center' to={`/users/${tableProps.row.original._id}`}>
                        <MdVisibility className='h-5 w-5 stroke-current' />
                    </Link>
                ),
            },
            {
                Header: 'Edit',
                Cell: (tableProps) => (
                    <Link className='flex w-full justify-center' to={`/users/edit/${tableProps.row.original._id}`}>
                        <MdModeEdit className='h-5 w-5 stroke-current' />
                    </Link>
                ),
            },
            {
                Header: 'Delete',
                Cell: (tableProps) => (
                    <div className='flex justify-center'>
                        <MdDelete id={tableProps.row.original._id} className='h-5 w-5 stroke-current' onClick={clickHandler} />
                    </div>
                ),
            },
        ]
        return [columns, tableData]
    }, [tableData])

    const tableInstance = useTable({ columns, data, defaultColumn, filterTypes }, useSortBy, useFilters, useGlobalFilter)

    return <Table {...tableInstance} />
}

export default UsersTable
