import React from "react";
import product from "../ASSETS/product.jpg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import data from "../ASSETS/tes.json";

const Product = ({ isAvailable, setIsAvailable }) => {
  return (
    <div className="grid grid-cols-12 gap-10 px-40 mt-10 text-black">
      <AnimatePresence>
        {isAvailable
          ? data
              .filter((e) => e.stok > 0)
              .map((e, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, y: -100, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0 }}
                  transition={{
                    delay: 1,
                    duration: 1,
                    type: "spring",
                    bounce: 0.5,
                    opacity: { ease: "linear" },
                    layout: { duration: 0.3 },
                  }}
                  className="bg-white cursor-pointer p-3 shadow-xl relative col-span-3 text-left capitalize space-y-2 rounded-sm "
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      initial={{ opacity: 0, x: -100, scale: 0 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        duration: 0.7,
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
                        duration: 0.7,
                        bounce: 0.3,
                        type: "spring",
                      }}
                      className="inter text-lg"
                    >
                      {e.product}
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
                      {`Rp  ${e.harga},00`}
                    </motion.p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.1 }}
                    className="text-center py-2 w-full bg-yellow-500 inter flex items-center justify-center space-x-5"
                  >
                    <p> Add To Cart</p> <BsFillCartPlusFill />
                  </motion.button>
                </motion.div>
              ))
          : data.map((e, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: -100, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0 }}
                transition={{
                  delay: 1,
                  duration: 1,
                  type: "spring",
                  bounce: 0.5,
                  opacity: { ease: "linear" },
                  layout: { duration: 0.3 },
                }}
                className="bg-white cursor-pointer p-3 shadow-xl relative col-span-3 text-left capitalize space-y-2 rounded-sm "
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0, x: -100, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      duration: 0.7,
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
                      duration: 0.7,
                      bounce: 0.3,
                      type: "spring",
                    }}
                    className="inter text-lg"
                  >
                    {e.product}
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
                    {`Rp  ${e.harga},00`}
                  </motion.p>
                </div>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 1.1 }}
                  className="text-center py-2 w-full bg-yellow-500 inter flex items-center justify-center space-x-5"
                >
                  <p> Add To Cart</p> <BsFillCartPlusFill />
                </motion.button>
              </motion.div>
            ))}
      </AnimatePresence>
    </div>
  );
};

export default Product;
