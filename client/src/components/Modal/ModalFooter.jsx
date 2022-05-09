import { useGlobalState } from '../../hooks/useContext'

import Button from '../Button'

const ModalFooter = ({ hasConfirm, confirmText, cancelText, confirmHandler }) => {
    const { modal, removeModal } = useGlobalState()

    const handleClose = () => {
        removeModal()
    }

    return (
        <>
            <div className='flex items-center justify-center gap-2'>
                {hasConfirm && <Button buttonId={modal.id} buttonType='button' size='small' variant='primary' buttonText={confirmText} clickHandler={confirmHandler} />}

                <Button buttonType='button' size='small' variant='secondary' buttonText={cancelText} clickHandler={handleClose} />
            </div>
        </>
    )
}

export default ModalFooter
