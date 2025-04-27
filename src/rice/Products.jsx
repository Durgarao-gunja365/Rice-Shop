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
    

const Products = () => {
   return (
  <div className="max-w-7xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
     Different types of rice
    </h1>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {riceData.map((rice) => (
        <div 
          key={rice.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <RiceCard {...rice} />
        </div>
      ))}
    </div>
  </div>
);
}

export default Products