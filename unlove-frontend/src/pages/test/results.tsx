import { ResultRadar } from "@/components/custom/resultRadar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import quickTestQuestion from "@/data/quickTest.questions";
import { useAppSelector } from "@/store/hook";
import { selectTestType } from "@/store/slices/testSettingsSlice";
import { selectAnsweredQuestionsRecord } from "@/store/slices/unloveTestSlice";
import { MainProblemsType, ResultsType } from "@/types/answers.types";
import { BaseQuestion, QuestionCategoryType } from "@/types/questions.types";

function GetMainProblems({
  QuestionIdScoreMap,
}: {
  QuestionIdScoreMap: Record<BaseQuestion["id"], number>;
}): MainProblemsType {
  return {
    idMainProblem1: "1",
    idMainProblem2: "2",
    idMainProblem3: "3",
  };
}

function ComputeTestResult({
  filter,
}: {
  filter?: QuestionCategoryType;
} = {}): ResultsType {
  const answeredQuestionsRecord = useAppSelector(selectAnsweredQuestionsRecord);
  const testType = useAppSelector(selectTestType);

  const QuestionIdScoreMap: Record<BaseQuestion["id"], number> = {};

  const score = Object.keys(answeredQuestionsRecord).reduce(
    (totalGapLength, key) => {
      const question = answeredQuestionsRecord[key];
      const baseQuestionsSet =
        testType == "quick" ? quickTestQuestion : quickTestQuestion; // TODO : change with evolution
      if (
        filter &&
        baseQuestionsSet.filter((question) => question.id == key)[0]
          .category !== filter
      ) {
        return totalGapLength;
      }

      switch (question.format) {
        case "radio":
          if (
            question.partnerOne?.answerInput &&
            question.partnerTwo?.answerInput
          ) {
            const gapLength = Math.pow(
              Math.abs(
                question.partnerOne.answerInput -
                  question.partnerTwo.answerInput,
              ),
              2,
            );
            QuestionIdScoreMap[question.id] = gapLength;
            return totalGapLength + gapLength;
          }
          break;
        case "inputSlider":
          if (
            question.partnerOne?.answerInput &&
            question.partnerTwo?.answerInput
          ) {
            let finalValue = 0;
            const answerInputP1 = question.partnerOne.answerInput;
            const answerInputP2 = question.partnerTwo.answerInput;

            // Distance from Partner One to Partner two
            if (answerInputP1 < question.partnerTwo.answerSlider1) {
              finalValue += Math.pow(
                question.partnerTwo.answerSlider1 - answerInputP1,
                2,
              );
            }
            if (answerInputP1 > question.partnerTwo.answerSlider4) {
              finalValue += Math.pow(
                answerInputP1 - question.partnerTwo.answerSlider4,
                2,
              );
            }
            if (answerInputP1 < question.partnerTwo.answerSlider2) {
              finalValue += Math.abs(
                question.partnerTwo.answerSlider2 - answerInputP1,
              );
            }
            if (answerInputP1 > question.partnerTwo.answerSlider3) {
              finalValue += Math.abs(
                question.partnerTwo.answerSlider3 - answerInputP1,
              );
            }

            // Same for Partner Two from Partner two
            if (answerInputP2 < question.partnerOne.answerSlider1) {
              finalValue += Math.pow(
                question.partnerOne.answerSlider1 - answerInputP2,
                2,
              );
            }
            if (answerInputP2 > question.partnerOne.answerSlider4) {
              finalValue += Math.pow(
                answerInputP2 - question.partnerOne.answerSlider4,
                2,
              );
            }
            if (answerInputP2 < question.partnerOne.answerSlider2) {
              finalValue += Math.abs(
                question.partnerOne.answerSlider2 - answerInputP2,
              );
            }
            if (answerInputP2 > question.partnerOne.answerSlider3) {
              finalValue += Math.abs(
                question.partnerOne.answerSlider3 - answerInputP2,
              );
            }
            QuestionIdScoreMap[question.id] = finalValue;
            return totalGapLength + finalValue;
          }
      }
      return totalGapLength;
    },
    0,
  );

  const mainProblems = GetMainProblems(QuestionIdScoreMap);
  return {
    score,
    idMainProblem1: "1",
    idMainProblem2: "2",
    idMainProblem3: "3",
  };
}

function Results() {
  const unloveScore = ComputeTestResult();

  const radarChartScores = {
    familyScore: ComputeTestResult({ filter: "family" }).score,
    workScore: ComputeTestResult({ filter: "work" }).score,
    loyaltyScore: ComputeTestResult({ filter: "loyalty" }).score,
    futureScore: ComputeTestResult({ filter: "future" }).score,
    currentScore: ComputeTestResult({ filter: "current" }).score,
    valuesScore: ComputeTestResult({ filter: "values" }).score,
  };

  return (
    <div>
      <div className="text-3xl">
        {unloveScore.score} UnLove point{unloveScore.score > 1 && "s"}
      </div>
      <div className="flex flex-row py-8">
        <div className="w-full gap-y-2">
          <div className="text-xl text-left">Three questions to ask soon:</div>
          <div className="text-lg text-left">
            Is their a pilot in the plane?
          </div>
          <div className="text-lg text-left">
            Does the set of all set contains itself?
          </div>
          <div className="text-lg text-left">This affirmation is false</div>
        </div>
        <ResultRadar {...radarChartScores} />
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            How is my score computed?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 items-start">
            <p className=" text-left">TO BE BUILT</p>
            <p className=" text-left">Basic distance computation + formula</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            What is a high score and low score?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 items-start">
            <p className=" text-left">TO BE BUILT</p>
            <p className=" text-left">Score range + gaussian</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Results;
