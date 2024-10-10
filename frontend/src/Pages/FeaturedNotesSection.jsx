import React from 'react';

const featuredNotes = [
    {
        title: 'Introduction to Computer Science',
        description: 'A comprehensive overview of computer science principles.',
        thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
        author: {
            name: 'John Doe',
            profileImage: 'https://via.placeholder.com/50', // Replace with actual profile image URL
            downloadLink: '#', // Replace with actual download link
        },
    },
    {
        title: 'Advanced Calculus',
        description: 'In-depth exploration of calculus concepts and applications.',
        thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
        author: {
            name: 'Jane Smith',
            profileImage: 'https://via.placeholder.com/50', // Replace with actual profile image URL
            downloadLink: '#', // Replace with actual download link
        },
    },
    {
        title: 'Physics for Engineers',
        description: 'Fundamental physics concepts relevant to engineering.',
        thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
        author: {
            name: 'Michael Brown',
            profileImage: 'https://via.placeholder.com/50', // Replace with actual profile image URL
            downloadLink: '#', // Replace with actual download link
        },
    },
    {
        title: 'Business Management Basics',
        description: 'Essential principles of management in business settings.',
        thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URL
        author: {
            name: 'Emily Johnson',
            profileImage: 'https://via.placeholder.com/50', // Replace with actual profile image URL
            downloadLink: '#', // Replace with actual download link
        },
    },
];

const NoteCard = ({ title, description, thumbnail, author }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={thumbnail} alt={title} className="w-full h-32 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <img
                            src={author.profileImage}
                            alt={author.name}
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <span className="text-sm font-medium">{author.name}</span>
                    </div>
                    <a
                        href={author.downloadLink}
                        className="inline-block bg-violet-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-violet-800 transition-colors"
                        download
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
};

const FeaturedNotesSection = () => {
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Notes</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {featuredNotes.map((note, index) => (
                    <NoteCard
                        key={index}
                        title={note.title}
                        description={note.description}
                        thumbnail={note.thumbnail}
                        author={note.author}
                    />
                ))}
            </div>
            <div className="text-center mt-8">
                <a
                    href="/all-notes" // Change this to the actual route for all notes
                    className="inline-block bg-violet-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-violet-800 transition-colors"
                >
                    View All Notes
                </a>
            </div>
        </div>
    );
};

export default FeaturedNotesSection;
