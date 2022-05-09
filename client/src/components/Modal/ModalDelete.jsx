import { useGlobalState } from '../../hooks/useContext'

import UserImage from '../Image/UserImage'
import ModalFooter from './ModalFooter'

const ModalDelete = ({ modalType, confirmHandler }) => {
    const { modal } = useGlobalState()

    return (
        <>
            <div className={`mb-3 flex flex-col items-center justify-center ${modal.hasImage ? 'gap-2' : 'gap-1'}`}>
                <UserImage hasImage={modal.hasImage} imageSrc={modal.image} imageAlt={modal.imageAlt} imageSize={modal.hasImage ? 20 : 24} />
                <div className='bg-dark-alt rounded-xl py-1 px-2 text-xs'>{modal.title}</div>
            </div>
            <div className='text-light-main mb-5 text-lg font-normal'>Are you sure you want to delete this {modalType}?</div>
            <ModalFooter hasConfirm={true} confirmText='Delete' cancelText='Cancel' confirmHandler={confirmHandler} />
        </>
    )
}

export default ModalDelete
