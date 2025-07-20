import { Button } from "@/components/ui/button";
import { BookUp2, Sword, Swords, Timer } from "lucide-react";

function Selection() {
  return (
    <div>
      <h2 className="py-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Which test are you here for?
      </h2>
      <div className="flex gap-8 py-8 justify-center">
        <div className="flex flex-col">
          <Button className="h-48 w-48 [&_svg]:size-24">
            <Timer />
          </Button>
          <div>Quick test</div>
        </div>
        <div className="flex flex-col">
          <Button className="h-48 w-48 [&_svg]:size-24">
            <BookUp2 />
          </Button>
          <div>Complete test</div>
        </div>
      </div>
      <h2 className="py-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Are you two to take the test?
      </h2>
      <div className="flex gap-8 py-8 justify-center">
        <div className="flex flex-col">
          <Button className="h-48 w-48 [&_svg]:size-24">
            <Sword />
          </Button>
          <div>Single Player</div>
        </div>
        <div className="flex flex-col">
          <Button className="h-48 w-48 [&_svg]:size-24">
            <Swords />
          </Button>
          <div>Two Players</div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
