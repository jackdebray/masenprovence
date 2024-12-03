import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { garamond } from "@/fonts";
import Link from "next/link";
import React from "react"; // Ensure React is in scope when using JSX
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "./ui/separator";

interface AboutCardProps {
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  image: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  linkHref,
  linkText,
  image,
}) => {
  const formattedDescription = description.replace(/\n/g, "<br/>");

  return (
    <Card className="flex flex-col md:flex-row w-full max-w-6xl bg-background rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-1/2 h-64 md:h-auto">
        <img
          src={image}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-start">{title}</h3>
          <div
            className={cn(
              "text-muted-foreground text-start",
              garamond.className
            )}
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          />
        </div>
        <div className="mt-auto">
          {linkHref === "#" && linkText === "View Floor Plan" ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mt-5">View Floor Plan</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>
                    View the Mas&apos; floor plan below.
                  </DialogTitle>
                  <DialogDescription>
                    Click for a larger view.
                    <Link
                      href="/floorplan.png"
                      prefetch={false}
                      target="_blank"
                    >
                      <img
                        src="/floorplan.png"
                        alt="Floor Plan"
                        className="w-full h-auto mt-5"
                      />
                    </Link>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ) : linkHref === "#" && linkText === "Learn more" ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full mt-5">Learn more</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>About the Mas</SheetTitle>
                  <SheetDescription className={garamond.className}>
                    Mas en Provence is a beautifully restored 18th-century
                    Farmhouse.
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="mt-4 h-[120vh] sm:h-[85vh] pb-80 sm:pb-2 w-full">
                  {" "}
                  <div
                    className={cn(
                      garamond.className,
                      "mt-4 text-muted-foreground"
                    )}
                  >
                    <p>
                      Days drift by easily at the Mas, there is a{" "}
                      <b>heated swimming pool</b>, served by a well equipped{" "}
                      <b>pool house</b> and dining area. You will also find a{" "}
                      <b>table tennis table</b>, and a children’s wooden cabin
                      and play area. <br></br>
                      <br></br>The house exudes an air of{" "}
                      <b>easy conviviality</b>, its pretty bedrooms styled with
                      charming simplicity, some with
                      <b> Juliet balconies</b> on to the garden, others under
                      the roof rafters.<br></br>
                      <br></br> And, while Mas en Provence encapsulates{" "}
                      <b>relaxed country style</b>, it is well equipped with
                      contemporary amenities, from high-speed <b>WiFi</b>{" "}
                      throughout, to <b>modern appliances</b> in two kitchens;
                      one in sleek steel, the other part of the open-plan
                      living/dining room. <br></br>
                      <br></br>A fabulous choice for families, the surrounding
                      area offers plenty of attractions, including{" "}
                      <b>picturesque St Remy de Provence</b> which is{" "}
                      <b>8 kilometres</b> away. You are also only 2km from
                      delicious local restaurants and bakeries in both{" "}
                      <b>Graveson</b> and <b>Maillane</b>.
                    </p>
                  </div>
                  <Separator orientation="horizontal" className="my-6" />
                  <div>
                    <h1 className="font-bold text-1xl md:text-2xl">
                      Local Area.
                    </h1>
                    <p
                      className={cn(
                        garamond.className,
                        "text-muted-foreground mt-4"
                      )}
                    >
                      There are a wide range of{" "}
                      <strong>local attractions to visit</strong> including{" "}
                      <strong>St Remy de Provence</strong>, the Roman site of{" "}
                      <strong>Glanum</strong>, and the hospital of{" "}
                      <strong>St Paul de Mausole</strong> where Van Gogh stayed.{" "}
                    </p>
                    <p
                      className={cn(
                        garamond.className,
                        "text-muted-foreground mt-4"
                      )}
                    >
                      We also recommend <strong>Les Baux de Provence </strong>
                      and <strong>Les Carrieres de Lumieres</strong>. The{" "}
                      <strong>Palais des Papes in Avignon</strong>, the antiques
                      dealers in <strong>L’Isle sur la Sorgue </strong>and the
                      olive mills of <strong>Mouries</strong> are all well worth
                      a visit.{" "}
                    </p>
                    <p
                      className={cn(
                        garamond.className,
                        "text-muted-foreground mt-4"
                      )}
                    >
                      There are also many great <strong>restaurants</strong>,
                      particularly in <strong>St Remy de Provence</strong>. Our
                      personal favourite however is in{" "}
                      <strong>Maillane – L’Oustalet Maianen</strong>. You will
                      find details of these and many more on the desk in the
                      library. We recommend that you pop into the{" "}
                      <strong>tourist office</strong> in St Remy de Provence for
                      the latest events.{" "}
                    </p>
                    <p
                      className={cn(
                        garamond.className,
                        "text-muted-foreground mt-4"
                      )}
                    >
                      You will find <strong>bakeries</strong> in Maillane,
                      Eyragues and Graveson. In Graveson, Le Moulin de Nicolas
                      is also an excellent <strong>patisserie</strong> and we
                      recommend you try their gateaux de soiree, available every
                      weekend.{" "}
                    </p>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          ) : (
            <Link href={linkHref} prefetch={false}>
              <Button className="w-full mt-5">{linkText}</Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AboutCard;
