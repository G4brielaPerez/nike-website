import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <div className="max-container">
      <div className="flex justify-between gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col">
          <img
            src={footerLogo}
            alt="logo"
            width={150}
            height={46}
            className="m-0"
          />

          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center gap-4 mt-6">
            {socialMedia.map((item, index) => (
              <div key={index} className="bg-white rounded-full p-3 cursor-pointer hover:bg-gray-200">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  width={20} 
                  height={20} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((item, index) => (
            <div key={index} className="font-montserrat">
              <p className="text-white text-2xl font-medium mb-6">{item.title}</p>
              {item.links.map((link, index) => (
                <p key={index} className="mt-3 text-white-400 hover:text-slate-gray cursor-pointer">
                  {link.name}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center font-montserrat">
        <div className="flex flex-1 items-center gap-2">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer