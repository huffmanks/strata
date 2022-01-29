import { Link } from 'react-router-dom'

const UsersList = () => {
    return (
        <>
            <>
                <div>List of users</div>
                <Link to='/users/create'>Create a user</Link>
            </>
        </>
    )
}

export default UsersList
