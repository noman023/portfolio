import { FaGithub } from "react-icons/fa";
import { dancingScript } from "@/app/layout";

export default function Header() {
  return (
    <div className="py-2 flex justify-between items-center">
      <a href="/">
        <h1 className={`text-4xl ${dancingScript.className}`}>Noman</h1>
      </a>

      <a
        href="https://github.com/noman023/portfolio"
        target="_blank"
        title="go to this project"
      >
        <FaGithub className="w-9 h-8" />
      </a>
    </div>
  );
}
