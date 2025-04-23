
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Frontend Developer",
    company: "TechStartup.io",
    text: "I was able to prototype our entire application in an afternoon. What would have taken weeks now takes hours.",
    avatarInitial: "A",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "InnovateCorp",
    text: "As a non-technical PM, I can now create working prototypes to share with stakeholders without bugging our dev team.",
    avatarInitial: "S",
  },
  {
    name: "Michael Davis",
    role: "CTO",
    company: "QuickLaunch Inc.",
    text: "We've cut our development time by 60% and reduced costs significantly. This is the future of software development.",
    avatarInitial: "M",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Loved by Developers</h2>
          <p className="text-lg text-muted-foreground">
            Don't take our word for it. Here's what our users have to say about
            building with AI-powered code generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4 gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-codebase-500 to-purple-500 flex items-center justify-center text-white font-medium text-lg">
                  {testimonial.avatarInitial}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic">
                "{testimonial.text}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
