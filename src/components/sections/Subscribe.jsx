import Button from "../Button"

const Subscribe = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col gap-10">
      <p className="title-text lg:max-w-md max-lg:text-center">
        Sing Up For
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </p>

      <div className="lg:max-w-[50%] w-full flex items-center max-md:flex-col gap-5 p-2.5 md:border-2 md:border-slate-gray rounded-full">
        <input 
          type="text" 
          placeholder="Enter your email" 
          className="input"
        />
        <div className="flex justify-center md:justify-end items-center max-md:w-full">
          <Button label="Sing Up" />
        </div>
      </div>
    </div>
  )
}

export default Subscribe