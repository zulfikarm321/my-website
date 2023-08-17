import './app.scss';

import Navigation from './components/navigation/navigation.component';
import About from './components/about/about.components';
import Projects from './components/projects/projects.components';
import Header from './components/header/header.components';
import Skills from './components/skills/skills.components';
import Experience from './components/experience/experience.components';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
