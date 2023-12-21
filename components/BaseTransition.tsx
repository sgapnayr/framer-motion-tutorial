import React from "react";
import { motion } from "framer-motion";

function BaseTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}

export default BaseTransition;
