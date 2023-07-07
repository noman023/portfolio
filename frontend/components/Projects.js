import axios from "axios";

export default async function Projects() {
  const res = await axios.get("http://localhost:4000/projects");

  const data = res.data;
  return (
    <section className="mt-12 sm:mt-20">
      <div class="container px-5 mx-auto">
        <div>
          <h1 className="flex items-center justify-center text-2xl sm:text-3xl font-semibold uppercase underline mb-10">
            projects
          </h1>
        </div>

        <div class="flex flex-wrap -m-4">
          {/* card */}
          {data &&
            data.map((obj) => (
              <div class="p-4 md:w-1/3">
                <div class="h-full flex flex-col justify-between border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="p-3">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`data:image/jpeg;base64,${obj.img}`}
                      alt="blog"
                    />
                  </div>

                  <div class="p-3">
                    <h1 class="text-xl font-semibold text-white mb-1">
                      {obj.name}
                    </h1>

                    <p class=" text-base text-slate-400 mb-5">{obj.desc}</p>
                  </div>

                  <div className="p-3">
                    {Object.keys(obj).length === 5 ? (
                      <div class="flex items-center justify-between text-base font-medium">
                        <a href={obj.liveLink} target="_blank">
                          <button className=" w-[100px] rounded-lg bg-teal-600 hover:bg-teal-700 capitalize p-1 duration-200">
                            live
                          </button>
                        </a>

                        <a href={obj.githubLink} target="_blank">
                          <button className="w-[100px] rounded-lg bg-purple-800 hover:bg-purple-900 capitalize p-1 duration-200">
                            github
                          </button>
                        </a>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-base ">
                        <a href={obj.githubLink} target="_blank">
                          <button className="w-[100px] rounded-lg bg-purple-800 hover:bg-purple-900 capitalize p-1 duration-200 font-medium">
                            github
                          </button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

/* {
    name: "Youtube Clone",
    desc: "This is a youtube clone project. created using rapid api and react js.",
    img: youtubeImg,
    liveLink: "https://youtube-clone-noman.netlify.app/",
    githubLink: "https://github.com/noman023/youtube-clone",
  },
  {
    name: "FoodExpress",
    desc: "This is an ecommerce project we've created in a team collaboration as our first react project at a course we're in.",
    img: ecommerceImg,
    liveLink: "",
    githubLink: "https://github.com/noman023/foodExpress",
  },
  {
    name: "Hoobank",
    desc: "This project created from a figma design to a react project.",
    img: hoobankImg,
    liveLink: "",
    githubLink: "https://github.com/noman023/figma-to-react",
  },
]; */
