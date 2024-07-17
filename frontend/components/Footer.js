import axios from "axios";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const iconComponents = [FaGithub, FaLinkedin, FaTwitter, FaFacebookSquare];

export default async function Footer() {
  const res = await axios.get("http://localhost:4000/footer");
  const data = res.data;

  const updatedData = data.map((obj, index) => {
    const IconComponent = iconComponents[index];
    return { ...obj, IconComponent };
  });

  return (
    <section className="flex items-center justify-center text-gray-400 mt-10 pt-7 pb-10 border-t border-gray-500">
      <div className="w-full md:w-1/5 flex items-center justify-around md:justify-between">
        {updatedData.map((obj) => (
          <div>
            <a href={obj.link} target="_blank" title={`To ${obj.name} Profile`}>
              <obj.IconComponent className="w-6 h-6" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
