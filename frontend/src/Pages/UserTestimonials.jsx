import React from 'react';

const testimonials = [
    {
        name: 'John Doe',
        quote: 'This platform has been a game-changer for my studies. I found notes that helped me excel!',
        image: 'https://via.placeholder.com/50', // Placeholder image URL
    },
    {
        name: 'Jane Smith',
        quote: 'I love the easy access to various study materials. It made my learning so much smoother!',
        image: 'https://via.placeholder.com/50', // Placeholder image URL
    },
    {
        name: 'Alice Johnson',
        quote: 'The note-sharing feature is fantastic! I can share my notes with others and benefit from theirs.',
        image: 'https://via.placeholder.com/50', // Placeholder image URL
    },
];

const UserTestimonials = () => {
    return (
        <div className="py-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">User Testimonials</h2>
            <div className="flex flex-col items-center">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex items-start bg-white shadow-md rounded-lg p-6 mb-4 w-11/12 sm:w-2/3 lg:w-1/2"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4" // Profile image
                        />
                        <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTestimonials;
