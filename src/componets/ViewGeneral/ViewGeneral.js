import React from "react";
import styles from '../ViewGeneral/ViewGeneral.module.scss';
import Home from '../Home/HomeContainer';
import HistorySearch from '../HistorySearch/HistorySearchContainer';

const ViewGeneral = () => {
    return(
        <div className={styles.viewWrapper}>
            <Home/>
            <HistorySearch/>
        </div>
    )
}

export default ViewGeneral;