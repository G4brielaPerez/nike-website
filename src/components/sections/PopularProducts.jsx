import { products } from "../../constants"
import PopularProductCard from "../PopularProductCard"

const PopularProducts = () => {
  return (
    <div>
      <div className="flex flex-col justify-start gap-5">
        <p className="title-text">
          Popular 
          <span className="text-coral-red"> Products</span>
        </p>
        <p className="info-text mt-2 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after selections. Discover a world  of comfort, desing and value
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {products.map((product, index) => (
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default PopularProducts