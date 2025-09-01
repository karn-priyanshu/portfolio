export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const cardHover = {
  y: -10,
  rotateY: 5,
  rotateX: 5,
  transition: { duration: 0.3 }
};

export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const iconSpin = {
  rotate: 360,
  transition: { duration: 0.6 }
};