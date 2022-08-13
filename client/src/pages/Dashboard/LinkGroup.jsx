import { NavLink } from 'react-router-dom'

const LinkGroup = ({ title, routes }) => {
    return (
        <div className='mt-4 mb-8'>
            <h2 className='mb-2 text-lg'>{title}</h2>

            <div className='flex flex-wrap gap-4'>
                {routes.map((item, i) => (
                    <NavLink
                        key={i}
                        to={item.path}
                        className='cursor-pointer rounded-lg bg-primary-main px-5 py-2.5 text-center text-xl text-light-main shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-main'>
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default LinkGroup
