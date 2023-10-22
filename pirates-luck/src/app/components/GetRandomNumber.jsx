import React from 'react';
import styles from '../page.module.css';

const RandomNumber = ( difficulty ) => {
    // Returns a random number based on difficulty
    switch (difficulty.toLowerCase()) {
        case 'extreme':
            return Math.floor(Math.random() * 1_000_000) + 1;
        case 'hard':
            return Math.floor(Math.random() * 10_000) + 1;
        case 'medium':
            return Math.floor(Math.random() * 1_000) + 1;
        case 'easy':
            return Math.floor(Math.random() * 1_00) + 1;
        default:
            // Defaults to an easy number
            return Math.floor(Math.random() * 1_00) + 1;
    }
};

export default RandomNumber;