"use client";

import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { BadgeQuestionMark, HelpCircle } from "lucide-react";
import { useAppSelector } from "@/store/hook";
import {
  selectIsTestGuideDeployed,
  setIsTestGuideDeployed,
} from "@/store/slices/appSettingsSlice";

export default function TestHelpButton() {
  const dispatch = useDispatch();
  const isTestGuideDeployed = useAppSelector(selectIsTestGuideDeployed);

  return (
    <div>
      <Dialog
        open={isTestGuideDeployed}
        onOpenChange={() => {
          dispatch(setIsTestGuideDeployed(!isTestGuideDeployed));
        }}
      >
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-primary"
            aria-label="Help"
          >
            {/* https://github.com/shadcn-ui/ui/issues/6316 */}
            <BadgeQuestionMark className="text-white !size-10" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-blue-600" />
              How UnLove test works
            </DialogTitle>
            <DialogDescription className="text-left pt-2">
              This how it works TO BE BUILT
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-end pt-4">
            <Button
              onClick={() => dispatch(setIsTestGuideDeployed(false))}
              variant="default"
              size="sm"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
