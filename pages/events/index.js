import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const EventsPage = ({data}) => {
  return (
    <div className='events_page'>
      {data.map(e=><Link className="card" key={e.id} href={`/events/${e.id}`}><Image width={300} height={300} alt={e.title} src={e.image}/><h2 className='events-text'>{e.title}</h2></Link>)}
    </div>
  )
}

export default EventsPage

export async function getStaticProps(){
  const {events_categories} = await import("/data/data.json")
  return{
    props:{
      data: events_categories
    }
  }
}

