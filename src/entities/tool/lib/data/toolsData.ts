import reactIcon from "@/shared/assets/icons/tools/react.png";
import nextIcon from "@/shared/assets/icons/tools/next.png";
import tailwindIcon from "@/shared/assets/icons/tools/tailwind.png";
import typescriptIcon from "@/shared/assets/icons/tools/typescript.png";
import laravelIcon from "@/shared/assets/icons/tools/laravel.png";
import vercelIcon from "@/shared/assets/icons/tools/vercel.png";
import csharpIcon from "@/shared/assets/icons/tools/csharp.svg";
import dartIcon from "@/shared/assets/icons/tools/dart.png";
import javascriptIcon from "@/shared/assets/icons/tools/javascript.png";
import type { Tool } from "../../model/types/toolTypes";

export const toolsData: Tool[] = [
    { name: "React", icon: reactIcon, description: "UI Library" },
    { name: "Next.js", icon: nextIcon, description: "Fullstack Framework" },
    { name: "Tailwind CSS", icon: tailwindIcon, description: "Utility-First CSS" },
    { name: "TypeScript", icon: typescriptIcon, description: "Typed JS" },
    { name: "Laravel", icon: laravelIcon, description: "PHP Web Framework" },
    { name: "Vercel", icon: vercelIcon, description: "Deployment Platform" },
    { name: "C#", icon: csharpIcon, description: ".NET Language" },
    { name: "Dart", icon: dartIcon, description: "UI-Focused Language" },
    { name: "JavaScript", icon: javascriptIcon, description: "Dynamic Scripting Language" },
];
