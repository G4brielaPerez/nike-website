const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="w-full rounded-[20px] shadow-3xl px-10 py-14 space-y-3">
        <div className="size-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt="icon" width={24} height={24} />
        </div>

        <p className="font-palanquin text-3xl font-bold">{label}</p>
        <p className="break-words info-text">{subtext}</p>
    </div>
  )
}

export default ServiceCard