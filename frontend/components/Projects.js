import { FaArrowRightLong } from "react-icons/fa6";
import { dancingScript } from "@/app/layout";

import { fetchData } from "@/utils/fetchData";

export default async function Projects() {
  const data = await fetchData("projects");

  return (
    <section id="projects" className="mt-12 sm:mt-20">
      <div className="container px-5 mx-auto">
        <div>
          <h1
            className={`text-center text-4xl uppercase mb-10 ${dancingScript.className}`}
          >
            projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data &&
            data.map((obj, idx) => (
              // card
              <div
                key={idx}
                className="bg-gray-800 hover:bg-gray-900 duration-500 border-2 border-gray-500 hover:border-gray-700 rounded-xl hover:cursor-pointer"
              >
                {/* this div ensures buttons div to stay at bottom */}
                <div className="flex flex-col h-full space-y-6">
                  {/* img div */}
                  <div>
                    <img
                      className="w-full h-48 rounded-md"
                      src={obj.img}
                      alt="project image"
                    />
                  </div>

                  {/* project's info div */}
                  <div className="space-y-1 flex-grow p-3">
                    <div className="flex justify-between items-center mb-2">
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
                  <div className="flex items-center justify-between text-sm p-3">
                    {obj.sourceLink.map((src, idx) => (
                      <a href={src.link} target="_blank" key={idx}>
                        <button
                          className={`rounded-lg ${
                            idx === 0
                              ? "bg-gray-500 hover:bg-gray-600"
                              : "bg-[#636363] hover:bg-[#494949]"
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
