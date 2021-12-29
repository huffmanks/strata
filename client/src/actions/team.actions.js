// import { CREATE_TEAM, GET_TEAMS, UPDATE_TEAM, DELETE_TEAM } from '../constants/team.types'

// import TeamService from '../services/team.service'

// export const createTeam = (title, description, teamImage, users) => async (dispatch) => {
//     try {
//         const res = await TeamService.create({
//             title,
//             description,
//             teamImage,
//             users,
//         })

//         dispatch({
//             type: CREATE_TEAM,

//             payload: res.data,
//         })

//         return Promise.resolve(res.data)
//     } catch (err) {
//         return Promise.reject(err)
//     }
// }

// export const getTeams = () => async (dispatch) => {
//     try {
//         const res = await TeamService.getAll()

//         dispatch({
//             type: GET_TEAMS,

//             payload: res.data,
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }

// export const updateTeam = (id, data) => async (dispatch) => {
//     try {
//         const res = await TeamService.update(id, data)

//         dispatch({
//             type: UPDATE_TEAM,

//             payload: data,
//         })

//         return Promise.resolve(res.data)
//     } catch (err) {
//         return Promise.reject(err)
//     }
// }

// export const deleteTeam = (id) => async (dispatch) => {
//     try {
//         await TeamService.delete(id)

//         dispatch({
//             type: DELETE_TEAM,

//             payload: { id },
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }
