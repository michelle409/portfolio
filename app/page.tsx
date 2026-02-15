"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/* ===== BACKGROUND ===== */

function MinimalAnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r 
        from-blue-500/25 via-purple-500/25 to-pink-500/25"
      />
    </div>
  );
}

/* ===== PROJECT DATA ===== */

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
    tech: ["Web Dev", "Product Strategy", "Verification"],
  },
  {
    title: "Career Mirror – AI Guidance",
    description: "AI career recommendation system using NLP + ML.",
    tech: ["FastAPI", "spaCy", "ML", "FAISS"],
  },
  {
    title: "Cultural Text Digitization",
    description: "OCR + NLP reconstruction of ancient texts.",
    tech: ["OCR", "NLP", "Processing"],
  },
  {
    title: "Marketing Automation Systems",
    description: "Lead pipelines and CRM workflows.",
    tech: ["Automation", "CRM", "Ads"],
  },
  {
    title: "Hackathon MVP Builds",
    description: "Rapid product builds solving real problems.",
    tech: ["Prototyping", "Pitching"],
  },
];

/* ===== PROJECT CARD ===== */

function ProjectCard({ project, index }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04 }}
      onClick={() => setOpen(!open)}
      className="cursor-pointer bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl 
      border border-white/10 shadow-2xl hover:shadow-blue-500/40 transition"
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>

      {open && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ===== MAIN PAGE ===== */

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <MinimalAnimatedBackground />

      {/* ===== HERO ===== */}
<section className="min-h-screen flex flex-col items-center justify-center px-6 gap-12 text-center md:flex-row md:text-left md:px-20">

  {/* TEXT */}
  <div className="w-full md:w-1/2 space-y-4">

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-lg md:text-2xl text-gray-400 uppercase tracking-widest"
    >
      Hello, I’m
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
    >
      Michelle Wilson
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0"
    >
      AIML Engineering Student building intelligent systems and real-world products
    </motion.p>
  </div>

  {/* IMAGE */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="w-full flex justify-center md:w-1/2"
  >
    <div className="relative w-[260px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[520px] md:h-[680px] rounded-3xl overflow-hidden shadow-2xl">
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


      {/* ===== SKILLS ===== */}

      <section className="py-24 px-6 md:px-24">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {[
            { title: "Programming", skills: ["Python", "C++", "Java", "Web Dev", "Git"] },
            { title: "Data & ML", skills: ["NumPy", "ML", "NLP", "Analysis"] },
            { title: "AI Systems", skills: ["LLMs", "APIs", "Automation"] },
          ].map((group, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-6">{group.title}</h3>

              <ul className="space-y-2 text-gray-300">
                {group.skills.map((skill, idx) => (
                  <li key={idx}>→ {skill}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* ===== PROJECTS ===== */}

      <section className="py-24 px-6 md:px-24">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

      </section>

      {/* ===== ABOUT + CONTACT ===== */}

      <section className="py-24 px-6 md:px-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>

            <p className="text-gray-300 text-lg">
              I’m an AIML engineering student passionate about building intelligent systems that solve real-world problems.
            </p>

            <p className="text-gray-300 text-lg">
              I focus on scalable products combining ML, backend systems, and clean UX.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>

            <p className="text-gray-300 mb-6">
              Open to internships, collaborations & projects.
            </p>

            <div className="space-y-3">
              <p className="text-blue-400">📧 michellewilson0904@email.com</p>
              <p className="text-blue-400">📱 +91 9108841009</p>
            </div>

            <button className="mt-8 px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition">
              Contact Me
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}
                          