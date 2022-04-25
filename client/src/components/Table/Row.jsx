import { Link } from 'react-router-dom'
import { MdAccountCircle, MdDelete, MdModeEdit } from 'react-icons/md'

const Row = ({ hasImage, imageSrc, imageAlt, linkPath, ...props }) => {
    return (
        <>
            <tr className='even:bg-dark-alt cursor-pointer hover:bg-neutral-700'>
                {hasImage && imageSrc ? (
                    <td className='p-2.5'>
                        <img className='h-10 w-10 rounded-full object-cover' src={imageSrc} alt={imageAlt} />
                    </td>
                ) : (
                    <td className='p-2.5'>
                        <MdAccountCircle className='h-10 w-10 stroke-current' />
                    </td>
                )}

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
                    <MdDelete className='h-5 w-5 stroke-current' />
                </td>
            </tr>
        </>
    )
}

export default Row
