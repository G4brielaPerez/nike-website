import { reviews } from "../../constants"
import ReviewCard from "../ReviewCard"

const CustomerReviews = () => {
    return (
        <div className="max-container">
            <div className="text-center space-y-4 flex flex-col justify-center items-center">
                <p className="title-text">
                    What our
                    <span className="text-coral-red"> Customers </span>
                    Say?
                </p>
                <p className="info-text max-w-lg">
                    Hear genuine stories from our satisfied customers about their
                    exceptional experiences with us
                </p>
            </div>

            <div className="mt-16 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </div>
    )
}

export default CustomerReviews