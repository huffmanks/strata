import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTeamById } from '../../data/teamsSlice'
import { selectAllUsers } from '../../data/usersSlice'

import { useEditTeamMutation } from '../../api/apiSlice'

const EditTeam = () => {
    const { teamId } = useParams()
    const navigate = useNavigate()
    const [updateTeam, { isLoading }] = useEditTeamMutation()

    const team = useSelector((state) => selectTeamById(state, teamId))
    const users = useSelector(selectAllUsers)

    // Checkbox current users
    const currentUsers = team.attributes.users.data
    const prevChecked = currentUsers.map((cu) => {
        return cu.id
    })
    const allUsers = users.map((cu) => {
        return cu.id
    })
    const filtUserIds = prevChecked.filter((e) => allUsers.includes(e)).map(String)

    // State
    const [title, setTitle] = useState(team.attributes.title)
    const [description, setDescription] = useState(team.attributes.description)
    const [userId, setUserId] = useState(filtUserIds)

    // Handlers
    const onTitleChanged = (e) => setTitle(e.target.value)
    const onDescriptionChanged = (e) => setDescription(e.target.value)

    const onUsersChanged = (e) => {
        let users = [...userId]
        if (e.target.checked) {
            users = [...userId, e.target.value]
        } else {
            users.splice(userId.indexOf(e.target.value), 1)
        }
        setUserId(users)
    }

    const canSave = [title, description].every(Boolean) && !isLoading

    const onSaveTeamClicked = async () => {
        if (canSave) {
            try {
                setUserId(filtUserIds)
                setTitle(team.attributes.title)
                setDescription(team.attributes.description)

                await updateTeam({ teamId, title, description, users: userId }).unwrap()

                navigate(`/teams/${teamId}`)
            } catch (err) {
                console.error('Failed to save team: ', err)
            }
        }
    }

    const usersOptions = users.map((user) => (
        <div key={user.id}>
            <input type='checkbox' id={user.id} name='users' value={user.id} onChange={onUsersChanged} defaultChecked={filtUserIds.some((r) => user.id == r) ? true : false} />
            <label htmlFor={user.id}>{user.username}</label>
        </div>
    ))

    return (
        <div>
            <h1>Add new team</h1>
            <form>
                <label htmlFor='teamTitle'>Team Title:</label>
                <input type='text' id='teamTitle' name='teamTitle' placeholder='Enter a title.' value={title} onChange={onTitleChanged} />
                <label htmlFor='teamUsers'>Users:</label>
                <>{usersOptions}</>
                <label htmlFor='teamDescription'>Description:</label>
                <textarea id='teamDescription' name='teamDescription' value={description} onChange={onDescriptionChanged} />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <button type='button' onClick={onSaveTeamClicked} disabled={!canSave}>
                        Save Team
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditTeam
