import { services } from "../../constants"
import ServiceCard from "../ServiceCard"

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  )
}

export default Services