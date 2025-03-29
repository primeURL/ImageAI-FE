import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "~/lib/motion";
import { Input } from "~/components/ui/input";

const steps = [
  {
    step: 1,
    title: "Describe Your Vision",
    description: "Enter a detailed description of what you want to create or upload an image to enhance.",
    content: (
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-950/50 rounded-lg">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" ry="2"></rect>
            <path d="M10 4v4"></path>
            <path d="M2 8h20"></path>
            <path d="M6 4v4"></path>
          </svg>
          <Input 
            type="text" 
            placeholder="A futuristic city at sunset..." 
            disabled
            className="bg-transparent w-full border-0 focus-visible:ring-0 text-gray-600 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-600"
          />
        </div>
      </div>
    )
  },
  {
    step: 2,
    title: "AI Processing",
    description: "Our advanced AI models analyze your request and generate multiple options.",
    content: (
      <div className="mt-6 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-gray-50 dark:bg-gray-950/50 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    step: 3,
    title: "Choose & Download",
    description: "Review the generated images, make adjustments if needed, and download your favorites.",
    content: (
      <div className="mt-6 flex justify-center">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-14 h-14 rounded-lg overflow-hidden shadow bg-gradient-to-br from-blue-500 to-purple-500"></div>
          <div className="w-14 h-14 rounded-lg overflow-hidden shadow bg-gradient-to-br from-yellow-500 to-red-500"></div>
          <div className="w-14 h-14 rounded-lg overflow-hidden shadow bg-gradient-to-br from-green-500 to-teal-500"></div>
          <div className="w-14 h-14 rounded-lg overflow-hidden shadow bg-gradient-to-br from-pink-500 to-purple-500"></div>
        </div>
      </div>
    )
  }
];

const naturePhotos = [
  {
    id: 1,
    title: "Mountain Sunrise",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "Enchanted Forest",
    gradient: "from-green-600 to-teal-600"
  },
  {
    id: 3,
    title: "Ocean Sunset",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    id: 4,
    title: "Tropical Paradise",
    gradient: "from-blue-400 to-cyan-400"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto px-4 sm:px-6"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How ImageAI Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">A simple three-step process to create amazing images</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
              className="bg-white dark:bg-gray-900/70 rounded-xl p-8 shadow-lg relative z-10"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-primary dark:text-primary-foreground">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              {step.content}
            </motion.div>
          ))}
          
          {/* Connecting lines */}
          <motion.div
            variants={slideIn("left", "tween", 0.5, 1)}
            className="hidden md:block absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-500 transform -translate-y-1/2"
          />
        </div>
        
        {/* Nature Photography Samples */}
        <div className="mt-20">
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nature Photography Enhancement</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Transform your nature photos into breathtaking masterpieces</p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {naturePhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
                className="rounded-lg overflow-hidden shadow-lg group relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-square">
                  <div className={`w-full h-full bg-gradient-to-br ${photo.gradient} group-hover:scale-110 transition-transform duration-500`}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">{photo.title}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-300">Enhanced with AI</span>
                      <button className="text-white bg-primary/80 hover:bg-primary p-1.5 rounded-full text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14"></path>
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
