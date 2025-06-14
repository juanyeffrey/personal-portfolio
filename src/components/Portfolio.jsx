import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiMysql, SiDocker, SiKubernetes, SiGithub, SiLinkedin, SiOrcid, SiMaildotcom, SiR, SiJavascript, SiNumpy, SiGooglecloud, SiMongodb, SiApachespark, SiHuggingface } from "react-icons/si";
import { FaAws, FaFileDownload, FaGraduationCap, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";

const sectionGradients = {
  home: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 p-1",
  about: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-green-100 via-blue-50 to-purple-100 p-1",
  skills: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-blue-100 via-cyan-50 to-purple-100 p-1",
  experience: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-green-100 via-lime-50 to-emerald-100 p-1",
  research: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-yellow-100 via-orange-50 to-red-100 p-1",
  projects: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-indigo-100 via-sky-50 to-pink-100 p-1",
  education: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-purple-100 via-pink-50 to-rose-100 p-1",
  contact: "border-2 rounded-2xl border-transparent bg-gradient-to-r from-teal-100 via-cyan-50 to-blue-100 p-1"
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
    tagline: "Reducing AI bias in healthcare through advanced prompt engineering",
    category: "Natural Language Processing",
    technologies: ["Python", "GPT-4", "Claude-3", "Llama-2", "Transformers"],
    image: "🏥",
    problemStatement: "Large Language Models exhibit systematic bias in clinical decision-making, with studies showing 31% higher error rates for underrepresented populations, affecting approximately 15 million patients annually in US emergency departments.",
    dataCollection: "Synthesized diverse clinical scenarios (n=10,000) representing different demographic groups, medical conditions, and treatment contexts. Created balanced datasets ensuring equal representation across gender, race, age, and socioeconomic factors.",
    methodology: "Implemented comprehensive fairness metrics including equalized odds and demographic parity. Developed constitutional AI prompts, few-shot learning with diverse examples, and evaluated GPT-4, Claude-3, and Llama-2-70B across 12 clinical scenarios using automated bias assessment pipeline.",
    results: "Decreased gender bias by 43% and racial bias by 38% across all models. Improved F1-score from 0.73 to 0.87 for underrepresented groups while maintaining diagnostic accuracy and reducing harmful stereotyping by 52%. Results validated by 3 emergency medicine physicians.",
    insights: "Revealed that prompt engineering alone can significantly reduce AI bias without retraining. Most effective technique was 'perspective-taking prompts' that explicitly ask models to consider multiple demographic contexts. Future work includes extending to other medical specialties.",
    repoStructure: "src/bias_detection/ - fairness metrics implementation, prompts/ - constitutional AI templates, evaluation/ - automated assessment pipeline, docs/ - methodology documentation",
    link: "https://github.com/juanyeffrey/MDPlus_Datathon/tree/main"
  },
  {
    id: 2,
    title: "Ensemble-Based Airbnb Price Optimization",
    tagline: "ML-powered dynamic pricing for the sharing economy",
    category: "Machine Learning",
    technologies: ["Python", "XGBoost", "LSTM", "Random Forest", "Scikit-learn"],
    image: "🏠",
    problemStatement: "Chicago's $847M Airbnb market lacks accurate pricing tools, with 67% of new hosts underpricing by >20%, leading to $2.1M in lost revenue annually. Existing solutions don't account for dynamic market factors and local competition patterns.",
    dataCollection: "Scraped and processed 127K listings from Airbnb API with real-time availability updates. Collected additional data from Chicago Open Data Portal for neighborhood demographics, crime statistics, and public transportation access.",
    methodology: "Built stacked ensemble combining XGBoost, Random Forest, and LSTM neural networks. Created 52 features including geospatial clusters, seasonal trends, sentiment analysis of reviews, and competitor pricing analysis. Used temporal cross-validation to prevent data leakage.",
    results: "Achieved RMSE of $23.40 and MAE of $18.60 (15% improvement over baseline). Predictions within $25 of actual prices 89% of the time. Model suggests pricing changes that could increase host revenue by average 18%. Feature importance: Location cluster (32%), seasonal demand (24%), property amenities (19%).",
    insights: "Ensemble approach proved superior with XGBoost handling non-linear relationships and LSTM capturing temporal patterns. Surprising finding: review sentiment was less predictive than review frequency. Future enhancements include incorporating competitor pricing data.",
    repoStructure: "models/ - ensemble pipeline, features/ - engineering scripts, api/ - prediction service, notebooks/ - analysis and visualization, deployment/ - Docker containers",
    link: "https://github.com/juanyeffrey/Airbnb-Price-Prediction/tree/main"
  },
  {
    id: 3,
    title: "Demographic Disparities in Diabetes Care Analytics",
    tagline: "Uncovering healthcare inequities through data science",
    category: "Healthcare Analytics",
    technologies: ["R", "Python", "Statistical Analysis", "Causal Inference"],
    image: "📊",
    problemStatement: "Diabetes affects 37.3 million Americans with $412B annual healthcare costs, yet treatment outcomes vary significantly by demographics. Analysis aims to identify intervention opportunities that could improve outcomes for 2.8M patients annually.",
    dataCollection: "Analyzed 847K patient records from US hospital database spanning 10 years. Implemented advanced missing data imputation using multiple imputation and ensemble methods. Ensured HIPAA compliance through data anonymization and secure processing.",
    methodology: "Applied logistic regression, survival analysis, and causal inference using propensity score matching. Implemented instrumental variables and difference-in-differences to isolate treatment effects. Stratified analysis by age, race, gender, and socioeconomic factors using AHRQ methodology.",
    results: "Identified 23% higher readmission rates for Hispanic patients, 18% for Black patients vs. white patients. Intensive glucose management reduced complications by 31% (p<0.001, CI: 0.24-0.38). Findings suggest universal diabetes education could prevent 15,000 complications annually, reducing costs by $2.4B.",
    insights: "Socioeconomic factors compound racial disparities in diabetes care. Early intervention programs show highest ROI. Most actionable finding: ML models can identify high-risk patients 6 months earlier than current methods, enabling preventive interventions.",
    repoStructure: "analysis/ - statistical models and tests, visualization/ - publication-ready plots, data/ - preprocessing and cleaning scripts, reports/ - findings and interpretations",
    link: "https://github.com/juanyeffrey/Deciphering-Diabetes"
  }
];

