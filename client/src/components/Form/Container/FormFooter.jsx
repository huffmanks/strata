import { Link } from 'react-router-dom'

import Button from '../../Button'

const FormFooter = ({ subtitle, subtitlePath, buttonPath, buttonText }) => {
    return (
        <div className='mt-10'>
            {subtitle && (
                <div className='hover:text-primary-alt mb-6 text-right'>
                    <Link to={subtitlePath}>{subtitle}</Link>
                </div>
            )}
            <div>
                <Button variant='primary' buttonPath={buttonPath} buttonType='submit' buttonText={buttonText} />
            </div>
        </div>
    )
}

export default FormFooter
