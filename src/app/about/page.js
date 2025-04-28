"use client";
import { useEffect, useState } from "react";
import { CheckCircleIcon, AcademicCapIcon, LightBulbIcon, HeartIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-100 to-white text-stone-900">
      {/* HERO SECTION */}
            
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center text-center px-4">
        
        {/* Background Image with Blur (Visible on Mobile Too) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/about-img.jpg")',
          }}
        >
          {/* Blurred Overlay (Only on Mobile) */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/30 sm:backdrop-blur-none backdrop-blur-lg"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wide uppercase">
            Elevating <span className="text-cyan-400">Cardiac Care</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mt-4">
            A journey shaped by science, passion, and patient-focused care
          </p>
        </div>
      </section>



        
      {/* TIMELINE SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">
          My Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Timeline Line (Desktop Only) */}
          <div className="hidden sm:block absolute left-6 top-0 w-[4px] h-full bg-cyan-500"></div>

          {[
            { year: "2019", title: "Medical School Begins", description: "Entered Athens School of Medicine with a vision to provide holistic, evidence-based and patient-centered medical care.", icon: <AcademicCapIcon className="h-8 w-8 text-cyan-500" /> },
            { year: "2022", title: "Starting Clinical Rotations", description: "Gained hands-on experience treating patients in multiple specialties, including cardiology and internal medicine.", icon: <HeartIcon className="h-8 w-8 text-red-500" /> },
            { year: "2023", title: "Starting Medical Research", description: "Focusing on domains of Mitral valvular disease, Extracorporeal Mechanic Oxygenation (ECMO) and MASLD.", icon: <LightBulbIcon className="h-8 w-8 text-yellow-500" /> },
            { year: "2025", title: "Graduation & Beyond", description: "Now seeking to specialize in advanced cardiac care, continuing my passion for patient-centered medicine.", icon: <CheckCircleIcon className="h-8 w-8 text-green-500" /> },
          ].map((item, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 mb-12">
              
              {/* Connector Line (Mobile Only) */}
              {index !== 0 && (
                <div className="absolute top-[-24px] left-[50%] sm:hidden w-[2px] h-[24px] bg-cyan-500"></div>
              )}

              {/* Circle with Icon */}
              <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center bg-white border-2 border-cyan-500 shadow-md rounded-full z-10 sm:ml-[-7px]">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="text-center sm:text-left max-w-md sm:pl-4">
                <h3 className="text-2xl font-semibold">{item.year}</h3>
                <h4 className="text-lg text-cyan-600 font-medium">{item.title}</h4>
                <p className="text-stone-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* CORE VALUES */}
        <section className="bg-gradient-to-b from-stone-50 via-white to-stone-50 py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mb-6">
              Core Values
            </h2>
            <p className="text-stone-600 mb-14 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              The principles that guide my journey in medicine and beyond.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  title: "Excellence", 
                  description: "Commitment to continuous learning, clinical mastery, and top-tier patient care.", 
                  icon: <CheckCircleIcon className="h-12 w-12 text-cyan-600 mx-auto" /> 
                },
                { 
                  title: "Empathy", 
                  description: "Building genuine human connections with every patient through compassionate care.", 
                  icon: <UsersIcon className="h-12 w-12 text-cyan-600 mx-auto" /> 
                },
                { 
                  title: "Innovation", 
                  description: "Embracing research and technology to push the boundaries of modern medicine.", 
                  icon: <LightBulbIcon className="h-12 w-12 text-cyan-600 mx-auto" /> 
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
          {/* TESTIMONIALS */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-stone-50 to-white">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mb-6">
              What Others Say
            </h2>
            <p className="text-stone-600 mb-14 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Insights from mentors and colleagues on my work ethic, clinical dedication, and patient-centered approach.
            </p>

            <div className="grid gap-10 sm:grid-cols-2 max-w-5xl mx-auto">
              {[
                { 
                  name: "Dr. Nikolaos P.", 
                  role: "Professor of Neurosurgery, MD, PhD", 
                  quote: "Marios has an exceptional ability to blend technical expertise with genuine patient care. A promising future awaits him." 
                },
                { 
                  name: "Dr. Georgia K.", 
                  role: "Internal Medicine Specialist", 
                  quote: "His dedication to medicine and research is unmatched. Marios is a true asset to any medical institution." 
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                >
                  <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2">
                    <div className="bg-cyan-600 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 3a8 8 0 110-16 8 8 0 010 16z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-stone-700 italic mb-6 mt-8 leading-relaxed">&quot;{item.quote}&quot;</p>
                  <div className="border-t border-stone-200 pt-4">
                    <h4 className="font-semibold text-stone-900">{item.name}</h4>
                    <p className="text-sm text-cyan-600 mt-1">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      {/* CTA - CONTACT */}
      <section className="bg-cyan-600 text-white py-14 text-center px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold">Let&apos;s Connect</h2>
      <p className="text-lg mt-3 sm:mt-4 max-w-xl mx-auto">
        If you&apos;re interested in collaborating, discussing research initiatives, or sharing insights on patient care, feel free to reach out.
      </p>

        <a href="/contact" className="mt-6 inline-block bg-white text-cyan-600 px-8 py-3 rounded-md font-semibold transition hover:bg-gray-200">
          Contact Me
        </a>
      </section>
    </main>
  );
}
