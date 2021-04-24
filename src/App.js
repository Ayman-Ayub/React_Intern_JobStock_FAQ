import "./styles.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './components/Navbar.js'
import TitleHeader from './components/TitleHEader.js'
import FAQ from './components/FAQ'
import Footer from './components/footer'
// import Routes from './Routes';
// import ResumeDetail from './pages/ResumeDetail'
// import ManageResume from "./pages/ManageResume";

export default function App() {
  return (
  <>
     
<Navbar></Navbar>
<TitleHeader/>
<FAQ/>
<Footer/>

   
  </>
  );
}
