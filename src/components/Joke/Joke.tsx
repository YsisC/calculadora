import React from 'react'
import styles from "./Joke.module.css";
export const JokeList = () => {
  return (
    <section className={styles.jokeListContainer}>
      <h2 className={"text_primary"}>Joke Chuck Norris</h2>
      <div  className={styles.card}>
        <p> In progresss....</p>
        <button className='button'>Get another Joke</button>
      </div>
      </section>
  )
}
