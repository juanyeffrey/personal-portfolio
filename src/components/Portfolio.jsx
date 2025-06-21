import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiMysql, SiDocker, SiKubernetes, SiGithub, SiLinkedin, SiOrcid, SiMaildotcom, SiR, SiJavascript, SiNumpy, SiGooglecloud, SiMongodb, SiApachespark, SiHuggingface } from "react-icons/si";
import { FaAws, FaFileDownload, FaGraduationCap, FaEnvelope, FaCalendarAlt, FaBrain, FaHome, FaChartLine } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";

const sectionGradients = {
  home: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-100 p-1",
  about: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-emerald-100 via-teal-50 to-cyan-100 p-1",
  skills: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-sky-100 via-blue-50 to-indigo-100 p-1",
  experience: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-green-100 via-emerald-50 to-teal-100 p-1",
  research: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100 p-1",
  projects: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-violet-100 via-purple-50 to-fuchsia-100 p-1",
  education: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-purple-100 via-violet-50 to-indigo-100 p-1",
  contact: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-teal-100 via-emerald-50 to-green-100 p-1"
};
const innerContent = "bg-white rounded-xl p-4";

const skills = {
  "Programming Languages": [
    { icon: <SiPython size={32} color="#3776AB" />, name: "Python" },
    { icon: <SiR size={32} color="#276DC3" />, name: "R" },
    { icon: <SiMysql size={32} color="#00758F" />, name: "SQL" },
    { icon: <SiJavascript size={32} color="#F7DF1E" />, name: "JavaScript" }
  ],
  "ML Frameworks & Libraries": [
    { icon: <SiTensorflow size={32} color="#FF6F00" />, name: "TensorFlow" },
    { icon: <SiPytorch size={32} color="#EE4C2C" />, name: "PyTorch" },
    { icon: <SiScikitlearn size={32} color="#F7931E" />, name: "Scikit-learn" },
    { icon: <SiPandas size={32} color="#150458" />, name: "Pandas" },
    { icon: <SiNumpy size={32} color="#013243" />, name: "NumPy" },
    { icon: <SiPython size={24} color="#3776AB" />, name: "Matplotlib" },
    { icon: <SiPython size={24} color="#3776AB" />, name: "Seaborn" }
  ],
  "Cloud Platforms & MLOps": [
    { icon: <FaAws size={32} color="#FF9900" />, name: "AWS" },
    { icon: <SiGooglecloud size={32} color="#4285F4" />, name: "Google Cloud Platform" },
    { icon: <SiDocker size={32} color="#2496ED" />, name: "Docker" },
    { icon: <SiKubernetes size={32} color="#326CE5" />, name: "Kubernetes" },
    { icon: <SiPython size={24} color="#3776AB" />, name: "MLflow" }
  ],
  "Data Tools & Databases": [
    { icon: <SiMysql size={32} color="#00758F" />, name: "MySQL" },
    { icon: <SiMysql size={32} color="#336791" />, name: "PostgreSQL" },
    { icon: <SiMongodb size={32} color="#47A248" />, name: "MongoDB" },
    { icon: <SiApachespark size={32} color="#E25A1C" />, name: "Apache Spark" },
    { icon: <SiApachespark size={24} color="#E25A1C" />, name: "Hadoop" }
  ],
  "Specialized AI Tools": [
    { icon: <TbBrandOpenai size={32} color="#412991" />, name: "LangChain" },
    { icon: <SiHuggingface size={32} color="#FFD21E" />, name: "Hugging Face" },
    { icon: <TbBrandOpenai size={32} color="#412991" />, name: "OpenAI API" },
    { icon: <SiPython size={24} color="#3776AB" />, name: "Weights & Biases" }
  ]
};

