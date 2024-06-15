import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"

function Nav() {
  return (
    <div className="max-sm:px-16 px-8 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <div>
          <img 
            src={headerLogo} 
            alt="logo" 
            width={130} 
            height={30} 
          />
        </div>

        <div className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <div key={index} className="border-b-2 border-transparent hover:border-coral-red">
              <a 
                href={item.href} 
                className="font-montserrat text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        <div>
          <img 
            src={hamburger} 
            alt="hamburger" 
            width={25} 
            height={25} 
            className="hidden max-lg:block cursor-pointer" 
          />
        </div>
      </nav>
    </div>
  )
}

export default Nav