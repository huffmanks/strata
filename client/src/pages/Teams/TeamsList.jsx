import { useGetTeamsQuery, useDeleteTeamMutation } from '../../api/teamApiSlice'

import { Link } from 'react-router-dom'

const TeamsList = () => {
    const { data, isLoading, error } = useGetTeamsQuery()
    const [deleteTeam] = useDeleteTeamMutation()

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        deleteTeam()
        return <div>Oops, an error occured</div>
    }

    const onDeleteTeamClicked = async (e) => {
        const parent = e.target.parentNode.parentNode

        try {
            await deleteTeam(parent.id)
        } catch (err) {
            console.error('Failed to delete team: ', err)
        }
    }

    return (
        <div>
            <h1 className='mb-10 text-2xl font-bold text-center'>All Teams</h1>

            <table>
                <thead>
                    <tr className='text-left border-b-2 border-gray-500'>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((team) => (
                        <tr key={team.id} id={team.id} className='border-b border-gray-400'>
                            <td>{team.attributes.title}</td>
                            <td>{team.attributes.description}</td>
                            <td>
                                <Link to={`/teams/edit/${team.id}`}>
                                    <button className='flex items-center justify-center px-3 py-1 bg-gray-800 text-base text-center rounded-lg shadow-sm cursor-pointer hover:bg-gray-700'>Edit</button>
                                </Link>
                            </td>
                            <td className='m-10'>
                                <button className='flex items-center justify-center px-3 py-1 bg-red-900 text-base text-center rounded-lg shadow-sm cursor-pointer hover:bg-red-800' onClick={onDeleteTeamClicked}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='fixed bottom-6 right-6'>
                <Link to={`/teams/create`}>
                    <button className='inline-flex items-center justify-center px-5 py-2 bg-gray-800 text-2xl font-bold text-center rounded-full shadow-sm cursor-pointer hover:bg-gray-700'>Create</button>
                </Link>
            </div>
        </div>
    )
}

export default TeamsList
