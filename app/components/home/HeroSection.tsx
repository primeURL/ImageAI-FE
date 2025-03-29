import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "~/lib/motion";
// import img from "~ppublic"
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/2 w-1/3 h-1/3 rounded-full bg-primary/20 dark:bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 rounded-full bg-blue-500/20 dark:bg-blue-500/10 blur-3xl" />

      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">
                Transform
              </span>{" "}
              Your Visual Experience
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-700 dark:text-gray-300">
              Create stunning, professional-quality images with our cutting-edge AI technology. Generate, enhance, and transform visuals instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#demo" className="px-6 py-3">
                  Try Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features" className="px-6 py-3">
                  Explore Features
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 bg-blue-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 bg-green-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 bg-yellow-500"></div>
              </div>
              <div className="text-sm">
                <span className="font-semibold">20,000+</span> creators already using ImageAI
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 dark:from-primary/10 to-transparent"></div>
            <div className="aspect-square sm:aspect-[4/3] w-full max-w-lg mx-auto">
              <div className="relative w-full h-full">
                {/* Main image container */}
                <motion.div 
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                >
                  <div className="w-[75%] h-[75%] rounded-lg overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600">
                      <img src="/HeroSection.avif" alt="" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating element 1 */}
                <motion.div 
                  animate={{ 
                    x: [0, 10, 0], 
                    y: [0, -5, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute top-[10%] right-[5%]"
                >
                  <div className="bg-white/30 dark:bg-gray-900/30 p-3 rounded-lg shadow-lg border border-white/30 dark:border-gray-900/30 backdrop-blur-md">
                    <div className="flex items-center">
                      <span className="text-sm font-medium">AI Enhancement</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating element 2 */}
                <motion.div 
                  animate={{ 
                    x: [0, -10, 0], 
                    y: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute bottom-[15%] left-[5%]"
                >
                  <div className="bg-white/30 dark:bg-gray-900/30 p-3 rounded-lg shadow-lg border border-white/30 dark:border-gray-900/30 backdrop-blur-md">
                    <div className="flex items-center">
                      <span className="text-sm font-medium">Smart Processing</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Small preview images */}
                <motion.div 
                  animate={{ 
                    x: [0, 5, 0], 
                    y: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 to-yellow-500"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    x: [0, -5, 0], 
                    y: [0, -5, 0] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute -top-4 -left-4 w-32 h-32 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
