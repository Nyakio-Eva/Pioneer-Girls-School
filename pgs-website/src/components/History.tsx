export default function History() {
  return (
    <section className="min-h-screen p-10 bg-[#f2f2f2]">
      <div className="flex md:flex-row flex-col min-h-screen">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col justify-center p-2 mb-4 md:p-16">
          <h2 className="font-bold text-3xl md:text-4xl mb-6 text-center">OUR HISTORY</h2>
          <span className="text-lg leading-relaxed">
           Pioneer Girls School emerged in response to the growing need for outstanding private high school education for girls in Murang'a County. 

            Known for its distinguished boys' boarding education (St Paul Thomas Academy & Pioneer School), the school's administration boldly expanded into this new domain. 

            Motivated by the parents and alumni of Pioneer School, we have embarked on a mission to establish a premier school for girls aspiring to pursue careers in Science, Technology, Engineering, and Mathematics (STEM). 

            Since opening its doors, the school's administration has been continually inspired and has never looked back. 
            <br />
            The School is nettled and surrounded by large acreage of pineapple farms in Thika that have been around since the 1910's. 

            But prior to the establishment of school, the property once housed Braeburn Imani School in the early 2000's before their departure in the mid 2010's. ​ 

            ​ Thereafter, Pioneer Girls School opened its doors in the spacious 75-acre property in the year 2016  

          </span>
        </div>
        
        {/* Right side - Image */}
        <div className="flex-1 shadow-lg">
          <img 
            src="/history.webp" 
            alt="history image" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}