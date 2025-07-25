import React from 'react'

export default function Testimonial() {
    return (
        <div>
            <section className="p-10 bg-white">
                <h2 className="text-2xl font-bold mb-4">What Our Students Say</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4">"Amazing experience!"</div>
                    <div className="bg-gray-100 p-4">"Best learning platform."</div>
                </div>
            </section>

        </div>
    )
}
