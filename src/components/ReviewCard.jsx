import Rating from "./Rating"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col space-y-6">
        <img 
            src={imgURL} 
            alt="customer" 
            className="rounded-full object-cover size-[120px]" 
        />

        <p className="info-text text-center max-w-lg">{feedback}</p>

        <Rating note={rating} />

        <p className="font-palanquin text-2xl font-bold">{customerName}</p>
    </div>
  )
}

export default ReviewCard