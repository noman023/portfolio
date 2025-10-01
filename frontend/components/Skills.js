import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { dancingScript } from "@/app/layout";

export default function Skills() {
  const skillsString = `
  const skills = {
    frontend: {
      languages: ["JavaScript/TypeScript", "HTML5", "CSS3"],
      frameworksOrLibraries: ["React.js", "Next.js", "Tailwind CSS", "Tanstack's Libraries", "ShadCN UI"],
      stateManagement: ["Context API", "Zustand"],
    },
    backend: {
      languages: ["JavaScript (Node.js)", "SQL"],
      frameworks: ["Express.js"],
      databases: ["PostgreSQL", "MongoDB"],
    },
    others: {
      tools: ["Git & GitHub", "Vs Code", "Postman"],
    },
  };
`;

  return (
    <div id="skills">
      <div>
        <h1
          className={`text-center text-4xl uppercase mb-10 ${dancingScript.className}`}
        >
          Skills
        </h1>
      </div>

      <div className="md:text-xl">
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {skillsString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
