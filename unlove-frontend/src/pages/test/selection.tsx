import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hook";
import {
  resetTestSettings,
  selectNumberOfPartner,
  selectTestType,
  setNumberOfPartner,
  setTestType,
} from "@/store/slices/testSettingsSlice";
import { BookUp2, Star, Sword, Swords, Timer } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// TODO
// Explain how test work

function Selection() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Reset only on first load
  useEffect(() => {
    dispatch(resetTestSettings());
  }, [dispatch]);
  const testType = useAppSelector(selectTestType);
  const numberOfPartner = useAppSelector(selectNumberOfPartner);

  return (
    <div>
      <h2 className="py-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Which test are you here for?
      </h2>
      <div className="flex gap-8 py-8 justify-center">
        <div className="flex flex-col">
          {/* https://github.com/shadcn-ui/ui/issues/6316 */}
          <Button
            className={`h-32 w-32 [&_svg]:size-20 border-4 ${testType === "quick" ? "border-orange-400 bg-orange-300" : "border-transparent"}`}
            onClick={() => dispatch(setTestType("quick"))}
          >
            <Timer />
          </Button>
          <div>Quick test</div>
        </div>
        <div className="flex flex-col">
          {/* https://github.com/shadcn-ui/ui/issues/6316 */}
          <Button
            className={`h-32 w-32 [&_svg]:size-20 border-4 ${testType === "complete" ? "border-orange-400 bg-orange-300" : "border-transparent"}`}
            onClick={() => dispatch(setTestType("complete"))}
          >
            <BookUp2 />
          </Button>
          <div>Complete test</div>
        </div>
      </div>
      {testType && (
        <Alert>
          <AlertTitle>
            {testType === "quick"
              ? "5 minutes, 30 questions for the pure essence of the UnLove test."
              : testType === "complete"
                ? "All the question that you have to ask for not UnLoving, don't miss any detail of your relationship."
                : ""}
          </AlertTitle>
        </Alert>
      )}
      <h2 className="py-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Are you two to take the test?
      </h2>
      <div className="flex gap-8 py-8 justify-center">
        <div className="flex flex-col">
          {/* https://github.com/shadcn-ui/ui/issues/6316 */}
          <Button
            className={`h-32 w-32 [&_svg]:size-20 border-4 ${numberOfPartner === 1 ? "border-orange-400 bg-orange-300" : "border-transparent"}`}
            onClick={() => dispatch(setNumberOfPartner(1))}
          >
            <Sword />
          </Button>
          <div>Single Player</div>
        </div>
        <div className="flex flex-col">
          {/* https://github.com/shadcn-ui/ui/issues/6316 */}
          <Button
            className={`h-32 w-32 [&_svg]:size-20 border-4 ${numberOfPartner === 2 ? "border-orange-400 bg-orange-300" : "border-transparent"}`}
            onClick={() => dispatch(setNumberOfPartner(2))}
          >
            <Swords />
          </Button>
          <div>Two Players</div>
        </div>
      </div>
      {numberOfPartner && (
        <Alert>
          <AlertTitle>
            {numberOfPartner === 1
              ? "Take the test now and save your answer to get the results later, we store all your answers for free for 24 hours."
              : numberOfPartner === 2
                ? "Take the test side by side and have the result delivered immediately."
                : ""}
          </AlertTitle>
        </Alert>
      )}
      {testType && numberOfPartner && (
        <div className="py-4">
          <Button
            onClick={() =>
              navigate(
                `/test/${testType}/${numberOfPartner === 1 ? "one-partner" : numberOfPartner === 2 ? "two-partners" : ""}`,
                { replace: true },
              )
            }
          >
            <Star /> Let's UnLove
          </Button>
        </div>
      )}
    </div>
  );
}

export default Selection;
