import './App.css';
import './templates/css/Sidebar.css';
import './templates/css/Start.css';
import './templates/css/About.css';
import './templates/css/Projetos.css';
import './templates/css/Tecnologias.css';
import './templates/css/Footer.css';
import Sidebar from './templates/js/Sidebar'
import Start from './templates/js/Start';
import About from './templates/js/About';
import Projetos from './templates/js/Projetos';
import Tecnologias from './templates/js/Tecnologias';
import Footer from './templates/js/Footer';
import { LanguageProvider } from './templates/js/LanguageContext'; 

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Sidebar />
        <main className='main-content'>
          <Start />
          <About />
          <Projetos />
          <Tecnologias />
          <Footer />
        </main>
      </div>
    </LanguageProvider> 
  );
}

export default App;