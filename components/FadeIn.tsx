import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const getVariants = (direction: string) => {
  switch (direction) {
    case "up":
      return { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    case "down":
      return { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } };
    default:
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
};

const FadeIn = ({ children, delay = 0, direction = "up" }: FadeInProps) => {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
