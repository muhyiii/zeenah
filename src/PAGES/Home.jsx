import { motion } from "framer-motion";
import React from "react";
import { BiSearch } from "react-icons/bi";

import Product from "./Product";

const Home = () => {
  return (
    <div className="text-gray-400">
      <div className="w-full  bg-black text-white py-3 px-40 flex justify-between items-center">
        <h1 className="gugi text-2xl">ZEENAH</h1>
        <BiSearch size={25} />
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
            animate={{ x: 0, opacity: [0, 1,0.5,1] }}
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
          <p className="border-b-2 pb-1 text-black border-black font-semibold">
            PRODUCT
          </p>
          <p>AVAILABLE STOCK</p>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
