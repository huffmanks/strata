import { Link } from 'react-router-dom'

const Button = ({ buttonPath, buttonType, buttonText }) => {
    return (
        <Link to={buttonPath}>
            <button type={buttonType} className='w-full px-3 py-1 bg-primary-main text-xl text-center rounded-lg shadow-sm cursor-pointer hover:bg-primary-alt'>
                {buttonText}
            </button>
        </Link>
    )
}

export default Button
