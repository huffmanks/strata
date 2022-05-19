const CardDetails = ({ props }) => {
    return (
        <>
            {Object.entries(props).map((prop, index) => {
                const key = prop[0]
                const value = prop[1]
                return (
                    <div key={index} className='mb-2 flex gap-2'>
                        <div className='underline first-letter:capitalize'>{key}:</div>
                        <div>{value}</div>
                    </div>
                )
            })}
        </>
    )
}

export default CardDetails
