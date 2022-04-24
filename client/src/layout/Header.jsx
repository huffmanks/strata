import { Link } from 'react-router-dom'

import { MdFormatListBulleted, MdApps, MdPersonAddAlt } from 'react-icons/md'

const Header = ({ pageTitle, addLink, activeIcon, clickHandler }) => {
    return (
        <div className='flex'>
            <h1 className='text-primary-alt text-center text-2xl font-bold'>{pageTitle}</h1>

            <button
                type='button'
                className={`focus:ring-light-main ml-auto flex items-center gap-2 rounded-l-lg py-2 px-4 text-center text-sm font-medium focus:outline-none focus:ring-1 ${
                    activeIcon === 'list' ? 'bg-light-main text-dark-alt' : 'bg-dark-alt hover:bg-primary-dark'
                }`}
                onClick={clickHandler}
                disabled={activeIcon === 'list'}>
                <MdFormatListBulleted className='h-6 w-6 stroke-current' />
            </button>
            <button
                type='button'
                className={`bg-dark-alt focus:ring-light-main flex items-center gap-2 rounded-r-lg py-2 px-4 text-center text-sm font-medium focus:outline-none focus:ring-1 ${
                    activeIcon === 'grid' ? 'bg-light-main text-dark-alt' : 'bg-dark-alt hover:bg-primary-dark'
                }`}
                onClick={clickHandler}
                disabled={activeIcon === 'grid'}>
                <MdApps className='h-6 w-6 stroke-current' />
            </button>

            <Link
                to={addLink}
                className='bg-primary-main hover:bg-primary-dark focus:ring-light-main ml-4 flex items-center gap-2 rounded-lg py-2 px-4 text-center text-sm font-medium focus:outline-none focus:ring-1'>
                <MdPersonAddAlt className='h-6 w-6 stroke-current' />
            </Link>
        </div>
    )
}

export default Header
