import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "~/lib/motion";
import { Wand2, Crop, Image } from "lucide-react";

const features = [
  {
    icon: <Wand2 className="text-2xl text-primary" />,
    title: "AI Image Generation",
    description: "Create stunning, unique images from text descriptions using our advanced AI models."
  },
  {
    icon: <Crop className="text-2xl text-primary" />,
    title: "Smart Editing",
    description: "Precisely edit and manipulate images with our intuitive AI-powered tools."
  },
  {
    icon: <Image className="text-2xl text-primary" />,
    title: "Image Enhancement",
    description: "Turn low-quality images into high-resolution masterpieces with a single click."
  }
];

const aiExamples = [
  {
    id: 1,
    title: "Abstract Fantasy",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Digital Portrait",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Dream Landscape",
    color: "from-green-500 to-yellow-500"
  }
];

const beforeAfterExamples = [
  {
    id: 1,
    title: "Image Enhancement",
    description: "Our AI enhances image quality, fixes lighting, and improves details",
    beforeColor: "from-gray-400 to-gray-500",
    afterColor: "from-blue-500 to-purple-500"
  },
  {
    id: 2,
    title: "Color Correction",
    description: "Transform dull, faded images into vibrant, colorful photographs",
    beforeColor: "from-gray-300 to-gray-400",
    afterColor: "from-yellow-400 to-orange-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful AI Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Transform your creative process with our state-of-the-art AI image tools</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
              className="group bg-white dark:bg-gray-900/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/70"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* AI Examples Showcase */}
        <div className="mt-20">
          <motion.div 
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">AI-Generated Masterpieces</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">See what our users are creating with ImageAI</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aiExamples.map((example, index) => (
              <motion.div
                key={example.id}
                variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
                className="rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[4/3] relative">
                  <div className={`w-full h-full bg-gradient-to-br ${example.color}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-white font-medium">{example.title}</span>
                    <button className="text-white bg-primary/80 hover:bg-primary p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Before/After Showcase */}
          <div className="mt-20">
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 1)}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Stunning Transformations</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">See the before and after of our powerful enhancement technology</p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer(0.2, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {beforeAfterExamples.map((example, index) => (
                <motion.div
                  key={example.id}
                  variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
                  className="bg-white dark:bg-gray-900/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-4">{example.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Before</p>
                      <div className="rounded-lg overflow-hidden">
                        <div className={`aspect-[3/2] w-full bg-gradient-to-br ${example.beforeColor}`}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">After</p>
                      <div className="rounded-lg overflow-hidden">
                        <div className={`aspect-[3/2] w-full bg-gradient-to-br ${example.afterColor}`}></div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">{example.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
