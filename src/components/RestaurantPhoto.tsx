import MaxWidthContent from "@/_component/MaxWidthContent";

const photos = [
  { src: "/sushiwood/9-1.webp", delay: "1s", height: 582, width: 570 },
  { src: "/sushiwood/9-2.webp", delay: "7s", height: 800, width: 1200 },
  { src: "/sushiwood/9-3.webp", delay: "3s", height: 575, width: 562 },
  { src: "/sushiwood/9-4.webp", delay: "5s", height: 1067, width: 1600 },
  { src: "/sushiwood/9-5.webp", delay: "11s", height: 1583, width: 1200 },
  { src: "/sushiwood/9-6.webp", delay: "1s", height: 667, width: 1000 },
  { src: "/sushiwood/9-7.webp", delay: "7s", height: 800, width: 1200 },
  { src: "/sushiwood/9-8.webp", delay: "2s", height: 582, width: 551 },
  { src: "/sushiwood/9-9.png", delay: "5s", height: 900, width: 1200 },
];

const RestaurantPhoto = () => {
  return (
    <section id="restaurant-photo">
      <MaxWidthContent className="px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className="overflow-hidden h-auto w-full flex items-center justify-center"
            >
              <img
                height={photo.height}
                width={photo.width}
                src={photo.src}
                alt={`Closer looks of sushi ${index}`}
                loading="lazy"
                className="object-cover h-full w-full animate-blink max-h-80 hover:animate-none"
                style={{ animationDelay: photo.delay }}
              />
            </figure>
          ))}
        </div>
      </MaxWidthContent>
    </section>
  );
};

export default RestaurantPhoto;
