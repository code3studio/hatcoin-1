import { motion } from "framer-motion";
import React from "react";
type FireworkProps = {
  startX: number;
  startY: number;
  color?: string;
  pet: string;
};

const generatePath = (startX: number, startY: number) => {
  // Randomizing motion paths for each firework
  const endX = startX + (Math.random() - 0.5) * 200; // Random end X within a range
  const endY = startY + 200 + Math.random() * 100; // Random end Y upwards

  return {
    x: [startX, startX - (endX - startX) / 2, endX, (startX + endX) / 2, endX],
    y: [-300 + endY, -200 + endY, -100 + endY, 0],
    // y: [startY, startY - 50, 0, startY - 50 - (startY) / 2, endY],
  };
};

const fireworkVariants = {
  // initial: (context: FireworkProps) => ({
  //   x: context.startX,
  //   y: context.startY,
  //   opacity: 1,
  //   scale: 1,
  // }),
  animate: (context: FireworkProps) => {
    const path = generatePath(context.startX, context.startY);
    return {
      x: path.x,
      y: path.y,
      opacity: [0.1, 0.3, 0.6, 0.8],
      scale: [1, 2, 3, 4],
    };
  },
};

const Firework: React.FC<FireworkProps> = ({
  startX,
  startY,
  color = "white",
  pet,
}) => {
  return (
    <motion.div
      variants={fireworkVariants}
      custom={{ startX, startY }}
      // initial="initial"
      animate="animate"
      transition={{
        type: "tween",
        duration: 10,
        // stiffness: 100,
        // easings: ["anticipate", "backIn", "circIn", "easeInOut"],
        // times: [0, 0.4, 0.6, 1],
        // repeat: Infinity,
        // repeatDelay: 2,
      }}
      style={{
        position: "absolute",
        width: 26,
        height: 20,
        borderRadius: "50%",
        backgroundColor: color,
        zIndex: 1000,
      }}
    >
      <img src={pet} alt="Firework" width="100%" height="100%" />
    </motion.div>
  );
};

export default Firework;
