import RiceCard from "../components/RiceCard";
export const riceData = [
  {
    id: "white_basmati",
    image: "/white_basmati.png",
    title: "Premium Basmati",
    description: "Long-grain, aromatic, and fluffy when cooked. Popular in Indian and Middle Eastern cuisine.",
    label: "Best Seller",
    price: 90,
  },
  {
    id: "brown_basmati",
    image: "/brown_basmati.jpg",
    title: "Organic Basmati",
    description: "Less processed, retains the bran layer, nuttier flavor, more fiber.",
    label: "Organic",
    price: 120,
  },
  {
    id: "aged_basmati",
    image: "/aged_basmati.jpg",
    title: "Aged Basmati",
    description: "NAged for at least a year; less sticky, more aromatic, and better texture.",
    label: "",
    price: 100,
  },

  {
    id: "Sella",
    image: "/sella_basmati.jpg",
    title: "Aged Basmati",
    description: "Steamed before milling, more firm and less sticky when cooked.",
    label: "",
    price: 100,
  },
];
const BasmatiRice = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Basmati Rice Collection
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {riceData.map((rice) => (
          <RiceCard key={rice.id} {...rice} />
        ))}
      </div>
    </div>
  );
};

export default BasmatiRice;
