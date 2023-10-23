'use client'
import Image from 'next/image'
import styles from './page.module.css'
import RandomNumber from './components/GetRandomNumber'
import GameplayMessages from './components/GameplayMessages'
import GameWinner from './components/GameWinner'

var numberOfTries = 0;
var numberOfWins = 0;
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
          <div>
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
              <p className={styles.code}>
                Number of tries&nbsp;
                {numberOfTries}
                &nbsp;|&nbsp;{ GameplayMessages(numberOfTries) }
              </p>
              <div>
              </div>
            </div>

          </div>

          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Docs <span>-&gt;</span>
              </h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Learn <span>-&gt;</span>
              </h2>
              <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Templates <span>-&gt;</span>
              </h2>
              <p>Explore the Next.js 13 playground.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Deploy <span>-&gt;</span>
              </h2>
              <p>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
