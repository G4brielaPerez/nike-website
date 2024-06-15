import { star } from "../assets/icons"

const Rating = ({ note = 4.5 }) => {
  return (
    <div className="flex gap-2.5">
        <img 
            src={star} 
            alt="star" 
            width={20} 
            height={20} 
        />

        <p className="font-montserrat text-slate-gray">({note})</p>
    </div>
  )
}

export default Rating