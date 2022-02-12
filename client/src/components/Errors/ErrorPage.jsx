import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const ErrorPage = ({ title }) => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1, { replace: true })
    }

    return (
        <div className='flex flex-col items-center justify-center gap-8'>
            <h1 className='text-primary-alt text-center text-4xl font-bold md:text-7xl'>{title}</h1>

            <Button isLarge='true' buttonType='button' buttonText='Go Back' handleClick={handleGoBack} />
        </div>
    )
}

export default ErrorPage
