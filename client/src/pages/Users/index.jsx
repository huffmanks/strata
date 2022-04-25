import { useState } from 'react'

import { useGetUsers } from '../../api/users/useGetUsers'

import Header from '../../layout/Header'
import GridList from '../../components/GridList'
import Card from '../../components/Card'
import CardBody from '../../components/Card/CardBody'
import LoadSpinner from '../../components/LoadSpinner'
import ErrorToast from '../../components/Errors/ErrorToast'
import Table from '../../components/Table'
import Row from '../../components/Table/Row'

const Users = () => {
    const [view, setView] = useState(true)

    const { data: users, isLoading, isError, error } = useGetUsers()

    if (isLoading) {
        return <LoadSpinner />
    }

    if (isError) {
        return <ErrorToast message={error.message} />
    }

    const handleClick = () => {
        setView((prev) => !prev)
    }

    return (
        <>
            <Header pageTitle='USERS' addLink='/users/create' activeIcon={view} clickHandler={handleClick} />

            {users && view ? (
                <Table headCols={['Image', 'First Name', 'Last Name', 'Email', 'Role', 'Edit', 'Delete']}>
                    {users.map((user) => (
                        <Row
                            key={user._id}
                            hasImage={true}
                            imageSrc={user?.profileImage}
                            imageAlt={user.userName}
                            linkPath={`/users/${user._id}`}
                            userFirstName={user?.firstName}
                            userLastName={user?.lastName}
                            userEmail={user.email}
                            userRole={user.role}
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
                                userImage={user.profileImage}
                                userRole={user.role}
                                userLink={`/users/${user._id}`}
                            />
                        </Card>
                    ))}
                </GridList>
            )}
        </>
    )
}

export default Users
