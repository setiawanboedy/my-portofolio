"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[258px] h-[258px] xl:w-[408px] xl:h-[408px] mix-blend-lighten">
        <Image src="/assets/budisetiawan.png" priority quality={100} fill alt="" className="object-contain rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

export default Photo;
