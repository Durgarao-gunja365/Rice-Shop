import RiceCard from "../components/RiceCard";
export const riceData = [
  {
    id: "aromatic",
    image: "/aromatic.jpg",
    title: "aromatic",
    description: "Mix of jasmine, basmati, or other aromatic rices.",
    label: "Best Seller",
    price: 90,
  },
  {
    id: "pilaf",
    image: "/pilaf.png",
    title: "pilaf",
    description: "Pre-blended with herbs, spices, or even dried veggies",
    label: "Organic",
    price: 120,
  },
  {
    id: "risotto",
    image: "/risotto.jpg",
    title: "risotto",
    description: "Pre-blended with herbs, spices, or even dried veggies.",
    label: "",
    price: 100,
  },
  {
    id: "multi_grain",
    image: "/multi_grain.jpg",
    title: "multi_grain",
    description: "Includes grains like quinoa, millet, barley with rice.",
    label: "",
    price: 100,
  },
];
const SpecialtyBlends = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Special rice
        </h1>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {riceData.map((rice) => (
            <RiceCard key={rice.id} {...rice} />
          ))}
        </div>
      </div>
      );
}

export default SpecialtyBlends