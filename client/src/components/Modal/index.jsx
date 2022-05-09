import { useGlobalState } from '../../hooks/useContext'

import ButtonClose from '../Button/ButtonClose'

const Modal = ({ children }) => {
    const { removeModal } = useGlobalState()

    const handleClose = () => {
        removeModal()
    }
    return (
        <>
            <div className='bg-dark-overlay fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center'>
                <div className='bg-dark-main relative h-full w-full max-w-md rounded-lg p-4 shadow md:h-auto'>
                    <div className='absolute top-3 right-2.5'>
                        <ButtonClose variant='secondary' clickHandler={handleClose} />
                    </div>
                    <div className='p-6 text-center'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Modal
