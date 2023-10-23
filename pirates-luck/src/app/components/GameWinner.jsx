import React from 'react';
import styles from '../page.module.css'

const GameWinner = (
    {playerName,
    numOfTries,
    number}
) => {
    return (
        <div id={styles.awardeeContainer}>
            <div className={styles.centerAwardee}>
            
            <table className={styles.awardeeObject}>

                <tr>
                    <td className={styles.awardeeHeaderData}> {playerName} </td>
                    <td className={styles.awardeeHeaderData}> {numOfTries} </td>
                    <td className={styles.awardeeHeaderData}> {number} </td>
                </tr>
            </table>
            </div>
        </div>
    );
};

export default GameWinner;