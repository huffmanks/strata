import { useEffect, useState } from 'react'

import { useGetUsers } from '../../api/users/useGetUsers'
import { useDeleteUser } from '../../api/users/useDeleteUser'
import { useGlobalState } from '../../hooks/useContext'

import Header from '../../layout/Content/Header'

import GridList from '../../components/GridList'
import Card from '../../components/Card'
import CardBody from '../../components/Card/CardBody'

import Table from '../../components/Table'
import Row from '../../components/Table/Row'
import Modal from '../../components/Modal'
import ModalDeleteUser from '../../components/Modal/ModalDeleteUser'

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
                email: user.email,
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
                <Table headCols={['Image', 'First Name', 'Last Name', 'Email', 'Role', 'Edit', 'Delete']}>
                    {users &&
                        users.map((user) => (
                            <Row
                                key={user._id}
                                rowId={user._id}
                                hasImage={true}
                                imageSrc={user.profileImage && `${user.profileImage}?${user.updatedAt}`}
                                imageAlt={user.userName}
                                imageSize={10}
                                linkPath={`/users/edit/${user._id}`}
                                userFirstName={user?.firstName}
                                userLastName={user?.lastName}
                                userEmail={user.email}
                                userRole={user.role}
                                clickHandler={handleModal}
                            />
                        ))}
                </Table>
            ) : (
                <GridList>
                    {users &&
                        users.map((user) => (
                            <Card key={user._id}>
                                <CardBody
                                    userName={user.firstName ? `${user.firstName} ${user?.lastName}` : 'User'}
                                    userEmail={user.email}
                                    userImage={user.profileImage && `${user.profileImage}?${user.updatedAt}`}
                                    userRole={user.role}
                                    userLink={`/users/edit/${user._id}`}
                                />
                            </Card>
                        ))}
                </GridList>
            )}

            {modal.id && (
                <Modal>
                    <ModalDeleteUser message='Are you sure you want to delete this user?' confirmButton='Delete' cancelButton='Cancel' confirmClickHandler={handleDelete} />
                </Modal>
            )}
        </>
    )
}

export default Users
