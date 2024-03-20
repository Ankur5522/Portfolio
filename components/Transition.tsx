"use client";
import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    // y: "100%", // Start from the bottom of the screen
    // x: "50%", // Centered horizontally
    // height: "100%",
    // width: "100%",
    x: "0%",
    height: "200%",
    width: "100%",
    borderRadius: "0%",
    opacity: 1
    // scale: 1, // Start with full size
  },
  animate: {
    // y: "0%", // Move to the top
    // height: "0%",
    // width: "0%",
    x: "100%",
    height: "0%",
    width: "0%",
    borderRadius: "100%",
    opacity: 0,
    // scale: 0, // Zoom out to a point
    transformOrigin: "bottom center", // Define zoom origin
  },
  exit: {
    // y: "100%", // Move back down
    // height: "100%",
    // width: "100%",
    // scale: 1, // Restore full size
    transition: { duration: 0.4 }, // Customize exit animation timing
  },
};

const Transition = () => {
  return (
    <div className="relative h-screen w-screen ">
      <motion.div
        className="absolute bottom-5 h-screen w-screen bg-[#2e2257] z-[30]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-5 h-screen w-screen bg-[#3b2d71] z-[20]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-5 h-screen w-screen bg-[#4b3792] z-[10]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Transition;

// STARTER CODE

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const TransitionVariants = {
//   initial: {
//     y: "100%",
//     height: "100%",
//   },
//   animate: {
//     y: "0%",
//     height: "0%",
//   },
//   exit: {
//     y: ["0%", "100%"],
//     height: ["0%", "100%"],
//   },
// };

// const Transition = () => {
//   return (
//     <div>
//       <motion.div
//         className="fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#2e2257]"
//         variants={TransitionVariants}
//         initial="initial"
//         exit="exit"
//         animate="animate"
//         transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#3b2d71]"
//         variants={TransitionVariants}
//         initial="initial"
//         exit="exit"
//         animate="animate"
//         transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#4b3792]"
//         variants={TransitionVariants}
//         initial="initial"
//         exit="exit"
//         animate="animate"
//         transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
//       />
//     </div>
//   );
// };

// export default Transition;