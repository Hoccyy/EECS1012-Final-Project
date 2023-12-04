'use client'
import Image from 'next/image'
import styles from './page.module.css'
import RandomNumber from './components/GetRandomNumber'
import GameplayMessages from './components/GameplayMessages'
import GameWinner from './components/GameWinner'

var numberOfTries = 0;
var numberOfWins = 0;
var numberToGuess;
var userGuess = 0;


// TODO clear this before product launch
var leaderboardOfWinners = ['Derrick Himenez', 'Doug', 'perter sumn'];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.gamePlayStagesParent}>

        {/* All leaderboard changes to be made here */}
        <div className={styles.leaderBoardStage}>
          <h1>Leaderboard</h1>

          {/* ADD them here */}
          <div id='ListOfWinners'>
            <tr className={styles.awardeeInfoHeader}>
              <th className={styles.awardeeHeaderText}>Player&apos;s Name</th>
              <th className={styles.awardeeHeaderText}>Tries</th>
              <th className={styles.awardeeHeaderText}>Number</th>
            </tr>
            <GameWinner
              playerName = {'Doug'}
              numOfTries = {1313}
              number = {99}
            />
            <GameWinner
              playerName = {'Doug'}
              numOfTries = {1313}
              number = {99}
            />
          </div>

        </div>
        <div className={styles.mainStage}>
          <div className={styles.center}>
        
            <div className={styles.description}>
              <p id='gmsg' className='gmsg'>
                Number of tries 0&nbsp;
                
              </p>
              <p className='gmsg2'>
                &nbsp;{ GameplayMessages(numberOfTries) }
              </p>
              <div>
              </div>
            </div>

          </div>

          <div className={styles.center}>
            <input className={styles.guessInput} type='number' placeholder='Enter Guess!'/>

            <button className={styles.CheckButton} onClick={()=> {
              userGuess = (document.querySelector('input').value);

              if (userGuess == numberToGuess) {
                alert("Congrats! it was " + numberToGuess);
                numberOfTries += 1;
                
                // Track number of tries
                var x = document.getElementsByClassName('gmsg')[0];
                x.innerHTML = 'Number of Tries : ' + numberOfTries;
              } else {

                numberOfTries += 1;
                
                // Track number of tries
                var x = document.getElementsByClassName('gmsg')[0];
                x.innerHTML = 'Number of Tries : ' + numberOfTries;

                var y = document.getElementsByClassName('gmsg2')[0];
                y.innerHTML = GameplayMessages(numberOfTries);
              }
              }}>
              Check
            </button>
          </div>

          <div className={styles.grid}>
            <button className={styles.diffcultyButton} onClick={()=> {
              numberToGuess = RandomNumber('easy');
              var message = document.getElementsByClassName('DifficultyMsg')[0];

              alert(numberToGuess);
            }}>
              Easy
            </button>

            <button className={styles.diffcultyButton} onClick={()=> {
              numberToGuess = RandomNumber('medium');
              alert(numberToGuess);
            }}>Medium</button>

            <button className={styles.diffcultyButton} onClick={()=> {
              numberToGuess = RandomNumber('hard');
              alert(numberToGuess);
            }}>Hard</button>

            <button className={styles.diffcultyButton} onClick={()=> {
              numberToGuess = RandomNumber('extreme');
              alert(numberToGuess);
            }}>Extreme!</button>
          </div>
 

        </div>
      </div>
    </main>
  )
}
