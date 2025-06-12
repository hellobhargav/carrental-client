import React from 'react'

const Services = () => {
    const data = [
        {
            name: "Local City Rides",
            description: "Reliable and comfortable transportation for your daily commutes and errands within the city."
        },
        {
            name: "Outstation Trips",
            description: "Seamless travel solutions for weekend getaways, family vacations, and long-distance journeys."
        },
        {
            name: "Airport Transfers",
            description: "Timely and efficient pickups and drop-offs to ensure you never miss a flight."
        },
        {
            name: "Corporate Travel",
            description: "Tailored travel services for business meetings, team outings, and client transportation."
        },
        {
            name: "Wedding & Event Transportation",
            description: "Luxury and group travel options to make your special occasions even more memorable."
        },
        {
            name: "Luxury Car Rentals",
            description: "Experience premium travel with our high-end vehicles for weddings, parties, and executive needs."
        },
        {
            name: "Group Travel Services",
            description: "Spacious vehicles like tempo travelers for comfortable group outings and tours."
        }
    ];
    return (
        <div className=' container p-5'>
            <h1>Services</h1>
            <div className='row'>
                {
                    data.map((service, index) => {
                        return (
                            <div key={index} className='col-md-4 mb-3'>
                                <div className='card p-3 h-100'>
                                    <h5>{service.name}</h5>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services