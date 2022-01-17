import { Link } from 'react-router-dom'

import Button from '../Button'

const FormFooter = ({ subtitle, subtitlePath, buttonPath, buttonText }) => {
    return (
        <div className='mt-2'>
            <div className='mb-6 text-right hover:text-primary-alt'>
                <Link to={subtitlePath}>{subtitle}</Link>
            </div>
            <div>
                <Button buttonPath={buttonPath} buttonType='submit' buttonText={buttonText} />
            </div>
        </div>
    )
}

export default FormFooter
