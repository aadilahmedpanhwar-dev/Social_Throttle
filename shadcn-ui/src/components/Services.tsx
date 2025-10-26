import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Megaphone, 
  Palette, 
  Search, 
  Bot, 
  Code, 
  Instagram,
  Globe,
  BarChart3,
  Zap,
  Cog
} from 'lucide-react';

const marketingServices = [
  {
    icon: Instagram,
    title: 'Social Media Marketing',
    description: 'Content creation, community management, and targeted advertising across all platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    icon: Palette,
    title: 'Branding & Web Design',
    description: 'Complete brand identity and responsive web design that converts visitors into customers.',
    features: ['Brand Identity', 'Logo Design', 'Web Development', 'UI/UX Design']
  },
  {
    icon: Search,
    title: 'SEO & Performance Marketing',
    description: 'Data-driven strategies to improve search rankings and maximize marketing ROI.',
    features: ['Technical SEO', 'Content Marketing', 'PPC Management', 'Conversion Optimization']
  }
];

const automationServices = [
  {
    icon: Bot,
    title: 'AI Automation Services',
    description: 'Intelligent automation solutions to streamline operations and enhance customer experience.',
    features: ['Chatbot Development', 'Email Automation', 'Lead Scoring', 'Customer Journey Mapping']
  },
  {
    icon: Code,
    title: 'Custom Software Solutions',
    description: 'Tailored software development to solve unique business challenges and scale operations.',
    features: ['Web Applications', 'API Integration', 'Database Design', 'Cloud Solutions']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions that combine creative marketing with intelligent automation
          </p>
        </motion.div>

        {/* Marketing Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <Megaphone className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold">Marketing Services</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Automation Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Zap className="w-8 h-8 text-purple-400" />
            <h3 className="text-3xl font-bold">Automation Solutions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {automationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}