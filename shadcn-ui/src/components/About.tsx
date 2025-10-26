import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb, 
  Zap, 
  Target, 
  Users, 
  Award, 
  Clock,
  Brain,
  Rocket
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Creative Innovation',
    description: 'We blend artistic creativity with data-driven insights to create campaigns that captivate and convert.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'Our AI-powered solutions work 24/7 to optimize your marketing while you focus on growing your business.',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is designed with measurable outcomes in mind. We don\'t just create content, we create results.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'We become an extension of your team, understanding your vision and working together towards shared success.',
    color: 'from-purple-500 to-pink-500'
  }
];

const stats = [
  { icon: Award, number: '25+', label: 'Industry Awards', color: 'text-yellow-400' },
  { icon: Users, number: '100+', label: 'Clients Served', color: 'text-blue-400' },
  { icon: Clock, number: '5+', label: 'Years Experience', color: 'text-green-400' },
  { icon: Rocket, number: '200+', label: 'Projects Delivered', color: 'text-purple-400' }
];

const expertise = [
  'AI & Machine Learning',
  'Marketing Automation',
  'Social Media Strategy',
  'Brand Development',
  'SEO & Content Marketing',
  'Web Development',
  'Data Analytics',
  'Customer Journey Mapping',
  'E-commerce Optimization',
  'Lead Generation',
  'PPC Management',
  'Conversion Optimization'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Social Throttle</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a next-generation digital marketing agency that combines human creativity with artificial intelligence. 
            Our mission is to help UAE businesses scale efficiently by automating growth while maintaining the personal touch that builds lasting relationships.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Brain className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold">Our Expertise</h3>
          </div>
          
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team brings together diverse skills in marketing, technology, and automation to deliver comprehensive solutions that drive real business growth.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="border-white/20 text-white hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/10"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Brand?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's combine our creativity with intelligent automation to accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}