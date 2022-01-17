import { Link } from 'react-router-dom'

const ATest = () => {
    return (
        <form className='max-w-sm mx-auto bg-dark-alt rounded-lg shadow-xl overflow-hidden px-10 py-14'>
            <div className='flex flex-col justify-center items-center gap-3 mb-8'>
                <div className='flex justify-center items-center gap-2'>
                    <svg className='w-14 h-14 fill-primary-main' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
                    </svg>
                    <h1 className='text-3xl font-bold text-center'>Strata</h1>
                </div>
                <h2 className='text-2xl font-bold text-center'>Login</h2>
            </div>

            <div className='space-y-4'>
                <div className='relative text-gray-300 outline outline-none border-gray-400 border-2 rounded-xl focus-within:border-primary-alt'>
                    <input type='text' name='email' placeholder=' ' className='block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent' />
                    <label htmlFor='email' className='absolute top-0 p-4 text-lg duration-300 origin-0'>
                        Email
                    </label>
                </div>
                <div className='relative text-gray-300 outline outline-none border-gray-400 border-2 rounded-xl focus-within:border-primary-alt'>
                    <input type='text' name='password' placeholder=' ' className='block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent' />
                    <label htmlFor='password' className='absolute top-0 p-4 text-lg duration-300 origin-0'>
                        Password
                    </label>
                </div>
            </div>
            <div className='mt-2'>
                <div className='mb-6 text-right hover:text-primary-alt'>
                    <Link to='/forgotpassword'>Forgot Password</Link>
                </div>
                <div>
                    <Link to='/register'>
                        <button className='w-full px-3 py-1 bg-primary-main text-xl text-center rounded-lg shadow-sm cursor-pointer hover:bg-primary-alt'>Register</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default ATest
