import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const FeedbackCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <div className=" flex flex-col justify-center gap-y-4 max-w-[700px] px-2 ">
      <p className="text-sm text-sky-800">Your Feedback:</p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        plugins={[plugin.current]}
        className=" h-full "
      >
        <CarouselContent>
          {testimonials.map((testimonial, index: number) => (
            <CarouselItem key={index} className=" flex h-max">
              <div className="  my-auto text-base max-w-[600px] text-slate-400 h-full border rounded-lg p-4">
                <p className="whitespace-pre-line select-none">{testimonial}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const testimonials = [
  "good job, looks great",
  "wow i saved so much time! thank you!",
  "it's actually free to generate the pdf at the end,\n not like those other websites",
  "will you make a cover letter builder too?",
];

export default FeedbackCarousel;
