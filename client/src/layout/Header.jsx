import { Link } from 'react-router-dom'

import { MdFormatListBulleted, MdOutlineGridView, MdAddCircleOutline } from 'react-icons/md'

const Header = ({ pageTitle, addLink, viewIcon, clickHandler }) => {
    return (
        <div className='flex gap-4'>
            <h1 className='text-primary-alt text-center text-2xl font-bold'>{pageTitle}</h1>

            <button
                type='button'
                className='bg-dark-alt focus:ring-light-main ml-auto flex items-center gap-2 rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-neutral-800 focus:outline-none focus:ring-1'
                onClick={clickHandler}>
                <span>View</span> {viewIcon ? <MdFormatListBulleted className='h-6 w-6 stroke-current' /> : <MdOutlineGridView className='h-6 w-6 stroke-current' />}
            </button>

            <Link
                to={addLink}
                className='bg-primary-main hover:bg-primary-dark focus:ring-light-main flex items-center gap-2 rounded-lg py-2 px-4 text-center text-sm font-medium focus:outline-none focus:ring-1'>
                <span>Create</span> <MdAddCircleOutline className='h-6 w-6 stroke-current' />
            </Link>
        </div>
    )
}

export default Header
