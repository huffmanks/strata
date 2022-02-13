import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useLazyGetSingleUserQuery, useUpdateUserMutation } from '../../features/user/userApi'
import { setUserInfo } from '../../features/user/userSlice'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Layout/FormHeader'
import FormBody from '../../components/Form/Layout/FormBody'
import FormFooter from '../../components/Form/Layout/FormFooter'
import FormInput from '../../components/Form/FormInput'
import FormFile from '../../components/Form/FormFile'
import FormRadioGroup from '../../components/Form/FormRadioGroup'
import FormRadio from '../../components/Form/FormRadio'
// import Select from '../../components/Form/Select'
// import FormSelectBox from '../../components/Form/Select/FormSelectBox'
// import FormSelectValue from '../../components/Form/Select/FormSelectValue'
// import FormOptionList from '../../components/Form/Select/FormOptionList'
// import FormOptionItem from '../../components/Form/Select/FormOptionItem'

import ErrorToast from '../../components/Errors/ErrorToast'

const SingleUser = () => {
    const dispatch = useDispatch()
    const { userId } = useParams()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [profileImage, setProfileImage] = useState()
    const [previewImage, setPreviewImage] = useState()
    const [role, setRole] = useState('')
    const [team, setTeam] = useState('')

    const [isLoading, setIsLoading] = useState()
    const [toast, setToast] = useState('')

    const [getUser] = useLazyGetSingleUserQuery()
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation()

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)

            const userInfo = await getUser(userId).unwrap()
            console.log('userInfo', userInfo)

            setFirstName(userInfo.firstName)
            setLastName(userInfo.lastName)
            setEmail(userInfo.email)
            setProfileImage(userInfo?.profileImage)
            setPreviewImage(`http://localhost:5000/uploads/images/${userInfo?.profileImage?.fileName}`)
            setRole(userInfo.role)
            setTeam(userInfo?.team?.title)

            setIsLoading(false)
        }
        getData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = {
                firstName,
                lastName,
                email,
                profileImage,
                role,
                team,
            }

            //     fullName: fullNameInputElement.current?.value,
            // email: emailInputElement.current?.value,
            // password: passwordInputElement.current?.value,
            // console.log(formEl.current)
            // formEl.current.map((input) => {
            //     console.log(input)
            // })
            // console.log(formEl)

            // const update = new FormData(formEl.current)
            // console.log(update)
            // update.append('firstName', firstName)
            // update.append('lastName', lastName)
            // update.append('email', email)
            // update.append('profileImage', profileImage)
            // update.append('role', role)
            // update.append('team', team)

            // console.log('user', JSON.stringify(user))
            // console.log('update', update)
            dispatch(setUserInfo(user))

            const res = await updateUser({ userId, user }).unwrap()
            console.log(res)
        } catch (error) {
            setToast(error)
        }
        // const res = await updateUser({ userId, update }).unwrap()

        // console.log('update', update)
        // console.log('res', JSON.stringify(res, null, 2))
        // console.log('update', update.firstName)
        // console.log('res', res.firstName)
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <>
            <Form isLarge='true' submitHandler={handleSubmit} isLoading={isUpdating}>
                <FormHeader title={`Update ${firstName}`} />
                <FormBody>
                    <FormInput type='text' name='firstName' label='First Name' changeHandler={(e) => setFirstName(e.target.value)} inputValue={firstName} />

                    <FormInput type='text' name='lastName' label='Last Name' changeHandler={(e) => setLastName(e.target.value)} inputValue={lastName} />

                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} inputValue={email} />

                    <FormFile
                        type='file'
                        name='profileImage'
                        label='Upload Profile Image'
                        changeHandler={(e) => {
                            console.log(e.target.files[0])
                            setProfileImage({
                                fileName: e.target.files[0].name,
                                filePath: `uploads/images/${e.target.files[0].name}`,
                                fileType: e.target.files[0].type,
                                fileSize: e.target.files[0].size,
                            })
                            // setProfileImage(e.target.files[0])
                            setPreviewImage(URL.createObjectURL(e.target.files[0]))
                        }}
                        previewImg={previewImage}
                    />

                    <div className='mb-5'>
                        <div className='mb-1 text-base'>Team</div>
                        <div className='text-sm'>{team ? team : 'Currently not on a team.'}</div>
                    </div>

                    {/* <Select title='Team'>
                                <FormSelectBox defaultName='team' defaultValue='Choose a team:'>
                                    {teams.map((team) => (
                                        <FormSelectValue key={team.title} valueId={team._id} groupName='team' selectValue={team.title} changeHandler={(e) => setTeam(e.target.value)} />
                                    ))}
                                </FormSelectBox>

                                <FormOptionList>
                                    {teams.map((team) => (
                                        <FormOptionItem key={team._id} labelFor={team._id} label={team.title} />
                                    ))}
                                </FormOptionList>
                            </Select> */}

                    <FormRadioGroup label='Role' value={role} changeHandler={(e) => setRole(e.target.value)}>
                        <FormRadio id='tiger' name='role' label='Tiger' radioValue='tiger' isDefault={role === 'tiger'} />
                        <FormRadio id='mako' name='role' label='Mako' radioValue='mako' isDefault={role === 'mako'} />
                        <FormRadio id='bull' name='role' label='Bull' radioValue='bull' isDefault={role === 'bull'} />
                    </FormRadioGroup>
                </FormBody>

                <FormFooter buttonText='Update' />
            </Form>

            {toast && <ErrorToast message={toast} closeHandler={() => setToast('')} />}
        </>
    )
}

export default SingleUser
