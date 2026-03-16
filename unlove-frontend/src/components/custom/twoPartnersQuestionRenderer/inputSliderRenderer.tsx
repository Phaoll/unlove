import React, { useCallback, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InputSliderQuestion } from "@/types/questions.types";

// ─── Constants ────────────────────────────────────────────────────────────────

const SEG_COLORS = [
  "#f97316", // outer left  – orange-500  (dealbreaker)
  "#ddd6fe", // zone 1→2   – violet-200  (preferred)
  "#6d28d9", // zone 2→3   – violet-700  (ideal)
  "#ddd6fe", // zone 3→4   – violet-200  (preferred)
  "#f97316", // outer right – orange-500  (dealbreaker)
] as const;

const THUMB_BORDER = ["#f97316", "#6d28d9", "#6d28d9", "#f97316"] as const;

const TOOLTIP_CLASS = [
  "bg-stone-900 text-white",
  "bg-violet-700 text-white",
  "bg-violet-700 text-white",
  "bg-stone-900 text-white",
] as const;

type Cursors = [number, number, number, number];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

function toPct(value: number, min: number, max: number) {
  return ((value - min) / (max - min)) * 100;
}

// ─── Single slider panel ──────────────────────────────────────────────────────

interface SliderPanelProps {
  min: number;
  max: number;
  sliderWording: string;
  inputWording: string;
  defaultCursors: Cursors;
  /** When true cursors can share the same position. Controlled by the parent, not exposed to the user. */
  allowOverlap: boolean;
}

