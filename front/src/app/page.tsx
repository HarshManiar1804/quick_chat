import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";
import UserReviews from "@/components/base/UserReviews";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOption, customSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const sesstion: customSession | null = await getServerSession(authOption)
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        {/* Header */}
        <Navbar user={sesstion?.user} />
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeatureSection />

        {/* User Reviews Section */}
        <UserReviews />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
