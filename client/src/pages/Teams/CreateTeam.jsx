import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { selectAllUsers } from '../../api/usersSlice'
// import { useCreateTeamMutation } from '../../api/teamApiSlice'

const CreateTeam = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [userId, setUserId] = useState([])

    // const [createTeam, { isLoading }] = useCreateTeamMutation()
    // const users = useSelector(selectAllUsers)

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onDescriptionChanged = (e) => setDescription(e.target.value)
    // const onUsersChanged = (e) => {
    //     let users = [...userId]

    //     if (e.target.checked) {
    //         users = [...userId, e.target.value]
    //     } else {
    //         users.splice(userId.indexOf(e.target.value), 1)
    //     }
    //     setUserId(users)
    // }

    // const canSave = [title, description, userId].every(Boolean) && !isLoading

    // const onCreateTeamClicked = async () => {
    //     if (canSave) {
    //         try {
    //             await createTeam({ title, description, users: userId }).unwrap()
    //             setTitle('')
    //             setDescription('')
    //             setUserId([])
    //         } catch (err) {
    //             console.error('Failed to save team: ', err)
    //         }
    //     }
    // }
    // const usersOptions = users.map((user) => (
    //     <div key={user.id}>
    //         <input type='checkbox' id={user.id} name='users' value={user.id} onChange={onUsersChanged} />
    //         <label className='ml-2' htmlFor={user.id}>
    //             {user.username}
    //         </label>
    //     </div>
    // ))

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='mb-10 text-center text-2xl font-bold'>Add new team</h1>
            <form className='w-full max-w-lg'>
                <div className='mb-5'>
                    <label className='mb-2 block text-lg font-bold' htmlFor='teamTitle'>
                        Team Title:
                    </label>
                    <input className='w-full rounded border-none p-2 text-lg text-neutral-900 outline-none' type='text' id='teamTitle' name='teamTitle' placeholder='Enter a title.' value={title} onChange={onTitleChanged} />
                </div>
                <div className='mb-5'>
                    <label className='mb-2 block text-lg font-bold'>Users:</label>

                    {/* <>{usersOptions}</> */}
                </div>
                <div className='mb-5'>
                    <label className='mb-2 block text-lg font-bold' htmlFor='teamDescription'>
                        Description:
                    </label>
                    <textarea className='h-48 w-full rounded border-none px-4 py-3 text-lg text-neutral-900 outline-none' id='teamDescription' name='teamDescription' value={description} onChange={onDescriptionChanged} />
                </div>
                {/* <div className='w-full flex items-center justify-center'>
                    <button className='w-full flex items-center justify-center p-3 bg-gray-800 text-xl font-bold text-center rounded shadow-sm cursor-pointer hover:bg-gray-700' type='button' onClick={onCreateTeamClicked} disabled={!canSave}>
                        Create Team
                    </button>
                </div> */}
            </form>
        </div>
    )
}

export default CreateTeam
