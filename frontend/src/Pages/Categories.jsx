import React from 'react';

const categories = [
    {
        name: 'Faculty of Engineering and Technology',
        description: 'Innovative solutions and engineering principles.',
        icon: '⚙️', // Replace with an icon or image
    },
    {
        name: 'Faculty of Applied Science and Technology',
        description: 'Practical applications of science and technology.',
        icon: '🔬', // Replace with an icon or image
    },
    {
        name: 'Faculty of Biological Science and Technology',
        description: 'Study of living organisms and their technologies.',
        icon: '🧬', // Replace with an icon or image
    },
    {
        name: 'Faculty of Science',
        description: 'Fundamental scientific theories and principles.',
        icon: '🧪', // Replace with an icon or image
    },
    {
        name: 'Faculty of Business Studies',
        description: 'Explore business concepts and management practices.',
        icon: '💼', // Replace with an icon or image
    },
    {
        name: 'Faculty of Veterinary Medicine',
        description: 'Learn about animal health and veterinary practices.',
        icon: '🐾', // Replace with an icon or image
    },
];

const CategoryCard = ({ name, description, icon }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="text-4xl text-center mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

const CategoriesSection = () => {
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        name={category.name}
                        description={category.description}
                        icon={category.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesSection;
