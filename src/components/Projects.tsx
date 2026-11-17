import React from 'react';
import { motion } from 'framer-motion';
import { Atom, FlaskConical, Bot, Sigma, KeyRound, Workflow, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Research & open-source projects (shown on projects.html below the reference projects).
 * To add a project: add an entry below and matching keys under
 * "projects.items.<key>" in locales/{en,fr,nl}/translation.json.
 * `link` is optional — leave it out if there is no public page.
 */
type Project = {
  key: string;
  icon: React.ReactNode;
  category: 'open_source' | 'platform' | 'research';
  tags: string[];
  link?: string;
  /** Optional paper link (e.g. arXiv), shown next to "Learn more" */
  paper?: string;
};

const projects: Project[] = [
  {
    key: 'molket_jl',
    icon: <Atom className="w-8 h-8" />,
    category: 'open_source',
    tags: ['Julia', 'Quantum dynamics'],
    link: 'https://github.com/molket-io/molket.jl',
  },
  {
    key: 'molket_lab',
    icon: <FlaskConical className="w-8 h-8" />,
    category: 'platform',
    tags: ['JupyterHub', 'Cloud'],
    link: 'http://jupyterhub.molket.io',
  },
  {
    key: 'molket_studio',
    icon: <Workflow className="w-8 h-8" />,
    category: 'platform',
    tags: ['AI assistant', 'HPC/QC'],
  },
  {
    key: 'ai_agents',
    icon: <Bot className="w-8 h-8" />,
    category: 'research',
    tags: ['AI agents', 'Chemistry'],
    link: 'https://www.youtube.com/watch?v=45OccvEjzIU',
  },
  {
    key: 'sqd_pls',
    icon: <Sigma className="w-8 h-8" />,
    category: 'research',
    tags: ['Linear systems', 'SQD', 'IBM Quantum'],
    link: 'https://github.com/tahaselim/sqd-linsolver',
    paper: 'https://arxiv.org/abs/2610.41708',
  },
  {
    key: 'qpp',
    icon: <KeyRound className="w-8 h-8" />,
    category: 'research',
    tags: ['Cryptography', 'Qiskit'],
  },
];

const categoryStyles: Record<Project['category'], string> = {
  open_source: 'bg-green-100 text-green-800',
  platform: 'bg-blue-100 text-blue-800',
  research: 'bg-indigo-100 text-indigo-800',
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
      <section id="research" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('projects.research.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('projects.research.description')}</p>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
          >
            {projects.map((project) => (
                <motion.div
                    key={project.key}
                    variants={item}
                    className="bg-white rounded-lg shadow-lg flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        {project.icon}
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryStyles[project.category]}`}>
                        {t(`projects.categories.${project.category}`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(`projects.items.${project.key}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-1">
                      {t(`projects.items.${project.key}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                      ))}
                    </div>
                    {(project.link || project.paper) && (
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                          {project.link && (
                              <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                              >
                                {t('projects.learn_more')}
                                <ExternalLink className="w-4 h-4 ml-1" />
                              </a>
                          )}
                          {project.paper && (
                              <a
                                  href={project.paper}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                              >
                                {t('projects.read_paper')}
                                <ExternalLink className="w-4 h-4 ml-1" />
                              </a>
                          )}
                        </div>
                    )}
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 w-full rounded-b-lg"></div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Projects;
