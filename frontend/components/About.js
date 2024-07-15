import axios from "axios";
import Image from "next/image";

export default async function About() {
  const res = await axios.get("http://localhost:4000");

  const { headline, details, cvLink, img } = res.data;

  return (
    <main className="py-[60px] flex flex-col-reverse gap-7 md:flex-row">
      {/* text div */}
      <div className="w-full md:w-1/2">
        <div className="md:w-2/3 mx-auto md:mt-7">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{headline}</h1>

          <p className="text-justify">{details}</p>

          <a href={cvLink} target="_blank">
            <button className="bg-green-600 hover:bg-green-800 duration-300 rounded-xl p-3 mt-5">
              View Resume
            </button>
          </a>
        </div>
      </div>

      {/* img div */}
      <div className="w-full md:w-1/2 flex justify-center mb-6">
        <div className="bg-slate-800 p-6">
          <Image src={img} alt="picture of Noman" width={150} height={150} />
        </div>
      </div>
    </main>
  );
}
