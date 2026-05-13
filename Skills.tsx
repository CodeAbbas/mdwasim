"use client";



import { motion } from "framer-motion";



const skillCategories = [

  {

    title: "Software & Systems",

    skills: ["Salesforce CRM", "HubSpot", "Microsoft Dynamics 365 ERP", "Toast & Square POS", "Microsoft Office Suite", "Google Workspace"],

  },

  {

    title: "Supply Chain & Operations",

    skills: ["Logistics Coordination", "Inventory Control", "Order Management", "Process Improvement", "Workflow Optimisation", "Front-of-House Operations"],

  },

  {

    title: "Consulting & Soft Skills",

    skills: ["Problem-Solving", "Complaint Resolution", "Cross-Cultural Teamwork", "Customer Service Excellence", "Client Relations"],

  }

];



const languages = [

  { lang: "Urdu", proficiency: "Native" },

  { lang: "English", proficiency: "Fluent" },

  { lang: "Hindi", proficiency: "Fluent" },

  { lang: "Bengali", proficiency: "Fluent" },

];



export default function Skills() {

  return (

    <section className="space-y-8">

      <motion.h2 

        initial={{ opacity: 0, y: 10 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        className="text-3xl font-extrabold tracking-tight text-slate-900"

      >

        Competencies & Languages

      </motion.h2>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Skills Bento Boxes */}

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

          {skillCategories.map((category, idx) => (

            <motion.div

              key={idx}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.5, delay: idx * 0.1 }}

              className={`backdrop-blur-md bg-white/80 p-8 rounded-3xl border border-slate-200 shadow-sm ${idx === 2 ? 'sm:col-span-2' : ''}`}

            >

              <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill, i) => (

                  <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full">

                    {skill}

                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>



        {/* Languages Box */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.5, delay: 0.3 }}

          className="backdrop-blur-md bg-blue-600 p-8 rounded-3xl border border-blue-500 shadow-lg text-white"

        >

          <h3 className="text-lg font-bold mb-6">Languages</h3>

          <ul className="space-y-4">

            {languages.map((item, idx) => (

              <li key={idx} className="flex items-center justify-between border-b border-blue-500/50 pb-2 last:border-0 last:pb-0">

                <span className="font-semibold text-white">{item.lang}</span>

                <span className="text-sm font-medium text-blue-200 bg-blue-800/50 px-2 py-0.5 rounded-md">

                  {item.proficiency}

                </span>

              </li>

            ))}

          </ul>

        </motion.div>

      </div>

    </section>

  );

}

