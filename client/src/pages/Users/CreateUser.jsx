import { useState } from 'react'

import Form from '../../components/Form'
import FormHeader from '../../components/Form/Layout/FormHeader'
import FormBody from '../../components/Form/Layout/FormBody'
import FormFooter from '../../components/Form/Layout/FormFooter'
import FormInput from '../../components/Form/FormInput'
import FormFile from '../../components/Form/FormFile'
import FormRadioGroup from '../../components/Form/FormRadioGroup'
import FormRadio from '../../components/Form/FormRadio'
import Select from '../../components/Form/Select'
import FormSelectBox from '../../components/Form/Select/FormSelectBox'
import FormSelectValue from '../../components/Form/Select/FormSelectValue'
import FormOptionList from '../../components/Form/Select/FormOptionList'
import FormOptionItem from '../../components/Form/Select/FormOptionItem'

import ErrorToast from '../../components/Errors/ErrorToast'

const CreateUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [role, setRole] = useState('user')
    // const [team, setTeam] = useState('')
    const [error, setError] = useState('')

    const teams = [
        {
            _id: 1,
            title: 'My Team',
        },
        {
            _id: 2,
            title: 'My Team 2',
        },
    ]

    const handleImage = (e) => {
        setProfileImage(URL.createObjectURL(e.target.files[0]))
    }

    const createUserHandler = (e) => {
        e.preventDefault()

        if (!email || !password || !confirmPassword) {
            setError('You must enter an email and a password')
        }
        if (password !== !confirmPassword) {
            setError('Passwords do not match.')
        }
    }

    console.log(role)

    return (
        <>
            <Form isLarge='true' submitHandler={createUserHandler}>
                <FormHeader title='Create User' />

                <FormBody>
                    <FormInput type='text' name='firstName' label='First Name' changeHandler={(e) => setFirstName(e.target.value)} inputValue={firstName} />

                    <FormInput type='text' name='lastName' label='Last Name' changeHandler={(e) => setLastName(e.target.value)} inputValue={lastName} />

                    <FormInput type='email' name='email' label='Email' changeHandler={(e) => setEmail(e.target.value)} inputValue={email} />

                    <FormInput type='password' name='password' label='Password' changeHandler={(e) => setPassword(e.target.value)} inputValue={password} />

                    <FormInput type='password' name='confirmPassword' label='Confirm Password' changeHandler={(e) => setConfirmPassword(e.target.value)} inputValue={confirmPassword} />

                    <FormFile type='file' name='profileImage' label='Upload Profile Image' changeHandler={handleImage} previewImg={profileImage} />

                    <FormRadioGroup label='Role' value={role} changeHandler={(e) => setRole(e.target.value)}>
                        <FormRadio id='user' name='role' label='User' radioValue='user' isDefault={true} />
                        <FormRadio id='admin' name='role' label='Admin' radioValue='admin' />
                    </FormRadioGroup>

                    <Select title='Team'>
                        <FormSelectBox inputName='team'>
                            {teams.map((team) => (
                                <FormSelectValue key={team.title} id={team._id} name='team' selectValue={team.title} isDefault={false} isDisabled={false} />
                            ))}
                        </FormSelectBox>

                        <FormOptionList>
                            {teams.map((team) => (
                                <FormOptionItem key={team._id} labelFor={team._id} label={team.title} />
                            ))}
                        </FormOptionList>
                    </Select>
                    {/* <div className='block mb-2 text-light-main text-base'>Team</div>
                    <div className='select-box relative block w-full h-12 mx-auto  text-light-main'>
                        <div className='select-box__current group peer relative shadow-md outline-none cursor-pointer' tabIndex='1'>
                            <div className='select-box__value flex'>
                                <input className='select-box__input peer hidden' type='radio' id='0' value='1' name='Ben' defaultChecked disabled />
                                <p className='select-box__input-text hidden w-full p-4 bg-neutral-600 peer-checked:block'>Select a team:</p>
                            </div>
                            <div className='select-box__value flex'>
                                <input className='select-box__input peer hidden' type='radio' id='1' value='2' name='Ben' />
                                <p className='select-box__input-text hidden w-full p-4 bg-neutral-600 peer-checked:block'>Team 1</p>
                            </div>
                            <div className='select-box__value flex'>
                                <input className='select-box__input peer hidden' type='radio' id='2' value='3' name='Ben' />
                                <p className='select-box__input-text hidden w-full p-4 bg-neutral-600 peer-checked:block'>Team 2</p>
                            </div>

                            <img className='select-box__icon group-focus:-translate-y-1/2 group-focus:rotate-180 absolute top-1/2 right-4 w-5 opacity-30 -translate-y-1/2 transition-all' src='https://cdn.onlinewebfonts.com/svg/img_295694.svg' alt='Arrow Icon' aria-hidden='true' />
                        </div>
                        <ul className='select-box__list peer-focus:opacity-100 peer-focus:[animation-name:none] absolute w-full bg-primary-main list-none shadow-md opacity-0 duration-300 delay-200 animate-hideSelect'>
                            <li>
                                <label className='select-box__option block p-4 bg-gray-700 cursor-pointer hover:bg-primary-alt focus:bg-primary-alt' htmlFor='1' aria-hidden='aria-hidden'>
                                    Team 1
                                </label>
                            </li>
                            <li>
                                <label className='select-box__option block p-4 bg-gray-700 cursor-pointer hover:bg-primary-alt focus:bg-primary-alt' htmlFor='2' aria-hidden='aria-hidden'>
                                    Team 2
                                </label>
                            </li>
                        </ul>
                    </div> */}
                </FormBody>

                <FormFooter buttonText='Create' />
            </Form>
            {error && <ErrorToast message={error} closeHandler={() => setError('')} />}
        </>
    )
}

export default CreateUser
