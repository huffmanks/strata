const Card = ({ children }) => {
    return (
        <div className='bg-dark-alt relative rounded-lg border border-neutral-800 p-10 shadow-xl'>
            <div className='flex flex-col items-center'>{children}</div>
        </div>
    )
}
export default Card
