import React from 'react';

import styles from './Wind.css';

export default function Wind(props) {
  const cssClass = `${styles.root} ${styles[props.place]}`;
  return (
    <div className={cssClass} style={{ borderColor: props.borderColor }}>
      { props.title && <h3>{props.title}</h3> }
      <span className={styles.value}>{props.value} km/h</span>
    </div>
  );
}