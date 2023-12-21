"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import BaseTransition from "@/components/BaseTransition";

export default function Home() {
  const constraintsRef = useRef(null);

  const dragDiv = () => {
    return (
      <div className="flex flex-col">
        <div className="w-full text-center py-2 opacity-50">Drag</div>
        <motion.div
          className="bg-white/20 rounded-md p-10"
          ref={constraintsRef}
        >
          <motion.div
            className="bg-white rounded-md shadow-xl cursor-pointer p-10"
            drag
            dragConstraints={constraintsRef}
          />
        </motion.div>
      </div>
    );
  };

  const clickyDeal = () => {
    return (
      <>
        <div className="w-full text-center py-2 opacity-50">Clicky Deal</div>
        <motion.div
          className="bg-white p-10 rounded-md shadow-md"
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        />
      </>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      {dragDiv()}
      <BaseTransition>{clickyDeal()}</BaseTransition>
    </div>
  );
}
