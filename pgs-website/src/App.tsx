import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navigation';

import Home from './pages';
import BeInspired from './pages/BeInspired';
import Inspire from './pages/Inspire';
import Pathways from './pages/Pathways';
import StudentLife from './pages/StudentLife';
import BoardingLife from './pages/BoardingLife';
import JoinUs from './pages/JoinUs';
import Fees from './pages/Fees';
import GetAccess from './pages/GetAccess';
import NotFound from './pages/NotFound';

import History from './components/History';
import Leadership from './components/Leadership';

import TailoredPath from './components/TailoredPathways';
import Stem from './components/Stem';
import SocialSciences from './components/SocialSciences';
import ArtsAndSports from './components/ArtsAndSports';
import Aviation from './components/Aviation';
import Marine from './components/Marine';
import AI from './components/AI';

import Soccer from './components/Soccer';
import Swimming from './components/Swimming';
import BasketBall from './components/BasketBall';
import Golf from './components/Golf';
import ArtClub from './components/ArtClub';
import ScienceClub from './components/ScienceClub';
import DebateClub from './components/DebateClub';

import DormLife from './components/DormLife';
import DanceLife from './components/DanceLife';
import HealthAndWellness from './components/HealthAndWellness';
import Security from './components/Security';
import StJohnAmbulance from './components/StJohnAmbulance';
import Chaplaincy from './components/Chaplaincy';

import JoinGrade10 from './components/JoinGrade10';
import JoinForm2 from './components/JoinForm2';
import JoinForm3 from './components/JoinForm3';

import Grade10Fees from './components/Grade10Fees';
import Form2Fees from './components/Form2Fees';
import Form3Fees from './components/Form3Fees';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/be-inspired" element={<BeInspired />} />

          <Route path="/inspire" element={<Inspire />}>
            <Route path="history" element={<History />} />
            <Route path="leadership" element={<Leadership />} />
          </Route>

          <Route path="/pathways" element={<Pathways />}>
            <Route path="tailoredpath" element={<TailoredPath />} />
            <Route path="stem" element={<Stem />} />
            <Route path="socialsciences" element={<SocialSciences />} />
            <Route path="arts-sportsscience" element={<ArtsAndSports />} />
            <Route path="aviation" element={<Aviation />} />
            <Route path="marine" element={<Marine />} />
            <Route path="ai-studies" element={<AI />} />
          </Route>

          <Route path="/student-life" element={<StudentLife />}>
            <Route path="soccer" element={<Soccer />} />
            <Route path="swimming" element={<Swimming />} />
            <Route path="basketball" element={<BasketBall />} />
            <Route path="golf" element={<Golf />} />
            <Route path="artclub" element={<ArtClub />} />
            <Route path="scienceclub" element={<ScienceClub />} />
            <Route path="debateclub" element={<DebateClub />} />
          </Route>

          <Route path="/boarding-life" element={<BoardingLife />}>
            <Route path="dorm" element={<DormLife />} />
            <Route path="dance" element={<DanceLife />} />
            <Route path="health-and-wellness" element={<HealthAndWellness />} />
            <Route path="security" element={<Security />} />
            <Route path="stjohn-ambulance" element={<StJohnAmbulance />} />
            <Route path="chaplaincy" element={<Chaplaincy />} />
          </Route>

          <Route path="/join-us" element={<JoinUs />}>
            <Route path="grade10" element={<JoinGrade10 />} />
            <Route path="form2" element={<JoinForm2 />} />
            <Route path="form3" element={<JoinForm3 />} />
          </Route>

          <Route path="/fees" element={<Fees />}>
            <Route path="grade10" element={<Grade10Fees />} />
            <Route path="form2" element={<Form2Fees />} />
            <Route path="form3" element={<Form3Fees />} />
          </Route>

          <Route path="/get-access" element={<GetAccess />} />


          <Route path="*" element={<NotFound />} />

        </Routes>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;

