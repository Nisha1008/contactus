import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            alert("Submitted")
            await axios.post("http://localhost:8000/", {
                name, email, message
            })
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <form method='POST' action='/contact' className='max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md'>
            {/* <div className='max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md'> */}
            <h2 className='text-3xl text-center text-pink-600 font-bold mb-6'>Contact Us</h2>
            <div className='mb-4'>
                <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Your Name</label>
                <input placeholder='Name' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text" onChange={(e) => (setName(e.target.value))} name='name' />
            </div>
            <div className='mb-4'>
                <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Your Email</label>
                <input placeholder='Email' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="email" onChange={(e) => (setEmail(e.target.value))} name='email' />
            </div>
            <div className='mb-4'>
                <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Your Message</label>
                <textarea rows='4' placeholder='Type Your Message here' name='message' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text" onChange={(e) => (setMessage(e.target.value))} />
            </div>
            <div className='flex justify-center'>
                <button type='submit' className='bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white' onClick={submit}>Send Message</button>
            </div>
            {/* </div> */}
        </form>
    )
}

export default Contact
