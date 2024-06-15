import { useState } from "react"
import Button from "../Button"
import { arrowRight } from "../../assets/icons"
import { statistics } from "../../constants"
import { bigShoe1 } from "../../assets/images"
import { shoes } from "../../constants"
import ShoeCard from "../ShoeCard"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <div className="flex xl:flex-row flex-col justify-center gap-10">
      <div className="xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 pb-10 space-y-10 lg:space-y-16">
        <div>
          <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>

          <p className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrivals</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span>
            {' '}Shoes
          </p>

          <p className="info-text mt-6 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for you active life
          </p>
        </div>

        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full gap-16">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={bigShoeImg} 
          alt="shoe" 
          width={610} 
          height={500} 
          className="object-contain relative z-10" 
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((item, index) => (
            <ShoeCard 
              key={index}
              imgURL={item} 
              changeBigShoeImage={(item) => setBigShoeImg(item)}
              bigShoeImage={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero