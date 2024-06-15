import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe } from "./components/sections"

function App() {
  return (
    <div className="relative">
      <Nav />

      <div className="space-y-32 max-container max-[1500px]:px-12">
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
      </div>

      <div className="my-32 bg-pale-blue py-14">
        <CustomerReviews />
      </div>

      <div className="mb-32 max-container max-[1500px]:px-12">
        <Subscribe />
      </div>
      
      <div className="bg-black py-14 max-[1500px]:px-12">
        <Footer />
      </div>
    </div>
  )
}

export default App
