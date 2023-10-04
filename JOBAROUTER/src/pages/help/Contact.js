import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {

    const data = useActionData()

    return (
        <div className="contact">
            <h3>Contact</h3>
            <Form method="post"action="/help/contact" >
                <label>
                    <span>Your Email</span>
                    <input type="email" name="email" required/>
                </label>
                <label>
                    <span>Your message: </span>
                    <textarea name="message"  required></textarea>
                </label>
                <button>Submit</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
}


export const contactA = async ({ request }) => {
    

        const data = await request.formData()


        const objSubmission = {
            email : data.get('email'),
            message: data.get('message'),

        } 

        console.log(objSubmission)
        //send a Post request
        if (objSubmission.message.length < 10) {
            return {error: 'Message is not long enough'}
        }

        //redirect the user
        return redirect('/')
}