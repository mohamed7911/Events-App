import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Homepage = ({data}) => {
  return (
    <div className='home_body'>
        {data.map((e=>(<Link className="card" key={e.id} href={`/events/${e.id}`}><Image style={{objectFit:"cover"}} width={400} height={300} alt={e.title} src={e.image}/>
        <div className="content">
        <h2>{e.title}</h2>
        <p>{e.description}</p>
        </div>
        </Link>)))}
    </div>
  )
}

export default Homepage