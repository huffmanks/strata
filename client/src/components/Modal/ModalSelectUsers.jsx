import { useGlobalState } from '../../hooks/useContext'

import FormCheckboxGroup from '../Form/Checkbox/FormCheckboxGroup'
import FormCheckbox from '../Form/Checkbox/FormCheckbox'
import ModalFooter from './ModalFooter'

const ModalSelectUsers = ({ data, changeHandler, confirmHandler }) => {
    const { modal } = useGlobalState()

    return (
        <>
            <FormCheckboxGroup label='Select users' changeHandler={changeHandler}>
                {modal.users.map((user) => (
                    <FormCheckbox key={user._id} id={user._id} name='users' inputValue={user._id} checked={data.includes(user._id)} label={user.email} />
                ))}
            </FormCheckboxGroup>
            <ModalFooter hasConfirm={true} confirmText='Update' cancelText='Cancel' confirmHandler={confirmHandler} />
        </>
    )
}

export default ModalSelectUsers
