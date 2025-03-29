import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "~/lib/motion";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-500 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Visual Content?
          </motion.h2>
          
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-xl mb-8 text-white/90"
          >
            Join thousands of creators using ImageAI to bring their ideas to life
          </motion.p>
          
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="secondary" asChild>
              <a href="#" className="px-8 py-3 font-bold">
                Get Started for Free
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary/50 border-white/20 text-white hover:bg-primary/70" asChild>
              <a href="#" className="px-8 py-3 font-bold">
                Schedule a Demo
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
