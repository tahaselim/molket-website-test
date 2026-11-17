import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Users, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Reference projects: publicly announced client engagements.
 * To add one: add an entry below (newest first) and matching keys under
 * "projects.reference.items.<key>" in locales/{en,fr,nl}/translation.json
 * (title, practice, client, organiser, partners, location, summary, services[]).
 * `image` is optional — put the photo in /public and give its path, plus `imageCredit`.
 */
type ReferenceProject = {
  key: string;
  year: number;
  icon: React.ReactNode;
  image?: string;
  imageCredit?: string;
};

const referenceProjects: ReferenceProject[] = [
  {
    key: 'tdra_camp_2026',
    year: 2026,
    icon: <GraduationCap className="w-12 h-12" />,
    // image: '/tdra-camp-2026.jpg',
    imageCredit: 'GIE and TDRA',
  },
];

const ReferenceProjects: React.FC = () => {
  const { t } = useTranslation();

  return (
      <section id="reference-projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('projects.reference.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('projects.reference.description')}</p>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-10">
            {referenceProjects.map((project) => {
              const base = `projects.reference.items.${project.key}`;
              const services = t(`${base}.services`, { returnObjects: true }) as string[];

              return (
                  <motion.article
                      key={project.key}
                      className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-5"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                  >
                    {/* Visual: photo if provided, otherwise a branded panel */}
                    <div className="md:col-span-2 relative min-h-[220px] bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center p-8 text-center">
                      {project.image ? (
                          <>
                            <img src={project.image} alt={t(`${base}.title`)} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                            {project.imageCredit && (
                                <span className="absolute bottom-2 right-3 text-xs text-white/80 bg-black/40 px-2 py-0.5 rounded">
                                  {t('projects.reference.photo_credit')}: {project.imageCredit}
                                </span>
                            )}
                          </>
                      ) : (
                          <>
                            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-4">
                              {project.icon}
                            </div>
                            <span className="text-sm uppercase tracking-wider text-blue-200 font-semibold">
                              {t(`${base}.practice`)}
                            </span>
                          </>
                      )}
                    </div>

                    <div className="md:col-span-3 p-8">
                      <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{project.year}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{t(`${base}.location`)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(`${base}.title`)}</h3>
                      <p className="text-gray-600 mb-6">{t(`${base}.summary`)}</p>

                      <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-3">
                        {t('projects.reference.labels.services')}
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {Array.isArray(services) && services.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{s}</span>
                            </li>
                        ))}
                      </ul>

                      <dl className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm border-t border-gray-100 pt-4">
                        <dt className="inline-flex items-center gap-1 font-semibold text-gray-900"><Building2 className="w-4 h-4" />{t('projects.reference.labels.client')}</dt>
                        <dd className="text-gray-600">{t(`${base}.client`)}</dd>
                        <dt className="inline-flex items-center gap-1 font-semibold text-gray-900"><Building2 className="w-4 h-4" />{t('projects.reference.labels.organiser')}</dt>
                        <dd className="text-gray-600">{t(`${base}.organiser`)}</dd>
                        <dt className="inline-flex items-center gap-1 font-semibold text-gray-900"><Users className="w-4 h-4" />{t('projects.reference.labels.partners')}</dt>
                        <dd className="text-gray-600">{t(`${base}.partners`)}</dd>
                      </dl>
                    </div>
                  </motion.article>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default ReferenceProjects;
