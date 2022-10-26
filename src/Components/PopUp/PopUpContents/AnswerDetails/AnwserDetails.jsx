import React from "react";
import styles from "./answerdetails.module.css";
import ShareIcon from "../../../../assets/icons/shareicon.svg";
import CrossIcon from "../../../../assets/icons/crossicon.svg";

const AnswerDetails = ({ setShowPopUp, setQuizSubmitted }) => {
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
      <h1 className={styles.surahName}>Surah Al Mulk (67:3)</h1>
      <div className={styles.bismillahText}>
        <span>بسم الله الرحمن الرحيم</span>
      </div>
      <div className={styles.ayahText}>
        <p>“كِتَـٰبٌ أُنزِلَ إِلَيْكَ فَلَا يَكُن فِى صَدْرِكَ”</p>
      </div>
      <div className={styles.secondaryTextContainer}>
        <p className={styles.secondaryText}>
          ˹He is the One˺ Who created seven heavens, one above the other. You
          will never see any imperfection in the creation of the Most
          Compassionate.1 So look again: do you see any flaws?
        </p>
      </div>
      <div className={styles.shareContainer}>
        <img src={ShareIcon} alt="share-icon" />
        <span>Share This</span>
      </div>
    </>
  );
};

export default AnswerDetails;
