import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { fetchData } from "@/utils/fetchData";

const iconComponents = [FaGithub, FaLinkedin, FaTwitter, FaFacebookSquare];

export default async function Footer() {
  const data = await fetchData("footer");

  // add icon to every object
  const updatedData = data.map((obj, index) => {
    const IconComponent = iconComponents[index];
    return { ...obj, IconComponent };
  });

  return (
    <section className="text-center text-gray-400 mt-10 pt-7 pb-10 border-t border-gray-500">
      <div className="w-full md:w-1/5 md:m-auto flex items-center justify-around md:justify-between">
        {updatedData.map((obj, idx) => (
          <div key={idx}>
            <a href={obj.link} target="_blank" title={`To ${obj.name} Profile`}>
              <obj.IconComponent className="w-6 h-6 hover:text-gray-500 duration-300" />
            </a>
          </div>
        ))}
      </div>

      <p className="mt-3">molla.noman23@gmail.com</p>
    </section>
  );
}
