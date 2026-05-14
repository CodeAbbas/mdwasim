import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
export default function PortfolioPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 sm:py-24 space-y-32">
      <Hero />
      
      <div className="space-y-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Professional Experience
        </h2>
        <Experience />
      </div>
      <Skills />
      
      <Education />
      
      {/* Footer / Bottom Spacing */}
      <footer className="pb-12 border-t border-slate-200 pt-8 text-center text-slate-500 text-sm font-medium">
        © {new Date().getFullYear()} Mohammad Wasim. All rights reserved.
      </footer>
    </main>
  );
}
