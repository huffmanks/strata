import { Link } from 'react-router-dom'

const AccessDenied = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <h1 className='text-7xl font-bold text-center text-primary-alt'>Access Denied</h1>
            <Link to='/'>
                <button className='px-5 py-3 bg-primary-main text-3xl text-center rounded-lg shadow-sm cursor-pointer hover:bg-primary-alt'>Go Back</button>
            </Link>
        </div>
    )
}

export default AccessDenied
