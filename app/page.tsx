import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import ThemeToggle from '@/components/ThemeToggle'
import MouseTrail from '@/components/MouseTrail'
import CursorSpotlight from '@/components/CursorSpotlight'
import CommandPalette from '@/components/CommandPalette'
import KeyboardShortcuts from '@/components/KeyboardShortcuts'
import SmartSearch from '@/components/SmartSearch'
import VoiceCommands from '@/components/VoiceCommands'
import ReadingProgress from '@/components/ReadingProgress'

export default function Home() {
  return (
    <div className="flex flex-col">
      <LoadingScreen />
      <CustomCursor />
      <CursorSpotlight />
      <MouseTrail />
      <ScrollProgress />
      <CommandPalette />
      <KeyboardShortcuts />
      <SmartSearch />
      <VoiceCommands />
      <ReadingProgress />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <BackToTop />
      <ThemeToggle />
    </div>
  )
}

