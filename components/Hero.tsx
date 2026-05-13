"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <motion.section 
      variants={container} 
      initial="hidden" 
      animate="show" 
      className="space-y-8 pt-2 pb-20"
    >
      {/* Premium Initial Avatar */}
      <motion.div variants={item} className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center shadow-xl shadow-blue-500/20 ring-4 ring-white">
        <span className="text-4xl sm:text-5xl font-bold text-white tracking-tighter">MW</span>
      </motion.div>

      <motion.div variants={item} className="space-y-4">
        <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-slate-900">
          Mohammad Wasim
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl leading-relaxed">
          Logistics & Operations Professional transitioning to <span className="text-slate-900 font-semibold">Business Consulting</span>. Specializing in high-efficiency supply chains and premium customer experiences.
        </p>
      </motion.div>

      {/* Social Proof / Stats Bar - Now a compact grid */}
      <motion.div variants={item} className="grid grid-cols-3 gap-2 sm:gap-4 py-4 max-w-lg">
        {[
          { label: "Experience", value: "6+ Yrs" },
          { label: "Satisfaction", value: "95%+" },
          { label: "Languages", value: "4 Fluent" }
        ].map((stat, idx) => (
          <div key={idx} className="backdrop-blur-xl bg-white/70 border border-slate-200 py-3 px-1 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
            <span className="text-lg sm:text-2xl font-bold text-blue-600 leading-none">{stat.value}</span>
            <span className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide mt-1.5">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Upgraded CTA Hierarchy */}
      <motion.div variants={item} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
        <a 
          href="mailto:wmd4598@gmail.com" 
          aria-label="Email Mohammad Wasim"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
        >
          Contact Me
        </a>
        <a 
          href="https://www.linkedin.com/in/contactmohammadwasim" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Mohammad Wasim's LinkedIn"
          className="bg-transparent text-slate-700 px-8 py-3.5 rounded-full font-semibold border border-slate-300 hover:bg-slate-100 transition-colors w-full sm:w-auto text-center"
        >
          LinkedIn Profile
        </a>
      </motion.div>
    </motion.section>
  );
}
