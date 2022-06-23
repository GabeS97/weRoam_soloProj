import React, { useState } from 'react'
import { Modal } from '../../../context/Modal'
import { seeReview } from '../../../store/reviews'
import '../../Spots/ViewOne/ViewOne.css'
import EditReview from './EditReview'

const EditReviewDropDown = ({ dispatch, removeReview, review, spotId, stars }) => {
    const [showModal, setShowModal] = useState(false)

    const hideForm = () => {
        setShowModal(false)
    }



    return (
        <div className="viewOne__comment__dropdownContainer">
            <div className="viewOne__comment__dropdown__content">
                <div
                    className="viewOne__comment__edit"
                    onClick={() => setShowModal(true)}
                >
                    <i className="fa-solid fa-pen"></i>EDIT</div>
                <div className="viewOne__comment__delete" onClick={() => dispatch(removeReview(review?.id))}>
                    <i className="fa-solid fa-trash"></i>DELETE</div>

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditReview
                            spotId={spotId}
                            review={review}
                            hideForm={hideForm}
                            stars={stars}/>
                    </Modal>
                )}
            </div>
        </div>
    )
}

export default EditReviewDropDown
