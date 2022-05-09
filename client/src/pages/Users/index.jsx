import { useEffect, useState } from 'react'

import { useGetUsers } from '../../api/users/useGetUsers'
import { useDeleteUser } from '../../api/users/useDeleteUser'
import { useGlobalState } from '../../hooks/useContext'

import Header from '../../layout/Content/Header'

import CardGroup from '../../components/Card/CardGroup'
import Card from '../../components/Card'

import Table from '../../components/Table'
import Row from '../../components/Table/Row'
import Modal from '../../components/Modal'
import ModalDelete from '../../components/Modal/ModalDelete'

import LoadSpinner from '../../components/LoadSpinner'

const Users = () => {
    const [dataView, setDataView] = useState(true)

    const { addToast, modal, addModal, removeModal } = useGlobalState()

    const { data: users, isLoading, isError, error } = useGetUsers()
    const deleteUser = useDeleteUser()

    useEffect(() => {
        if (isError) {
            addToast(error.message)
        }
    }, [isError])

    const handleDataView = () => {
        setDataView((prev) => !prev)
    }

    const handleModal = (e) => {
        const rowId = e.currentTarget.id

        const user = users.find((user) => {
            return user._id === rowId
        })

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

    const handleDelete = (e) => {
        const userId = e.currentTarget.id

        deleteUser.mutate(userId)

        removeModal()
    }

    if (isLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            <Header pageTitle='USERS' addLink='/users/create' activeIcon={dataView} clickHandler={handleDataView} />

            {dataView ? (
                <Table headCols={['Image', 'First Name', 'Last Name', 'Email', 'Role', 'View', 'Edit', 'Delete']}>
                    {users &&
                        users.map((user) => (
                            <Row
                                key={user._id}
                                rowId={user._id}
                                hasImage={true}
                                imageSrc={user.profileImage && `${user.profileImage}?${user.updatedAt}`}
                                imageAlt={user.userName}
                                imageSize={10}
                                pathView={`/users/${user._id}`}
                                pathEdit={`/users/edit/${user._id}`}
                                userFirstName={user?.firstName}
                                userLastName={user?.lastName}
                                userEmail={user.email}
                                userRole={user.role}
                                clickHandler={handleModal}
                            />
                        ))}
                </Table>
            ) : (
                <CardGroup>
                    {users &&
                        users.map((user) => (
                            <Card
                                key={user._id}
                                cardId={user._id}
                                cardTitle={user.firstName ? `${user.firstName} ${user?.lastName}` : 'User'}
                                cardDetails={user.email}
                                cardImage={user.profileImage && `${user.profileImage}?${user.updatedAt}`}
                                cardType='user'
                                cardAccent={user.role}
                                pathEdit={`/users/edit/${user._id}`}
                                clickHandler={handleModal}
                            />
                        ))}
                </CardGroup>
            )}

            {modal.id && (
                <Modal>
                    <ModalDelete modalType='user' confirmHandler={handleDelete} />
                </Modal>
            )}
        </>
    )
}

export default Users
