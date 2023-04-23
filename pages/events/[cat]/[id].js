import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const EventPage = ({data}) => {
  const inputEmail = React.useRef()
  const router = useRouter()


  const onSubmit = async(e)=>{
    e.preventDefault();
    const emailValue = inputEmail.current.value
    const eventID = router?.query.id;

    try{
      const response = await fetch("/api/email-registration",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:emailValue, eventID})
      })


      if(!response.ok) throw new Error(`Error:${response.status}`)
      const data = await response.json()
      console.log(`Post`,data)
    }catch(e){
      console.log("Error",e)
    }

  };
  return (
    <div>
      <Image width={1000} height={500} src={data.image} alt={data.id}/>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="">get registered for this event</label>
        <input ref={inputEmail} type="email" placeholder="please insert your email here" id="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EventPage

export async function getStaticPaths(){

  const {allEvents} = await import("/data/data.json")
  const allPaths = allEvents.map(e=>{
    return{
      params:{
        cat:e.city,
        id:e.id
      }
    }
  })

  return{
  paths: allPaths ,
  fallback: false
  }

}


export async function getStaticProps(context){
const {allEvents} = await import ("/data/data.json")
const id = context?.params.id
const data = allEvents.find(e=>e.id === id)
console.log(data)
return{
  props: {data}
}
}