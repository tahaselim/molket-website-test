import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, FileText, Users, Award, BookOpen, School } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * News section.
 * To add news: add an entry at the top of the list (newest first) and matching keys
 * under "news.items.<key>" in locales/{en,fr,nl}/translation.json.
 * `month` (1-12) is optional — leave it out to show only the year.
 */
type NewsItem = {
  key: string;
  year: number;
  month?: number;
  type: 'talk' | 'publication' | 'panel' | 'recognition' | 'course' | 'event';
  link?: string;
};

const newsItems: NewsItem[] = [
  { key: 'ieee_p1947', year: 2026, month: 6, type: 'recognition' },
  { key: 'qc_course', year: 2026, month: 5, type: 'course' },
  { key: 'cairo_spring_school', year: 2026, month: 4, type: 'event' },
  { key: 'qedc_panel', year: 2025, type: 'panel' },
  { key: 'juliacon_2024', year: 2024, month: 7, type: 'talk' },
  { key: 'aps_march_2024', year: 2024, month: 3, type: 'talk' },
  { key: 'waicf_2024', year: 2024, month: 2, type: 'talk' },
  { key: 'jcp_2023', year: 2023, type: 'publication' },
];

const typeIcons: Record<NewsItem['type'], React.ReactNode> = {
  talk: <Mic className="w-4 h-4" />,
  publication: <FileText className="w-4 h-4" />,
  panel: <Users className="w-4 h-4" />,
  recognition: <Award className="w-4 h-4" />,
  course: <BookOpen className="w-4 h-4" />,
  event: <School className="w-4 h-4" />,
};

type NewsProps = {
  /** Show the section title block (off on news.html, which has its own page header). */
  showHeading?: boolean;
};

const News: React.FC<NewsProps> = ({ showHeading = true }) => {
  const { t, i18n } = useTranslation();

  const formatDate = (item: NewsItem) => {
    if (!item.month) return String(item.year);
    return new Intl.DateTimeFormat(i18n.language, { month: 'long', year: 'numeric' })
        .format(new Date(item.year, item.month - 1, 1));
  };

  return (
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {showHeading && (
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('news.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('news.description')}</p>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
          </motion.div>
          )}

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-blue-100" aria-hidden="true"></div>

            <div className="space-y-8">
              {newsItems.map((item, index) => {
                const body = (
                    <>
                      <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                        <span className="inline-flex items-center gap-1 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {formatDate(item)}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">
                          {typeIcons[item.type]}
                          {t(`news.types.${item.type}`)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {t(`news.items.${item.key}.title`)}
                      </h3>
                      <p className="text-gray-600">{t(`news.items.${item.key}.summary`)}</p>
                    </>
                );

                return (
                    <motion.article
                        key={item.key}
                        className="relative pl-12 md:pl-16"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="absolute left-2 md:left-4 top-6 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow" aria-hidden="true"></div>
                      {item.link ? (
                          <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                          >
                            {body}
                          </a>
                      ) : (
                          <div className="bg-white rounded-lg shadow-lg p-6">{body}</div>
                      )}
                    </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default News;
