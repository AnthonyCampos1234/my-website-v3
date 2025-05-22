"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const sidebarOptions = [
  { label: "About", value: "about" },
  { label: "Projects", value: "projects" },
  { label: "Socials", value: "socials" },
];

const description = [
  "Hi, I'm Anthony Campos.",
  "I'm currently building movomint - the advanced toolbox for logistics.",
  "I'm doing a software engineer co-op at Toast.",
  "I'm studying CS & Fintech at Northeastern.",
];

const projects = [
  {
    name: "Pydaline",
    desc: "AI-powered network analytics.",
    links: [
      { label: "GitHub", url: "https://github.com/AnthonyCampos1234/Pydaline" },
    ],
  },
  {
    name: "Facsimile",
    desc: "macOS AI memory search tool.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AnthonyCampos1234/Facsimile",
      },
    ],
  },
  {
    name: "TruckTetris",
    desc: "AI logistics for truck loading.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AnthonyCampos1234/TruckTetris",
      },
    ],
  },
  {
    name: "TruckTetris v2",
    desc: "Chat-based AI logistics platform.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AnthonyCampos1234/TruckTetrisv2",
      },
    ],
  },
  {
    name: "Dormeal",
    desc: "Campus food delivery web app.",
    links: [
      { label: "Website", url: "https://www.dormeal.com/" },
      { label: "GitHub", url: "https://github.com/IpDaniel/dormeal" },
    ],
  },
  {
    name: "Dormeal 2.0",
    desc: "Mobile campus food delivery.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AnthonyCampos1234/Dormeal2.0",
      },
    ],
  },
  {
    name: "WutDoIDo",
    desc: "NEU degree audit extension.",
    links: [
      { label: "GitHub", url: "https://github.com/AnthonyCampos1234/WutDoIDo" },
    ],
  },
  {
    name: "Waitless",
    desc: "Class registration management.",
    links: [
      { label: "Website", url: "https://join-waitless.netlify.app/" },
      { label: "GitHub", url: "https://github.com/AnthonyCampos1234/Waitless" },
    ],
  },
  {
    name: "Nota",
    desc: "Student course & GPA tracker app.",
    links: [
      { label: "GitHub", url: "https://github.com/AnthonyCampos1234/Nota" },
    ],
  },
  {
    name: "Stupedia",
    desc: "Experimental 'Yelp for people'.",
    links: [
      { label: "GitHub", url: "https://github.com/AnthonyCampos1234/Stupedia" },
    ],
  },
  {
    name: "Avisari",
    desc: "University advising platform.",
    links: [
      { label: "Website", url: "https://avisari.com" },
      { label: "GitHub", url: "https://github.com/AnthonyCampos1234/Avisari" },
    ],
  },
  {
    name: "EduConnect",
    desc: "AI-powered course selection.",
    links: [{ label: "GitHub", url: "https://github.com/dng24/educonnect" }],
  },
  {
    name: "BillsForKids",
    desc: "Financial education game for kids.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AnthonyCampos1234/BillsForKids",
      },
    ],
  },
  {
    name: "Web of Lies",
    desc: "Misinformation spread visual.",
    links: [
      { label: "Website", url: "https://web-of-lies.vercel.app/" },
      {
        label: "GitHub",
        url: "https://github.com/AnthonyCampos1234/Web-of-Lies",
      },
    ],
  },
  {
    name: "Old Portfolio Website",
    desc: "Previous interactive portfolio.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AnthonyCampos1234/My-Website",
      },
    ],
  },
];

