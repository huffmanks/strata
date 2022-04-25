import { Link } from 'react-router-dom'
import { MdAccountCircle, MdModeEdit, MdDelete } from 'react-icons/md'
import { GiBullHorns, GiSharkFin, GiTigerHead } from 'react-icons/gi'

const CardBody = ({ userName, userEmail, userImage, userRole, userLink }) => {
    return (
        <>
            <div className='relative'>
                {userImage ? (
                    <img className='mb-3 h-24 w-24 rounded-full object-cover shadow-lg' src={userImage} alt={userName} />
                ) : (
                    <MdAccountCircle className='mb-3 h-24 w-24 rounded-full stroke-current' viewBox='1 2 22 22' />
                )}
                <div className='bg-primary-main absolute -top-3 -right-4 h-10 w-10 rounded-full'>
                    <div className='grid h-full w-full place-content-center'>
                        {userRole === 'bull' ? (
                            <GiBullHorns className='h-5 w-5 stroke-current' />
                        ) : userRole === 'mako' ? (
                            <GiSharkFin className='h-5 w-5 stroke-current' />
                        ) : (
                            <GiTigerHead className='h-5 w-5 stroke-current' />
                        )}
                    </div>
                </div>
            </div>

            <div className='text-primary-alt mb-1 text-xl font-medium'>{userName}</div>
            <div className='text-sm'>{userEmail}</div>
            <div className='mt-4 flex gap-x-3 lg:mt-6'>
                <Link
                    to={userLink}
                    className='bg-primary-main hover:bg-primary-dark focus:ring-light-main flex items-center gap-2 rounded-lg py-2 px-4 text-center text-sm font-medium focus:outline-none focus:ring-4'>
                    <span>Edit</span> <MdModeEdit className='h-4 w-4 stroke-current' />
                </Link>
                <Link
                    to='/users'
                    className='bg-dark-main focus:ring-light-main flex items-center gap-2 rounded-lg  py-2 px-4 text-center text-sm font-medium hover:bg-neutral-800 focus:outline-none focus:ring-4'>
                    <span>Delete</span> <MdDelete className='h-4 w-4 stroke-current' />
                </Link>
            </div>
        </>
    )
}

export default CardBody
