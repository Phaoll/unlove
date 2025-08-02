"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useAppSelector } from "@/store/hook";
import { selectTestType } from "@/store/slices/testSettingsSlice";

const chartConfig = {
  score: {
    label: "score",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

interface ResultRadarProps {
  familyScore: number;
  workScore: number;
  loyaltyScore: number;
  futureScore: number;
  currentScore: number;
  valuesScore: number;
}

export function ResultRadar({
  familyScore,
  workScore,
  loyaltyScore,
  futureScore,
  currentScore,
  valuesScore,
}: ResultRadarProps) {
  const testType = useAppSelector(selectTestType);

  const chartData = [
    { questionType: "family", label: "Family", score: familyScore },
    { questionType: "work", label: "Work", score: workScore },
    { questionType: "loyalty", label: "Loyalty", score: loyaltyScore },
    { questionType: "future", label: "Future situation", score: futureScore },
    {
      questionType: "current",
      label: "Current situation",
      score: currentScore,
    },
    { questionType: "values", label: "Others", score: valuesScore },
  ];

  const radarChartMaxScore = testType == "quick" ? 200 : 2000; // TODO change with evolution
  return (
    <Card className="min-w-96">
      <CardHeader className="items-center pb-4">
        <CardTitle>UnLove concerns radar</CardTitle>
        <CardDescription>
          Which domain needs the most discussion?
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="label" />
            <PolarRadiusAxis angle={90} domain={[0, radarChartMaxScore]} />
            <PolarGrid />
            <Radar
              dataKey="score"
              fill="hsl(var(--primary))"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
