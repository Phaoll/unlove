import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  BadgeInfo,
  BookUp2,
  PopcornIcon,
  Star,
  Sword,
  Swords,
  Timer,
} from "lucide-react";
import { useState } from "react";

// TODO
// Add store to set the parameters of the test
// Add launch button

function Selection() {
  const [testTypeText, setTestTypeText] = useState<null | string>(null);
  const [numberPatnerText, setNumberPatnerText] = useState<null | string>(null);

  // Test type
  const [quickTestSelected, setQuickTestSelected] = useState<boolean>(false);
  const [completeTestSelected, setCompleteTestSelected] =
    useState<boolean>(false);
  // Partner set up
  const [singlePartnerSelected, setSinglePartnerSelected] =
    useState<boolean>(false);
  const [twoPartnerSelected, setTwoPartnerSelected] = useState<boolean>(false);

  function onClickQuickTest() {
    setQuickTestSelected(true);
    setCompleteTestSelected(false);
    setTestTypeText(
      "5 minutes, 30 questions for the pure essence of the UnLove test.",
    );
  }
  function onClickCompleteTest() {
    setCompleteTestSelected(true);
    setQuickTestSelected(false);
    setTestTypeText(
      "All the question that you have to ask for not UnLoving, don't miss any detail of your relationship.",
    );
  }
  function onClickSinglePartner() {
    setSinglePartnerSelected(true);
    setTwoPartnerSelected(false);
    setNumberPatnerText(
      "Take the test now and save your answer to get the results later, we store all your answers for free for 24 hours.",
    );
  }
  function onClickTwoPartner() {
    setTwoPartnerSelected(true);
    setSinglePartnerSelected(false);
    setNumberPatnerText(
      "Take the test side by side and have the result delivered immediately.",
    );
  }
  function onClickLaunchTest() {
    console.log("Launching test");
  }

  return (
    <div>
      <h2 className="py-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Which test are you here for?
      </h2>
      <div className="flex gap-8 py-8 justify-center">
        <div className="flex flex-col">
          {/* https://github.com/shadcn-ui/ui/issues/6316 */}
          <Button
            className={`h-32 w-32 [&_svg]:size-20 border-4 ${quickTestSelected ? "border-orange-400 bg-orange-300" : "border-transparent"}`}
            onClick={onClickQuickTest}
          >
            <Timer />
          </Button>
          <div>Quick test</div>
        </div>
        <div className="flex flex-col">
          {/* https://github.com/shadcn-ui/ui/issues/6316 */}
          <Button
            className={`h-32 w-32 [&_svg]:size-20 border-4 ${completeTestSelected ? "border-orange-400 bg-orange-300" : "border-transparent"}`}
            onClick={onClickCompleteTest}
          >
            <BookUp2 />
          </Button>
          <div>Complete test</div>
        </div>
      </div>
      {testTypeText && (
        <Alert>
          <AlertTitle>{testTypeText}</AlertTitle>
        </Alert>
      )}
      <h2 className="py-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Are you two to take the test?
      </h2>
      <div className="flex gap-8 py-8 justify-center">
        <div className="flex flex-col">
          {/* https://github.com/shadcn-ui/ui/issues/6316 */}
          <Button
            className={`h-32 w-32 [&_svg]:size-20 border-4 ${singlePartnerSelected ? "border-orange-400 bg-orange-300" : "border-transparent"}`}
            onClick={onClickSinglePartner}
          >
            <Sword />
          </Button>
          <div>Single Player</div>
        </div>
        <div className="flex flex-col">
          {/* https://github.com/shadcn-ui/ui/issues/6316 */}
          <Button
            className={`h-32 w-32 [&_svg]:size-20 border-4 ${twoPartnerSelected ? "border-orange-400 bg-orange-300" : "border-transparent"}`}
            onClick={onClickTwoPartner}
          >
            <Swords />
          </Button>
          <div>Two Players</div>
        </div>
      </div>
      {numberPatnerText && (
        <Alert>
          <AlertTitle>{numberPatnerText}</AlertTitle>
        </Alert>
      )}
      {testTypeText && numberPatnerText && (
        <div className="py-4">
          <Button onClick={onClickLaunchTest}>
            <Swords /> Let's UnLove
          </Button>
        </div>
      )}
    </div>
  );
}

export default Selection;
