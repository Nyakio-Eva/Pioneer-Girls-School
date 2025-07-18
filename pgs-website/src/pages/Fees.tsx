import Form2Fees from "../components/Form2Fees";
import Form3Fees from "../components/Form3Fees";
import Grade10Fees from "../components/Grade10Fees";
import TermsAndConditions from "../components/TermsAndConditions";


export default function Fees() {
  return <div>Fees Page
    <Grade10Fees/>
    <Form2Fees/>
    <Form3Fees/>
    <TermsAndConditions/>
    
  </div>;
}
