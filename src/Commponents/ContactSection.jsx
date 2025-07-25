import React from 'react'

export default function ContactSection() {
    return (
        <section className="p-10 bg-gray-50 border flex flex-col items-center justify-between">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

            <div className='flex justify-between items-center'>
                <h1>Contact Info </h1>
                <form className="grid gap-4 max-w-md">
                    <input className="p-2 border" type="text" placeholder="Name" />
                    <input className="p-2 border" type="email" placeholder="Email" />
                    <textarea className="p-2 border" placeholder="Message"></textarea>
                    <button className="bg-blue-500 text-white px-4 py-2">Send</button>
                </form>
            </div>
        </section>

    )
}
