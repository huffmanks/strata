import Button from '../Button'

const Pagination = ({ prevVariant, nextVariant, currentPage, totalPages, prevDisabled, nextDisabled, prevClickHandler, nextClickHandler, pageClickHandler }) => {
    return (
        <div className='flex w-full items-center justify-end gap-2'>
            <Button buttonType='button' size='small' variant={prevVariant} isDisabled={prevDisabled} buttonText='Prev' clickHandler={prevClickHandler} />
            {/* <div>
                {currentPage} of {totalPages}
            </div> */}
            {Array(totalPages)
                .fill(1)
                .map((step, index) => (
                    <Button
                        key={index}
                        buttonId={step + index}
                        buttonType='button'
                        size='small'
                        variant={currentPage === step + index ? 'active' : 'secondary'}
                        isDisabled={currentPage === step + index}
                        buttonText={step + index}
                        clickHandler={pageClickHandler}
                    />
                ))}
            <Button buttonType='button' size='small' variant={nextVariant} isDisabled={nextDisabled} buttonText='Next' clickHandler={nextClickHandler} />
        </div>
    )
}

export default Pagination
