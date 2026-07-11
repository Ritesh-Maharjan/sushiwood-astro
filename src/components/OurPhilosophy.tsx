import MaxWidthContent from "@/_component/MaxWidthContent";

const OurPhilosophy = () => {
  return (
    <section id="ingredients">
      <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-4 md:px-14 py-20">
        <div className="relative w-full text-center">
          <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
          <h2 className="text-2xl md:text-3xl z-10 font-brandon-text tracking-wider uppercase  w-40 md:w-fit md:bg-black md:px-8 mx-auto">
            Who We Are
          </h2>
        </div>

        <div className="flex items-stretch gap-10 flex-col md:flex-row">
          <div className="flex gap-8 flex-col h-full">
            <figure className="flex justify-center">
              <img
                height={100}
                width={100}
                src={"/sushiwood/our-philosophy-1.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-80 w-80 rounded-full object-cover md:rounded-none md:w-full"
              />
            </figure>

            <div className="flex flex-col gap-2 text-center flex-1 justify-between">
              <h3 className="text-xl uppercase">Vision</h3>
              <p>
                Our vision is to be a culinary haven where diversity is celebrated, and culinary boundaries are pushed to new heights.
              </p>
            </div>
          </div>

          <div className="flex gap-8 flex-col">
            <figure className="flex justify-center">
              <img
                height={100}
                width={100}
                src={"/sushiwood/our-philosophy-2.webp"}
                alt="sushi till area covered with flowers"
                sizes="100vw"
                className="h-80 w-80 rounded-full object-cover md:rounded-none md:w-full"
              />
            </figure>

            <div className="flex flex-col gap-2 text-center flex-2 justify-between">
              <h3 className="text-xl uppercase">Mission</h3>
              <p>
               Our mission is to provide a culinary journey that delights the senses, fosters cultural appreciation, and brings people together in a spirit of warmth and hospitality.
              </p>
            </div>
          </div>

          <div className="flex gap-8 flex-col">
            <figure className="flex justify-center">
              <img
                height={100}
                width={100}
                src={"/sushiwood/9-6.webp"}
                alt="Closer looks of sushi"
                sizes="100vw"
                className="h-80 w-80 rounded-full object-cover md:rounded-none md:w-full"
              />
            </figure>

            <div className="flex flex-col gap-2 text-center flex-3 justify-between">
              <h3 className="text-xl uppercase">Value</h3>
              <p>
                Korean & Japanese restaurant offers a fusion of two distinct culinary traditions, providing a range of values that appeal to diverse taste.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthContent>
    </section>
  );
};

export default OurPhilosophy;
