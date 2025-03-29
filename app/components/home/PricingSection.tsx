import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "~/lib/motion";
import { Button } from "~/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    description: "Get started with basic features",
    price: 0,
    features: [
      { text: "5 AI image generations per day", enabled: true },
      { text: "Standard image quality", enabled: true },
      { text: "Basic editing tools", enabled: true },
      { text: "Advanced AI features", enabled: false },
      { text: "Commercial usage rights", enabled: false },
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Basic",
    description: "Perfect for casual creators",
    price: 9.99,
    features: [
      { text: "100 AI image generations per month", enabled: true },
      { text: "High-quality output", enabled: true },
      { text: "Full editing toolkit", enabled: true },
      { text: "Personal use license", enabled: true },
      { text: "Commercial usage rights", enabled: false },
    ],
    popular: false,
    buttonText: "Choose Basic",
    buttonVariant: "default" as const,
  },
  {
    name: "Classic",
    description: "For serious image creators",
    price: 19.99,
    features: [
      { text: "500 AI image generations per month", enabled: true },
      { text: "Ultra high-quality output", enabled: true },
      { text: "Advanced editing features", enabled: true },
      { text: "Priority processing", enabled: true },
      { text: "Commercial usage rights", enabled: true },
    ],
    popular: true,
    buttonText: "Choose Classic",
    buttonVariant: "gradient" as const,
  },
  {
    name: "Premium",
    description: "For professionals and teams",
    price: 49.99,
    features: [
      { text: "Unlimited AI image generations", enabled: true },
      { text: "Highest quality outputs", enabled: true },
      { text: "All advanced features", enabled: true },
      { text: "Team collaboration tools", enabled: true },
      { text: "Full commercial license", enabled: true },
    ],
    popular: false,
    buttonText: "Choose Premium",
    buttonVariant: "premium" as const,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Select the perfect pricing plan for your creative needs</p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Button
              variant={billing === "monthly" ? "default" : "ghost"}
              onClick={() => setBilling("monthly")}
              className={billing === "monthly" ? "" : "text-gray-700 dark:text-gray-300"}
            >
              Monthly
            </Button>
            <Button
              variant={billing === "annual" ? "default" : "ghost"}
              onClick={() => setBilling("annual")}
              className={billing === "annual" ? "" : "text-gray-700 dark:text-gray-300"}
            >
              Annual (Save 20%)
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {plans.map((plan, index) => {
            const price = billing === "annual" 
              ? (plan.price * 0.8 * 12).toFixed(2) 
              : plan.price.toFixed(2);
              
            return (
              <motion.div
                key={plan.name}
                variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
                className={`
                  ${plan.name === "Premium" 
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white" 
                    : "bg-white dark:bg-gray-900/70"}
                  rounded-xl shadow-lg overflow-hidden relative border border-gray-200 dark:border-gray-800 
                  transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                `}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.name === "Premium" ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">${price}</span>
                    <span className={`ml-1 ${plan.name === "Premium" ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                      /{billing === "annual" ? "year" : "month"}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.enabled ? (
                          <CheckIcon className={`mt-1 mr-2 h-4 w-4 ${plan.name === "Premium" ? "text-green-400" : "text-green-500"}`} />
                        ) : (
                          <XIcon className="mt-1 mr-2 h-4 w-4 text-gray-400 dark:text-gray-600" />
                        )}
                        <span 
                          className={
                            feature.enabled 
                              ? plan.name === "Premium" 
                                ? "text-gray-300" 
                                : "text-gray-600 dark:text-gray-400"
                              : "text-gray-400 dark:text-gray-600"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="px-6 pb-6">
                  {plan.buttonVariant === "gradient" ? (
                    <Button className="w-full py-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90">
                      {plan.buttonText}
                    </Button>
                  ) : plan.buttonVariant === "premium" ? (
                    <Button variant="outline" className="w-full py-2 bg-white text-gray-800 hover:bg-gray-100">
                      {plan.buttonText}
                    </Button>
                  ) : (
                    <Button variant={plan.buttonVariant} className="w-full py-2">
                      {plan.buttonText}
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="mt-16 bg-white dark:bg-gray-900/70 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Need a custom plan for your enterprise?</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-6">
            We offer tailored solutions for businesses with specific needs. Get in touch with our team to discuss a custom plan that works for you.
          </p>
          <div className="text-center">
            <Button variant="secondary" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
