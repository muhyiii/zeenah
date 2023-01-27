import React from "react";
import product from "../ASSETS/product.jpg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Product = () => {
  let e = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  return (
    <div className="grid grid-cols-12 gap-10 px-40 mt-10 text-black">
      {e.map((e) => (
        <motion.div
          layout
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 1.5,
            type: "spring",
            bounce: 0.5,
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
          }}
          className="bg-white p-3 shadow-xl relative col-span-3 text-left capitalize space-y-2 rounded-sm "
        >
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 3,
                duration: 1,
                bounce: 0.3,
                type: "spring",
              }}
              src={product}
              className="img z-10"
              alt=""
            />
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 3,
                duration: 1,
                bounce: 0.3,
                type: "spring",
              }}
              className="inter text-lg"
            >
              Jubah Zeenah
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 3.2,
                duration: 1,
                bounce: 0.3,
                type: "spring",
              }}
              className="text-sm"
            >
              Rp 560.000,00
            </motion.p>
          </div>
          <button className="text-center py-2 w-full bg-yellow-500 inter flex items-center justify-center space-x-5">
            <p> Add To Cart</p> <BsFillCartPlusFill />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default Product;
