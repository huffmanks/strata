import { useGetTeamsQuery, useDeleteTeamMutation } from '../../api/apiSlice'

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
            <h1>All Teams</h1>

            <table>
                <tbody>
                    <tr>
                        <th>title</th>
                        <th>description</th>
                    </tr>
                    {data.data.map((team) => (
                        <tr key={team.id} id={team.id}>
                            <td>{team.attributes.title}</td>
                            <td>{team.attributes.description}</td>
                            <td>
                                <Link to={`/teams/edit/${team.id}`}>Edit</Link>
                            </td>
                            <td>
                                <button onClick={onDeleteTeamClicked}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TeamsList
