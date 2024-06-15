import Button from "../Button"
import { offer } from "../../assets/images"
import { arrowRight } from "../../assets/icons"

const SpecialOffer = () => {
  return (
    <div className="flex justify-between items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={offer} 
          alt="offer" 
          className="object-contain w-5/6" 
        />
      </div>

      <div className="flex-1 space-y-6">
        <p className="title-text">
          <span className="text-coral-red">Special</span> Offer
        </p>

        <div className="info-text space-y-6">
          <p>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart
          </p>
          <p>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button 
            label="Learn More" 
            backgroundColor="bg-white" 
            borderColor="border-slate-gray" 
            textColor="text-slate-gray" 
          />
        </div> 
      </div>
    </div>
  )
}

export default SpecialOffer