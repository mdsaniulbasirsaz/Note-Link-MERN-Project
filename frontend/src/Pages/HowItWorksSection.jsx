import React from 'react';

const HowItWorksSection = () => {
    const steps = [
        {
            title: 'Step 1: Register/Login',
            description: 'Create an account or log in to access our note-sharing platform.',
            emoji: '👤', // Emoji for user
        },
        {
            title: 'Step 2: Browse or Search Notes',
            description: 'Explore various categories or use the search feature to find notes.',
            emoji: '🔍', // Emoji for search
        },
        {
            title: 'Step 3: Download & Use',
            description: 'Download your chosen notes and start using them for your studies.',
            emoji: '⬇️', // Emoji for download
        },
    ];

    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="flex flex-col items-center">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex items-start bg-white shadow-md rounded-lg p-6 mb-4 w-11/12 sm:w-2/3 lg:w-1/2"
                    >
                        <span className="text-4xl mr-4">{step.emoji}</span> {/* Emoji as icon */}
                        <div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorksSection;
