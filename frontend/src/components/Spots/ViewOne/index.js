import React from 'react'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { seeReview } from '../../../store/reviews'
import { viewOneSpot } from '../../../store/spots'
import './ViewOne.css'


const ViewOne = () => {
    const { spotId } = useParams()
    const spots = useSelector(state => state.spots)
    const spot = Object.values(spots)
    const choice = spot.find(location => location?.id === +spotId)
    const reviews = useSelector(state => Object.values(state.review))
    console.log(choice);
    let sum = 0
    reviews.forEach(ele => {
        sum += ele.rating
    })

    let avg = sum / reviews.length

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewOneSpot(spotId))
    }, [dispatch])


    useEffect(() => {
        dispatch(seeReview(spotId))
    }, [dispatch])

    const tester = ["viewOne__image__1",
        "viewOne__image__2",
        "viewOne__image__3",
        "viewOne__image__4",
        "viewOne__image__5",]

    return (
        <div className='viewOne'>
            <div className='viewOne__page'>
                <h2 className='viewOne__title'>{choice?.title}</h2>
                <div className="viewOne__labels">
                    <i class="fa-solid fa-star"></i>
                    <h4 className='viewOne__avg'>{reviews.length > 1 ? avg : null} </h4>
                    <h4 className='viewOne__review'>{reviews.length} reviews</h4>
                    <h4 className='viewOne__address'>{choice?.address}</h4>
                </div>
                <div className="viewOne__imageContainer">
                    {/* <img src={choice?.Images[0].imageUrl} alt='' /> */}
                    <div className="viewOne__slidebar">
                        <div className="testing">
                            {/* {tester.map(test => (
                                <div id={test}>
                                    <img className='test__image' src={`https://res.klook.com/image/upload/c_fill,w_1160,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/tfo7smrskl1zkmmx6afp.webp`} alt='' />
                                    <div className='tes'></div>
                                </div>
                            ))} */}
                            {choice?.Images.map(image => (
                                <div className="viewOne__image" id={`viewOne__image__${image.id}`}>
                                    <img className='viewOne__slidebar__image' src={image.imageUrl} alt='' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewOne
