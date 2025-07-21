import { QuestionType } from "@/types/questions.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
type TwoPartnersRadioQuestionRendererProps = {
  question: QuestionType;
};

const TwoPartnersRadioQuestionRenderer = ({
  question,
}: TwoPartnersRadioQuestionRendererProps) => {
  return (
    <Card className="w-fit py-1">
      <CardHeader>
        <CardTitle>{question.wording.EN}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-24 justify-center">
          <Card>
            <CardContent className="py-4">
              <RadioGroup>
                <div className="flex flex-row gap-8 justify-center items-center">
                  <RadioGroupItem value={"-3"} id="r1" className="h-8 w-8" />
                  <RadioGroupItem value={"-1"} id="r2" className="h-6 w-6" />
                  <RadioGroupItem
                    value={"0"}
                    id="r3"
                    className="h-4 w-4 border border-gray-700"
                  />
                  <RadioGroupItem value={"1"} id="r4" className="h-6 w-6" />
                  <RadioGroupItem value={"3"} id="r5" className="h-8 w-8" />
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4">
              <RadioGroup>
                <div className="flex flex-row gap-8 justify-center items-center">
                  <RadioGroupItem value={"-3"} id="r1" className="h-8 w-8" />
                  <RadioGroupItem value={"-1"} id="r2" className="h-6 w-6" />
                  <RadioGroupItem
                    value={"0"}
                    id="r3"
                    className="h-4 w-4 border border-gray-700"
                  />
                  <RadioGroupItem value={"1"} id="r4" className="h-6 w-6" />
                  <RadioGroupItem value={"3"} id="r5" className="h-8 w-8" />
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default TwoPartnersRadioQuestionRenderer;
