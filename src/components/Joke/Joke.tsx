"use client"
import React from 'react'
import styles from "./Joke.module.css";
import Link from 'next/link';
import {useGetJokeQuery} from '@/redux/services/chuckNorrisApi'
import Image from 'next/image';
import chuckFace from "../../../public/face-chuck-norris.png";

export const Joke = () => {
  const { data, error, isFetching, isLoading, refetch } = useGetJokeQuery(null);
  const handleGetJokeClick = () => {
    // Llamamos a useGetJokeQuery nuevamente cuando se hace clic en el botón
    refetch();
  };
  if (isLoading || isFetching) return <p>Loadding..</p>
  if (error) return <p>Some error</p> 

  return (
    <section className={styles.jokeListContainer}>
      <h2 className={"text_primary"}>Joke Chuck Norris</h2>
      <div  className={styles.card}>
        <p> {data?.value}</p>
       < Image src={chuckFace} alt={"joke"} width={50} height={50} />
       <button onClick={handleGetJokeClick} className={styles.button}>Get another Joke</button>
  
      </div>
      <Link className={"link underline"} href={'/'}>Volver</Link>
      </section>
  )
}