const experiences = [
  {
    company: "CME Group",
    role: "Data Science Intern",
    duration: "June 2024 – Present",
    location: "Chicago, IL",
    description: "Developed deep learning models for $2T daily trading volume and GCP-based data pipelines. Built real-time prediction systems with 99.7% uptime for finance and marketing operations.",
    achievements: [
      "Built neural network models processing 500K+ daily transactions with <50ms latency",
      "Deployed ML pipelines on Google Cloud Platform reducing processing time by 40%",
      "Created real-time anomaly detection system preventing $2.3M in potential trading losses", 
      "Collaborated with quant team to optimize trading algorithms using ensemble methods",
      "Presented findings to C-suite executives, leading to adoption of new risk models"
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
    description: "Mentored 45+ students in ML fundamentals and Python skills. Guided student projects on social impact topics, demonstrating exceptional ability to explain complex concepts clearly.",
    achievements: [
      "Mentored 45+ students in machine learning fundamentals and statistical programming",
      "Designed and graded assignments covering supervised/unsupervised learning algorithms",
      "Led weekly lab sessions teaching Python, pandas, scikit-learn implementation",
      "Guided 12 student teams on social impact ML projects (healthcare, education, environment)",
      "Achieved 95% student satisfaction rating with consistent praise for clear explanations"
    ],
    technologies: ["Python", "R", "Jupyter", "Scikit-learn", "Pandas", "Statistics"],
    logo: `${import.meta.env.BASE_URL}images/NU-logo.png`,
    link: "https://www.northwestern.edu/"
  },
  {
    company: "Learngle",
    role: "Founding Engineer",
    duration: "Feb 2023 – Present",
    location: "Remote",
    description: "Built a clinical informatics learning platform integrated with MGH/Harvard curriculum. Developed AI-powered educational tools serving medical students and residents.",
    achievements: [
      "Co-founded educational technology startup serving 500+ medical students",
      "Developed AI-powered clinical case generation using GPT-4 and medical knowledge graphs",
      "Built adaptive learning algorithms personalizing content for individual student progress",
      "Integrated platform with Harvard Medical School curriculum reaching 200+ residents",
      "Secured partnership with Massachusetts General Hospital for clinical content validation"
    ],
    technologies: ["React", "Node.js", "Python", "OpenAI API", "PostgreSQL", "AWS"],
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
      "Published 5 peer-reviewed papers in top-tier medical and AI conferences",
      "Created clustering algorithms identifying latent patient phenotypes from EHR data",
      "Collaborated with physicians to translate clinical needs into ML solutions",
      "Presented research findings at 3 international conferences with 147 total citations"
    ],
    technologies: ["Python", "R", "MIMIC-IV", "Scikit-learn", "Statistical Analysis"],
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
    abstract: "We developed and validated a comprehensive ML framework for predicting emergency department resource needs using MIMIC-IV data. The framework combines ensemble methods with real-time monitoring to optimize staffing and equipment allocation.",
    contributions: "Co-authored research contributing to algorithm development and statistical validation. Implemented novel ensemble approach combining time-series forecasting with patient acuity scoring.",
    link: "https://pubmed.ncbi.nlm.nih.gov/39127019/"
  },
  {
    title: "NexusGraph: NLP Innovation for Scientific Methodology Replication",
    authors: "El Ariss A.B., Kijpaisalratana N., Yuan J., Mohamed A.M.A., Corscadden L.",
    venue: "ConductScience Proceedings",
    date: "2024",
    abstract: "Developed an NLP tool to automatically parse and extract methodological information from scientific papers to improve research reproducibility. The system uses transformer models to identify key experimental parameters and procedures.",
    contributions: "Co-authored research contributing to NLP pipeline design, evaluated model performance, and conducted user studies with researchers from 15 institutions.",
    link: "https://research.conductscience.com/articles/conductscience-proceedings/v1/i1/nexusgraph-nlp-innovation-for-scientific-methodology-replication"
  },
  {
    title: "The Emergency Leadership Dashboard: A Comprehensive System for Visualizing Operations across Educational, Administrative, and Research Sectors",
    authors: "Yuan J., Al-Rashid H., Khan M., et al.",
    venue: "ConductScience Proceedings", 
    date: "2024",
    abstract: "Created an interactive dashboard system for visualizing and analyzing operational data from emergency departments in Saudi Arabia. Integrated multiple data sources to provide real-time insights for hospital administrators.",
    contributions: "Led technical architecture design, implemented data visualization components, conducted stakeholder interviews and user experience testing.",
    link: "https://conductscience.org/articles/conductscience-proceedings/v1/i1/the-emergency-leadership-dashboard-a-comprehensive-system-for-visualizing-operations-across-educational-administrative-and-research-sectors"
  },
  {
    title: "Network Analysis in Global Emergency Medicine: Mapping Collaborative Structures and Enhancing Connectivity", 
    authors: "Yuan J., Patel N., Wilson R., et al.",
    venue: "ConductScience Proceedings",
    date: "2024",
    abstract: "Applied network analysis techniques to map collaboration patterns in global emergency medicine research. Identified key structural patterns to enhance international connectivity and knowledge sharing.",
    contributions: "Developed network analysis algorithms, conducted statistical modeling of collaboration patterns, created visualization tools for research network mapping.",
    link: "https://conductscience.org/articles/conductscience-proceedings/v1/i1/network-analysis-in-global-emergency-medicine-mapping-collaborative-structures-and-enhancing-connectivity"
  },
  {
    title: "Latent shock identification through trajectory of shock index in emergency setting",
    authors: "Chen S., Yuan J., Martinez L., et al.",
    venue: "Academic Emergency Medicine",
    date: "2024",
    abstract: "Developed clustering models to identify latent shock states in emergency patients using Shock Index trajectories. The approach enables earlier detection of deteriorating patients who might not meet traditional shock criteria.",
    contributions: "Co-designed clustering algorithms, performed statistical validation, analyzed temporal patterns in patient data, contributed to clinical interpretation of results.",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/acem.14906"
  }
];

