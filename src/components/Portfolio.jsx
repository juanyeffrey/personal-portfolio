import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiMysql, SiDocker, SiKubernetes, SiGithub, SiLinkedin, SiOrcid, SiMaildotcom } from "react-icons/si";
import { FaAws, FaFileDownload } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { link } from "framer-motion/client";

const sectionGradients = {
  skills: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-blue-100 via-cyan-50 to-purple-100 p-1",
  experience: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-green-100 via-lime-50 to-emerald-100 p-1",
  research: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-yellow-100 via-orange-50 to-red-100 p-1",
  projects: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-indigo-100 via-sky-50 to-pink-100 p-1"
};
const innerContent = "bg-white rounded-xl p-4";

const skills = [
  { icon: <SiPython size={48} color="#3776AB" />, name: "Python" },
  { icon: <SiTensorflow size={48} color="#FF6F00" />, name: "TensorFlow" },
  { icon: <SiPytorch size={48} color="#EE4C2C" />, name: "PyTorch" },
  { icon: <SiScikitlearn size={48} color="#F7931E" />, name: "Scikit-learn" },
  { icon: <SiPandas size={48} color="#150458" />, name: "Pandas" },
  { icon: <SiMysql size={48} color="#00758F" />, name: "SQL" },
  { icon: <SiDocker size={48} color="#2496ED" />, name: "Docker" },
  { icon: <FaAws size={48} color="#FF9900" />, name: "AWS" },
  { icon: <SiKubernetes size={48} color="#326CE5" />, name: "Kubernetes" },
  { icon: <TbBrandOpenai size={48} color="#412991" />, name: "LangChain" }
];

const projects = [
  {
    title: "LLM Bias in Clinical Reasoning",
    description: "Used prompt engineering to study and mitigate bias in LLMs for clinical education tasks.",
    link: "https://github.com/juanyeffrey/MDPlus_Datathon/tree/main"
  },
  {
    title: "Airbnb Price and Host Prediction",
    description: "Built ensemble models to predict rent prices of Chicago Airbnbs.",
    link: "https://github.com/juanyeffrey/Airbnb-Price-Prediction/tree/main"
  },
  {
    title: "Deciphering Diabetes",
    description: "Analyzed 10 years of US hospital data to evaluate demographic factors and treatments in patient outcomes.",
    link: "https://github.com/juanyeffrey/Deciphering-Diabetes"
  }
];

const experiences = [
  {
    company: "CME Group",
    role: "Data Science Intern",
    duration: "June 2024 – Present",
    description: "Developed deep learning and GCP-based data tools for finance and marketing ops.",
    logo: `${import.meta.env.BASE_URL}images/cme-logo.png`,
    link: "https://www.cmegroup.com/",
    buttonText: "Visit CME Group"
  },
  {
    company: "Northwestern University",
    role: "Teaching Assistant, Stats 303 Data Science",
    duration: "Sept 2024 – Present",
    description: "Taught core ML and Python skills, mentored student projects on social impact topics.",
    logo: `${import.meta.env.BASE_URL}images/northwestern-logo.png`,
    link: "https://www.northwestern.edu/",
    buttonText: "Learn about Northwestern"
  },
  {
    company: "Learngle",
    role: "Founding Engineer",
    duration: "Feb 2023 – Present",
    description: "Built a clinical informatics learning platform integrated with MGH/Harvard curriculum.",
    logo: `${import.meta.env.BASE_URL}images/learngle-logo.png`,
    link: "https://learngle.com/",
    buttonText: "See Learngle Platform"
  },
  {
    company: "Harvard Medical School, Significance Lab",
    role: "Research Assistant",
    duration: "Dec 2022 – Present",
    description: "Created predictive models and cluster analyses using clinical data from MIMIC-IV.",
    logo: `${import.meta.env.BASE_URL}images/harvard-logo.png`,
    link: "https://significancelab.org/",
    buttonText: "Explore The Significance Lab"
  }
];

