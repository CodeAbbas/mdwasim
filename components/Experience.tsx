"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Logistics Executive",
    company: "Flora Exports",
    location: "Kolkata, India",
    date: "Nov 2020 – Feb 2023",
    achievements: [
      <>Managed <span className="font-bold text-slate-900">200+</span> customer orders weekly with <span className="font-bold text-slate-900">95%+ accuracy</span>.</>,
      <>Implemented process improvements reducing delivery times by <span className="font-bold text-blue-600">15%</span>.</>,
      <>Maintained <span className="font-bold text-slate-900">100% accurate</span> inventory records using Microsoft Dynamics ERP.</>,
    ]
  },
  {
    role: "Front of House",
    company: "Dilpasand Restaurant",
    location: "London, UK",
    date: "Sept 2024 – Present",
    achievements: [
      <>Serve <span className="font-bold text-slate-900">100+</span> guests daily, maintaining a <span className="font-bold text-slate-900">95%+</span> satisfaction rating.</>,
      <>Reduced order processing time by <span className="font-bold text-blue-600">20%</span> through workflow optimization.</>,
      <>Consistently upsell premium items, increasing average bill value by <span className="font-bold text-green-600">10%</span>.</>,
    ]
  },
  {
    role: "Front of House",
    company: "Sweets",
    location: "Kolkata, India",
    date: "2017 – 2020",
    achievements: [
      <>Managed high-volume POS transactions during peak service hours.</>,
      <>Coordinated kitchen operations ensuring timely and accurate order delivery.</>,
      <>Assisted in promotional activities, boosting seasonal sales by an estimated <span className="font-bold text-green-600">12%</span>.</>,
    ]
  }
];

export default function Experience() {
  return (
    <section className="space-y-12 relative">
      {/* Timeline Line */}
      <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-slate-200 to-transparent"></div>

      {experiences.map((exp, idx) => (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          key={idx} 
          className="relative pl-12 group"
        >
          {/* Glowing Animated Node */}
          <div className="absolute left-[11px] top-5 w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
          
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-md bg-white/80 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <p className="text-slate-600 font-medium">{exp.company} — {exp.location}</p>
              </div>
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                {exp.date}
              </span>
            </div>
            
            <ul className="space-y-3">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <span className="text-blue-500 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
