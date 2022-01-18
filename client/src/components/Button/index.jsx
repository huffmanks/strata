import { Link } from 'react-router-dom'

const Button = ({ buttonPath, buttonType, buttonText, isLarge, isFullWidth }) => {
    const baseStyles = 'bg-primary-main text-center rounded-lg shadow-sm cursor-pointer hover:bg-primary-alt'
    const fullWidth = 'w-full px-3 py-1 text-xl'
    const large = 'px-5 py-3 text-3xl'

    return (
        <Link to={buttonPath}>
            <button type={buttonType} className={isFullWidth ? `${fullWidth} ${baseStyles}` : isLarge ? `${large} ${baseStyles}` : baseStyles}>
                {buttonText}
            </button>
        </Link>
    )
}

export default Button
