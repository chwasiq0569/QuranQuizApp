import React from "react";
import styles from "./statisticsPopUp.module.css";
import ShareIcon from "../../../../assets/icons/shareicon.svg";
import CrossIcon from "../../../../assets/icons/crossicon.svg";

const StatisticsPopUp = ({ setShowPopUp, setQuizSubmitted }) => {
  return (
    <>
      <img
        onClick={() => {
          setShowPopUp(false);
          setQuizSubmitted(true);
        }}
        className={styles.closeIcon}
        src={CrossIcon}
        alt="close_popup"
      />
      <h1 className={styles.headText}>Statistics</h1>
      <div className={styles.statsNumbers}>
        <div className={styles.statContainer}>
          <p className={styles.statNum}>5</p>
          <p className={styles.statType}>Plays</p>
        </div>
        <div className={styles.statContainer}>
          <p className={styles.statNum}>
            67
            <span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
              %
            </span>
          </p>
          <p className={styles.statType}>Win</p>
        </div>
        <div className={styles.statContainer}>
          <p className={styles.statNum}>1</p>
          <p className={styles.statType}>Streak</p>
        </div>
      </div>
      <div className={styles.secondaryTextContainer}>
        <p className={styles.secondaryText}>Login to link your stats</p>
      </div>
      <div className={styles.spacer}></div>

      <div className={styles.strengthsChart}>
        <p className={styles.strengthsChartHead}>Juz strength</p>
        <div className={styles.strengthsContainer}></div>
      </div>

      <div className={styles.shareContainer}>
        <img src={ShareIcon} alt="share-icon" />
        <span>Share This</span>
      </div>
    </>
  );
};

export default StatisticsPopUp;
