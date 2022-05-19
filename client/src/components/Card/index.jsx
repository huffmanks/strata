import { CardAccentTeam, CardAccentUser } from './CardAccent'
import CardDetails from './CardDetails'
import CardFooter from './CardFooter'

import { MdAccountCircle } from 'react-icons/md'

const Card = ({ singleCard, cardId, cardTitle, cardImage, cardType, cardAccent, cardDetails, pathEdit, clickHandler, ...props }) => {
    return (
        <div className={`relative rounded-lg border border-neutral-800 bg-dark-alt p-10 shadow-xl ${singleCard && 'max-w-sm'}`}>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    {cardImage ? (
                        <img className='mb-3 h-24 w-24 rounded-full object-cover shadow-lg' src={cardImage} alt={cardTitle} />
                    ) : (
                        <MdAccountCircle className='mb-3 h-24 w-24 rounded-full stroke-current' viewBox='1 2 22 22' />
                    )}
                    <div className='absolute -top-3 -right-4 h-10 w-10 rounded-full bg-primary-main'>
                        <div className='grid h-full w-full place-content-center'>
                            {cardType === 'user' && <CardAccentUser cardAccent={cardAccent} />}
                            {cardType === 'team' && <CardAccentTeam cardAccent={cardAccent} />}
                        </div>
                    </div>
                </div>

                <div className='mb-1 text-xl font-medium text-primary-alt'>{cardTitle}</div>
                <div className='text-sm'>{singleCard ? <CardDetails props={props} /> : cardDetails}</div>
                <CardFooter cardId={cardId} pathEdit={pathEdit} clickHandler={clickHandler} />
            </div>
        </div>
    )
}
export default Card
