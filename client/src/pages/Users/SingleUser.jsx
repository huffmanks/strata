import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetUser } from '../../api/users/useGetUser'
import { useDeleteUser } from '../../api/users/useDeleteUser'
import { useGlobalState } from '../../hooks/useContext'

import Card from '../../components/Card'
import Modal from '../../components/Modal'
import ModalDelete from '../../components/Modal/ModalDelete'

import LoadSpinner from '../../components/LoadSpinner'

const SingleUser = () => {
    const { userId } = useParams()

    const { addToast, modal, addModal, removeModal } = useGlobalState()

    const { data: user, isLoading, isError, error } = useGetUser(userId)
    const deleteUser = useDeleteUser()

    useEffect(() => {
        if (isError) {
            addToast(error.message)
        }
    }, [isError])

    const handleModal = () => {
        if (modal) {
            addModal({
                id: user._id,
                hasImage: user?.profileImage,
                image: user?.profileImage,
                imageAlt: user.userName,
                title: user.email,
            })
        }
    }

    const handleDelete = () => {
        deleteUser.mutate(user._id)

        removeModal()
    }

    if (isLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            {user && (
                <Card
                    key={user._id}
                    cardTitle={user.firstName ? `${user.firstName} ${user?.lastName}` : 'User'}
                    cardDetails={user.email}
                    cardImage={user.profileImage && `${user.profileImage}?${user.updatedAt}`}
                    cardAccent={user.role}
                    pathEdit={`/users/edit/${user._id}`}
                    clickHandler={handleModal}
                />
            )}

            {modal.id && (
                <Modal>
                    <ModalDelete modalType='user' confirmHandler={handleDelete} />
                </Modal>
            )}
        </>
    )
}

export default SingleUser
