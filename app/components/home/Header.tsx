import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "~/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useAuth
} from "@clerk/react-router";
import { Link } from "react-router";
const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#demo", label: "Demo" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {isSignedIn} = useAuth();
  console.log('is',isSignedIn)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to={'/'} className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold text-primary dark:text-primary-foreground">
              ImageAI
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isSignedIn &&  <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
             {/* <Button variant="ghost" className="text-primary dark:text-primary-foreground">
              D
            </Button> */}
        </nav>}

     
       

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <div className="hidden md:flex items-center space-x-2">
            
            <SignedOut>
              <Button className="cursor-pointer hover:cursor-pointer"> 
                <SignInButton forceRedirectUrl={'/dashboard'} />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-4 py-3 space-y-2 bg-white dark:bg-gray-950 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-600 dark:text-gray-300"
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800 flex space-x-2">
                <Button
                  variant="outline"
                  className="flex-1 text-primary dark:text-primary-foreground"
                >
                  Sign In
                </Button>
                <Button className="flex-1">Sign Up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
