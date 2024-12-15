import HeroSection from "@/components/hero";
import FeaturedProducts from "@/components/featuredproducts";
import LatestProducts from "@/components/latestproducts";
import Shopex from "@/components/shopex";
import Banner from "@/components/banner";
import Trending from "@/components/trending";
import Discount from "@/components/discount";
import TopCat from "@/components/topcategories";
import BrandLogos from "@/components/brands";
import LatestBlog from "@/components/blog";


export default function Home() {
  return (
   <div>
  <HeroSection/>
  <FeaturedProducts/>
  <LatestProducts/>
  <Shopex/>
  <Banner/>
  <Trending/>
  <Discount/>
  <TopCat/>
  <BrandLogos/>
  <LatestBlog/>

   </div>
  );
}
