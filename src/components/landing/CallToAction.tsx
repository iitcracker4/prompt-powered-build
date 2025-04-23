
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-grid">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-codebase-500 to-purple-600 rounded-2xl px-6 py-12 md:py-20 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Stop writing boilerplate code manually. Let AI build your project
              foundation so you can focus on what matters.
            </p>
            <Button
              size="lg"
              className="bg-white text-codebase-600 hover:bg-white/90 gap-2"
              asChild
            >
              <Link to="/prompt">
                Start Building Now <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
