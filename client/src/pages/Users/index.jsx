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

import LoadSpinner from '../../components/LoadSpinner'

const Users = () => {
    const [dataView, setDataView] = useState(true)
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({
        id: '',
        hasImage: false,
        image: '',
        imageAlt: '',
        email: '',
    })

    const { addToast } = useGlobalState()

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

        setModalData(() => {
            return {
                id: !modal ? user._id : '',
                hasImage: !modal ? user?.profileImage : '',
                image: !modal ? user?.profileImage : '',
                imageAlt: !modal ? user.userName : '',
                email: !modal ? user.email : '',
            }
        })

        setModal((prev) => !prev)
    }

    const handleDelete = (e) => {
        const userId = e.currentTarget.id

        deleteUser.mutate(userId)

        setModal((prev) => !prev)
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

            <Modal
                isOpen={modal}
                modalId={modalData.id}
                hasImage={modalData.hasImage}
                imageSrc={modalData.image}
                imageAlt={modalData.imageAlt}
                userEmail={modalData.email}
                message={`Are you sure you want to delete this user?`}
                confirmButton='Delete'
                cancelButton='Cancel'
                closeHandler={handleModal}
                confirmClickHandler={handleDelete}
            />
        </>
    )
}

export default Users
