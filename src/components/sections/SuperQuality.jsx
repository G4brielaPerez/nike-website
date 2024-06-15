import Button from "../Button"
import { shoe8 } from "../../assets/images"

const SuperQuality = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col gap-10">
      <div className="flex-1 flex flex-col space-y-6">
        <p className="title-text lg:max-w-lg">
          We Provide You
          <span className="text-coral-red">{' '}Super<br />Quality</span> Shoes
        </p>

        <div className="info-text space-y-6 lg:max-w-lg">
          <p>
            Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance
          </p>
          <p>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </div>
        
        <div>
          <Button label="View Details" />
        </div> 
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8} 
          alt="shoe"
          width={500} 
        />
      </div>
    </div>
  )
}

export default SuperQuality
