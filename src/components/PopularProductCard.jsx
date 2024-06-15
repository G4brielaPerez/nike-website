import { star } from "../assets/icons"
import Rating from "./Rating"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center w-full">
      <img 
        src={imgURL} 
        alt={name} 
        className="size-[220px]"
      />

      <div className="mt-4 space-y-2">
        <Rating />

        <p className="text-2xl font-semibold font-palanquin">{name}</p>
        <p className="font-montserrat font-semibold text-coral-red text-xl">{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard