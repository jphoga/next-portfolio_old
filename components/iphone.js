import styles from '../styles/iphone.module.css'

export default function Iphone() {
  return (
    <div className={styles.iphone}>
      <div className={styles.top}>
        <span className={styles.camera}></span>
        <span className={styles.sensor}></span>
        <span className={styles.speaker}></span>
      </div>
      <div className={styles.topbar}></div>
      <div className={styles.screen}></div>
      <div>
        <span className={styles.onoff}></span>
        <span className={styles.sleep}></span>
        <span className={styles.up}></span>
        <span className={styles.down}></span>
      </div>
      <div className={styles.bottombar}></div>
      <div className={styles.bottom}>
        <span className={styles.span}></span>
      </div>
    </div>
  )
}