export default function MainContent() {
  const [section, setSection] = useState("about");

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col-reverse md:block">
      <div
        className="
        flex flex-col-reverse md:block
        md:absolute md:top-1/2 md:flex-row md:items-center
        md:left-[calc(40%-128px-0.5px)] md:transform md:-translate-y-1/2
        w-full md:w-auto
      "
      >
        <nav
          className="
            flex flex-row md:flex-col
            items-center md:items-end
            justify-center
            md:pr-8
            w-full md:w-[128px]
            border-t md:border-t-0 md:border-r border-gray-300
            md:border-gray-300
            py-2 md:py-0
            bg-white z-20
            fixed bottom-0 left-0 right-0 md:static
          "
        >
          {sidebarOptions.map((option) => {
            const isActive = section === option.value;
            return (
              <button
                key={option.value}
                onClick={() => setSection(option.value)}
                className={`
                  flex-1 md:flex-none
                  mx-2 md:mx-0
                  mb-0 md:mb-6 md:last:mb-0
                  ${isActive ? "text-black font-semibold" : "text-gray-500"}
                  hover:text-black
                  transition-colors duration-200
                  text-base md:text-sm font-sans tracking-wide
                  outline-none bg-transparent border-none p-0 cursor-pointer
                `}
                style={{ textAlign: "center" }}
                tabIndex={0}
              >
                {option.label}
              </button>
            );
          })}
        </nav>
        <div className="hidden md:block self-stretch w-px bg-gray-300"></div>
      </div>

      <div
        className="
          w-full max-w-full px-4 flex flex-col justify-center min-h-screen
          pb-[80px] md:pb-0
          md:absolute md:top-1/2 md:-translate-y-1/2 md:max-w-lg
          md:left-[calc(40%+0.5px+32px)] md:mt-0
        "
      >
        <FadeIn key={section}>
          {section === "projects" ? (
            <div className="text-black text-base md:text-sm font-sans text-left flex flex-col">
              <div className="flex flex-col gap-2 md:gap-1">
                {projects.map((project) => {
                  const githubLink = project.links.find(
                    (link) => link.label.toLowerCase() === "github",
                  );
                  return (
                    <div
                      key={project.name}
                      className="flex flex-col md:flex-row md:items-baseline text-base md:text-sm"
                    >
                      <span className="font-semibold mr-0 md:mr-4 w-auto md:w-[180px] text-left">
                        {project.name}
                      </span>
                      <span className="text-gray-600 flex-1 text-left">
                        {project.desc}
                      </span>
                      {githubLink && (
                        <a
                          href={githubLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 text-gray-500 hover:text-black mt-1 md:mt-0 md:ml-4 whitespace-nowrap"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : section === "socials" ? (
            <div className="text-black text-base md:text-sm font-sans text-left flex flex-col">
              <ul className="space-y-4 text-base md:text-sm text-gray-700 font-sans">
                <li className="flex flex-row items-center gap-2 flex-wrap">
                  <EnvelopeClosedIcon className="w-5 h-5" />
                  <span>Email:</span>
                  <a
                    href="mailto:anthonyrubencampos@gmail.com"
                    className="underline hover:text-black"
                  >
                    campos.an@northeastern.edu
                  </a>
                </li>
                <li className="flex flex-row items-center gap-2 flex-wrap">
                  <GitHubLogoIcon className="w-5 h-5" />
                  <span>GitHub:</span>
                  <a
                    href="https://github.com/AnthonyCampos1234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black"
                  >
                    AnthonyCampos1234
                  </a>
                </li>
                <li className="flex flex-row items-center gap-2 flex-wrap">
                  <LinkedInLogoIcon className="w-5 h-5" />
                  <span>LinkedIn:</span>
                  <a
                    href="https://linkedin.com/in/anthonyrcampos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black"
                  >
                    anthonyrcampos
                  </a>
                </li>
                <li className="flex flex-row items-center gap-2 flex-wrap">
                  <span
                    className="w-5 h-5 flex items-center justify-center text-xl"
                    style={{
                      fontFamily:
                        "'Segoe UI Symbol', 'Arial Unicode MS', sans-serif",
                    }}
                  >
                    𝕏
                  </span>
                  <span>X:</span>
                  <a
                    href="https://x.com/heyanthonny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black"
                  >
                    heyanthonny
                  </a>
                </li>
                <li className="flex flex-row items-center gap-2 flex-wrap">
                  <DiscordLogoIcon className="w-5 h-5" />
                  <span>Discord:</span>
                  <span>heyanthonny</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="text-black text-base md:text-sm font-sans text-left flex flex-col">
              {description.map((line, idx) => (
                <div key={idx} className="mb-2">
                  {line}
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>

      <Image
        src="/aclogo.png"
        alt="AC Logo"
        className="hidden md:block fixed bottom-4 right-4 w-8 h-8 z-30"
        width={32}
        height={32}
        priority
      />
    </div>
  );
}
