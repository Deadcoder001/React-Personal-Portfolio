"use client"

import React from "react"
import { HomeIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/ui/dock"

const ICONS = {
  LinkedIn: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
  ),
  GitHub: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
  ),
  Twitter: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
  ),
  Mail: (props) => (
    <svg fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}><title>mail</title><path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" /></svg>
  ),
};

const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashif-elahi-1740302b3', icon: ICONS.LinkedIn },
  { name: 'GitHub', url: 'https://github.com/Deadcoder001', icon: ICONS.GitHub },
  { name: 'X', url: 'https://x.com/Ashif_Elahi01', icon: ICONS.Twitter },
  { name: 'Mail', url: 'mailto:asifelahi6@gmail.com', icon: ICONS.Mail },
];

export default function SocialMagnet() {
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2">
      <TooltipProvider>
        <Dock>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  onClick={handleHomeClick}
                  aria-label="Home"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <HomeIcon className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" className="h-full" />
          {SOCIALS.map((social) => (
            <DockIcon key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}