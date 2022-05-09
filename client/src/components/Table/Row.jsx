import { Link } from 'react-router-dom'

import { MdDelete, MdModeEdit, MdVisibility } from 'react-icons/md'
import UserImage from '../Image/UserImage'

const Row = ({ rowId, hasImage, imageSrc, imageAlt, imageSize, pathView, pathEdit, clickHandler, ...props }) => {
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

                <td className='w-5'>
                    <Link className='flex w-full justify-center' to={pathView}>
                        <MdVisibility className='h-5 w-5 stroke-current' />
                    </Link>
                </td>
                <td className='w-5'>
                    <Link className='flex w-full justify-center' to={pathEdit}>
                        <MdModeEdit className='h-5 w-5 stroke-current' />
                    </Link>
                </td>
                <td className='w-5'>
                    <div className='flex justify-center'>
                        <MdDelete id={rowId} className='h-5 w-5 stroke-current' onClick={clickHandler} />
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Row