const research = [
  {
    title: "Development and validation of a machine learning framework for improved resource allocation in the emergency department",
    description: "Trained and tuned models on MIMIC-IV to predict care needs and resource allocation in the Emergency Room.",
    link: "https://www.sciencedirect.com/science/article/pii/S0735675724003644?via%3Dihub"
  },
  {
    title: "NexusGraph: NLP Innovation for Scientific Methodology Replication",
    description: "Developed NLP tool to help parse and select information from scientic research for reproducability.",
    link: "https://conductscience.org/articles/conductscience-proceedings/v1/i1/nexusgraph-nlp-innovation-for-scientific-methodology-replication"
  },
  {
    title: "The Emergency Leadership Dashboard: A Comprehensive System for Visualizing Operations across Educational, Administrative, and Research Sectors",
    description: "Created a dashboard to visualize and analyze operational data from the Emergency Department for hospitals in Saudi Arabia.",
    link: "https://conductscience.org/articles/conductscience-proceedings/v1/i1/the-emergency-leadership-dashboard-a-comprehensive-system-for-visualizing-operations-across-educational-administrative-and-research-sectors"
  },
  {
    title: "Network Analysis in Global Emergency Medicine: Mapping Collaborative Structures and Enhancing Connectivity",
    description: "Identified key structural patterns to enhance international connectivity and knowledge sharing with network analysis in global emergency medicine.",
    link: "https://conductscience.org/articles/conductscience-proceedings/v1/i1/network-analysis-in-global-emergency-medicine-mapping-collaborative-structures-and-enhancing-connectivity"
  },
  {
    title: "Latent shock identification through trajectory of shockindex in emergency setting",
    description: "Developed a clustering model to identify latent shock in patients using the Shock Index metric.",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/acem.14906"
  }
];

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="sticky top-0 z-50 bg-white py-3 mb-4 shadow-sm rounded-xl">
  <div className="flex justify-between items-center max-w-5xl mx-auto px-4">
    <div className="flex gap-4">
    <a href={`${import.meta.env.BASE_URL}resume/Jeffrey_Yuan_Resume_2025.pdf`} download title="Download Resume">
        <FaFileDownload size={24} className="text-gray-600 hover:text-gray-900" />
      </a>
      <a href="mailto:mailjeffreyyuan@gmail.com" title="Email Me">
        <SiMaildotcom  il size={24} className="text-red-600 hover:text-red-700 transition-colors duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/jeffrey-yuan-668255212/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <SiLinkedin size={24} className="text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://orcid.org/0009-0006-7356-1118" target="_blank" rel="noopener noreferrer" title="Research Portfolio">
        <SiOrcid size={24} className="text-green-600 hover:text-green-700" />
      </a>
      <a href="https://github.com/juanyeffrey" target="_blank" rel="noopener noreferrer" title="GitHub">
        <SiGithub size={24} className="text-gray-700 hover:text-black" />
      </a>
    </div>
    <div className="flex gap-4">
      <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium">Skills</a>
      <a href="#experience" className="text-gray-700 hover:text-green-600 font-medium">Experience</a>
      <a href="#research" className="text-gray-700 hover:text-yellow-600 font-medium">Research</a>
      <a href="#projects" className="text-gray-700 hover:text-pink-600 font-medium">Projects</a>
    </div>
  </div>
</div>

<div className="flex flex-row items-center justify-between pt-12 mb-20 gap-8">
  {/* Left side: Picture */}
  <motion.div
    className="flex-1 flex justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    <img
      src={`${import.meta.env.BASE_URL}images/Jeffrey_Yuan_Casual.jpg`}
      alt="Jeffrey Yuan"
      className="rounded-2xl shadow-lg w-64 h-64 object-cover"
    />
  </motion.div>

  {/* Right side: Text */}
  <div className="text-left flex-1">
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Jeffrey Yuan
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl text-gray-600 mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Data Scientist, ML Engineer, & Researcher
    </motion.p>

    <motion.p
      className="text-base md:text-lg text-gray-700 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      Hi, I'm Jeffrey Yuan — a Data Science, Statistics, and Biological Science student at Northwestern, passionate about leveraging and advancing machine learning and statistical modeling to solve real-world problems.
    </motion.p>
  </div>
</div>

      <div id="skills" className={`${sectionGradients.skills} mb-6`}>
  <div className={innerContent}>
  <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Core Skills</h2>
  <div className="grid grid-cols-5 gap-6 justify-items-center">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          {skill.icon}
          <span className="text-base mt-2 text-gray-800 font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
</div>



<div id="experience" className={`${sectionGradients.experience} mb-6`}>
  <div className={innerContent}>
    <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Professional Experience</h2>
    <div className="grid gap-4">
      {experiences.map((exp, idx) => (
        <motion.div
        key={idx}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="block"
      >
        <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-4 flex flex-row items-center gap-6">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain rounded-md shadow-sm"
              />
            </div>
      
            {/* Right: Text + Button */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{exp.role} — {exp.company}</h3>
              <p className="text-sm text-gray-600 mb-2 italic">{exp.duration}</p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <Button asChild className="bg-gray-800 hover:bg-gray-900 text-white">
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  {exp.buttonText}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      ))}
    </div>
  </div>
</div>

      <div id="research" className={`${sectionGradients.research} mb-6`}>
  <div className={innerContent}>
    <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Research</h2>
    <div className="grid gap-4">
      {research.map((entry, idx) => (
        <motion.a
          key={idx}
          href={entry.link} 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="block"
        >
          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{entry.title}</h3>
              <p className="text-gray-700">{entry.description}</p>
              <Button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white">
                View Research
              </Button>
            </CardContent>
          </Card>
        </motion.a>
      ))}
    </div>
  </div>
</div>

      <div id="projects" className={sectionGradients.projects}>
  <div className={innerContent}>
    <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Featured Projects</h2>
    <div className="grid gap-4">
      {projects.map((project, idx) => (
        <motion.a
          key={idx}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="block"
        >
          <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="mb-2 text-gray-700">{project.description}</p>
              <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        </motion.a>
      ))}
    </div>
  </div>
</div>


<hr className="my-8 border-t border-gray-300" />
<footer className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4 text-sm text-gray-500">
  <div className="flex gap-4">
    <a href="https://www.linkedin.com/in/jeffrey-yuan-668255212/" target="_blank" rel="noopener noreferrer">
      <SiLinkedin size={24} />
    </a>
    <a href="https://github.com/juanyeffrey" target="_blank" rel="noopener noreferrer">
      <SiGithub size={24} />
    </a>
    <a href="mailto:mailjeffreyyuan@gmail.com">
      <SiMaildotcom size={24} />
    </a>
  </div>
  <div className="text-center md:text-right">
    © {new Date().getFullYear()} | Designed and coded by Jeffrey Yuan
  </div>
</footer>
    </div>
  );
}
