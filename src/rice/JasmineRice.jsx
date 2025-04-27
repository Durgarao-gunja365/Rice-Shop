import RiceCard from "../components/RiceCard";
export const riceData = [
  {
    id: "white_jasmine",
    image: "/white_jasmine.png",
    title: "white jasmine",
    description: "Soft, slightly sticky texture with a floral aroma; staple in Thai cuisine.",
    label: "Best Seller",
    price: 90,
  },
  {
    id: "jasmine_brown",
    image: "/jasmine_brown.png",
    title: "jasmine brown",
    description: "Retains bran layer, chewier, nuttier flavor with the same fragrance.",
    label: "Organic",
    price: 120,
  },
  {
    id: "jasmine_organic",
    image: "/jasmine_organic.png",
    title: "jasmine_organic",
    description: "Grown without synthetic chemicals, often both white and brown varieties.",
    label: "",
    price: 100,
  },
];
const JasmineRice = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Jasmine  rice
        </h1>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {riceData.map((rice) => (
            <RiceCard key={rice.id} {...rice} />
          ))}
        </div>
      </div>
      );
}

export default JasmineRice