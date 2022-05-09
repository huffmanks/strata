import CardFooter from './CardFooter'
import { CardAccentTeam, CardAccentUser } from './CardAccent'

import { MdAccountCircle } from 'react-icons/md'

const Card = ({ cardId, cardTitle, cardDetails, cardImage, cardType, cardAccent, pathEdit, clickHandler }) => {
    return (
        <div className='bg-dark-alt relative rounded-lg border border-neutral-800 p-10 shadow-xl'>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    {cardImage ? (
                        <img className='mb-3 h-24 w-24 rounded-full object-cover shadow-lg' src={cardImage} alt={cardTitle} />
                    ) : (
                        <MdAccountCircle className='mb-3 h-24 w-24 rounded-full stroke-current' viewBox='1 2 22 22' />
                    )}
                    <div className='bg-primary-main absolute -top-3 -right-4 h-10 w-10 rounded-full'>
                        <div className='grid h-full w-full place-content-center'>
                            {cardType === 'user' && <CardAccentUser cardAccent={cardAccent} />}
                            {cardType === 'team' && <CardAccentTeam cardAccent={cardAccent} />}
                        </div>
                    </div>
                </div>

                <div className='text-primary-alt mb-1 text-xl font-medium'>{cardTitle}</div>
                <div className='text-sm'>{cardDetails}</div>
                <CardFooter cardId={cardId} pathEdit={pathEdit} clickHandler={clickHandler} />
            </div>
        </div>
    )
}
export default Card
