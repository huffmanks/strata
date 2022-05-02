import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetTeams } from '../../api/teams/useGetTeams'

import Header from '../../layout/Content/Header'
import GridList from '../../components/GridList'
import Card from '../../components/Card'
import CardBody from '../../components/Card/CardBody'
import LoadSpinner from '../../components/LoadSpinner'
import ErrorToast from '../../components/Errors/ErrorToast'
import Table from '../../components/Table'
import Row from '../../components/Table/Row'

const Teams = () => {
    const [view, setView] = useState(true)

    const { data: teams, isLoading, isError, error } = useGetTeams()

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
            <Header pageTitle='Teams' addLink='/teams/create' activeIcon={view} clickHandler={handleClick} />

            {teams && view ? (
                <Table headCols={['Image', 'Title', 'Description', 'Users', 'Edit', 'Delete']}>
                    {teams.map((team) => (
                        <Row
                            key={team._id}
                            hasImage={true}
                            imageSrc={team?.teamImage}
                            imageAlt={team.title}
                            imageSize={10}
                            linkPath={`/teams/${team._id}`}
                            teamTitle={team.title}
                            teamDescription={team.description ? `${team.description.slice(0, 20)}...` : ' '}
                            // teamDescription={team?.description > 20 ? team.description.slice(0, 20) + '...' : team?.description ? team.description : ' '}
                            teamUsers={
                                <div className='flex gap-2'>
                                    {Object.values(team.users)
                                        .slice(0, 3)
                                        .map((user, index) => (
                                            <Link key={index} to={`/users/${user._id}`}>
                                                <img className='h-10 w-10 rounded-full' src={user.profileImage} />
                                            </Link>
                                        ))}
                                </div>
                            }
                        />
                    ))}
                </Table>
            ) : (
                <GridList>
                    {teams.map((team) => (
                        <Card key={team._id}>
                            <CardBody teamTitle={team.title} teamDescription={team?.description} teamUsers={team.users} teamImage={team?.teamImage} teamLink={`/teams/${team._id}`} />
                        </Card>
                    ))}
                </GridList>
            )}
        </>
    )
}

export default Teams
