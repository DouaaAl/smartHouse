import React from 'react'
import styles from "../page.module.css";
import Link from 'next/link';

const navbar = () => {
  return (
    <nav className={styles.nav}>
      <li><Link href="/">Main Page</Link> </li>
      <li> <Link href="electricity">Electricity Consumption</Link>  </li>
      <li> <Link href="budget">Budget</Link> </li>
    </nav>
  )
}

export default navbar