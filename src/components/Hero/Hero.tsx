import MaxWidthContent from "@/_component/MaxWidthContent";
import { Button } from "@/components/ui/button";
import { usePopupStore } from "@/stores/Popup";

export default function Hero() {
  const { toggle } = usePopupStore();
  return (
    <section id="home">
      <MaxWidthContent className="mt-8 flex flex-col gap-y-12 pl-14 ">
      <h1 className="text-5xl flex flex-col tracking-widest absolute top-[20%] z-20 max-w-[90%] sm:max-w-none">
        <span className="uppercase tracking-tight font-medium text-4xl lg:text-6xl md:text-5xl">
          Sushiwood
        </span>
        <div className="w-40 md:w-80 h-0.5 my-2" />
        <span className="text-2xl md:text-3xl tracking-tighter text-left self-start leading-tight">
          <span className="block sm:inline">Korean & Japanese</span>
          <span className="block sm:inline"> Restaurant</span>
        </span>
      </h1>

      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 flex justify-center gap-4 md:hidden w-full px-4">
      <Button
          className="w-fit font-semibold text-base text-black"
          variant={"outline"}
          onClick={() => toggle("order")}
        >
          Order Now
        </Button>
        <Button
          className="w-fit font-semibold text-base"
          variant={"destructive"}
          onClick={() => toggle("reservation")}
        >
          Reservations
        </Button>

      </div>

      </MaxWidthContent>

      <figure className="w-full relative aspect-[2/1] sm:aspect-[3/1] md:aspect-auto -mt-12 -z-20">
        <img
          height={500}
          width={2000}
          src="/sushiwood/hero-img2.webp"
          alt="long line of sushi"
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1600px"
          style={{
            objectFit: "cover",
            backgroundImage: "url(/sushiwood/hero-img2-blur.webp)",
            backgroundSize: "cover",
          }}
          className="w-full h-[100vh] sm:h-[600px] md:h-screen"
        />
      </figure>
    </section>
  );
}
