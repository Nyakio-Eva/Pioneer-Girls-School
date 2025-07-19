import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
// import PerformanceArts from './components/PerformanceArts'; // Added missing component
import ArtClub from './components/ArtClub';
import ScienceClub from './components/ScienceClub';
import DebateClub from './components/DebateClub';

import DormLife from './components/DormLife';
import DanceLife from './components/DanceLife';
import HealthAndWellness from './components/HealthAndWellness';
import Security from './components/Security';
import StJohnAmbulance from './components/StJohnAmbulance';
import NursingCare from './components/NursingCare'; // Added missing component
import Chaplaincy from './components/Chaplaincy';

import JoinGrade10 from './components/JoinGrade10';
import JoinForm2 from './components/JoinForm2';
import JoinForm3 from './components/JoinForm3';
// import Enquire from './components/Enquire'; // Added missing component

import Grade10Fees from './components/Grade10Fees';
import Form2Fees from './components/Form2Fees';
import Form3Fees from './components/Form3Fees';
// import Form4Fees from './components/Form4Fees'; // Added missing component
// import TermsConditions from './components/TermsConditions'; // Added missing component

import Calendar from './components/Calendar'; // Added missing component
// import StudentAccess from './components/StudentAccess'; // Added missing component
// import StaffAccess from './components/StaffAccess'; // Added missing component

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/be-inspired" element={<BeInspired />} />
          <Route path="/inspire" element={<Inspire />} />
          <Route path="/pathways" element={<Pathways />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/boarding-life" element={<BoardingLife />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/get-access" element={<GetAccess />} />

          {/* Inspire Sub-routes */}
          <Route path="/inspired/history" element={<History />} />
          <Route path="/inspired/leadership" element={<Leadership />} />

          {/* Pathways Sub-routes */}
          <Route path="/pathways/tailormade" element={<TailoredPath />} />
          <Route path="/pathways/stem" element={<Stem />} />
          <Route path="/pathways/social-sciences" element={<SocialSciences />} />
          <Route path="/pathways/arts-sports" element={<ArtsAndSports />} />
          <Route path="/pathways/aviation" element={<Aviation />} />
          <Route path="/pathways/marine" element={<Marine />} />
          <Route path="/pathways/AI" element={<AI />} />

          {/* Student Life Sub-routes */}
          <Route path="/student-life/soccer" element={<Soccer />} />
          <Route path="/student-life/swimming" element={<Swimming />} />
          <Route path="/student-life/basketball" element={<BasketBall />} />
          <Route path="/student-life/golf" element={<Golf />} />
          {/* <Route path="/student-life/performance-arts" element={<PerformanceArts />} /> */}
          <Route path="/student-life/art-club" element={<ArtClub />} />
          <Route path="/student-life/science-club" element={<ScienceClub />} />
          <Route path="/student-life/debate-club" element={<DebateClub />} />

          {/* Boarding Life Sub-routes */}
          <Route path="/boarding-life/dorm-life" element={<DormLife />} />
          <Route path="/boarding-life/dance-life" element={<DanceLife />} />
          <Route path="/boarding-life/health-wellness" element={<HealthAndWellness />} />
          <Route path="/boarding-life/security" element={<Security />} />
          <Route path="/boarding-life/st-john-ambulance" element={<StJohnAmbulance />} />
          <Route path="/boarding-life/nursing-care" element={<NursingCare />} />
          <Route path="/boarding-life/chaplaincy" element={<Chaplaincy />} />

          {/* Join Us Sub-routes */}
          <Route path="/join-us/grade-10" element={<JoinGrade10 />} />
          <Route path="/join-us/form-2" element={<JoinForm2 />} />
          <Route path="/join-us/form-3" element={<JoinForm3 />} />
          {/* <Route path="/join-us/enquire" element={<Enquire />} /> */}

          {/* Fees Sub-routes */}
          <Route path="/fees/grade-10" element={<Grade10Fees />} />
          <Route path="/fees/form-2" element={<Form2Fees />} />
          <Route path="/fees/form-3" element={<Form3Fees />} />
          {/* <Route path="/fees/form-4" element={<Form4Fees />} /> */}
          {/* <Route path="/fees/terms-conditions" element={<TermsConditions />} /> */}

          {/* Get Access Sub-routes */}
          <Route path="/get-access/calendar" element={<Calendar />} />
          {/* <Route path="/get-access/student-access" element={<StudentAccess />} /> */}
          {/* <Route path="/get-access/staff-access" element={<StaffAccess />} /> */}

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;