const projects = [
  {
    id: 1,
    title: "LLM Bias Mitigation in Clinical Reasoning",
    tagline: "Assessing how age and gender affect LLM accuracy in clinical reasoning",
    category: "Natural Language Processing",
    technologies: ["Python", "Llama-3", "Transformers", "Data Analytics"],
    image: <MdHealthAndSafety size={48} className="text-blue-600" />,
    problemStatement: "Large Language Models (LLMs) used in healthcare may carry biases related to gender, age, and race, potentially reinforcing harmful stereotypes and impacting patient care. These biases can shape future medical professionals' decision-making and affect patient outcomes.",
    dataCollection: "Accessed 10,179 medical exam questions, tagging them by age and gender. Organized test questions by patient gender (male/female) and age (toddler, child, adult, senior) to assess accuracy differences across demographics.",
    methodology: "Utilized the Llama 3.1 language model via its publicly available API, maintaining consistent model configuration. Inputted all 10,179 test questions independently, recording answers and calculating accuracy for each subgroup. Varied prompts across four iterations to asses the effects of prompt engineering on LLM accuracy",
    results: "Observed no significant differences in accuracy across the four prompts, but found a significant difference in accuracy for adults. No significant differences in accuracy were found between males and females. Accuracy was highest when the LLM was unprompted compared to being provided key phrases (e.g., 'unbiased', 'doctor'), which decreased accuracy to 48.96%. Toddler-related questions showed the highest accuracy across all prompts.",
    insights: "Demonstrated that prompting the LLM with terms like 'unbiased' or 'doctor' decreased accuracy, potentially due to 'model collapse'. The study highlighted the importance of continuous reassessment of LLM bias in model outputs. Future research should subdivide the adult age group for more granular analysis and investigate the impact of race on model accuracy.",
    link: "https://github.com/juanyeffrey/MDPlus_Datathon/tree/main"
  },
  {
    id: 2,
    title: "Ensemble-Based Airbnb Price Prediction",
    tagline: "ML-powered dynamic pricing for the sharing economy",
    category: "Machine Learning",
    technologies: ["Python", "XGBoost", "Random Forest", "Supervised Learning", "Scikit-learn"],
    image: <FaHome size={48} className="text-green-600" />,
    problemStatement: "Chicago's Airbnb market lacks accurate pricing tools, with several new hosts underpricing by >20%, leading to $2.1M in lost revenue annually. Existing solutions don't account for dynamic market factors and local competition patterns.",
    dataCollection: "Processed listing data from Airbnb for the city of Chicago in 2023",
    methodology: "Built stacked ensemble combining XGBoost, Random Forest, and Catboost models. Created 52 features including geospatial clusters, seasonal trends, and sentiment of reviews.",
    results: "Achieved RMSE of $9.83. Predictions within $5 of actual prices 96% of the time. Model suggests pricing changes that could increase host revenue by an average of 18%.",
    insights: "Ensemble approach proved superior with several boosting and bagging based supervised learning models handling non-linear relationships. Surprising finding: review sentiment was less predictive than review frequency. Future enhancements include incorporating competitor pricing data.",
    link: "https://github.com/juanyeffrey/Airbnb-Price-Prediction/tree/main"
  },
  {
    id: 3,
    title: "Demographic Disparities in Diabetes Care Analytics",
    tagline: "Identified factors affecting diabetic patient outcomes to improve equitable care.",
    category: "Healthcare Analytics",
    technologies: ["Python", "Statistical Analysis", "Exlporatory Data Analysis", "Data Visualization"],
    image: <FaChartLine size={48} className="text-purple-600" />,
    problemStatement: "Diabetes affects 37.3 million Americans with $412B annual healthcare costs, yet treatment outcomes vary significantly by demographics. Analysis aims to identify intervention opportunities that could improve outcomes for 2.8M patients annually.",
    dataCollection: "Utilized the CDC Diabetes Surveillance Dataset (2000-2022) for national diabetes incidence trends. Integrated the Diabetes 130 US Hospitals dataset (1999-2008), tracking clinical care statistics for admitted diabetic patients, including procedures, medications, and admission sources. Cleaned data by converting numerical columns, mapping state abbreviations, and handling null values in categorical columns.",
    methodology: "Analyzed diabetes prevalence changes over time, focusing on median cases and rate of change. Investigated demographic impacts (age, race, gender) on outcomes such as diagnoses, procedures, hospital time, and emergency visits. Examined the influence of prior medical care (admission source) on inpatient visits, procedures, hospital time, and in-hospital expiration rates. Determined drug usage patterns and their effects on glucose levels and readmission rates.",
    results: "Revealed a steady increase in US diabetes prevalence, with an average growth rate of 0.18% annually (approximately 500k new diagnoses per year). Identified eight states (AL, KY, LA, MS, NM, OK, VA, WV) with a high rate of change (>0.25%) in diabetes prevalence. Demonstrated that increased age correlates with more diagnoses and longer hospital stays, but not an increase in procedures, suggesting inefficient care for the elderly. Found diabetic females are 1.22 times more likely to visit the emergency room than males, despite similar overall health outcomes. Highlighted that most minority groups visit the emergency room more than Caucasians (Hispanics 23% more, African-Americans 40% more), while Asians are 50% less likely but have similar death and transfer rates. Patients from skilled nursing facilities experienced three times higher expiration rates and consistently higher inpatient visits, procedures, and hospital time. Found insulin to be the most prescribed drug (4x more than metformin) but showed worse glucose level outcomes (30% patients >300 glucose levels vs. 23% for metformin) and no significant difference in readmission rates compared to metformin. Insulin prescription increased by 28% as symptoms worsened, compared to an 8% increase for metformin.",
    insights: "Current standardized procedures may be inefficient for elderly diabetic patients. Sociocultural factors may influence emergency room visits among diabetic females and Asians. Policy interventions should target high-growth states and provide more resources to skilled nursing facilities. Over-prescription of insulin may occur, suggesting alternative medications like metformin could optimize care and reduce costs.",
    link: "https://github.com/juanyeffrey/Deciphering-Diabetes"
  }
];

