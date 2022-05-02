import { useState } from 'react'

import { useGetUsers } from '../../api/users/useGetUsers'

import Header from '../../layout/Content/Header'

import GridList from '../../components/GridList'
import Card from '../../components/Card'
import CardBody from '../../components/Card/CardBody'

import Table from '../../components/Table'
import Row from '../../components/Table/Row'
import Modal from '../../components/Modal'

import LoadSpinner from '../../components/LoadSpinner'
import ErrorToast from '../../components/Errors/ErrorToast'

// import { useAuth } from '../../hooks/useAuth'

const Users = () => {
    const [dataView, setDataView] = useState(true)
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({
        hasImage: false,
        image: '',
        imageAlt: '',
        email: '',
    })

    const { data: users, isLoading, isError, error } = useGetUsers()

    if (isLoading) {
        return <LoadSpinner />
    }

    if (isError) {
        return <ErrorToast message={error.message} />
    }

    const handleDataView = () => {
        setDataView((prev) => !prev)
    }

    // const { auth } = useAuth()

    const handleModal = (e) => {
        // const { name, value } = e.target

        console.log(e.currentTarget)

        setModalData(() => {
            return {
                hasImage: '',
                image: '',
                imageAlt: '',
                email: '',
                // hasImage: true,
                // image: auth.user.profileImage,
                // imageAlt: 'alt',
                // email: 'my@email.com',
            }
        })

        setModal((prev) => !prev)
    }

    const handleDelete = () => {
        console.log('deleted')
    }

    return (
        <>
            <Header pageTitle='USERS' addLink='/users/create' activeIcon={dataView} clickHandler={handleDataView} />

            {users && dataView ? (
                <Table headCols={['Image', 'First Name', 'Last Name', 'Email', 'Role', 'Edit', 'Delete']}>
                    {users.map((user) => (
                        <Row
                            key={user._id}
                            hasImage={true}
                            imageSrc={user.profileImage && `${user.profileImage}?${user.updatedAt}`}
                            imageAlt={user.userName}
                            imageSize={10}
                            linkPath={`/users/${user._id}`}
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
                    {users.map((user) => (
                        <Card key={user._id}>
                            <CardBody
                                userName={user.firstName ? `${user.firstName} ${user?.lastName}` : 'User'}
                                userEmail={user.email}
                                userImage={user.profileImage && `${user.profileImage}?${user.updatedAt}`}
                                userRole={user.role}
                                userLink={`/users/${user._id}`}
                            />
                        </Card>
                    ))}
                </GridList>
            )}

            <Modal
                isOpen={modal}
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
