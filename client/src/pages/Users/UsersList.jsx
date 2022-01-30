import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const UsersList = () => {
    return (
        <>
            <h1 className='mt-4 text-2xl font-bold text-center text-primary-alt'>USERS</h1>
            <div>List of users</div>
            <Link to='/users/create'>
                <Button buttonType='button' buttonText='Create a user' isLarge={true} />
            </Link>
        </>
    )
}

export default UsersList
