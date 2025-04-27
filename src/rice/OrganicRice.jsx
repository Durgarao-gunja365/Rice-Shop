import RiceCard from "../components/RiceCard";
export const riceData = [
  {
    id: "organic_white_rice",
    image: "/organic_white_rice.png",
    title: "organic_white_rice",
    description: "Free from synthetic pesticides/fertilizers.",
    label: "Best Seller",
    price: 90,
  },
  {
    id: "organic_brown_rice",
    image: "/organic_brown_rice.png",
    title: "organic_brown_rice",
    description: " Whole grain, healthier option.",
    label: "Organic",
    price: 120,
  },
  {
    id: "organic_wild_blend",
    image: "/organic_wild_blend.png",
    title: "organic_wild_blend",
    description: " Often includes organic brown, red, or wild rice.",
    label: "",
    price: 100,
  },
];
const OrganicRice = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          organic rice
        </h1>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {riceData.map((rice) => (
            <RiceCard key={rice.id} {...rice} />
          ))}
        </div>
      </div>
      );
}

export default OrganicRice