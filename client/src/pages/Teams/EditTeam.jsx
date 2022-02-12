// import { useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { selectTeamById } from '../../api/teamsSlice'
// import { selectAllUsers } from '../../api/usersSlice'

// import { useEditTeamMutation, useDeleteTeamMutation } from '../../api/teamApiSlice'

const EditTeam = () => {
    // const { teamId } = useParams()
    // const navigate = useNavigate()
    // const [updateTeam, { isLoading }] = useEditTeamMutation()
    // const [deleteTeam] = useDeleteTeamMutation()

    // const team = useSelector((state) => selectTeamById(state, teamId))
    // const users = useSelector(selectAllUsers)

    // Checkbox current users
    // const currentUsers = team.attributes.users.data
    // const prevChecked = currentUsers.map((cu) => {
    //     return cu.id
    // })
    // const allUsers = users.map((cu) => {
    //     return cu.id
    // })
    // const filtUserIds = prevChecked.filter((e) => allUsers.includes(e)).map(String)

    // State
    // const [title, setTitle] = useState(team.attributes.title)
    // const [description, setDescription] = useState(team.attributes.description)
    // const [userId, setUserId] = useState(filtUserIds)

    // Handlers
    // const onTitleChanged = (e) => setTitle(e.target.value)
    // const onDescriptionChanged = (e) => setDescription(e.target.value)

    // const onUsersChanged = (e) => {
    //     let users = [...userId]
    //     if (e.target.checked) {
    //         users = [...userId, e.target.value]
    //     } else {
    //         users.splice(userId.indexOf(e.target.value), 1)
    //     }
    //     setUserId(users)
    // }

    // const canSave = [title, description].every(Boolean) && !isLoading

    // const onSaveTeamClicked = async () => {
    //     if (canSave) {
    //         try {
    //             setUserId(filtUserIds)
    //             setTitle(team.attributes.title)
    //             setDescription(team.attributes.description)

    //             await updateTeam({ teamId, title, description, users: userId }).unwrap()

    //             navigate(`/teams/${teamId}`)
    //         } catch (err) {
    //             console.error('Failed to save team: ', err)
    //         }
    //     }
    // }

    // const onDeleteTeamClicked = async () => {
    //     try {
    //         await deleteTeam(teamId)
    //         navigate('/teams')
    //     } catch (err) {
    //         console.error('Failed to delete team: ', err)
    //     }
    // }

    // const usersOptions = users.map((user) => (
    //     <div key={user.id}>
    //         <input type='checkbox' id={user.id} name='users' value={user.id} onChange={onUsersChanged} defaultChecked={filtUserIds.some((r) => user.id == r) ? true : false} />
    //         <label className='ml-2' htmlFor={user.id}>
    //             {user.username}
    //         </label>
    //     </div>
    // ))

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='mb-10 text-center text-2xl font-bold'>Edit Team</h1>
            <form className='w-full max-w-lg'>
                <div className='mb-5'>
                    <label className='mb-2 block text-lg font-bold' htmlFor='teamTitle'>
                        Team Title:
                    </label>
                    {/* <input className='w-full p-2 text-neutral-900 text-lg border-none outline-none rounded' type='text' id='teamTitle' name='teamTitle' placeholder='Enter a title.' value={title} onChange={onTitleChanged} /> */}
                </div>
                <div className='mb-5'>
                    <label className='mb-2 block text-lg font-bold'>Users:</label>
                    {/* <>{usersOptions}</> */}
                </div>
                <div className='mb-5'>
                    <label className='mb-2 block text-lg font-bold' htmlFor='teamDescription'>
                        Description:
                    </label>
                    {/* <textarea className='w-full h-48 px-4 py-3 text-neutral-900 text-lg border-none outline-none rounded' id='teamDescription' name='teamDescription' value={description} onChange={onDescriptionChanged} /> */}
                </div>

                {/* <div className='w-full flex items-center justify-between'>
                    <button className='flex items-center justify-center px-5 py-2 bg-gray-800 text-xl font-bold text-center rounded-full shadow-sm cursor-pointer hover:bg-gray-700' type='button' onClick={onSaveTeamClicked} disabled={!canSave}>
                        Save Team
                    </button>
                    <button className='flex items-center justify-center px-5 py-2 bg-red-900 text-xl font-bold text-center rounded-full shadow-sm cursor-pointer hover:bg-red-800' type='button' onClick={onDeleteTeamClicked}>
                        Delete Team
                    </button>
                </div> */}
            </form>
        </div>
    )
}

export default EditTeam
