import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GalleryComponent from "@/components/gallery";
import { cn } from "@/lib/utils";
import { garamond } from "@/fonts";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow flex flex-col items-center w-full text-center">
        <div className="mt-20">
          <h1 className="text-5xl font-bold text-foreground">Gallery</h1>
          <p className={cn("text-muted-foreground text-1xl", garamond.className)}>
            View the interior and exterior of the Mas.
          </p>
        </div>
        <GalleryComponent />
      </section>
      <Footer />
    </main>
  );
}
