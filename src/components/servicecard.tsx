

interface ServiceProps{
    text: string;
}

const ServiceCard = ({ text}: ServiceProps) => {
  return (
    <div className="flex justify-center items-center rounded-2xl bg-white py-1 px-3 service-card shadow mx-3">
        <p>{text}</p>
    </div>
  )
}

export default ServiceCard