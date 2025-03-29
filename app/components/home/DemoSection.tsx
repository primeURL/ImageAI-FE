import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "~/lib/motion";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { useState } from "react";

export default function DemoSection() {
  const [activeType, setActiveType] = useState("text-to-image");
  const [activeSize, setActiveSize] = useState("1:1");

  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl"></div>
      
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Try ImageAI Now</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Experience the power of our AI image technology</p>
        </motion.div>
        
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900/70 rounded-xl shadow-xl overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">ImageAI Demo</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Create Your Image</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Generation Type</label>
                      <div className="flex space-x-4">
                        <Button
                          type="button"
                          variant={activeType === "text-to-image" ? "default" : "outline"}
                          onClick={() => setActiveType("text-to-image")}
                          className="px-4 py-2"
                        >
                          Text to Image
                        </Button>
                        <Button
                          type="button"
                          variant={activeType === "image-editing" ? "default" : "outline"}
                          onClick={() => setActiveType("image-editing")}
                          className="px-4 py-2"
                        >
                          Image Editing
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Prompt</label>
                      <Textarea
                        id="prompt"
                        rows={4}
                        className="w-full rounded-md"
                        placeholder="Describe the image you want to create..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Style</label>
                      <Select defaultValue="photorealistic">
                        <SelectTrigger>
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="photorealistic">Photorealistic</SelectItem>
                          <SelectItem value="digital-art">Digital Art</SelectItem>
                          <SelectItem value="abstract">Abstract</SelectItem>
                          <SelectItem value="cartoon">Cartoon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image Size</label>
                      <div className="flex space-x-4">
                        <Button
                          type="button"
                          size="sm"
                          variant={activeSize === "1:1" ? "default" : "outline"}
                          onClick={() => setActiveSize("1:1")}
                          className="px-3 py-1 text-sm"
                        >
                          1:1
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant={activeSize === "16:9" ? "default" : "outline"}
                          onClick={() => setActiveSize("16:9")}
                          className="px-3 py-1 text-sm"
                        >
                          16:9
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant={activeSize === "9:16" ? "default" : "outline"}
                          onClick={() => setActiveSize("9:16")}
                          className="px-3 py-1 text-sm"
                        >
                          9:16
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant={activeSize === "4:3" ? "default" : "outline"}
                          onClick={() => setActiveSize("4:3")}
                          className="px-3 py-1 text-sm"
                        >
                          4:3
                        </Button>
                      </div>
                    </div>
                    
                    <Button className="w-full py-6 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90">
                      Generate Images
                      <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 3v6h6"></path>
                        <path d="m18 13-5-5-5 5"></path>
                        <path d="M13 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-5"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Preview</h3>
                  <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                    <div className="text-center p-4">
                      <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600 mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      <p className="text-gray-500 dark:text-gray-400">Your AI generated images will appear here</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Examples</p>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="rounded-md overflow-hidden cursor-pointer">
                        <div className="aspect-square w-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                      </div>
                      <div className="rounded-md overflow-hidden cursor-pointer">
                        <div className="aspect-square w-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                      </div>
                      <div className="rounded-md overflow-hidden cursor-pointer">
                        <div className="aspect-square w-full bg-gradient-to-br from-green-500 to-yellow-500"></div>
                      </div>
                      <div className="rounded-md overflow-hidden cursor-pointer">
                        <div className="aspect-square w-full bg-gradient-to-br from-pink-500 to-red-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400">Want to unlock the full power of ImageAI?</p>
            <a href="#pricing" className="inline-flex items-center text-primary dark:text-primary-foreground font-medium mt-2 hover:underline">
              Check out our pricing
              <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
