import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import TestComponent from "./TestComponent";
import { Button } from "@/components/ui/button";
import PdfGeneratorButton from "@/app/templates/generateBtn";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <Carousel className="max-w-[1100px] w-full mx-auto h-full">
        <CarouselContent className=" m-auto w-full ">
          <CarouselItem className=" p-0 px-2 m-0 h-screen items-center pt-4 justify-center sm:justify-normal flex flex-col ">
            <div className="aspect-[1000/1440] h-full max-w-full max-h-[90vh] space-y-4">
              <PuppeteerTemplate />
              <PdfGeneratorButton />
            </div>
          </CarouselItem>
          <CarouselItem className=" p-0 m-0 w-full px-2 flex items-center justify-center">
            <div className="aspect-[1000/1440] flex items-center justify-center mx-auto px-4 max-h-screen">
              <p>more templates coming soon!</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="size-20" />
        <CarouselNext className="size-20" />
      </Carousel>
    </div>
  );
};

export default page;
