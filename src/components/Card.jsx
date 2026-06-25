import React from "react";
import { motion } from "framer-motion";
const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="shadow-md shadow-emerald-200 border border-emerald-100 flex flex-col px-4 py-8 gap-3 rounded-sm hover:border-emerald-400 transition-colors"
    >
      <h1 className="text-slate-900 text-xl font-bold ">{title}</h1>
      <p className="text-slate-700 text-sm"> {desc}</p>
    </motion.div>
  );
};

export default Card;