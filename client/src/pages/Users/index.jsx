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
import Pagination from '../../components/Pagination'

const Users = () => {
    const [dataView, setDataView] = useState(true)
    const [page, setPage] = useState(1)
    const [sortFields, setSortFields] = useState('')
    const limit = 2

    const { addToast, modal, addModal, removeModal } = useGlobalState()
    const deleteUser = useDeleteUser()

    // const { data, isLoading, isError, error, isPreviousData } = useGetUsers()
    const { data, isLoading, isError, error, isPreviousData } = useGetUsers(page, limit, sortFields)

    useEffect(() => {
        if (isError) {
            addToast(error.message)
        }
    }, [isError])

    const handleDataView = () => {
        setDataView((prev) => !prev)
    }

    const handleSort = (e) => {
        if (sortFields?.includes(`-${e.target.id}`)) {
            const newSort = sortFields.replace(`-${e.target.id}`, e.target.id).toString()
            setSortFields(newSort)
        } else if (sortFields?.includes(e.target.id)) {
            const newSort = sortFields.replace(e.target.id, `-${e.target.id}`).toString()
            setSortFields(newSort)
        } else {
            const newSort = sortFields !== '' ? sortFields + `,${e.target.id}` : e.target.id
            setSortFields(newSort.toString())
        }
    }

    // console.log(sortFields)

    const handleModal = (e) => {
        const rowId = e.currentTarget.id

        const user = data.users.find((user) => {
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
                <Table headCols={['Image', 'First Name', 'Last Name', 'Email', 'Role', 'View', 'Edit', 'Delete']} clickHandler={handleSort}>
                    {data &&
                        data.users.map((user) => (
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
                    {data &&
                        data.users.map((user) => (
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

            {data.count && (
                <Pagination
                    currentPage={data.currentPage}
                    totalPages={data.totalPages}
                    prevVariant={page === 1 ? 'secondary' : 'primary'}
                    nextVariant={isPreviousData || data.currentPage === data.totalPages ? 'secondary' : 'primary'}
                    prevClickHandler={() => setPage((old) => Math.max(old - 1, 1))}
                    prevDisabled={page === 1}
                    nextClickHandler={() => {
                        if (!isPreviousData && data.currentPage !== data.totalPages) {
                            setPage((old) => old + 1)
                        }
                    }}
                    nextDisabled={isPreviousData || data.currentPage === data.totalPages}
                    pageClickHandler={(e) => setPage(e.target.id)}
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

export default Users
