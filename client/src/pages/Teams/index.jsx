import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetTeams } from '../../api/teams/useGetTeams'
import { useDeleteTeam } from '../../api/teams/useDeleteTeam'
import { useGlobalState } from '../../hooks/useContext'

import Header from '../../layout/Content/Header'

import CardGroup from '../../components/Card/CardGroup'
import Card from '../../components/Card'

import Table from '../../components/Table'
import Row from '../../components/Table/Row'
import Modal from '../../components/Modal'
import ModalDelete from '../../components/Modal/ModalDelete'

import LoadSpinner from '../../components/LoadSpinner'

const Teams = () => {
    const [dataView, setDataView] = useState(true)

    const { addToast, modal, addModal, removeModal } = useGlobalState()
    const deleteTeam = useDeleteTeam()

    const { data: teams, isLoading, isError, error } = useGetTeams()

    useEffect(() => {
        if (isError) {
            addToast(error.message)
        }

        return () => {
            removeModal()
        }
    }, [isError])

    const handleDataView = () => {
        setDataView((prev) => !prev)
    }

    const handleModal = (e) => {
        const rowId = e.currentTarget.id

        const team = teams.find((team) => {
            return team._id === rowId
        })

        if (modal) {
            addModal({
                id: team._id,
                hasImage: team?.teamImage,
                image: team?.teamImage,
                imageAlt: team.title,
                title: team.title,
            })
        }
    }

    const handleDelete = (e) => {
        const teamId = e.currentTarget.id

        deleteTeam.mutate(teamId)

        removeModal()
    }

    if (isLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            <Header pageTitle='TEAMS' addLink='/teams/create' activeIcon={dataView} clickHandler={handleDataView} />

            {dataView ? (
                <Table headCols={['Image', 'Title', 'Description', 'Users', 'View', 'Edit', 'Delete']}>
                    {teams &&
                        teams.map((team) => (
                            <Row
                                key={team._id}
                                rowId={team._id}
                                hasImage={true}
                                imageSrc={team.teamImage && `${team.teamImage}?${team.updatedAt}`}
                                imageAlt={team.title}
                                imageSize={10}
                                pathView={`/teams/${team._id}`}
                                pathEdit={`/teams/edit/${team._id}`}
                                teamtitle={team.title}
                                teamDescription={team.description ? `${team.description.slice(0, 20)}...` : 'No description'}
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
                                clickHandler={handleModal}
                            />
                        ))}
                </Table>
            ) : (
                <CardGroup>
                    {teams &&
                        teams.map((team) => (
                            <Card
                                key={team._id}
                                cardId={team._id}
                                cardTitle={team.title}
                                cardDetails={team.description ? `${team.description.slice(0, 75)}...` : 'No description'}
                                cardImage={team.teamImage && `${team.teamImage}?${team.updatedAt}`}
                                cardType='team'
                                cardAccent={team.type}
                                pathEdit={`/teams/edit/${team._id}`}
                                clickHandler={handleModal}
                            />
                        ))}
                </CardGroup>
            )}

            {modal.id && (
                <Modal>
                    <ModalDelete modalType='team' confirmHandler={handleDelete} />
                </Modal>
            )}
        </>
    )
}

export default Teams
