import { Link } from 'react-router-dom'
import { useGetUsersQuery } from '../../features/user/userApi'

import Button from '../../components/Button'

const UsersList = () => {
    const { data: users, isLoading } = useGetUsersQuery()

    isLoading && <div>Loading...</div>

    return (
        <>
            <h1 className='text-center text-2xl font-bold text-primary-alt'>USERS</h1>
            <div>List of users</div>
            {users &&
                users.map((user) => (
                    <div className='my-10' key={user._id}>
                        {user.profileImage && <img className='h-20 w-20 rounded-full object-cover' src={`http://localhost:5000/uploads/images/${user.profileImage.fileName}`} alt={user.userName} />}
                        <div>Email: {user.email}</div>
                        <div>Username: {user.userName}</div>
                        <div>Role: {user.role}</div>
                    </div>
                ))}
            <Link to='/users/create'>
                <Button buttonType='button' buttonText='Create a user' isLarge={true} />
            </Link>
        </>
    )
}

export default UsersList
