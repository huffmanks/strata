import { useGlobalState } from '../../hooks/useContext'

import ButtonClose from '../Button/ButtonClose'

const ErrorToast = () => {
    const { error, removeToast } = useGlobalState()

    const handleClose = () => {
        removeToast()
    }

    return (
        <div className={`bg-primary-main text-light-main absolute top-20 right-1 w-full max-w-xs rounded-lg p-3 shadow ${!error ? 'hidden' : ''}`}>
            <div className='flex items-center'>
                <div className='pl-2 text-sm'>{error}</div>

                <ButtonClose variant='primary' clickHandler={handleClose} />
            </div>
        </div>
    )
}

export default ErrorToast
