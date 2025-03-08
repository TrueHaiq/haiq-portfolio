import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { redirect } from "next/navigation";

export default function NotFound() {
  return (
    <div className="h-[90vh] space-y-10 flex flex-col text-center items-center justify-center">
      <div className="space-y-10 flex flex-col items-center">
        <div className="flex flex-col items-start">
          <p className="text-primary/60 font-extrabold text-xl sm:text-2xl">
            Whoops!
          </p>
          <h1 className="text-primary/60 font-extrabold text-[10rem] my-[-3rem] sm:text-[15rem] sm:my-[-5rem]">
            404
          </h1>
        </div>
        <p className="text-md text-sm md:text-base w-[80vw] md:w-[40rem]">
          Oops! Looks like you’ve wandered into uncharted territory! This page
          has gone on an adventure and can’t be found right now. Don't worry,
          though—it's not you, it's us! Why not head back to the homepage and
          see what other treasures await?
        </p>
      </div>
      <Button
        onClick={() => redirect("/")}
        variant={"outline"}
        className="flex items-center"
      >
        Go Back Home
        <ArrowLeft height={20} />
      </Button>
    </div>
  );
}
