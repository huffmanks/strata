import Button from '../Button'

const AccessDenied = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <h1 className='text-7xl font-bold text-center text-primary-alt'>Access Denied</h1>
            <Button isLarge='true' buttonPath='/' buttonType='button' buttonText='Go Back' />
        </div>
    )
}

export default AccessDenied
