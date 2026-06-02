import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import SkillsCloud from "../components/SkillsCloud";
import EducationSection from "../components/EducationSection";
import AppCollectionSection from "../components/AppCollectionSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import ResumeDownloadButton from "../components/ResumeDownloadButton";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsCloud />
      <EducationSection />
      <AppCollectionSection />
      <BlogSection />
      <ContactSection />

      <div className="px-8 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <ResumeDownloadButton />
        </div>
      </div>
    </>
  );
}
