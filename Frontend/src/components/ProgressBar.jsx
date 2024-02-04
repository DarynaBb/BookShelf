import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import { UserBooksContext } from "../context/UserBooksContext";

function ProgressBar() {
  const {progressValue, setProgressValue, chosenCurrentlyBook} = useContext(UserBooksContext);

  const maxValue = chosenCurrentlyBook[0].book.pageCount;
  const currentValue = chosenCurrentlyBook[0].progress;

  return (
    <ReactSlider
        className="horizontal-slider"
        thumbClassName="customSlider-thumb"
        trackClassName="customSlider-track"
        min={0}
        max={maxValue}
        value={progressValue}
        onChange={(newValue) => setProgressValue(newValue)}
    />
  )
}

export default ProgressBar