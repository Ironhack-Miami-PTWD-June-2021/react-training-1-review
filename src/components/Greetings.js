import React from 'react'

export default function Greetings({ lang, children }) {
    const getGreet = language => {
        switch(language) {
            case 'de':
                return 'Hallo';
            case 'fr':
                return 'Bonjour';
            case 'en':
                return 'Hello';
            default:
                return 'Hola';
        }
    };

    return (
        <div>
            <p>{getGreet(lang)} { children }</p>
        </div>
    )
}