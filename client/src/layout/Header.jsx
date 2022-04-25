import { Link } from 'react-router-dom'

import { MdFormatListBulleted, MdApps, MdPersonAddAlt } from 'react-icons/md'

const Header = ({ pageTitle, addLink, activeIcon, clickHandler }) => {
    return (
        <div className='flex items-center'>
            <h1 className='text-primary-alt text-center text-xl font-bold md:text-2xl'>{pageTitle}</h1>

            <button
                type='button'
                className={`focus:ring-light-main ml-auto flex items-center gap-2 rounded-l-lg py-1 px-2 text-center text-sm font-medium focus:outline-none focus:ring-1 md:py-2 md:px-4 ${
                    activeIcon ? 'bg-light-main text-dark-alt' : 'bg-dark-alt hover:bg-primary-dark'
                }`}
                onClick={clickHandler}
                disabled={activeIcon}>
                <MdFormatListBulleted className='h-6 w-6 stroke-current' />
            </button>
            <button
                type='button'
                className={`focus:ring-light-main flex items-center gap-2 rounded-r-lg py-1 px-2 text-center text-sm font-medium focus:outline-none focus:ring-1 md:py-2 md:px-4 ${
                    !activeIcon ? 'bg-light-main text-dark-alt' : 'bg-dark-alt hover:bg-primary-dark'
                }`}
                onClick={clickHandler}
                disabled={!activeIcon}>
                <MdApps className='h-6 w-6 stroke-current' />
            </button>

            <Link
                to={addLink}
                className='bg-primary-main hover:bg-primary-dark focus:ring-light-main ml-4 flex items-center gap-2 rounded-lg py-1 px-2 text-center text-sm font-medium focus:outline-none focus:ring-1 md:py-2 md:px-4'>
                <MdPersonAddAlt className='h-6 w-6 stroke-current' />
            </Link>
        </div>
    )
}

export default Header
