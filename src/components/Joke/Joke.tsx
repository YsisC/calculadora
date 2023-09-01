"use client"
import React from 'react'
import styles from "./Joke.module.css";
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import Link from 'next/link';
export const Joke = () => {
  return (
    <section className={styles.jokeListContainer}>
      <h2 className={"text_primary"}>Joke Chuck Norris</h2>
      <div  className={styles.card}>
        <p> In progresss....</p>
        <HandymanOutlinedIcon />
        <button className='button'>Get another Joke</button>
  
      </div>
      <Link className={"link underline"} href={'/'}>Volver</Link>
      </section>
  )
}
