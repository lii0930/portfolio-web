export const fadeIn = (direction: any, delay: any) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
export const fadeUp = (direction: any, delay: any) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0.5,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.4,
        delay: delay,
        ease: "easeInOut",
      },
    },
    // animate: {
    //   y: direction === "up" ? [0, -80] : [0, 80], // Moving up and down
    //   opacity: 1, // Keep opacity to 1
    //   x: 0,
    //   transition: {
    //     duration: 5,
    //     ease: "easeInOut",
    //     repeat: Infinity, // Loop the animation
    //     repeatType: "reverse", // This makes the animation go back and forth
    //   },
    // },
  };
};
