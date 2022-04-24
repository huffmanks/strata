import { Link } from 'react-router-dom'
import { MdAccountCircle, MdDelete, MdModeEdit } from 'react-icons/md'

const Row = ({ userFirstName, userLastName, userName, userEmail, userImage, userRole, userLink }) => {
    return (
        <>
            <tr className='even:bg-dark-alt cursor-pointer hover:bg-neutral-700'>
                {userImage ? (
                    <td className='p-2.5'>
                        <img className='h-10 w-10 rounded-full object-cover' src={userImage} alt={userName} />
                    </td>
                ) : (
                    <td className='p-2.5'>
                        <MdAccountCircle className='h-10 w-10 stroke-current' />
                    </td>
                )}
                <td className='p-2.5'>{userFirstName}</td>
                <td className='p-2.5'>{userLastName}</td>
                <td className='p-2.5'>{userEmail}</td>
                <td className='p-2.5'>{userRole}</td>
                <td>
                    <Link to={userLink}>
                        <MdModeEdit className='h-5 w-5 stroke-current' />
                    </Link>
                </td>
                <td>
                    <MdDelete className='h-5 w-5 stroke-current' />
                </td>
            </tr>
        </>
    )
}

export default Row
