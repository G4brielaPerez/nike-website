const Button = ({ label, iconURL, backgroundColor="bg-coral-red", borderColor="", textColor="text-white" }) => {
  return (
    <button 
        className={`btn ${borderColor} ${backgroundColor} ${textColor} ${backgroundColor === "bg-white" ? "hover:bg-gray-50" : "hover:bg-opacity-85"}`}
    >
        {label}
        
        {iconURL && (
          <img 
            src={iconURL} 
            alt="icon" 
            className="ml-2 rounded-full size-5" 
          />
        )}
    </button>
  )
}

export default Button