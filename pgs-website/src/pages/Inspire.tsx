import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  
 const navigate = useNavigate();

 const handleOurHistoryClick = () => {
  navigate('/inspire/history')
 }

 const handleOurLeadershipClick = () => {
  navigate('/inspire/leadership')
 }
  
  

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/inspiredacademic.webp')`, opacity:"90" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className=" relative z-10 text-center px-4 items-center">
          <h2 className="text-4xl md:text-5xl  font-extrabold my-10 drop-shadow-lg">
            We Transform Girls into Leaders
          </h2>
          <span className="font-light text-2xl md:text-4xl tracking-wide break-words px-10">At Pioneer Girls School, we are dedicated to empowering our girls to become agents of positive change and influential leaders of tomorrow. 
            <br />
             We invite you to join our community and be a part of shaping a brighter future for your daughters. </span>
          <div className="flex md:flex-row flex-col mt-20 py-16 justify-center">
            <button onClick= {handleOurHistoryClick}  className="text-2xl md:text-5xl px-6 py-4 m-10 text-white rounded-full hover:bg-transparent bg-[#cfa53a] border border-white shadow-lg transition">
            Our History
            </button>
            <button onClick={handleOurLeadershipClick} className="text-2xl md:text-5xl px-6 py-4 m-10 hover:bg-transparent bg-[#cfa53a] text-white rounded-full border border-white shadow-lg transition">
            Our Leadership
            </button>
          </div>
        </div>
      </section>

      
    </>
  );
}
