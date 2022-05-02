import { Link } from 'react-router-dom'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import UserImage from '../Image/UserImage'

const Row = ({ hasImage, imageSrc, imageAlt, imageSize, linkPath, clickHandler, ...props }) => {
    return (
        <>
            <tr className='even:bg-dark-alt cursor-pointer hover:bg-neutral-700'>
                <td className='p-2.5'>
                    <UserImage hasImage={hasImage} imageSrc={imageSrc} imageAlt={imageAlt} imageSize={imageSize} />
                </td>

                {Object.values(props).map((prop, index) => (
                    <td key={index} className='p-2.5'>
                        {prop}
                    </td>
                ))}

                <td>
                    <Link to={linkPath}>
                        <MdModeEdit className='h-5 w-5 stroke-current' />
                    </Link>
                </td>
                <td>
                    <MdDelete className='h-5 w-5 stroke-current' onClick={clickHandler} />
                </td>
            </tr>
        </>
    )
}

export default Row
