import Chaplaincy from "../components/Chaplaincy";
import DanceLife from "../components/DanceLife";
import DormLife from "../components/DormLife";
import HealthAndWellness from "../components/HealthAndWellness";
import NursingCare from "../components/NursingCare";
import Security from "../components/Security";
import StJohnAmbulance from "../components/StJohnAmbulance";

export default function BoardingLife() {
  return(
  <div>Boarding Life Page
    <DormLife/>
    <DanceLife/>
    <HealthAndWellness/>
    <Security/>
    <StJohnAmbulance/>
    <NursingCare/>
    <Chaplaincy/>
  </div>
  ) 
}