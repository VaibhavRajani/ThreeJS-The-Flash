import Image from "next/image";
import hubspotLogo from "/public/hubspot-logo.png";
import img1 from "/public/img1.jpeg";
import img2 from "/public/img2.webp";
import img3 from "/public/img3.webp";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const qualities = {
  H: "Honesty",
  U: "Unity",
  B: "Balance",
  S: "Simplicity",
  P: "Performance",
  O: "Omnipresent",
  T: "Trust",
};

const sections = [
  {
    id: "company-culture",
    title: "What is HubSpot?",
    content:
      "HubSpot is a renowned leader in the CRM industry, providing a comprehensive suite of software solutions designed to enhance the efficiency of marketing, sales, and customer service operations. Central to its offerings are the five main 'Hubs' — Marketing Hub, Sales Hub, Service Hub, CMS Hub, and Operations Hub — each tailored to meet specific needs within an organization. HubSpot's platform streamlines processes by housing all digital marketing activities, from website management and blogging to social media and email marketing, in one cloud-based system. This integration facilitates seamless transitions from marketing to sales, improving lead conversion and customer satisfaction. By offering a robust CRM system that is complemented by powerful content management capabilities, HubSpot helps businesses of all sizes attract, engage, and delight customers, fostering growth and driving revenue efficiently.",
    imageUrl: img1,
    imagePosition: "left",
  },
  {
    id: "personal-fit",
    title: "Exploring HubSpot's Dynamic Culture Code",
    content: (
      <>
        At HubSpot, the culture code is more than just a set of guidelines; it's
        the backbone of a thriving ecosystem that champions transparency,
        continuous improvement, and inclusivity. Rooted in the belief that
        'culture is to recruiting as product is to marketing,' HubSpot
        cultivates an environment where each team member is empowered to bring
        their whole selves to work. The culture is built on the principles of{" "}
        <a
          href="https://blog.hubspot.com/blog/tabid/6307/bid/34234/the-hubspot-culture-code-creating-a-company-we-love.aspx#:~:text=at%20HubSpot%20have-,HEART,-%3A%20Humble"
          className="text-orange-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          HEART
        </a>
        — Humility, Empathy, Adaptability, Remarkableness, and Transparency —
        ensuring that everyone, from leadership to new hires, engages with one
        another with respect and honesty. This framework not only enhances team
        cohesion but also drives innovation by encouraging HubSpotters to
        embrace change and collaborate freely. By solving for the customer and
        valuing open communication, HubSpot's culture code ensures that the
        company remains a beacon for those seeking a workplace that genuinely
        fosters personal and professional growth.
      </>
    ),
    imageUrl: img2,
    imagePosition: "right",
  },
  {
    id: "vision-for-future",
    title: "My Vision for the Future with HubSpot",
    content:
      "Stepping into HubSpot's vibrant ecosystem, I'm thrilled to merge my comprehensive technical expertise with your culture of continuous innovation and growth. My role at Clutch Delivery—a fast-paced startup where I was exposed to all facets of full stack website development—alongside my extensive freelancing, which enhanced my skills in TypeScript and app development, make me a perfect blend for HubSpot. I see a collaborative environment at HubSpot where my proven ability to enhance digital solutions and adapt rapidly to new technologies will contribute significantly to our shared objectives, fostering a culture where innovation isn't just supported, it's celebrated. This synergy will ensure we achieve remarkable outcomes that set new benchmarks within the industry.",
    imageUrl: img3,
    imagePosition: "left",
  },
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="text-black-200">
      <div className="container mx-auto px-4 py-4">
        {sections.map((section) => (
          <section key={section.id} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {section.imagePosition === "left" && (
                <div className="md:col-span-1">
                  <div className="image-container">
                    <Image
                      src={section.imageUrl}
                      alt="Section Image"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="image-3d-effect"
                    />
                  </div>
                </div>
              )}
              <div className="md:col-span-4">
                <h2 className="text-2xl font-bold font-serif text-accent-color mb-4">
                  {section.title}
                </h2>
                <p className="text-md text-justify font-serif leading-relaxed text-gray-700">
                  {section.content}
                </p>
              </div>
              {section.imagePosition === "right" && (
                <div className="md:col-span-1">
                  <div className="image-container">
                    <Image
                      src={section.imageUrl}
                      alt="Section Image"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="image-3d-effect"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="mb-12">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-2"
            ref={ref}
          >
            {Object.entries(qualities).map(([letter, quality]) => (
              <div
                key={letter}
                className={`flex flex-col items-center justify-center p-4 w-30 h-30 m-2 border rounded-lg shadow hover:bg-accent-color text-orange-800 hover:text-white ${
                  inView ? "scale-110" : "scale-100"
                } transition-transform duration-500`}
              >
                <h3 className="text-xl font-semibold font-serif">{letter}</h3>
                <p className="text-md">{quality}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-around mb-12 space-x-4">
          <Image
            src={hubspotLogo}
            className="image-3d-effect"
            alt="HubSpot Logo"
            width={200}
            height={60}
          />
          <h2 className="text-xl font-semibold font-serif italic text-gray-700">
            Why hire me? Because I'm the perfect 'Hub' for all your 'Spot'-on
            solutions!
          </h2>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
