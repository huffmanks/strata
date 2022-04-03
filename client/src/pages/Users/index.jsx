import { Link } from 'react-router-dom'

import Button from '../../components/Button'
// import Table from '../../components/Table'
// import { MdAccountCircle, MdModeEdit, MdDelete } from 'react-icons/md'

const Users = () => {
    // const { data: users, isLoading } = useGetUsersQuery()

    return (
        <>
            <h1 className='text-primary-alt text-center text-2xl font-bold'>USERS</h1>
            {/* <Table headCols={['Image', 'First Name', 'Last Name', 'Email', 'Role']}>
                {users &&
                    users.map((user) => (
                        <tr key={user._id} className='even:bg-dark-alt cursor-pointer hover:bg-neutral-700'>
                            {user.profileImage ? (
                                <td className='p-2.5'>
                                    <img className='h-10 w-10 rounded-full object-cover' src={user.profileImage} alt={user.userName} />
                                </td>
                            ) : (
                                <td className='p-2.5'>
                                    <MdAccountCircle className='h-10 w-10 stroke-current' />
                                </td>
                            )}
                            <td className='p-2.5'>{user.firstName}</td>
                            <td className='p-2.5'>{user.lastName}</td>
                            <td className='p-2.5'>{user.email}</td>
                            <td className='p-2.5'>{user.role}</td>
                            <td>
                                <Link to={`/users/${user._id}`}>
                                    <MdModeEdit className='h-5 w-5 stroke-current' />
                                </Link>
                            </td>
                            <td>
                                <MdDelete className='h-5 w-5 stroke-current' />
                            </td>
                        </tr>
                    ))}
            </Table> */}
            <Link to='/users/create'>
                <Button buttonType='button' buttonText='Create a user' isLarge={true} />
            </Link>
        </>
    )
}

export default Users
