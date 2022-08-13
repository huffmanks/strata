import { useEffect, useState } from 'react'

import { useGetTeams } from '../../api/teams/useGetTeams'
import { useDeleteTeam } from '../../api/teams/useDeleteTeam'
import { useGlobalState } from '../../hooks/useContext'

import Header from '../../layout/Content/Header'

import CardGroup from '../../components/Card/CardGroup'
import Card from '../../components/Card'

import TeamsTable from './TeamsTable'
import Modal from '../../components/Modal'
import ModalDelete from '../../components/Modal/ModalDelete'

import LoadSpinner from '../../components/LoadSpinner'

const Teams = () => {
    const [dataView, setDataView] = useState(true)
    const [tableData, setTableData] = useState([])

    const { data: teams, isLoading, isError, error } = useGetTeams()

    const { addToast, modal, addModal, removeModal } = useGlobalState()
    const deleteTeam = useDeleteTeam()

    useEffect(() => {
        if (isError) {
            addToast(error.message)
        }

        if (teams) {
            setTableData(teams)
        }

        return () => {
            removeModal()
        }
    }, [teams, isError])

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
                <TeamsTable tableData={tableData} clickHandler={handleModal} />
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
