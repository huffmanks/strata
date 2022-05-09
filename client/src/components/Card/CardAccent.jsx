import { GiBullHorns, GiSharkFin, GiTigerHead } from 'react-icons/gi'
import { MdOutlineDesignServices, MdOutlinePeopleAlt, MdOutlinePhotoCamera, MdOutlineStore, MdOutlineVideocam, MdOutlineWeb } from 'react-icons/md'

export const CardAccentUser = ({ cardAccent }) => {
    return (
        <>
            {cardAccent === 'bull' ? (
                <GiBullHorns className='h-5 w-5 stroke-current' />
            ) : cardAccent === 'mako' ? (
                <GiSharkFin className='h-5 w-5 stroke-current' />
            ) : (
                <GiTigerHead className='h-5 w-5 stroke-current' />
            )}
        </>
    )
}

export const CardAccentTeam = ({ cardAccent }) => {
    return (
        <>
            {cardAccent === 'design' ? (
                <MdOutlineDesignServices className='h-5 w-5 stroke-current' />
            ) : cardAccent === 'photo' ? (
                <MdOutlinePhotoCamera className='h-5 w-5 stroke-current' />
            ) : cardAccent === 'social' ? (
                <MdOutlinePeopleAlt className='h-5 w-5 stroke-current' />
            ) : cardAccent === 'video' ? (
                <MdOutlineVideocam className='h-5 w-5 stroke-current' />
            ) : cardAccent === 'web' ? (
                <MdOutlineWeb className='h-5 w-5 stroke-current' />
            ) : (
                <MdOutlineStore className='h-5 w-5 stroke-current' />
            )}
        </>
    )
}
