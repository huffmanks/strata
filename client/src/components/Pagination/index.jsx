import Button from '../Button'

const Pagination = ({ prevVariant, nextVariant, currentPage, totalPages, prevDisabled, nextDisabled, prevClickHandler, nextClickHandler }) => {
    return (
        <div className='flex w-full items-center justify-end gap-2'>
            <Button buttonId='prev' buttonType='button' size='small' variant={prevVariant} isDisabled={prevDisabled} buttonText='Prev' clickHandler={prevClickHandler} />
            <div>
                {currentPage} of {totalPages}
            </div>
            <Button buttonId='next' buttonType='button' size='small' variant={nextVariant} isDisabled={nextDisabled} buttonText='Next' clickHandler={nextClickHandler} />
        </div>
    )
}

export default Pagination
