import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetTeam } from '../../api/teams/useGetTeam'
import { useDeleteTeam } from '../../api/teams/useDeleteTeam'
import { useGlobalState } from '../../hooks/useContext'

import Card from '../../components/Card'
import Modal from '../../components/Modal'
import ModalDelete from '../../components/Modal/ModalDelete'

import LoadSpinner from '../../components/LoadSpinner'

const SingleTeam = () => {
    const { teamId } = useParams()

    const { addToast, modal, addModal, removeModal } = useGlobalState()
    const deleteTeam = useDeleteTeam()

    const { data: team, isLoading, isError, error } = useGetTeam(teamId)

    useEffect(() => {
        if (isError) {
            addToast(error.message)
        }
    }, [isError])

    const handleModal = () => {
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

    const handleDelete = () => {
        deleteTeam.mutate(team._id)

        removeModal()
    }

    if (isLoading) {
        return <LoadSpinner />
    }

    return (
        <>
            {team && (
                <Card
                    key={team._id}
                    singleCard={true}
                    cardTitle={team.title}
                    cardImage={team.teamImage && `${team.teamImage}?${team.updatedAt}`}
                    cardType='team'
                    cardAccent={team.type}
                    pathEdit={`/teams/edit/${team._id}`}
                    clickHandler={handleModal}
                    description={team.description}
                    type={team.type}
                />
            )}

            {modal.id && (
                <Modal>
                    <ModalDelete modalType='team' confirmHandler={handleDelete} />
                </Modal>
            )}
        </>
    )
}

export default SingleTeam
