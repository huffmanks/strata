import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetUser } from '../../api/users/useGetUser'
import { useGlobalState } from '../../hooks/useContext'

import Card from '../../components/Card'
import CardBody from '../../components/Card/CardBody'

import LoadSpinner from '../../components/LoadSpinner'

const SingleUser = () => {
    const { userId } = useParams()

    const { addToast } = useGlobalState()

    const { data: user, isLoading, isError, error } = useGetUser(userId)

    useEffect(() => {
        if (isError) {
            addToast(error.message)
        }
    }, [isError])

    if (isLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            {user && (
                <Card key={user._id}>
                    <CardBody
                        userName={user.firstName ? `${user.firstName} ${user?.lastName}` : 'User'}
                        userEmail={user.email}
                        userImage={user.profileImage && `${user.profileImage}?${user.updatedAt}`}
                        userRole={user.role}
                        userLink={`/users/edit/${user._id}`}
                    />
                </Card>
            )}
        </>
    )
}

export default SingleUser
