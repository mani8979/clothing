import { Navbar } from "@/components/layout/Navbar";
import { ProductGrid } from "@/components/home/ProductGrid";
import { SocialProof, InstagramStrip } from "@/components/home/Social";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black pb-20 md:pb-0">
      <LoadingScreen />
      <Navbar />
      
      <div className="flex flex-col">
        <ProductGrid />
        <SocialProof />
        <InstagramStrip />
      </div>

      <Footer />
      <MobileBottomNav />
    </main>
  );
}