const experiences = [
  {
    company: "CME Group",
    role: "Data Science Intern",
    duration: "June 2024 – Present",
    location: "Chicago, IL",
    description: "Automated data retrieval for key financial and marketing databases. Designed and deployed full-lifecycle MLOps solution on Vertex AI and developed deep learning models for treasury note futures prediction",
    achievements: [
      "Boosted data retrieval efficiency by 99% by implementing Agentic AI (NL2SQL) system for key databases",
      "Led the full-lifecycle MLOps deployment for Product Market Qualified Leads (PMQL) prediction on Vertex AI",
      "Developed and validated deep learning models for 10-year treasury note futures, leveraging Commitment of Traders data", 
      "Enabled $360K in annual revenue by creating a scalable BigQuery SQL code repository for CME API customers"
    ],
    technologies: ["Python", "TensorFlow", "GCP", "BigQuery", "Docker", "Kubernetes"],
    logo: `${import.meta.env.BASE_URL}images/cme-logo.png`,
    link: "https://www.cmegroup.com/"
  },
  {
    company: "Northwestern University",
    role: "Teaching Assistant, Stats 303 Data Science",
    duration: "Sept 2024 – Present",
    location: "Evanston, IL",
    description: "Mentored 80+ students in ML fundamentals and Python skills. Guided student projects on social impact topics, demonstrating exceptional ability to explain complex concepts clearly.",
    achievements: [
      "Mentored 80+ students in machine learning fundamentals and statistical programming",
      "Designed and graded assignments covering supervised learning algorithms and data preprocessing",
      "Led weekly review sessions teaching Python, pandas, scikit-learn implementation",
      "Guided 5 student teams on ML projects in real estate pricing and order fulfillment",
    ],
    technologies: ["Python", "Jupyter", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    logo: `${import.meta.env.BASE_URL}images/NU-logo.png`,
    link: "https://www.northwestern.edu/"
  },
  {
    company: "Learngle",
    role: "Founding Engineer",
    duration: "Feb 2023 – Mar 2024",
    location: "Remote",
    description: "Built a clinical informatics learning platform integrated with MGH/Harvard curriculum. Developed AI-powered educational tools serving medical students, residents, and physicians.",
    achievements: [
      "Co-founded educational technology startup serving 500+ users",
      "Developed RAG based clinical case generation using GPT-4 and exam questions documents",
      "Built adaptive learning algorithms personalizing content for individual student progress",
      "Integrated platform with Harvard Medical School curriculum reaching 200+ residents",
      "Secured partnership with Massachusetts General Hospital for clinical content validation"
    ],
    technologies: ["React", "Node.js", "Python", "OpenAI API", "RAG", "MongoDB"],
    logo: `${import.meta.env.BASE_URL}images/learngle-logo.png`,
    link: "https://learngle.com/"
  },
  {
    company: "Harvard Medical School, Significance Lab",
    role: "Research Assistant",
    duration: "Dec 2022 – Present",
    location: "Boston, MA",
    description: "Created predictive models and cluster analyses using clinical data from MIMIC-IV. Developed novel ensemble methods for healthcare prediction with rigorous methodological approach.",
    achievements: [
      "Developed machine learning models for emergency department resource allocation",
      "Created clustering algorithms identifying latent patient phenotypes from EHR data",
      "Collaborated with physicians to translate clinical needs into ML solutions",
      "Published peer-reviewed papers in top-tier medical and AI conferences",
      "Presented research findings at 4 conferences through poster and oral presentations"
    ],
    technologies: ["Python", "Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Clustering", "Statistical Analysis"],
    logo: `${import.meta.env.BASE_URL}images/harvard-logo.png`,
    link: "https://significancelab.org/"
  }
];

const research = [
  {
    title: "Development and validation of a machine learning framework for improved resource allocation in the emergency department",
    authors: "El Ariss A.B., Kijpaisalratana N., Ahmed S., Yuan J., Coleska A., Marshall A., Luo A.D., He S.",
    venue: "American Journal of Emergency Medicine",
    date: "2024",
    Description: "We developed and validated a comprehensive ML framework for predicting emergency department resource needs using MIMIC-IV data. The framework combines ensemble methods with real-time monitoring to optimize resource and equipment allocation.",
    contributions: "Co-authored research contributing to algorithm development and statistical validation. Implemented novel ensemble approach combining patient acuity with resource forecasting.",
    link: "https://pubmed.ncbi.nlm.nih.gov/39127019/"
  },
  {
    title: "NexusGraph: NLP Innovation for Scientific Methodology Replication",
    authors: "El Ariss A.B., Kijpaisalratana N., Yuan J., Mohamed A.M.A., Corscadden L.",
    venue: "ConductScience Proceedings",
    date: "2024",
    Description: "Developed an NLP tool to automatically parse and extract methodological information from scientific papers to improve research reproducibility. The system uses transformer models to identify key experimental parameters and procedures.",
    contributions: "Co-authored research contributing to NLP pipeline design and evaluated model performance on scientific text. Implemented transformer-based models for information extraction.",
    link: "https://research.conductscience.com/articles/conductscience-proceedings/v1/i1/nexusgraph-nlp-innovation-for-scientific-methodology-replication"
  },
  {
    title: "The Emergency Leadership Dashboard: A Comprehensive System for Visualizing Operations across Educational, Administrative, and Research Sectors",
    authors: "Al Salamah Tareq., El Ariss A.B., Kijpaisalratana N.,  Yuan J. Abuguyan F., He S.",
    venue: "ConductScience Proceedings", 
    date: "2024",
    Description: "Created an interactive dashboard system for visualizing and analyzing operational data from emergency departments in Saudi Arabia. Integrated multiple data sources to provide real-time insights for hospital administrators.",
    contributions: "Led technical architecture design and implemented data visualization components.",
    link: "https://conductscience.org/articles/conductscience-proceedings/v1/i1/the-emergency-leadership-dashboard-a-comprehensive-system-for-visualizing-operations-across-educational-administrative-and-research-sectors"
  },
  {
    title: "Network Analysis in Global Emergency Medicine: Mapping Collaborative Structures and Enhancing Connectivity", 
    authors:"Kijpaisalratana N., El Ariss A.B., Menon P., Yuan J., Chen D., Shannon K., Memon R., Danaher-Garcia N., Kivlehan S., He S.",
    venue: "ConductScience Proceedings",
    date: "2024",
    Description: "Applied network analysis techniques to map collaboration patterns in global emergency medicine research. Identified key structural patterns to enhance international connectivity and knowledge sharing.",
    contributions: "Developed network analysis algorithms, conducted statistical modeling of collaboration patterns, created visualization tools for research network mapping.",
    link: "https://conductscience.org/articles/conductscience-proceedings/v1/i1/network-analysis-in-global-emergency-medicine-mapping-collaborative-structures-and-enhancing-connectivity"
  },
  {
    title: "Latent shock identification through trajectory of shock index in emergency setting",
    authors: "Kijpaisalratana N., El Ariss A.B.R., Yuan J., Renne C., Lee J., He S.",
    venue: "Society of Academic Emergency Medicine",
    date: "2024",
    Description: "Developed clustering models to identify latent shock states in emergency patients using Shock Index trajectories. The approach enables earlier detection of deteriorating patients who might not meet traditional shock criteria.",
    contributions: "Co-designed clustering algorithms, performed statistical validation, analyzed temporal patterns in patient data, contributed to clinical interpretation of results.",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/acem.14906"
  }
];

const education = {
  degree: "Combined BS/MS in Statistics and Data Science",
  major: "Undergrad degree in Data Science and Biological Sciences",
  university: "Northwestern University",
  location: "Evanston, IL",
  graduationDate: " June 2026",
  gpa: "3.98/4.0",
  relevantCoursework: [
    "STAT 303-1,2,3: Data Science with Python",
    "STAT 304: Data Structures & Algorithms for Data Science",
    "STAT 305: Information Management for Data Science",
    "STAT 320-1,2: Statistical Theory & Methods",
    "STAT 350: Regression Analysis", 
    "STAT 353: Advanced Regression",
    "STAT 362: Advanced Machine Learning for Data Science",
    "STAT 390: Data Science Capstone",
    "STAT 461: Machine Learning on Graphs",
    "IEMS 490: Deep Generative AI",
    "BIOL_SCI 323: Bioinformatics",
    "BIOL_SCI 337: Biostatistics",
    "BIOL_SCI 338: Modeling Biological Dynamics",
  ],
  honors: [
    "CME AI/ML Team Challenge Winner (2024)",
    "MD+ Datathon Runner Up (2024)",
    "Northwestern Conference Travel Grant Recipient (2023, 2024)",
    "Northwestern Undergraduate Research Grant Recipient (2023)",
    "Molecular Biosciences Undergraduate Research Grant Recipient (2022)",
    "Dean's List (All Quarters)",
  ]
};

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderNavigation = () => (
    <div className="sticky top-0 z-50 bg-white py-3 mb-4 shadow-sm rounded-xl">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-4">
        <div className="flex gap-4">
          <a href={`${import.meta.env.BASE_URL}resume/Jeffrey_Yuan_Resume_2025.pdf`} download title="Download Resume">
            <FaFileDownload size={24} className="text-gray-600 hover:text-gray-900" />
          </a>
          <a href="mailto:mailjeffreyyuan@gmail.com" title="Email Me">
            <SiMaildotcom size={24} className="text-gray-600 hover:text-blue-600 transition-colors duration-300" />
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
          <button onClick={() => setCurrentPage('home')} className={`font-medium ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</button>
          <button onClick={() => setCurrentPage('experience')} className={`font-medium ${currentPage === 'experience' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>Experience</button>
          <button onClick={() => setCurrentPage('projects')} className={`font-medium ${currentPage === 'projects' ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'}`}>Projects</button>
          <button onClick={() => setCurrentPage('research')} className={`font-medium ${currentPage === 'research' ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'}`}>Research</button>
          <button onClick={() => setCurrentPage('education')} className={`font-medium ${currentPage === 'education' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Education</button>
          <button onClick={() => setCurrentPage('contact')} className={`font-medium ${currentPage === 'contact' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'}`}>Contact</button>
        </div>
      </div>
    </div>
  );

  const renderHomePage = () => (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center pt-8 lg:pt-12 mb-12 lg:mb-20 gap-6 lg:gap-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4 lg:mb-6">
            Jeffrey Yuan
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-8">
            ML Engineer | Data Scientist | Researcher | Solving Complex Problems with AI
          </p>
        </div>
        
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/Jeffrey_Yuan_Casual.jpg`}
            alt="Jeffrey Yuan"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>
      </div>

      {/* About Me Section */}
      <div className={`${sectionGradients.about} mb-6`}>
        <div className={innerContent}>
          <h2 className="text-4xl font-extrabold mb-8 text-gray-800">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 leading-relaxed font-medium"> I’m a BS/MS student at Northwestern University studying Data Science, Statistics, and Biological Sciences, where I focus on building machine learning systems that create real-world impact. With a foundation in both computational methods and human-centered domains like healthcare and finance, I bring an interdisciplinary approach to solving complex, high-stakes problems through data. </p>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium"> I care deeply about using AI responsibly—applying techniques like bias mitigation, interpretable modeling, and ethical evaluation to ensure technology benefits people equitably. I’m especially interested in projects that advance society, from improving clinical decision-making, expanding access to education, and building accurate, low-latency financial modeles. I approach machine learning not just as a technical challenge, but as a tool for meaningful change. </p> 
              <p className="text-gray-700 mb-6 leading-relaxed font-medium"> Outside of work, you’ll usually find me shooting hoops, biking along the lakefront, or picking up new songs on guitar. I value curiosity, balance, and collaboration and I’m always looking to connect with others who share a passion for thoughtful, purpose-driven innovation. </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-700">My Journey</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">2022</h4>
                  <p className="text-sm text-gray-600">Started my undergraduate studies at Northwestern, drawn to data science and healthcare</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">2023</h4>
                  <p className="text-sm text-gray-600">Joined Harvard Medical School's Significance Lab, beginning my journey in clinical AI research, and started developing Learngle</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">2024</h4>
                  <p className="text-sm text-gray-600">Began my internship at the CME Group, applying ML to financial systems while continuing clinical AI research</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">2025</h4>
                  <p className="text-sm text-gray-600">Began my graduate coursework in Data Science, joined the REAL Lab at Northwestern combing LLMs and GNNs for drug discovery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">Skills & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {Object.entries(skills).map(([category, skillsList]) => (
                <div key={category} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-base lg:text-lg font-semibold text-gray-800 mb-3">{category}</h4>
                  <div className="space-y-2">
                    {skillsList.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {skill.icon && (
                          <div className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
                            {React.cloneElement(skill.icon, { size: window.innerWidth < 1024 ? 20 : 32 })}
                          </div>
                        )}
                        <span className="text-xs lg:text-sm text-gray-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );



  const renderExperiencePage = () => (
    <div className={`${sectionGradients.experience} mb-6`}>
      <div className={innerContent}>
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="block"
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6 mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-16 h-16 object-contain rounded-md shadow-sm"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                      <h4 className="text-xl font-semibold text-gray-600">{exp.company}</h4>
                      <p className="text-gray-500">{exp.duration} | {exp.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="bg-gray-800 hover:bg-gray-900 text-white">
                    <a href={exp.link} target="_blank" rel="noopener noreferrer">
                      Learn More About {exp.company}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsPage = () => (
    <div className={`${sectionGradients.projects} mb-6`}>
      <div className={innerContent}>
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="block"
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 mx-auto sm:mx-0 p-4 bg-gray-50 rounded-xl">{project.image}</div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-4">{project.tagline}</p>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{project.category}</span>
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <section>
                      <h4 className="text-lg font-bold text-gray-700 mb-2">Problem Statement & Motivation</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">{project.problemStatement}</p>
                    </section>

                    <section>
                      <h4 className="text-lg font-bold text-gray-700 mb-2">Methodology & Technical Approach</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">{project.methodology}</p>
                    </section>

                    <section>
                      <h4 className="text-lg font-bold text-gray-700 mb-2">Results & Impact</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">{project.results}</p>
                    </section>

                    <section>
                      <h4 className="text-lg font-bold text-gray-700 mb-2">Key Insights</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">{project.insights}</p>
                    </section>

                    <div className="pt-4">
                      <Button asChild className="bg-gray-800 hover:bg-gray-900 text-white">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <SiGithub className="mr-2" /> View on GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );



  const renderResearchPage = () => (
    <div className={`${sectionGradients.research} mb-6`}>
      <div className={innerContent}>
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Research & Publications</h2>
        <div className="space-y-6">
          {research.map((paper, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="block"
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-2"><strong>Authors:</strong> {paper.authors}</p>
                  <p className="text-gray-600 mb-2"><strong>Published in:</strong> {paper.venue} ({paper.date})</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed">{paper.Description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">My Contributions</h4>
                    <p className="text-gray-600 leading-relaxed">{paper.contributions}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        View Paper
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
  );

  const renderEducationPage = () => (
    <div className={`${sectionGradients.education} mb-6`}>
      <div className={innerContent}>
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Education</h2>
        
        {/* Academic Background */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
            <FaGraduationCap className="mr-3 text-purple-600" />
            Academic Background
          </h3>
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-bold text-gray-800">{education.degree}</h4>
                  <p className="text-lg text-gray-600">{education.major}</p>
                  <p className="text-gray-600 mb-4">{education.university} | {education.location}</p>
                  <p className="text-gray-600 mb-4">Expected Graduation: {education.graduationDate}</p>
                  <p className="text-gray-600 mb-4">GPA: {education.gpa}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-lg font-semibold text-gray-700 mb-2">Relevant Coursework</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {education.relevantCoursework.map((course, i) => (
                        <span key={i} className="text-sm text-gray-600 p-2 bg-gray-50 rounded">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 mb-3">Honors & Awards</h5>
                  <div className="space-y-2">
                    {education.honors.map((honor, i) => (
                      <div key={i} className="p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm font-medium text-purple-800">{honor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>


      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className={`${sectionGradients.contact} mb-6`}>
      <div className={innerContent}>
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Let's Connect</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborations, or just chatting about machine learning and AI. Whether you're a recruiter, researcher, or fellow ML enthusiast, I'd love to hear from you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-teal-600" size={20} />
                <a href="mailto:mailjeffreyyuan@gmail.com" className="text-gray-600 hover:text-teal-600">
                  mailjeffreyyuan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <SiLinkedin className="text-blue-600" size={20} />
                <a href="https://www.linkedin.com/in/jeffrey-yuan-668255212/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <SiGithub className="text-gray-700" size={20} />
                <a href="https://github.com/juanyeffrey" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <SiOrcid className="text-green-600" size={20} />
                <a href="https://orcid.org/0009-0006-7356-1118" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                  Research Profile (ORCID)
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Quick Actions</h4>
              <div className="space-y-3">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a href={`${import.meta.env.BASE_URL}resume/Jeffrey_Yuan_Resume_2025.pdf`} download>
                    <FaFileDownload className="mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  <a href="https://www.linkedin.com/in/jeffrey-yuan-668255212/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                  <a href="https://github.com/juanyeffrey" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="mr-2" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Areas of Interest</h3>
            <div className="space-y-4">
              <div className="p-4 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-2">Healthcare AI & Clinical Informatics</h4>
                <p className="text-sm text-teal-700">Developing ethical AI solutions for medical applications, bias mitigation, and clinical decision support.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Machine Learning Engineering</h4>
                <p className="text-sm text-blue-700">Production ML systems, MLOps, model deployment, and scalable data pipelines.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Research & Development</h4>
                <p className="text-sm text-purple-700">Novel ML algorithms, statistical methods, and interdisciplinary research collaborations.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Educational Technology</h4>
                <p className="text-sm text-green-700">AI-powered learning platforms, personalized education, and knowledge accessibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return renderHomePage();
      case 'experience': return renderExperiencePage();
      case 'projects': return renderProjectsPage();
      case 'research': return renderResearchPage();
      case 'education': return renderEducationPage();
      case 'contact': return renderContactPage();
      default: return renderHomePage();
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {renderNavigation()}
      {renderCurrentPage()}
      
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
