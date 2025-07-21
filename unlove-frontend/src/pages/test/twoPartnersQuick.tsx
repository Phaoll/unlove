import { TwoPartnerQuestionRenderer } from "@/components/custom/twoPartnersQuestionRenderer/questionRender";
import { Button } from "@/components/ui/button";
import quickTestQuestion from "@/data/quickTest.questions";
import { initializeTest } from "@/store/slices/unloveTestSlice";
import { CircleQuestionMark } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function TwoPartnersQuickTest() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(initializeTest("quick"));

  return (
    <div>
      <div>TwoPartnersShortTest Page</div>
      <div className="flex flex-col items-center gap-4">
        {quickTestQuestion.map((question) => (
          <TwoPartnerQuestionRenderer question={question} />
        ))}
      </div>
      <div className="py-4">
        <Button onClick={() => navigate(`/test/result`, { replace: true })}>
          <CircleQuestionMark /> How bad is it?
        </Button>
      </div>
    </div>
  );
}

export default TwoPartnersQuickTest;
