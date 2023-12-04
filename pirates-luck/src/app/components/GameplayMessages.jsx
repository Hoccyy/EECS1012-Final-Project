'use client'
import React from 'react';
import styles from '../page.module.css';

const GameplayMessages = (
    numberOfTries = 0,
) => {
    // Returns a random words of encouragement during gameplay
    let wordsOfEncouragement = [
        'Get gud', 
        'Keep going pal. 😂',
        'I got ALL DAY!',
        ('Wow... ' + numberOfTries + ' Tries???'),
        'You\'re doing amazing. 🤩',
        'Close one...',
        'Tip: Try using observation haki...',
    ];
    return wordsOfEncouragement[Math.floor(Math.random() * wordsOfEncouragement.length) + 1];
}

export default GameplayMessages;