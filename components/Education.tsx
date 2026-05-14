"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "MSc International Business Management",
    institution: "University of Hertfordshire — UK",
    status: "Expected 2026",
    highlight: true,
  },
  {
    degree: "BCom Hons Accounting",
    institution: "Kolkata University — India",
    status: "Graduated",
    highlight: false,
  }
];

export default function Education() {
  return (
    <section className="space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold tracking-tight text-slate-900"
      >
        Education
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`backdrop-blur-md p-8 rounded-3xl border shadow-sm transition-shadow hover:shadow-md flex flex-col justify-between ${
              edu.highlight 
                ? "bg-gradient-to-br from-blue-50 to-white border-blue-200" 
                : "bg-white/80 border-slate-200"
            }`}
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
              <p className="text-slate-600 font-medium">{edu.institution}</p>
            </div>
            <div className="mt-6">
              <span className={`text-sm font-semibold px-3 py-1 rounded-full w-fit ${
                edu.highlight ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-700"
              }`}>
                {edu.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}