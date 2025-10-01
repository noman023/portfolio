import { FaGithub } from "react-icons/fa";
import { dancingScript } from "@/app/layout";

export default function Header() {
  return (
    <div className="py-2 flex justify-between items-center px-5 md:px-0">
      <div>
        <a href="/">
          <h1 className={`text-4xl ${dancingScript.className}`}>Noman</h1>
        </a>
      </div>

      <div className="flex gap-6 items-center">
        <div className="space-x-4 text-gray-300">
          <a href="#skills" className="hover:text-gray-400 duration-300">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-400 duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 duration-300">
            Contact
          </a>
        </div>

        <a
          href="https://github.com/noman023/portfolio"
          target="_blank"
          title="See Codebase"
        >
          <FaGithub className="w-9 h-8" />
        </a>
      </div>
    </div>
  );
}
