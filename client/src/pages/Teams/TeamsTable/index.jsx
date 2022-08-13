import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTable } from 'react-table'

import Table from '../../../components/Table'
import UserImage from '../../../components/Image/UserImage'

import { MdDelete, MdModeEdit, MdVisibility } from 'react-icons/md'

const TeamsTable = ({ tableData, clickHandler }) => {
    const [columns, data] = useMemo(() => {
        const columns = [
            {
                Header: 'Image',
                accessor: 'teamImage',
                disableSortBy: true,
                Cell: (tableProps) => (
                    <UserImage hasImage={true} imageSrc={`${tableProps.row.original.teamImage}?${tableProps.row.original.updatedAt}`} imageAlt={tableProps.row.original.userName} imageSize={10} />
                ),
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Description',
                accessor: 'description',
                Cell: (tableProps) => (tableProps.row.original.description.length > 25 ? `${tableProps.row.original.description.slice(0, 24)}...` : tableProps.row.original.description),
            },
            {
                Header: 'Users',
                accessor: 'users',
                disableSortBy: true,
                Cell: (tableProps) => (
                    <div className='flex gap-2'>
                        {Object.values(tableProps.row.original.users)
                            .slice(0, 3)
                            .map((user, index) => (
                                <Link key={index} to={`/users/${user._id}`}>
                                    <img className='h-10 w-10 rounded-full' src={user.profileImage} />
                                </Link>
                            ))}
                    </div>
                ),
            },
            {
                Header: 'Type',
                accessor: 'type',
            },
            {
                Header: 'View',
                Cell: (tableProps) => (
                    <Link className='flex w-full justify-center' to={`/teams/${tableProps.row.original._id}`}>
                        <MdVisibility className='h-5 w-5 stroke-current' />
                    </Link>
                ),
            },
            {
                Header: 'Edit',
                Cell: (tableProps) => (
                    <Link className='flex w-full justify-center' to={`/teams/edit/${tableProps.row.original._id}`}>
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

    const tableInstance = useTable({ columns, data })

    return <Table {...tableInstance} />
}

export default TeamsTable
