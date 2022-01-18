import { Link, Outlet } from 'react-router-dom'

const UsersList = () => {
    return (
        <>
            <>
                <div>List of users</div>
                <Link to='/users/create'>Create a user</Link>
            </>
            <Outlet />
        </>
    )
}

export default UsersList
