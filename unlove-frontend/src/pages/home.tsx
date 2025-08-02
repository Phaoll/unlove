import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AccordionItem } from "@radix-ui/react-accordion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-peach p-6">
      <h1 className="text-4xl font-cozy font-bold mb-6 text-center text-cozyPurple">
        UnLove
      </h1>
      <h2 className="text-2xl font-cozy font-bold mb-6 text-center text-cozyPurple">
        Try not to unlove before loving
      </h2>
      <p className="text-lg text-center text-softOrange mb-8 max-w-xl">
        Long term relationship is based on long term common values. We bring you
        the ultimate (in)compatibility test to quickly get a look on the future
        state of you relationship.
      </p>
      <Button onClick={() => navigate(`/test`, { replace: true })}>
        <Star /> Start the test
      </Button>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            What is UnLove?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 items-start">
            <p className=" text-left">
              UnLove is a personality test that aim at targeting the main
              questions a couple should ask themselves in order to stay together
              as long as possible.
            </p>
            <p className=" text-left">
              The test focus solely on core values that we identify as being the
              main dealbreakers in a relationship: family, work, loyalty, future
              envisionment, current situation and other kind of values.
            </p>
            <p className=" text-left">
              It is made to be taken as two partners side by side or alone and
              then to be shared with a partner.
            </p>
            <p className=" text-left">
              In any case remember{" "}
              <span className="font-bold">
                the test is one thing, but what truely matter are the questions
                it create
              </span>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            Why use UnLove?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 ">
            <p className=" text-left">TO BE BUILT</p>
            <p className=" text-left">
              As we witnessed relationships waxe and wane, we understood that
              deep commitment is correlated with a limited number of core
              values. We divided these values in 6 categories: family, work,
              loyalty, personal pastime, future design, and general values.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            How does the test work?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 ">
            <p className=" text-left">TO BE BUILT</p>
            <p className=" text-left">
              To assess them correctly we ask both partner to answer 30
              questions on a special scale from 1 to 5 and we measure the
              arithmetical distance between the two partners. - The scale is not
              numeric. You are asked to rank each sentence between Dealbreaker,
              Inconvenience, Indifference, Quality, Necessity. - A Dealbreaker
              is a value on which it is nearly impossible for you to compromise,
              finding it in a partner would destroy nearly any possibility to
              create a long term relationship with your partner. Dealbreakers
              can be children, drugs, open relationships. - An Inconvenience is
              a value that you wouldn't like to find in a partner, it wouldn't
              break the whole relationship appart and you can compromise on it.
              Inconveniences can be a relation with a work or pastime. - An
              Indifference is a value you don't care about in your partner.
              Neutrals can be their taste in food. - A Quality is a value which
              would bring interest to your partner if they have it, it is not
              enough in itself to make them The One but it is a great start.
              Quality can be a certain level of empathy, attention,
              independence. - A Necessity is a value that you need to find in
              your partner, if they don't have it, it is hard for you to
              envision a life with them. Necessities can be children (again), a
              taste for trips, religion.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Home;
