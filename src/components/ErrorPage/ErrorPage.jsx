import React from 'react'
import styles from './ErrorPage.module.css'
export default function ErrorPage({errorCode, description}) {
  return (
    <div className={styles.errorPageCont}>
        <img src="/images/error_pic.png" alt="" className={styles.errorImage} />
        <div className={styles.descCont}>
            <h1 className={styles.errorHeader}>ERROR {errorCode}</h1>
            <span className={styles.errorDesc}>{description}</span>
        </div>
    </div>
  )
}
