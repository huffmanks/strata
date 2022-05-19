import { NavLink } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs()

    return (
        <div className='flex gap-2 pl-48'>
            {breadcrumbs.map(({ match, breadcrumb }, index, array) => (
                <div key={match.pathname} className={breadcrumb.props.children === 'Edit' && 'hidden'}>
                    {index !== array.length - 1 ? (
                        <div key={match.pathname}>
                            <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                            <span className='pl-2'>/</span>
                        </div>
                    ) : (
                        <span key={match.pathname} className='text-primary-alt'>
                            {breadcrumb}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Breadcrumbs
