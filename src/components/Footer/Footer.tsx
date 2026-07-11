import { Calendar, Facebook, Instagram } from "lucide-react";
import React from "react";
import MaxWidthContent from "../../_component/MaxWidthContent";

const locations = {
  fernie: {
    apiAddr: "Fernie, BC",
    name: "Sushiwood - Fernie",
    address: "1221 7th Ave, Fernie, BC, Canada V0B 1M0",
    phone: "(778) 519-5255",
    email: "sushiwoodinfo@gmail.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.5690801206556!2d-115.0642701231249!3d49.51153115452134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53656b8c5c873351%3A0x16f724005cb5e06!2sSushiwood%20Fernie!5e0!3m2!1sen!2sca!4v1744418675586!5m2!1sen!2sca",
    facebooklink: "https://www.facebook.com/sushiwood.fernie",
    instagramlink:
      "https://www.instagram.com/explore/locations/921303561362002/sushi-wood-fernie/",
  },
  nelson: {
    apiAddr: "Nelson, BC",
    name: "Sushiwood - Nelson",
    address: "702 Vernon St, Nelson, BC V1L 4G2",
    phone: "(778) 463-1117",
    email: "sushiwoodnelson@gmail.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.5084749783296!2d-117.291703!3d49.493791099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537cb76f8a5e01a3%3A0x26fbf94747cfc32c!2sSushi%20Wood%20Nelson!5e0!3m2!1sen!2sca!4v1741678380888!5m2!1sen!2sca",
    facebooklink: "https://www.facebook.com/sushiwoodnelson/",
    instagramlink:
      "https://www.instagram.com/explore/locations/1998113930484062/nelson-sushi-wood/",
  },
  castlegar: {
    apiAddr: "Castlegar, BC",
    name: "Sushiwood - Castlegar",
    address: "Columbia Ave, Castlegar, BC V1N 1A9",
    phone: "Unavailable",
    email: "sushiwoodcastlegar@gmail.com",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5200.585604426014!2d-117.6661027!3d49.3276751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537cd3664b0c818f%3A0x14b64c279b69e510!2sSushi%20Wood%20Castlegar!5e0!3m2!1sen!2sca!4v1741678416648!5m2!1sen!2sca",
    facebooklink: "Coming soon",
    instagramlink: "Coming soon",
  },
};

type LocationKey = keyof typeof locations;

const Footer = ({ location }: { location: LocationKey }) => {
  const currentLocation = locations[location];

  if (!currentLocation) return <>Loading...</>;
  const addressParts = currentLocation?.address.split(", ");

  return (
    <footer>
      {/* Contact us */}
      <section id="contact">
        <MaxWidthContent className="flex flex-col items-center justify-center gap-10 py-16 px-9">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-brandon-text uppercase tracking-wide w-52 md:w-fit md:bg-black md:px-8 mx-auto ">
              Contact us
            </h2>
          </div>

          <div className="flex gap-10 md:gap-18 w-full flex-wrap mt-12">
            {/* <div className="md:hidden w-full">
              <Calendar />
            </div> */}

            <div className="flex-grow justify-center overflow-hidden flex-shrink min-h-80 min-w-72">
              <iframe
                title="Google Maps location"
                src={currentLocation.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-none flex-col gap-6">
              <div>
                <h3 className="border-b text-lg mb-1 font-normal ">
                  Our Address
                </h3>
                <address>
                  {addressParts[0]}, <br />
                  {addressParts[1]}, {addressParts[2]} {addressParts[3]} <br />
                </address>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="border-b text-lg mb-1 font-normal ">
                  Contact Info
                </h3>
                <a
                  href={`tel:${currentLocation.phone.replace(/\D/g, "")}`}
                  aria-label={`Call Us at ${currentLocation.phone}`}
                >
                  {currentLocation.phone}
                </a>
                <a
                  href={`mailto:${currentLocation.email}`}
                  aria-label={`Email Us at ${currentLocation.email}`}
                >
                  {currentLocation.email}
                </a>
              </div>

              <div>
                <h3 className="border-b text-lg mb-1 font-normal ">
                  Open Hours
                </h3>
                <p>Mon-Thurs: 11:30am - 10:00pm</p>
                <p>Fri: 11:30am - 10:00pm</p>
                <p>Sat: 11:30am - 10:00pm</p>
                <p>Sun: 11:30am - 10:00pm</p>
              </div>

              <div className="flex gap-4">
                <a
                  href={`${currentLocation.facebooklink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-8 w-8 cursor-pointer" />
                </a>
                <a
                  href={`${currentLocation.instagramlink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-8 w-8 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Footer */}
      <section className="text-center text-stone-400 text-xs uppercase font-montserra leading-none">
        <p> &copy; 2025 SushiWood. All Rights Reserved.</p> <br />
        <p>
          developed by{" "}
          <a
            href="https://www.webteck.ca"
            className="underline text-yellow-600"
          >
            {" "}
            Vancouver Webteck
          </a>{" "}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
