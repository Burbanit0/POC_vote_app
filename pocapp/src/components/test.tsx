import React, { useState } from "react";

// const [percentage, setPercentage] = useState(0);

//   const dotClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

//     let clickedDot = e.currentTarget;
//     let clickedDotIndex = parseInt(clickedDot.dataset.index);
//     let progressBarWidth = document.getElementById('progress-bar')?.clientWidth;
    
//     let percentage = Math.round(100 * clickedDotIndex * (progressBarWidth/5))/progressBarWidth;
//     setPercentage(percentage);

//     return (
//         <div className="App">
//         <div className="progress-bar-wrapper">
//             <div className="progress-bar" id="progress-bar">
//             {[...Array(5)].map((_, i) => (
//                 <div className="dot" key={i} data-index={i} onClick={dotClicked} />
//             ))}
//             </div>
//         </div>
//         </div>
//     )
// }