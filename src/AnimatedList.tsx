import React from "react";
import { motion } from "framer-motion";

interface AnimatedListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: string[];
}

const AnimatedList: React.FC<AnimatedListProps> = ({ items, ...props }) => {
  return (
    <div className="bg-gray-100 p-16 my-2" {...props}>
      <div className="w-128 mx-auto">
        {items.map((item, index) => (
          <motion.div
            className="bg-gray-100 p-16 my-2"
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {item}
          </motion.div>
        ))}
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnimatedList;
