import AI from "../components/AI";
import ArtsAndSports from "../components/ArtsAndSports";
import Aviation from "../components/Aviation";
import Marine from "../components/Marine";
import SocialSciences from "../components/SocialSciences";
import Stem from "../components/Stem";
import TailoredPath from "../components/TailoredPathways";

export default function Pathways() {
  return <div>Pathways Page
    <TailoredPath/>
    <Stem/>
    <SocialSciences/>
    <ArtsAndSports/>
    <Aviation/>
    <Marine/>
    <AI/>
  </div>;
}