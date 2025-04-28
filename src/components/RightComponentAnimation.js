// imported framer animation library
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RightComponentAnimation({ children, className = "" }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, x: 0 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }} // Starts 100px to the right
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
