import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { dancingScript } from "@/app/layout";

export default async function Projects() {
  const res = await axios.get("http://localhost:4000/projects");

  const data = res.data;

  return (
    <section className="mt-12 sm:mt-20">
      <div className="container px-5 mx-auto">
        <div>
          <h1
            className={`text-center text-4xl uppercase mb-10 ${dancingScript.className}`}
          >
            projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data &&
            data.map((obj) => (
              // card
              <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-3">
                {/* this div ensures buttons div to stay at bottom */}
                <div className="flex flex-col h-full space-y-6">
                  {/* img div */}
                  <div>
                    <img
                      className="w-full h-48"
                      src={obj.img}
                      alt="project image"
                    />
                  </div>

                  {/* project's info div */}
                  <div className="space-y-1 flex-grow">
                    <div className="flex justify-between items-center">
                      <h1 className="text-xl font-semibold text-white mb-1">
                        {obj.name}
                      </h1>

                      <a
                        href={obj.liveLink}
                        target="_blank"
                        className="flex items-center gap-1 text-sm hover:text-gray-400 duration-300"
                      >
                        Live <FaArrowRightLong />
                      </a>
                    </div>

                    <p className="text-base text-slate-400">{obj.desc}</p>
                  </div>

                  {/* buttons div */}
                  <div className="flex items-center justify-between text-sm">
                    {obj.sourceLink.map((src, idx) => (
                      <a href={src.link} target="_blank" key={idx}>
                        <button
                          className={`rounded-lg ${
                            idx === 0
                              ? "bg-purple-800 hover:bg-purple-900"
                              : "bg-blue-800 hover:bg-blue-900"
                          } capitalize py-2 px-4 duration-300`}
                        >
                          {src.name}
                        </button>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
