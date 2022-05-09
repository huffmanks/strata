import ButtonIcon from './ButtonIcon'

const Button = ({ buttonId, buttonType, size, variant, buttonIcon, iconName, buttonText, clickHandler }) => {
    const baseStyles = 'text-light-main px-5 py-2.5 cursor-pointer rounded-lg text-center shadow-sm focus:outline-none focus:ring-2'

    const primary = 'bg-primary-main focus:ring-primary-main hover:bg-primary-dark'
    const secondary = 'bg-neutral-800 focus:ring-light-main hover:bg-dark-main'

    return (
        <button
            id={buttonId}
            type={buttonType}
            size={size}
            variant={variant}
            className={`${baseStyles} ${variant === 'primary' ? primary : secondary} ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-2xl' : 'w-full text-xl'} ${
                buttonIcon && 'inline-flex items-center justify-center gap-2'
            }`}
            {...(clickHandler && { onClick: clickHandler })}>
            {buttonText} {buttonIcon && <ButtonIcon iconName={iconName} />}
        </button>
    )
}

export default Button
