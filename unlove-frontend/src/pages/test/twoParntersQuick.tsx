import { TwoPartnerQuestionRenderer } from "@/components/custom/twoPartnersQuestionRenderer/questionRender";
import quickTestQuestion from "@/data/questions";

function TwoPartnersQuickTest() {
  return (
    <div>
      <div>TwoPartnersShortTest Page</div>
      <div className="flex flex-col items-center gap-4">
        {quickTestQuestion.map((question) => (
          <TwoPartnerQuestionRenderer question={question} />
        ))}
      </div>
    </div>
  );
}

export default TwoPartnersQuickTest;
