import axios from "axios";
import Image from "next/image";

export default async function About() {
  const res = await axios.get("http://localhost:4000");

  const { headline, details, cvLink, img } = res.data;
  return (
    <main className=" py-[60px] flex flex-col-reverse sm:flex-row ">
      <div className="w-full sm:w-1/2 text-center sm:flex sm:items-center sm:justify-center">
        <div className="sm:w-2/3 sm:flex sm:flex-col sm:items-start text-white ">
          <h1 className="text-4xl sm:text-5xl font-medium sm:font-bold mb-4">
            {headline}
          </h1>

          <p className="text-sm sm:text-base text-justify">{details}</p>

          <a href={cvLink} target="_blank">
            <button className=" bg-green-600 hover:bg-green-700 duration-200 rounded-2xl text-sm sm:text-base p-2 mt-5">
              View Resume
            </button>
          </a>
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex justify-center mb-6 sm:mb-0">
        <div className="w-[200px] bg-slate-800 p-6 ">
          <Image
            src={`data:image/jpeg;base64,${img}`}
            alt="Picture of noman"
            width={150}
            height={150}
          />
        </div>
      </div>
    </main>
  );
}
