import React from "react";
import styles from "./instructionpopup.module.css";

const InstructionPopUp = ({ setShowPopUp }) => {
  return (
    <>
      <h1 className={styles.popUpHead}>How to Play</h1>

      <div className={styles.listContainer}>
        <ul>
          <li>Guess the Quran ayah in 3 tries </li>
          <li>Type the ayah number in the space and hit enter </li>
          <li>
            If the ayah number is in the range of the correct answer it will
            turn green if not it will be red.(Turn on hints for this
          </li>
          <li>Once you run out of tries the surah will be revealed </li>
          <li>
            By tapping on the card you will be able to go back to see the ayah
            and vice versa
          </li>
          <li>
            There will be daily ayah challenge for you. Click here to let us
            notify you
          </li>
        </ul>
        <div className={styles.btnContainer}>
          <button
            onClick={() => setShowPopUp(false)}
            className={styles.startPlayingBtn}
          >
            Start Playing
          </button>
        </div>
      </div>
    </>
  );
};

export default InstructionPopUp;
