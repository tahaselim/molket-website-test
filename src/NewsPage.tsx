import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import News from './components/News';
import Footer from './components/Footer';
import ChatBot from './components/Chatbot.tsx';

/** Standalone News & Events page (news.html). */
function NewsPage() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t('news.title')} | MolKet`;
    }, [t]);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar onHome={false} />

            <PageHeader title={t('news.title')} description={t('news.description')} />

            <main>
                <News showHeading={false} />
            </main>

            <Footer onHome={false} />
            <ChatBot />
        </div>
    );
}

export default NewsPage;
