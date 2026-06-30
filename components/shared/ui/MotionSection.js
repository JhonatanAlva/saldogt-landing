"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

export function MotionSection({ className = "", children, delay = 0, ...props }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, ease: "easeOut", delay }}
      variants={fadeInUp}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionDiv({ className = "", children, delay = 0, ...props }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, ease: "easeOut", delay }}
      variants={fadeInUp}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({ className = "", children, ...props }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren}
      {...props}
    >
      {children}
    </motion.div>
  );
}
