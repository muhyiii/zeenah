import { motion } from "framer-motion";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Product from "./Product";

const Home = () => {
  const [isSearching, setIsSearching] = React.useState(false);
  const [isAvailable, setIsAvailable] = React.useState(false);
  return (
    <div className="text-gray-400">
      <div className="w-full  bg-black text-white py-3 px-40 flex justify-between items-center">
        <h1 className="gugi text-2xl">ZEENAH</h1>
        <div className="flex w-1/5  justify-end space-x-5">
          <div className=" ">
            {isSearching ? (
              <div className="flex border-b w-full justify-between  ">
                <input
                  type="text"
                  className="bg-transparent outline-none w-full  text-base"
                />
                <BiSearch
                  className="cursor-pointer"
                  size={25}
                  onClick={() => setIsSearching(!isSearching)}
                />
              </div>
            ) : (
              <BiSearch
                className="cursor-pointer"
                size={25}
                onClick={() => setIsSearching(!isSearching)}
              />
            )}
          </div>
          <AiOutlineShoppingCart size={25} />
        </div>
      </div>
      <div className="w-full bg-black relative grid grid-cols-12  px-10 items-center justify-center">
        <div className="background w-[1000px] h-[600px] m-auto mx-20" />
        <div className="bg-black absolute right-0 h-[600px] w-full bg-gradient-to-r from-transparent to-black bg-opacity-30" />
        <div
          className="text-white right-0 col-start-7 col-end-13
         text-left absolute"
        >
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: [0, 1, 0.5, 1] }}
            transition={{
              delay: 0.5,
              bounce: 0.1,
              type: "spring",
              duration: 1,
            }}
            className="text-6xl font-semibold inter mb-3 "
          >
            An Offical Brand of
            <span className="text-yellow-500"> Indonesian Thobe</span>
          </motion.p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            voluptates iure illum error voluptas quo doloribus nobis
            repellendus, corporis debitis, delectus accusantium cumque harum
            amet!
          </p>
        </div>
      </div>
      <div className="px-40 mt-5">
        <div className="flex space-x-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsAvailable(!isAvailable)}
            className={` ${
              !isAvailable &&
              `border-b-2 pb-1 text-black border-black font-semibold`
            } cursor-pointer `}
          >
            PRODUCT
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsAvailable(!isAvailable)}
            className={` ${
              isAvailable &&
              `border-b-2 pb-1 text-black border-black font-semibold`
            } cursor-pointer `}
          >
            AVAILABLE STOCK
          </motion.button>
        </div>
      </div>
      <Product isAvailable={isAvailable} setIsAvailable={setIsAvailable} />
    </div>
  );
};

export default Home;
