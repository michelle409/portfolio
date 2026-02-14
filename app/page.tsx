"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
function MinimalAnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[140%] h-full bg-gradient-to-r 
                   from-blue-500/20 via-purple-500/20 to-pink-500/20"
      />

      <motion.div
        animate={{ x: ["20%", "-20%", "20%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[140%] h-full bg-gradient-to-r 
                   from-transparent via-blue-400/15 to-transparent"
      />

    </div>
  );
}


/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "FlowCredit – Real-Time Credit Scoring",
    description:
      "B2B fintech infrastructure converting live gig-income data into dynamic credit scores and auto-adjusting limits.",
    tech: ["Python", "REST APIs", "Risk Scoring", "Data Modeling"],
  },
  {
    title: "Student Housing Marketplace",
    description:
      "Verified student-only rental platform with swipe discovery and scam prevention.",
    tech: ["Web Dev(like this one)", "Product Strategy", "Verification Systems"],
  },
  {
    title: "Career Mirror – AI Career Guidance",
    description:
      "AI-driven platform recommending career paths using NLP and ML.",
    tech: ["FastAPI", "spaCy", "ML", "FAISS"],
  },
  {
    title: "Cultural Text Digitization",
    description:
      "OCR + NLP system for reconstructing ancient Tamil & Sanskrit texts.",
    tech: ["OCR", "NLP", "Text Processing"],
  },
  {
    title: "Marketing Automation Systems",
    description:
      "Lead pipelines, CRM-style flows, and automation for growth teams.",
    tech: ["AI Automation", "CRM Logic", "Ads Systems"],
  },
  {
    title: "Hackathon MVP Builds",
    description:
      "Rapid product builds solving real-world business problems.",
    tech: ["Prototyping", "Pitching", "Product Design"],
  },
];

/* ================= PROJECT CARD ================= */

function ProjectCard({ project, index }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setOpen(!open)}
      className="cursor-pointer bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10
                 shadow-2xl transition-all duration-300 hover:shadow-blue-500/40 hover:border-blue-400/40"
    >
      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap gap-2 mt-4"
        >
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
            >
              {t}
            </span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{ x: [0, 200, 0], y: [0, -150, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[160px]"
      />

      <motion.div
        animate={{ x: [0, -180, 0], y: [0, 200, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[160px]"
      />

      <motion.div
        animate={{ x: [0, 120, 0], y: [0, 120, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[140px]"
      />
    </div>
  );
}


/* ================= MAIN PAGE ================= */

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <MinimalAnimatedBackground />


      {/* ================= HERO ================= */}

      <section className="min-h-screen flex items-center px-20">

        <div className="w-1/2 space-y-3">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl text-gray-400 uppercase tracking-widest"
          >
            Hello, I’m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-extrabold leading-tight -mt-2"
          >
            Michelle Wilson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-lg"
          >
            AIML Engineering Student building intelligent systems and real-world products
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 flex justify-center"
        >
          <div className="relative w-[520px] h-[680px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/me.png"
              alt="My photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </section>

      {/* ================= SKILLS ================= */}

      <section className="min-h-screen py-32 px-24">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-20 text-center"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-3 gap-16 max-w-6xl mx-auto">

          {[
            { title: "Programming", skills: ["Python", "C++", "Java", "Web Dev(like this one)", "Git", "Github", "GenAI(basics)"] },
            { title: "Data & ML", skills: ["NumPy", "ML Fundamentals", "NLP", "Analysis"] },
            { title: "AI Systems", skills: ["LLMs", "APIs", "Automation", "Recommenders"] },
          ].map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06 }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10
                         shadow-2xl transition-all duration-300 hover:shadow-blue-500/40 hover:border-blue-400/40"
            >
              <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>

              <ul className="space-y-3 text-gray-300 text-lg">
                {group.skills.map((skill, idx) => (
                  <li key={idx}>→ {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section className="min-h-screen py-32 px-24">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-20 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

      </section>
{/* ABOUT + CONTACT SECTION */}
<section className="min-h-screen px-24 py-32 bg-gradient-to-b from-black to-gray-950">

  <div className="grid grid-cols-2 gap-20 max-w-6xl mx-auto items-center">

    {/* ABOUT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-5xl font-bold">About Me</h2>

      <p className="text-gray-300 text-lg leading-relaxed">
        I’m an AIML engineering student passionate about building intelligent systems that solve real-world problems — 
        from fintech infrastructure to AI-powered platforms and automation tools.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed">
        I focus on turning ideas into scalable products, blending machine learning, backend systems, and clean user experiences.
        I love working on projects that have real impact beyond just academic work.
      </p>
    </motion.div>

    {/* CONTACT */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-xl p-14 rounded-3xl border border-white/10 shadow-2xl"
    >
      <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

      <p className="text-gray-300 mb-8 text-lg">
        Interested in internships, collaborations, or building something impactful together.
      </p>

      <div className="space-y-4 text-lg">
        <p>📧 <span className="text-blue-400">michellewilson0904@email.com</span></p>
        <p>📱 <span className="text-blue-400">+91 9108841009</span></p>
      </div>

      <button className="mt-10 px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold shadow-lg">
        Contact Me
      </button>
    </motion.div>

  </div>

</section>

    </main>
  );
}