const education = {
  degree: "Combined BS/MS Program",
  major: "Statistics and Data Science, with additional major in Biological Sciences",
  university: "Northwestern University",
  location: "Evanston, IL",
  graduationDate: "Expected June 2026",
  gpa: "3.98/4.0",
  relevantCoursework: [
    "STAT 320-1,2,3: Statistical Theory & Methods",
    "STAT 350: Regression Analysis", 
    "STAT 353: Advanced Regression",
    "STAT 415: Introduction to Machine Learning",
    "STAT 301-1,2,3: Data Science with R",
    "STAT 302: Data Visualization",
    "STAT 304: Data Structures & Algorithms for Data Science",
    "STAT 305: Information Management for Data Science",
    "STAT 362: Advanced Machine Learning for Data Science",
    "MATH 240: Linear Algebra",
    "MATH 230-1,2: Multivariable Calculus",
    "BIOL_SCI 323: Bioinformatics"
  ],
  honors: [
    "Dean's List (Fall 2022, Winter 2023, Spring 2023, Fall 2023, Winter 2024, Spring 2024, Fall 2024)",
    "Northwestern Merit Scholarship Recipient",
    "Phi Beta Kappa Honor Society (Junior Year Induction)",
    "Outstanding Achievement in Statistics Award",
    "Undergraduate Research Grant Recipient"
  ]
};

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const renderNavigation = () => (
    <div className="sticky top-0 z-50 bg-white py-3 mb-4 shadow-sm rounded-xl">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-4">
        <div className="flex gap-4">
          <a href={`${import.meta.env.BASE_URL}resume/Jeffrey_Yuan_Resume_2025.pdf`} download title="Download Resume">
            <FaFileDownload size={24} className="text-gray-600 hover:text-gray-900" />
          </a>
          <a href="mailto:mailjeffreyyuan@gmail.com" title="Email Me">
            <SiMaildotcom size={24} className="text-red-600 hover:text-red-700 transition-colors duration-300" />
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
      <div className="flex flex-row items-center justify-between pt-12 mb-20 gap-8">
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
            className="text-2xl md:text-3xl text-gray-600 mb-6 font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            ML Engineer | Data Scientist | Researcher | Solving Complex Problems with AI
          </motion.p>

          <motion.div
            className="flex gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button onClick={() => setCurrentPage('projects')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              View My Projects
            </Button>
            <Button asChild className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3">
              <a href={`${import.meta.env.BASE_URL}resume/Jeffrey_Yuan_Resume_2025.pdf`} download>
                Download Resume
              </a>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              <a href="https://www.linkedin.com/in/jeffrey-yuan-668255212/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Northwestern student passionate about building impactful, ethical AI solutions that address real-world healthcare and social challenges.
          </motion.p>
        </div>
      </div>

      {/* About Me Section */}
      <div className={`${sectionGradients.about} mb-6`}>
        <div className={innerContent}>
          <h2 className="text-4xl font-extrabold mb-8 text-gray-800">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a Northwestern University combined BS/MS student pursuing degrees in Data Science, Statistics, and Biological Sciences, with a passion for developing AI solutions that make a meaningful impact on healthcare and society. My unique background combines rigorous statistical training with deep biological knowledge, enabling me to tackle complex problems at the intersection of technology and human well-being.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What drives me is the potential to use machine learning not just to solve technical challenges, but to address real human needs. Whether it's reducing bias in clinical AI systems, optimizing healthcare resource allocation, or making education more accessible, I'm motivated by projects that can improve lives at scale.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I believe in building <strong>impactful, ethical AI solutions</strong> that prioritize fairness, transparency, and social good. My approach to machine learning is grounded in rigorous scientific methodology, ensuring that models are not only accurate but also responsible and interpretable. I'm particularly committed to addressing bias in AI systems and ensuring that technological advances benefit all communities equitably.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-700">My Journey</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">2022</h4>
                  <p className="text-sm text-gray-600">Started undergraduate studies at Northwestern, immediately drawn to the intersection of data science and biology</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">2023</h4>
                  <p className="text-sm text-gray-600">Joined Harvard Medical School's Significance Lab, beginning my journey in clinical AI research</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">2024</h4>
                  <p className="text-sm text-gray-600">Began internship at CME Group, applying ML to financial systems while continuing medical research</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800">2025</h4>
                  <p className="text-sm text-gray-600">Expected graduation with plans to pursue ML engineering roles focused on healthcare applications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {Object.entries(skills).map(([category, skillsList]) => (
                <div key={category} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{category}</h4>
                  <div className="space-y-2">
                    {skillsList.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {skill.icon && (
                          <div className="flex-shrink-0">{skill.icon}</div>
                        )}
                        <span className="text-sm text-gray-700">{skill.name}</span>
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

  const renderProjectsPage = () => {
    if (selectedProject) {
      return renderProjectDetail(selectedProject);
    }

    return (
      <div className={`${sectionGradients.projects} mb-6`}>
        <div className={innerContent}>
          <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 text-center">{project.image}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{project.tagline}</p>
                    <div className="mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{project.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderProjectDetail = (project) => (
    <div className={`${sectionGradients.projects} mb-6`}>
      <div className={innerContent}>
        <div className="mb-6">
          <Button onClick={() => setSelectedProject(null)} className="mb-4 bg-gray-600 hover:bg-gray-700 text-white">
            ← Back to Projects
          </Button>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{project.tagline}</p>
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{project.category}</span>
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">{tech}</span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Problem Statement & Motivation</h2>
            <p className="text-gray-600 leading-relaxed">{project.problemStatement}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Data Collection & Preprocessing</h2>
            <p className="text-gray-600 leading-relaxed">{project.dataCollection}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Methodology & Technical Approach</h2>
            <p className="text-gray-600 leading-relaxed">{project.methodology}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Results & Impact</h2>
            <p className="text-gray-600 leading-relaxed">{project.results}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Key Insights & Future Work</h2>
            <p className="text-gray-600 leading-relaxed">{project.insights}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Code & Reproducibility</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{project.repoStructure}</p>
            <Button asChild className="bg-gray-800 hover:bg-gray-900 text-white">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <SiGithub className="mr-2" /> View on GitHub
              </a>
            </Button>
          </section>
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
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Abstract</h4>
                    <p className="text-gray-600 leading-relaxed">{paper.abstract}</p>
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
