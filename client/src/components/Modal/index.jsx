import { useGlobalState } from '../../hooks/useContext'

import ButtonClose from '../Button/ButtonClose'

const Modal = ({ children }) => {
    const { removeModal } = useGlobalState()

    const handleClose = () => {
        removeModal()
    }
    return (
        <>
            <div className='fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-dark-overlay'>
                <div className='pl-16 md:pl-40'>
                    <div className='relative h-full w-full max-w-xs rounded-lg bg-dark-main p-4 shadow md:h-auto md:max-w-md'>
                        <div className='absolute top-3 right-2.5'>
                            <ButtonClose variant='secondary' clickHandler={handleClose} />
                        </div>
                        <div className='p-6 text-center'>{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
