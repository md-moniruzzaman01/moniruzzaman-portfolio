import About from "./partials/About";
import Services from "./partials/Services";
import Portfolio from "./partials/portfolio";
import Experience from "./partials/Experience";
import Contact from "./partials/Contact";
import HeroSection from "./partials/HeroSection";
import WorkedWithSection from "./partials/WorkWithCompany";
import { myPartners } from "./config/constaints";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkedWithSection partners={myPartners} />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />



    </div>
  );
}

// {/* <main className="container mx-auto px-4 py-12">
//   {/* Hero Section */}
//   <section id="hero" className="text-center mb-12">
//     <h1 className="text-4xl font-bold mb-4">Moniruzzaman | Web Developer</h1>
//     <p className="text-lg text-gray-700">
//       I build modern, responsive websites for small businesses in NYC using
//       React and Next.js. Affordable, professional, and SEO-friendly web
//       solutions.
//     </p>
//   </section>

//   {/* About Section */}
//   <section id="about" className="mb-12">
//     <h2 className="text-3xl font-semibold mb-4">About Me</h2>
//     <p className="text-gray-700">
//       Hi, I'm Moniruzzaman, a passionate web developer based in New York. I help
//       small businesses establish a strong online presence through clean,
//       functional, and SEO-optimized websites. My expertise includes React,
//       Next.js, responsive design, and performance optimization.
//     </p>
//   </section>

//   {/* Skills Section */}
//   <section id="skills" className="mb-12">
//     <h2 className="text-3xl font-semibold mb-4">Skills</h2>
//     <ul className="list-disc list-inside text-gray-700 space-y-2">
//       <li>React.js & Next.js Development (React developer NY)</li>
//       <li>Responsive & SEO-friendly Web Design (small business website NYC)</li>
//       <li>JavaScript, TypeScript, HTML5, CSS3</li>
//       <li>Small Business Website Solutions</li>
//       <li>Performance Optimization & Web Accessibility</li>
//     </ul>
//   </section>

//   {/* Projects Section */}
//   <section id="projects" className="mb-12">
//     <h2 className="text-3xl font-semibold mb-4">Projects</h2>
//     <article className="mb-4 p-4 border rounded shadow-sm">
//       <h3 className="text-xl font-bold">Cafe Website NYC</h3>
//       <Image
//         src="/projects/cafe-nyc.png"
//         alt="Small business website NYC built with Next.js"
//         width={600}
//         height={400}
//         className="rounded"
//       />
//       <p>
//         Responsive website for a local NYC café built with Next.js and Tailwind
//         CSS.
//       </p>
//     </article>
//     <article className="mb-4 p-4 border rounded shadow-sm">
//       <h3 className="text-xl font-bold">E-commerce Platform</h3>
//       <p>
//         Small business e-commerce platform using React and Stripe integration in
//         New York.
//       </p>
//     </article>
//   </section>

//   {/* Contact Section */}
//   <section id="contact">
//     <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
//     <p>
//       Email:{" "}
//       <a
//         href="mailto:dev.moniruzzaman@gmail.com"
//         className="text-blue-400 hover:underline"
//       >
//         dev.moniruzzaman@gamil.com
//       </a>
//     </p>
//     <p>Phone: +1 123-456-7890</p>
//     <p>
//       Connect on{" "}
//       <a
//         href="https://www.linkedin.com/in/moniruzzaman-ripon"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-400 hover:underline"
//       >
//         LinkedIn
//       </a>
//     </p>
//   </section>
// </main>; */}
