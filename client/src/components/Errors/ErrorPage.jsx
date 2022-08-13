import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const ErrorPage = ({ title }) => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1, { replace: true })
    }

    return (
        <div className='flex flex-col items-center justify-center gap-8'>
            <h1 className='text-center text-2xl font-bold text-primary-alt md:text-5xl'>{title}</h1>

            <Button variant='primary' size='large' buttonType='button' buttonText='Go Back' handleClick={handleGoBack} />
        </div>
    )
}

export default ErrorPage
