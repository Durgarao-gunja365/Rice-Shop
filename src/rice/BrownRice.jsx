import RiceCard from "../components/RiceCard";
export const riceData = [
  {
    id: "short_grain_brown",
    image: "/short_grain_brown.png",
    title: "short_grain_brown",
    description: " Chewy and sticky; often used in macrobiotic or Asian dishes.",
    label: "Best Seller",
    price: 90,
  },
  {
    id: "medium_range_brown",
    image: "/medium_range_brown.jpg",
    title: "Organic Basmati",
    description: "Slightly sticky when cooked, good for salads or side dishes.",
    label: "Organic",
    price: 120,
  },
  {
    id: "long_grain_brown",
    image: "/long_grain_brown.png",
    title: "Aged Basmati",
    description: "Fluffy and separated grains, nutty flavor.",
    label: "",
    price: 100,
  },
];
const BrownRice = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Brown rice
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {riceData.map((rice) => (
          <RiceCard key={rice.id} {...rice} />
        ))}
      </div>
    </div>
      );
}

export default BrownRice