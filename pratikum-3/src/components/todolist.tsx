import React from 'react';

const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imagesSize: 'b',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img 
            className="avatar"
            src={`${baseUrl}${person.imageId}${person.imagesSize}.jpg`}
            alt={person.name}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautic lecture</li>
                <li>Work on the alcohol-fuelled engines</li>
            </ul>
        </div>
    );
}
