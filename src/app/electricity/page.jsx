"use client"
import React, {useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import styles from "./electricity.module.css"
import { database } from '../firebase';
import { ref, onValue } from "firebase/database";

const page = () => {
  const [data, setData] = useState({
    Ampere: 0,
    Energy: 0,
    Money: 0,
    Power: 0,
    Volts: 0
  });

  useEffect(() => {
    const dataRef = ref(database, "/"); // root path of your DB
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      if (value) {
        setData(value);
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
    <Navbar />
    <main className={styles.main}>
        <h1 className={styles.title}>Indivual Devices Info</h1>
        <section className={styles.devices}>
            <article>
                <h1>Device One:</h1>
                <h2>Ampere: {data.Ampere}</h2>
                <h2>Energy: {data.Energy}</h2>
                <h2>Money: {data.Money}</h2>
                <h2 className={styles.accent}>Power: {data.Power}</h2>
                <h2 className={styles.accent}>Volts: {data.Volts}</h2>
            </article>
            <article>
                <h1>Device One:</h1>
                <h2>Ampere: {data.Ampere}</h2>
                <h2>Energy: {data.Energy}</h2>
                <h2>Money: {data.Money}</h2>
                <h2>Power: {data.Power}</h2>
                <h2>Volts: {data.Volts}</h2>
            </article>
        </section>        
    </main>

    </>
  )
}

export default page