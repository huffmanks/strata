import { MdAccountCircle } from 'react-icons/md'

const UserImage = ({ hasImage, imageSrc, imageAlt, imageSize }) => {
    return (
        <>
            {hasImage && imageSrc ? (
                <img className={`h-${imageSize} w-${imageSize} rounded-full object-cover`} src={imageSrc} alt={imageAlt} />
            ) : (
                <MdAccountCircle className={`h-${imageSize} w-${imageSize} stroke-current`} />
            )}
        </>
    )
}

export default UserImage
