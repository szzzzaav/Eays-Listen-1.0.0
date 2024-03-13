import styles from "./SolarSpinner.module.css";

function SolarSpinner() {
  return (
    <div className={`${styles["spinner-box"]}`}>
      <div className={`${styles["solar-system"]}`}>
        <div className={`${styles["earth-orbit"]} ${styles.orbit}`}>
          <div className={`${styles.planet} ${styles.earth}`}></div>
          <div className={`${styles["venus-orbit"]} ${styles.orbit}`}>
            <div className={`${styles.planet} ${styles.venus}`}></div>
            <div className={`${styles["mercury-orbit"]} ${styles.orbit}`}>
              <div className={`${styles.planet} ${styles.mercury}`}></div>
              <div className={`${styles.sun}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarSpinner;
