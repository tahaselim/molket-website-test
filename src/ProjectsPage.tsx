import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import ReferenceProjects from './components/ReferenceProjects';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ChatBot from './components/Chatbot.tsx';

/** Standalone Projects page (projects.html): reference projects first, then research & open source. */
function ProjectsPage() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t('projects.page_title')} | MolKet`;
    }, [t]);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar onHome={false} />
            <PageHeader title={t('projects.page_title')} description={t('projects.page_description')} />
            <main>
                <ReferenceProjects />
                <Projects />
            </main>
            <Footer onHome={false} />
            <ChatBot />
        </div>
    );
}

export default ProjectsPage;
