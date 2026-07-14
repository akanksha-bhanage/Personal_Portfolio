import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { akanksha, bwmap, worldmap, heroBg, download } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={heroBg}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#0B0B0B] opacity-70"></div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#8B5CF6] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} font-poppins uppercase`}
            >
              Hi, I'm {""}
              <span
                className="sm:text-[90px] text-[50px] font-mova font-extrabold uppercase
                bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent"
              >
                Akanksha
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 max-w-2xl`}>
              Full Stack Developer passionate about building scalable web
              applications and exploring AI.
            </p>
            <div className="mt-8">
              <button
                onClick={() => {}}
                className="flex items-center gap-2.5 border border-[#8B5CF6] text-white font-medium 
                py-3 px-7 rounded-full hover:bg-[#8B5CF6] transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]
                hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] active:scale-95 group"
              >
                <span className="font-poppins tracking-wider text-[15px]">Download Resume</span>
                <img
                  src={download}
                  alt="download"
                  className="w-4 h-4 object-contain invert group-hover:translate-y-0.5 transition-transform duration-200"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </button>
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center z-10"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-2 
            border-[#8B5CF6]/50 flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-[#8B5CF6] mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div className="absolute bottom-16 right-8 z-10 sm:block hidden">
          <img
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]
            rounded-full object-cover border border-white/20
            shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-500
            hover:shadow-[0_0_45px_rgba(139,92,246,0.5)] hover:border-[#8B5CF6]/40"
            src={akanksha}
            alt="akanksha"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
