import React from 'react';
import { VelocityText } from './ScrollVelocity';
import { Figma, Git, Javascript, Mysql, Nextjs, Node, Php, PostgreSQL, ReactLogo, Typescript, Bootstrap, Css, Django, Html, MongoDB, Postman } from './SkillLogos';
import { Highlighter } from "@/components/ui/highlighter";

const skillsRow1 = [
  <ReactLogo key="react" />,
  <Nextjs key="nextjs" />,
  <Javascript key="js" />,
  <Typescript key="ts" />,
  <Bootstrap key="bootstrap" />,
  <Css key="css" />,
  <Django key="django" />,
  <Figma key="figma" />,
];

const skillsRow2 = [

  <Html key="html" />,
  <MongoDB key="mongodb" />,
  <PostgreSQL key="postgresql" />,
  <Postman key="postman" />,
  <Mysql key="mysql" />,
  <Node key="node" />,
  <Git key="git" />,
  <Php key="php" />,
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-white text-black py-24">
      <div className="container mx-auto text-center">
        <div className="inline-block mb-12">
          <h2 className="text-5xl font-bold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Tech Stack
            </Highlighter>
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <VelocityText baseVelocity={-5} numCopies={4}>
          {skillsRow1.map((logo, index) => (
            <div key={index} className="w-20 h-20 text-gray-600 mx-4">
              {logo}
            </div>
          ))}
        </VelocityText>
        <VelocityText baseVelocity={5} numCopies={4}>
          {skillsRow2.map((logo, index) => (
            <div key={index} className="w-20 h-20 text-gray-600 mx-4">
              {logo}
            </div>
          ))}
        </VelocityText>
      </div>
    </section>
  );
}