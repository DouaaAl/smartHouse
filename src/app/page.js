import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className={styles.main}>
      <div className={styles.text}> 
        <h1>
         Smart House: Making Living Smarter and More Affordable
        </h1>
        <p>We help you through our robotic tools and software application to live an  make the best decision for your household</p>
      </div>
        <Image alt="house" width={550} height={550} src={"/images/house.jpg"} />
    </main>
    <h1 className={styles.sectionTitle}>Water Management</h1>
    <section className={styles.section}>
      <article>
        <h3>Instead of rainwater getting wasted on the sewage</h3>
        <Image src={"/images/sewage.jpg"} height={200} width={200} alt="sewage water" />
      </article>
            <article>
        <h3>We Will filter it</h3>
        <Image src={"/images/filtering.jpg"} height={200} width={200} alt="filtering water" />
      </article>
       <article>
        <h3>The store it in the house for use</h3>
        <Image src={"/images/stored.jpg"} height={200} width={200} alt="filtering water" />
      </article>
    </section>
    <h1 className={styles.sectionTitle}>Electricity management</h1>
        <section className={styles.section}>
      <article>
        <h3>We will help you measure the amount of electricity you use</h3>
        <Image src={"/images/measureE.jpg"} height={200} width={200} alt="sewage water" />
      </article>
            <article>
        <h3>Figure out it's money Equivilance</h3>
        <Image src={"/images/counting.jpg"} height={200} width={200} alt="filtering water" />
      </article>
       <article>
        <h3>And the amount that each device consumes</h3>
        <Image src={"/images/detective.jpg"} height={200} width={180} alt="filtering water" />
      </article>
    </section>
    </>
  );
}
