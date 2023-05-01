import React, { useState, useEffect } from "react";

function DeadlineBar({ deadline }) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const diffTime = deadlineDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const newProgressValue = 100 - (diffDays * 100) / 7;
    setProgressValue(newProgressValue > 0 ? newProgressValue : 0);
  }, [deadline]);

  return (
    <div style={{ width: "100%", backgroundColor: "#e0e0de", height: "10px" }}>
      <div
        style={{
         margin:'10px',
          width: `${progressValue}%`,
          backgroundColor: "black",
          height: "10px"
        }}
      ></div>
    </div>
  );
}

export default DeadlineBar;
