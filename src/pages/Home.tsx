import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-4">
          Explore Countries
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Discover detailed information about any country in the world.
        </p>
        <motion.img
          src="/findCountry.png"
          alt="World Map"
          className="w-64 h-64 mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-full flex items-center justify-center"
          >
            Get Started <FiArrowRight className="ml-2" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
