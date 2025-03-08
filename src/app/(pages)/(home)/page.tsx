import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 min-h-[90vh] flex flex-col items-center justify-center select-none">
      <h1 className="text-7xl text-center font-extrabold tracking-tighter">
        HAIQ PORTFOLIO
      </h1>
      <p className="text-lg mt-5 text-center">
        Welcome to my portfolio website, I'm Tomer Haik, a full-stack developer.
      </p>
    </div>
  );
}
