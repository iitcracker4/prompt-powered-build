
import { motion } from "framer-motion";
import { Code, Laptop, Zap, RotateCw, CloudLightning, DatabaseBackup } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Fast Build",
      description:
        "Generate complete codebases in seconds, not hours. Our AI understands your requirements and builds accordingly.",
    },
    {
      icon: <RotateCw className="h-10 w-10 text-codebase-500" />,
      title: "Self Updating",
      description:
        "As you refine your requirements, the AI continuously updates your codebase to match your vision.",
    },
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "No Coding Needed",
      description:
        "Simply describe what you want in plain English, and let our AI handle the technical implementation.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-green-500" />,
      title: "Live Preview",
      description:
        "See your application come to life in real-time with a built-in preview that updates as your code does.",
    },
    {
      icon: <CloudLightning className="h-10 w-10 text-blue-500" />,
      title: "One-Click Deploy",
      description:
        "Deploy your finished application to production with a single click. No complex deployment pipelines.",
    },
    {
      icon: <DatabaseBackup className="h-10 w-10 text-red-500" />,
      title: "Full Stack Support",
      description:
        "From frontend to backend, databases to authentication, our AI handles every aspect of your application.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Build Complete Applications with AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Our platform streamlines development with powerful AI capabilities that
            understand your requirements and generate production-ready code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
