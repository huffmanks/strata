import { Link } from 'react-router-dom'

const ButtonLarge = ({ buttonPath, buttonType, buttonText }) => {
    return (
        <Link to={buttonPath}>
            <button type={buttonType} className='px-5 py-3 bg-primary-main text-3xl text-center rounded-lg shadow-sm cursor-pointer hover:bg-primary-alt'>
                {buttonText}
            </button>
        </Link>
    )
}

export default ButtonLarge
