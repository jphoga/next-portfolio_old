import styles from '../styles/hero.module.css'
import Iphone from './iphone'

const herosubcontainer = {
  display: 'flex',
  justifyContent: 'space-around'
}

export default function Home() {
  return (
    <section className={styles.herocontainer}>
      <div style={herosubcontainer}>
        <h1 className={styles.herotitle}>Jan's <br />Portfolio <br />Page</h1>
        <Iphone />
      </div>
      <canvas id={styles.canvas} > </canvas>
    </section>  
  )
}


