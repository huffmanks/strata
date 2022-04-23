import { Link } from 'react-router-dom'
import { MdAccountCircle, MdDelete, MdModeEdit } from 'react-icons/md'

const Row = ({ userFirstName, userLastName, userName, userEmail, userImage, userRole, userLink }) => {
    return (
        <div className='even:bg-dark-alt flex w-full cursor-pointer gap-2 hover:bg-neutral-700'>
            {userImage ? (
                <div className='p-2.5'>
                    <img className='h-10 w-10 rounded-full object-cover' src={userImage} alt={userName} />
                </div>
            ) : (
                <div className='p-2.5'>
                    <MdAccountCircle className='h-10 w-10 stroke-current' />
                </div>
            )}
            <div className='p-2.5'>{userFirstName}</div>
            <div className='p-2.5'>{userLastName}</div>
            <div className='p-2.5'>{userEmail}</div>
            <div className='p-2.5'>{userRole}</div>
            <div>
                <Link to={userLink}>
                    <MdModeEdit className='h-5 w-5 stroke-current' />
                </Link>
            </div>
            <div>
                <MdDelete className='h-5 w-5 stroke-current' />
            </div>
        </div>
    )
}

export default Row
