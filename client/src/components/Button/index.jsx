const Button = ({ buttonType, buttonText, isLarge, isFullWidth, handleClick }) => {
    const baseStyles = 'bg-primary-main text-center rounded-lg shadow-sm cursor-pointer hover:bg-primary-alt'
    const fullWidth = 'w-full px-3 py-2 text-xl'
    const large = 'px-5 py-3 text-3xl'

    return (
        <button type={buttonType} className={isFullWidth ? `${fullWidth} ${baseStyles}` : isLarge ? `${large} ${baseStyles}` : baseStyles} {...(handleClick && { onClick: handleClick })}>
            {buttonText}
        </button>
    )
}

export default Button
