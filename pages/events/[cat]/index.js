import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventsCatPage = ({data,id}) => {
  return (
    <div className="cat_events">
      <h1>{`Events in ${id.toUpperCase()}`}</h1>
      <div className="content">
        {data.map(e=>{
          return(
            <Link className="card" key={e.id} href={`/events/${e.city}/${e.id}`}>
              <Image width={300} height={300} src={e.image} alt={e.id}/>
              <h2>{e.title}</h2>
              <p>{e.description}</p>
            </Link>
          )
        })}
      </div>      
    </div>
  )
}

export default EventsCatPage

export async function getStaticPaths(){

  const {events_categories} = await import("/data/data.json")

  const allPaths = events_categories.map(e=>{
    return(
      {params:{
        cat:e.id
      }}
    )
  })

  return{
    paths: allPaths,
    fallback: false
  }
}

export async function getStaticProps(context){
  console.log(context)
  const {allEvents} = await import("/data/data.json")
  const id = context?.params.cat;

  const data = allEvents.filter(e=> e.city === id)
  console.log(data)
  return{
    props:{data, id}
  }
}