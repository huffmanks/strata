import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../../data/usersSlice'
import { useCreateTeamMutation } from '../../api/apiSlice'

// import axios from 'axios'

const CreateTeam = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [userId, setUserId] = useState([])

    const [createTeam, { isLoading }] = useCreateTeamMutation()
    const users = useSelector(selectAllUsers)

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

    // const postTeam = async () => {
    //     const response = await axios.get('http://localhost:1337/api/teams?populate=*')
    //     const data = await response.data
    //     console.log(data.data[0].attributes.users.data[0])
    // }
    // console.log(postTeam())
    const canSave = [title, description, userId].every(Boolean) && !isLoading
    // console.log(createTeam({ title, description, relation: 1, link: { id: userId } }).unwrap())
    const onSaveTeamClicked = async () => {
        if (canSave) {
            try {
                await createTeam({ title, description, users: userId }).unwrap()
                setTitle('')
                setDescription('')
                setUserId([])
            } catch (err) {
                console.error('Failed to save team: ', err)
            }
        }
    }
    const usersOptions = users.map((user) => (
        <div key={user.id}>
            <input type='checkbox' id={user.id} name='users' value={user.id} onChange={onUsersChanged} />
            <label htmlFor={user.id}>{user.username}</label>
        </div>
    ))
    // const usersOptions = users.map((user) => (
    //     <option key={user.id} value={user.id}>
    //         {user.username}
    //     </option>
    // ))

    return (
        <div>
            <h1>Add new team</h1>
            <form>
                <label htmlFor='teamTitle'>Team Title:</label>
                <input type='text' id='teamTitle' name='teamTitle' placeholder='Enter a title.' value={title} onChange={onTitleChanged} />
                <label htmlFor='teamUsers'>Users:</label>
                {/* <select id='teamUsers' value={userId} onChange={onUsersChanged}>
                    <option value=''></option>
                    {usersOptions}
                </select> */}
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

export default CreateTeam
