import React from 'react'

const Contact = () => {
  return (
    <div name="contact"
    className='w-full h-screen bg-gradient-to-b from-gray-900 to-black p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch  with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/cb1fe482-44e5-42a2-9c10-e80da5dcb2b6" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" placeholder='Enter Your Name' required 
                    className='p-2  bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                 <input type="email" name="name" placeholder='Enter Your Email' required
                    className='my-4 p-2  bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <textarea name='message' placeholder='Enter Your Message' rows="10" required  className='p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none '></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-black px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' >Let's talk</button>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
