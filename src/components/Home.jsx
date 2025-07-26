import React from "react";

const Home = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center px-4 py-4">
        <div className="mt-16 max-w-5xl w-full text-center">
          <p className="mb-10 font-semibold">
            Our college is a premier IT institution offering Bachelor of
            Computer Applications (BCA) and Bachelor of Science in Computer
            Science and Information Technology (BSc. CSIT). We provide
            cutting-edge education, hands-on experience, and industry-aligned
            curriculum to prepare students for successful careers in the dynamic
            field of technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-blue-800 bg-opacity-50 border border-black rounded-lg p-6">
              <i className="fas fa-graduation-cap text-orange-400 text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold text-orange-400">BCA</h3>
              <h4 className="font-bold mb-2">Tribhuvan University</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                voluptate.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 cursor-pointer rounded font-semibold">
                Book Now
              </button>
            </div>

            <div className="bg-blue-800 bg-opacity-50 border border-black rounded-lg p-6">
              <i className="fas fa-graduation-cap text-orange-400 text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold text-orange-400">BSc. CSIT</h3>
              <h4 className="font-bold mb-2">Tribhuvan University</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                voluptate.
              </p>
              <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 px-4 py-2 rounded font-semibold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
