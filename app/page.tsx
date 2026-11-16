import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div>
            <span className="text-xl text-accent font-medium tracking-wide">
              Mobile & Backend Developer
            </span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Budi Setiawan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 leading-relaxed">
              Software Developer specializing in Mobile (Kotlin, Flutter) and
              Backend Architecture (Golang, Laravel). Passionate about building
              high-performance mobile applications, seamless user experiences, and
              scalable distributed systems.
            </p>

            {/* btn social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/CV_BUDI_SETIAWAN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="CV_BUDI_SETIAWAN.pdf"
              >
                <Button
                  className="uppercase flex items-center gap-2 hover:bg-accent"
                  variant="outline"
                  size="lg"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            {/* photo */}
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </section>
  );
}
