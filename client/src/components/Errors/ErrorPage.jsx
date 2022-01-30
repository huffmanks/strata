import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const ErrorPage = ({ title }) => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1, { replace: true })
    }

    return (
        <div className='flex flex-col justify-center items-center gap-8 mt-10'>
            <h1 className='md:text-7xl text-4xl font-bold text-center text-primary-alt'>{title}</h1>

            <Button isLarge='true' buttonType='button' buttonText='Go Back' handleClick={handleGoBack} />
        </div>
    )
}

export default ErrorPage