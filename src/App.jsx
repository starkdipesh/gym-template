import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FreeTrialModal from './components/FreeTrialModal';
import TrainerModal from './components/TrainerModal';
import ClassBookingModal from './components/ClassBookingModal';
import ArticleModal from './components/ArticleModal';
import LightboxModal from './components/LightboxModal';
import WhatsAppWidget from './components/WhatsAppWidget';

// Views
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import MembershipView from './views/MembershipView';
import PersonalTrainingView from './views/PersonalTrainingView';
import ProgramsView from './views/ProgramsView';
import ClassesView from './views/ClassesView';
import TrainersView from './views/TrainersView';
import FacilitiesView from './views/FacilitiesView';
import TransformationsView from './views/TransformationsView';
import GalleryView from './views/GalleryView';
import ScheduleView from './views/ScheduleView';
import BlogView from './views/BlogView';
import FaqView from './views/FaqView';
import ContactView from './views/ContactView';
import AdminDashboardView from './views/AdminDashboardView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState(null);

  const openTrial = () => setIsTrialModalOpen(true);
  const closeTrial = () => setIsTrialModalOpen(false);

  const openTrainer = (trainer) => setSelectedTrainer(trainer);
  const closeTrainer = () => setSelectedTrainer(null);

  const openClass = (cls) => setSelectedClass(cls);
  const closeClass = () => setSelectedClass(null);

  const openArticle = (article) => setSelectedArticle(article);
  const closeArticle = () => setSelectedArticle(null);

  const openLightbox = (image) => setSelectedLightboxImage(image);
  const closeLightbox = () => setSelectedLightboxImage(null);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            setCurrentView={setCurrentView}
            onOpenTrial={openTrial}
            onOpenTrainer={openTrainer}
            onOpenClass={openClass}
            onOpenLightbox={openLightbox}
          />
        );
      case 'about':
        return <AboutView onOpenTrial={openTrial} setCurrentView={setCurrentView} />;
      case 'membership':
        return <MembershipView onOpenTrial={openTrial} />;
      case 'pt':
      case 'personal-training':
        return <PersonalTrainingView onOpenTrainer={openTrainer} onOpenTrial={openTrial} />;
      case 'programs':
        return <ProgramsView onOpenTrial={openTrial} />;
      case 'classes':
        return <ClassesView onOpenClass={openClass} setCurrentView={setCurrentView} />;
      case 'trainers':
        return <TrainersView onOpenTrainer={openTrainer} />;
      case 'facilities':
        return <FacilitiesView onOpenTrial={openTrial} />;
      case 'transformations':
        return <TransformationsView onOpenTrial={openTrial} />;
      case 'gallery':
        return <GalleryView onOpenLightbox={openLightbox} />;
      case 'schedule':
        return <ScheduleView onOpenClass={openClass} />;
      case 'blog':
      case 'resources':
        return <BlogView onOpenArticle={openArticle} />;
      case 'faq':
        return <FaqView onOpenTrial={openTrial} />;
      case 'contact':
        return <ContactView />;
      case 'admin':
      case 'dashboard':
        return <AdminDashboardView />;
      default:
        return (
          <HomeView
            setCurrentView={setCurrentView}
            onOpenTrial={openTrial}
            onOpenTrainer={openTrainer}
            onOpenClass={openClass}
            onOpenLightbox={openLightbox}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Notification Promo Ticker */}
      <AnnouncementBar onOpenTrial={openTrial} />

      {/* Navigation Header */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} onOpenTrial={openTrial} />

      {/* Main View Area */}
      <main style={{ flex: 1 }}>
        {renderView()}
      </main>

      {/* Footer */}
      <Footer setCurrentView={setCurrentView} onOpenTrial={openTrial} />

      {/* Global Modals */}
      <FreeTrialModal isOpen={isTrialModalOpen} onClose={closeTrial} />
      <TrainerModal trainer={selectedTrainer} onClose={closeTrainer} />
      <ClassBookingModal groupClass={selectedClass} onClose={closeClass} />
      <ArticleModal article={selectedArticle} onClose={closeArticle} />
      <LightboxModal image={selectedLightboxImage} onClose={closeLightbox} />

      {/* Floating WhatsApp Lead Trigger */}
      <WhatsAppWidget />
    </div>
  );
}
