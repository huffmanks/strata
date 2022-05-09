import { Link } from 'react-router-dom'

import Button from '../Button'

const CardFooter = ({ pathEdit, cardId, clickHandler }) => {
    return (
        <div className='mt-4 flex gap-x-3 lg:mt-6'>
            <Link to={pathEdit}>
                <Button buttonType='button' size='small' variant='primary' buttonText='Edit' buttonIcon={true} iconName='edit' />
            </Link>

            <Button buttonId={cardId} buttonType='button' size='small' variant='secondary' buttonText='Delete' buttonIcon={true} iconName='delete' clickHandler={clickHandler} />
        </div>
    )
}

export default CardFooter
