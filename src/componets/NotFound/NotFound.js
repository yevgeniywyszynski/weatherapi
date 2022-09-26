import React from "react";
import styles from '../NotFound/NotFound.module.scss'

const NotFound = () => {
    return(
        <div className={styles.notFoundWrapper}>
            <p className={styles.title}>Not Found</p>
        </div>
    )
}

export default NotFound;