import { useLoaderData, useParams} from "react-router-dom";

export default function CareersDeatails() {
     const { id } = useParams()
   const data= useLoaderData()

   return (
    <div className="career-details">

        <h2>Career Details for {data.title}</h2>
        <p>Starting salaries: {data.salary}</p>
        <p>Location: {data.location}</p>
        <div className="details">
         <p>A job that is just... Looking for what and what so and more henny</p>
        </div>
    </div>
   )
}


//loader fuction

export const careersDeatailsLoader = async ({params}) => {
   const {id} = params 
   const res = await fetch( 'http://localhost:4000/careers/' + id);

    if(!res.ok) {
      throw Error('No career has been found')
    }

   return res.json()
}