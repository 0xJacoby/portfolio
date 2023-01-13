import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Typewriter } from 'react-simple-typewriter';

import Duck from "../components/Duck";
import PageSelector from "../components/PageSelector";

import "animate.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="titillium text-7xl font-bold text-white animate__animated animate__fadeInDown" style={{animationDelay: "0.2s"}}>
          <Typewriter words={["0xJacoby", "Jacob Sundh"]} delaySpeed={3000} cursor loop={false} />
        </div>
        <div className="animate__animated animate__fadeIn" style={{animationDelay: "1.4s"}}><Duck h="500px" w="500px" /></div>
        <PageSelector/>
      </div>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>0xJacoby</title>;
