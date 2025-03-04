import React from "react";
import { motion } from "framer-motion";

interface ShoppingListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { name: string; price: string }[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items, ...props }) => {
  return (
    <div className="bg-gray-100 p-8 my-4" {...props}>
      <div className="w-full max-w-md mx-auto">
        {items.map((item, index) => (
          <motion.div
            className="bg-white p-4 my-2 shadow-md rounded-lg flex justify-between items-center"
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div>
              <p className="text-lg font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;