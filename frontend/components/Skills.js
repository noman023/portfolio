import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { dancingScript } from "@/app/layout";

export default function Skills() {
  const skillsString = `
  const skills = {
    core: {
      Languages: ["JavaScript", "TypeScript (basic)", "HTML5", "CSS3"],
      Libraries: ["React.js", "Next.js",  "Tailwind CSS"],
      StateManagement: ["Context API", "Redux"],
      Others: ["Git", "GitHub", "Vs Code"],
    },
    familiar: {
      Backend: ["Node.js", "Express.js"],
      Databases: ["MongoDB"],
    }
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
