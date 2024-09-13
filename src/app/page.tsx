import Banner from "@/components/Banner";
import Movies from "@/components/card/Movies";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Movies title="Recent movies" />
    </div>
  );
}
