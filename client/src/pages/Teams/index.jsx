import { Link } from 'react-router-dom'

const Teams = () => {
    return (
        <div>
            <h1 className='mb-10 text-center text-2xl font-bold'>All Teams</h1>

            <table>
                <thead>
                    <tr className='border-b-2 border-gray-500 text-left'>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {/* <tbody>
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
                </tbody> */}
            </table>
            <div className='fixed bottom-6 right-6'>
                <Link to={`/teams/create`}>
                    <button className='inline-flex cursor-pointer items-center justify-center rounded-full bg-gray-800 px-5 py-2 text-center text-2xl font-bold shadow-sm hover:bg-gray-700'>Create</button>
                </Link>
            </div>
        </div>
    )
}

export default Teams
