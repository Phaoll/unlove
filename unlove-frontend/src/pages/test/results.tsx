import { useAppSelector } from "@/store/hook";
import { selectAnsweredQuestionsRecord } from "@/store/slices/unloveTestSlice";

function Results() {
  const answeredQuestionsRecord = useAppSelector(selectAnsweredQuestionsRecord);

  return (
    <div>
      <div>Results</div>
      <div className="py-4">
        You are far appart of{" "}
        {Object.keys(answeredQuestionsRecord).reduce((totalGapLength, key) => {
          const question = answeredQuestionsRecord[key];
          if (question.partnerOne && question.partnerTwo) {
            const gapLength = Math.pow(
              Math.abs(question.partnerOne - question.partnerTwo),
              2,
            );
            return totalGapLength + gapLength;
          }
          return totalGapLength;
        }, 0)}
      </div>
    </div>
  );
}

export default Results;
