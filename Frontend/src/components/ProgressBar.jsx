import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import { UserBooksContext } from "../context/UserBooksContext";

function ProgressBar() {
  const {progressValue, setProgressValue, chosenCurrentlyBook, setChosenCurrentlyBook} = useContext(UserBooksContext);

  const maxValue = chosenCurrentlyBook[0].book.pageCount;
  const currentValue = chosenCurrentlyBook[0].progress;
  console.log("Maxvalue", maxValue)
  console.log("currentVale", currentValue)

  return (
    <ReactSlider
        className="horizontal-slider"
        thumbClassName="customSlider-thumb"
        trackClassName="customSlider-track"
        min={currentValue}
        max={maxValue}
        value={progressValue}
        onChange={(newValue) => setProgressValue(newValue)}
    />
  )
}

export default ProgressBar