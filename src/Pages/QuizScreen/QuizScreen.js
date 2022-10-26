import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import styles from "./quizscreen.module.css";
import PopUp from "./../../Components/PopUp/PopUp";
import InstructionPopUp from "./../../Components/PopUp/PopUpContents/InstructionPopUp/InstructionPopUp";
import RewardPopUp from "./../../Components/PopUp/PopUpContents/RewardPopUp/RewardPopUp";
import AnswerDetails from "./../../Components/PopUp/PopUpContents/AnswerDetails/AnwserDetails";
import RewardIcon from "../../assets/icons/moonstarbadge.svg";
import SettingsPopUp from "./../../Components/PopUp/PopUpContents/SettingsPopUp/SettingsPopUp";
import StatisticsPopUp from "./../../Components/PopUp/PopUpContents/StatisticsPopUp/StatisticsPopUp";

const QuizScreen = () => {
  const [showPopUp, setShowPopUp] = React.useState(false);

  const [answerStatus, setAnswerStatus] = React.useState("neutral");

  const [switchPopUp, setSwitchPopUp] = React.useState(false);

  const [quizSubmitted, setQuizSubmitted] = React.useState(false);

  const [firstTime, setFirstTime] = React.useState(true);

  const [settingsPopUpStatus, setSettingsPopUpStatus] = React.useState(false);

  const [statisticsPopUpStatus, setStatisticsPopUpStatus] =
    React.useState(false);

  React.useEffect(() => {
    answerStatus == "correct" ? setShowPopUp(true) : setShowPopUp(false);

    if (answerStatus == "correct") {
      setTimeout(() => {
        setSwitchPopUp(true);
      }, 2000);
    }
  }, [answerStatus]);
  console.log(answerStatus);

  const dynamicStylingGuess = () => {
    if (answerStatus == "correct")
      return styles.ayahContainer + " " + styles.correctGuessed;
    else if (answerStatus == "wrong")
      return styles.ayahContainer + " " + styles.wrongGuessed;
    else return styles.ayahContainer;
  };

  React.useState(() => {
    localStorage.setItem("firstTime", true);
  }, []);

  return (
    <div>
      <Navbar
        setSettingsPopUpStatus={setSettingsPopUpStatus}
        setFirstTime={setFirstTime}
      />
      {showPopUp && (
        <PopUp>
          {switchPopUp ? (
            <AnswerDetails
              setQuizSubmitted={setQuizSubmitted}
              setShowPopUp={setShowPopUp}
            />
          ) : (
            <RewardPopUp />
          )}
        </PopUp>
      )}

      {firstTime && (
        <PopUp>
          <InstructionPopUp setShowPopUp={setFirstTime} />
        </PopUp>
      )}

      {settingsPopUpStatus && (
        <PopUp>
          <SettingsPopUp setShowPopUp={setSettingsPopUpStatus} />
        </PopUp>
      )}

      {statisticsPopUpStatus && (
        <PopUp>
          <StatisticsPopUp />
        </PopUp>
      )}

      <div className={styles.mainContentContainer}>
        <div className={styles.headTextSoft}>
          <span>بسم الله الرحمن الرحيم</span>
        </div>
        <div className={dynamicStylingGuess()}>
          <p>“كِتَـٰبٌ أُنزِلَ إِلَيْكَ فَلَا يَكُن فِى صَدْرِكَ”</p>
        </div>
        {quizSubmitted ? (
          <div className={styles.rewardAndNextChallengeContainer}>
            <img src={RewardIcon} alt="reward" />
            <p className={styles.nextChallengeText}>
              Next Challenge in 12hr:30min:30s
            </p>
          </div>
        ) : (
          <div className={styles.quizAnswerContainer}>
            <div className={styles.surahNoContainer}>
              <p>Surah no:</p>
              <input
                onChange={(e) =>
                  parseInt(e.target.value) > 3
                    ? setAnswerStatus("correct")
                    : setAnswerStatus("wrong")
                }
                type="number"
              />
            </div>
            <p> - Surah Al Baqara - </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
