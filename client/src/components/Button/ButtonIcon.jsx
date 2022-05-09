import { MdDelete, MdModeEdit } from 'react-icons/md'

const ButtonIcon = ({ iconName }) => {
    return (
        <>
            {iconName === 'delete' && <MdDelete className='h-4 w-4 stroke-current' />}
            {iconName === 'edit' && <MdModeEdit className='h-4 w-4 stroke-current' />}
        </>
    )
}

export default ButtonIcon