const SliderPanel: React.FC<SliderPanelProps> = ({
  min,
  max,
  sliderWording,
  inputWording,
  defaultCursors,
  allowOverlap,
}) => {
  const [cursors, setCursors] = useState<Cursors>(defaultCursors);
  const [dragging, setDragging] = useState<number | null>(null);
  const [inputRaw, setInputRaw] = useState("");
  const [inputError, setInputError] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const pcts = cursors.map((v) => toPct(v, min, max));

  const segments = [
    { left: 0, width: pcts[0], color: SEG_COLORS[0] },
    { left: pcts[0], width: pcts[1] - pcts[0], color: SEG_COLORS[1] },
    { left: pcts[1], width: pcts[2] - pcts[1], color: SEG_COLORS[2] },
    { left: pcts[2], width: pcts[3] - pcts[2], color: SEG_COLORS[3] },
    { left: pcts[3], width: 100 - pcts[3], color: SEG_COLORS[4] },
  ];

  const valueFromClientX = useCallback(
    (clientX: number): number => {
      if (!trackRef.current) return min;
      const rect = trackRef.current.getBoundingClientRect();
      const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
      return Math.round(min + ratio * (max - min));
    },
    [min, max],
  );

  const handlePointerDown = useCallback(
    (index: number) => (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
      setDragging(index);
    },
    [],
  );

  const handlePointerMove = useCallback(
    (index: number) => (e: React.PointerEvent<HTMLDivElement>) => {
      if (dragging !== index) return;
      const raw = valueFromClientX(e.clientX);
      const gap = allowOverlap ? 0 : 1;
      setCursors((prev) => {
        const lo = index > 0 ? prev[index - 1] + gap : min;
        const hi = index < 3 ? prev[index + 1] - gap : max;
        const next = [...prev] as Cursors;
        next[index] = clamp(raw, lo, hi);
        return next;
      });
    },
    [dragging, min, max, allowOverlap, valueFromClientX],
  );

  const handlePointerUp = useCallback(
    (index: number) => (e: React.PointerEvent<HTMLDivElement>) => {
      if (dragging !== index) return;
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
      setDragging(null);
    },
    [dragging],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9-]/g, "").replace(/(?!^)-/g, "");
    setInputRaw(raw);
    if (raw === "" || raw === "-") {
      setInputError(false);
      return;
    }
    const n = parseInt(raw, 10);
    setInputError(!Number.isInteger(n) || n < min || n > max);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col gap-5">
      {/* Slider sub-question */}
      <p className="text-sm font-medium text-center">{sliderWording}</p>

      {/* Input sub-question, centered */}
      <div className="flex flex-col items-center gap-1">
        <label className="text-xs text-muted-foreground font-medium text-center">
          {inputWording}
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={inputRaw}
          onChange={handleInputChange}
          placeholder={`${min} – ${max}+`}
          className={[
            "w-32 rounded-md border px-3 py-1.5 text-sm shadow-sm transition-colors text-center",
            "focus:outline-none focus:ring-2",
            inputError
              ? "border-red-400 focus:ring-red-200 bg-red-50"
              : "border-input focus:ring-ring bg-background",
          ].join(" ")}
        />
        {inputError && (
          <p className="text-xs text-red-500">
            {min} – {max} only
          </p>
        )}
      </div>

      {/* Slider track */}
      <div className="flex flex-col gap-1">
        <div
          ref={trackRef}
          style={{
            position: "relative",
            height: 28,
            width: 380,
            userSelect: "none",
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-[5px] -translate-y-1/2 rounded-full bg-slate-200" />

          {segments.map((seg, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: `${seg.left}%`,
                width: `${seg.width}%`,
                height: 5,
                background: seg.color,
                transform: "translateY(-50%)",
                borderRadius:
                  i === 0
                    ? "3px 0 0 3px"
                    : i === segments.length - 1
                      ? "0 3px 3px 0"
                      : undefined,
              }}
            />
          ))}

          {cursors.map((value, index) => (
            <Tooltip key={index} open={dragging === index}>
              <TooltipTrigger asChild>
                <div
                  onPointerDown={handlePointerDown(index)}
                  onPointerMove={handlePointerMove(index)}
                  onPointerUp={handlePointerUp(index)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: `${pcts[index]}%`,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "white",
                    border: `2.5px solid ${THUMB_BORDER[index]}`,
                    transform: "translate(-50%, -50%)",
                    cursor: dragging === index ? "grabbing" : "grab",
                    zIndex: dragging === index ? 30 : 20,
                    boxSizing: "border-box",
                    boxShadow:
                      dragging === index
                        ? `0 0 0 4px ${THUMB_BORDER[index]}33`
                        : "0 1px 3px rgba(0,0,0,0.15)",
                    transition: "box-shadow 0.15s",
                    touchAction: "none",
                  }}
                />
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className={`text-xs font-semibold ${TOOLTIP_CLASS[index]}`}
              >
                {value}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div
          className="flex justify-between text-xs text-muted-foreground"
          style={{ width: 380 }}
        >
          <span>{min}</span>
          <span>{`${max}+`}</span>
        </div>
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

interface TwoPartnerInputSliderQuestionRendererProps {
  question: InputSliderQuestion;
  lang?: "EN" | "FR";
}

const TwoPartnerInputSliderQuestionRenderer: React.FC<
  TwoPartnerInputSliderQuestionRendererProps
> = ({ question, lang = "EN" }) => {
  const { min, max } = question;

  const defaultCursors: Cursors = [
    question.defaultSlider1,
    question.defaultSlider2,
    question.defaultSlider3,
    question.defaultSlider4,
  ];

  const sliderWording = question.sliderWording[lang];
  const inputWording = question.inputWording[lang];

  return (
    <TooltipProvider>
      <Card className="w-fit py-1">
        <CardHeader>
          {/* mainWording is the large card title */}
          <CardTitle className="text-center">
            {question.mainWording[lang]}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-5">
            {/* Two side-by-side panels — sliderWording and inputWording are sub-questions inside each */}
            <div className="flex flex-row gap-6 justify-center">
              <SliderPanel
                min={min}
                max={max}
                sliderWording={sliderWording || ""}
                inputWording={inputWording || ""}
                defaultCursors={defaultCursors}
                allowOverlap={question.allowOverlap ?? false}
              />
              <SliderPanel
                min={min}
                max={max}
                sliderWording={sliderWording || ""}
                inputWording={inputWording || ""}
                defaultCursors={defaultCursors}
                allowOverlap={question.allowOverlap ?? false}
              />
            </div>

            {/* Shared legend */}
            <div className="flex gap-4 text-xs text-muted-foreground flex-wrap justify-center">
              {[
                { color: "#f97316", label: "Dealbreaker" },
                { color: "#ddd6fe", label: "Preferred" },
                { color: "#6d28d9", label: "Ideal range" },
              ].map(({ color, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span
                    className="inline-block rounded-sm"
                    style={{ width: 12, height: 4, background: color }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default TwoPartnerInputSliderQuestionRenderer;
