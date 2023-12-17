import {
    HomeIcon,
    UserIcon,
    CodeBracketIcon,
    LanguageIcon,
    AcademicCapIcon,
    ChatBubbleLeftRightIcon
  } from "@heroicons/react/24/outline";
  
import Hero from '../sections/hero';
import About from '../sections/about';
import Tech from '../sections/technologies';
import Lang from '../sections/languages';
import Timeline from '../sections/timeline';
import Contact from '../sections/contact';
// import { Langar } from "next/font/google";

  const nav_items = [
    {
      id: 'home',
      alt: 'Home',
      href: '/',
      icon: <HomeIcon width={30}/>,
      section: <Hero />
    },
    {
      id: 'about',
      alt: 'About me',
      href: '/About',
      icon: <UserIcon width={30}/>,
      section: <About />
    },
    {
      id: 'skills',
      alt: 'My skills',
      href: '/Skills',
      icon: <CodeBracketIcon width={30}/>,
      section: <Tech />
    },
    {
      id: 'tools',
      alt: 'Tools',
      href: '/',
      icon: <LanguageIcon width={30}/>,
      section: <Lang />
    },
    {
      id: 'timeline',
      alt: 'My career path',
      href: '/Timeline',
      icon: <AcademicCapIcon width={30}/>,
      section: <Timeline />
    },
    {
      id: 'contact',
      alt: 'How to get in contact',
      href: '/Contact',
      icon: <ChatBubbleLeftRightIcon width={30}/>,
      section: <Contact />
    }
  ];
  
  export default nav_items;
  