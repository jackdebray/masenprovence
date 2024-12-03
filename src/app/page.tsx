import Navbar from "@/components/navbar";
import Image from "next/image";
import ArrowClick from "@/components/arrowclick";
import Footer from "@/components/footer";
import AboutCard from "@/components/abtcard";
import { cn } from "@/lib/utils";
import { garamond } from "@/fonts";
import VideoPlayer from "@/components/videoplayer";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      {/* Hero section with large background image */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen text-center">
        {/* This div image goes over the screen on mobile causing horizontal scrolling - unwanted behaviour... */}
        <div className="absolute inset-0 z-0 overflow-x-hidden">
          <Image
            src="/bg-1.jpg"
            layout="fill"
            objectFit="cover"
            alt="A luxury villa in the heart of Provence"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center my-auto mx-auto text-center md:w-[100%] w-[90%]">
          <h1 className="text-foreground text-4xl md:text-6xl font-bold text-white">
            Mas en Provence
          </h1>
          <h2
            className={cn(
              "text-foreground text-2xl md:text-3xl text-white",
              garamond.className
            )}
          >
            Luxury villa in the heart of Provence
          </h2>
        </div>
        <ArrowClick />
      </section>
      {/* Content sections */}
      <section className="relative z-10 flex flex-col items-center mx-auto mt-[8rem] text-center xl:w-[100%] w-[90%] min-h-screen gap-20">
        <AboutCard
          title={"About the Villa"}
          description={
            "Mas en Provence is a beautifully restored 18th-century farmhouse, full of warmth and character. Set in its own olive grove, the house is surrounded by cypress trees and a large garden, with a stunning view of sprawling olive trees and the Alpilles mountains. \n\nDays drift by easily at the Mas, there is a heated swimming pool, served by a well equipped pool house and dining area.\n\nYou will also find a table tennis table, and a children's wooden cabin and play area.\n\nAnd, while Mas en Provence encapsulates relaxed country style, it is well equipped with contemporary amenities, from WiFi throughout, to modern appliances in two kitchens; one in sleek steel, the other part of the open-plan living/dining room.\n\n A fabulous choice for families, the surrounding area offers plenty of attractions, including picturesque St Remy de Provence which is 8 kilometres away.  You are also only 2km from delicious local restaurants and bakeries in both Graveson and Maillane."
          }
          linkHref={"#"}
          linkText={"Learn more"}
          image={"/aperitif-about.jpg"}
        />
        <AboutCard
          title={"Living Space"}
          description={
            "The Mas offers approximately 5000 square feet (450 square metres) of accommodation, laid over two floors (see Floor Plan). \n\nOn the ground floor every room opens onto the terrace and the garden through French doors.\n\nThe ground floor includes: \n<ul><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Large comfortable living room</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Open plan dining and kitchen opening onto terrace and outdoor dining area</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Second fully equipped kitchen</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Utility room</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Library</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Family TV room</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Entrance lobby and guest cloakroom</li></ul>"
          }
          linkHref={"/gallery"}
          linkText={"View Gallery"}
          image={"/terrace-space.jpg"}
        />
        <AboutCard
          title={"Bedrooms"}
          description={
            "On the first floor are <b>six bedrooms</b>, these are divided into two wings, making it ideal for large groups of friends or family.\n\n<ul><li><strong>Room 1:</strong> Bedroom (180cm&nbsp;bed) with ensuite bathroom (bath, separate shower and WC)</li><li><strong>Room 2:</strong> Bedroom (150cm bed) and wooden cot bed – this room shares a bathroom (shower and WC) with room 4.</li><li><strong>Room 3:</strong> Twin bedroom (2 x 90 cm beds which can be joined together on request) this room has its own bathroom (bath and separate WC) It also has a TV.</li><li><strong>Room 4:</strong> Twin bedroom (2 x 90 cm beds) – this room shares a bathroom (shower and WC) with room 2.</li><li><strong>Room 5:</strong> Bedroom (150cm bed) and wooden cot bed – this room has its own bathroom (shower and separate&nbsp;WC) just opposite it.</li><li><strong>Room 6: </strong>Bedroom (160cm bed) with ensuite bathroom (bath, separate shower and WC)</li></ul>"
          }
          linkHref={"#"}
          linkText={"View Floor Plan"}
          image={"/master-bedroom.jpg"}
        />
      </section>

      <section className="relative z-10 flex flex-col items-center mx-auto mt-[8rem] text-center md:w-[100%] w-[90%] min-h-screen">
        <h1 className="font-bold text-2xl md:text-4xl mb-4">View the Mas</h1>
        <p className="mb-20">
          Visit the Mas with a short drone video previewing the property&apos;s
          expansive exterior.
        </p>
        <VideoPlayer />
      </section>
      <Footer />
    </main>
  );
}
