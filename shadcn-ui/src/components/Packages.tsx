import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown, Building } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    icon: Star,
    price: '$2,999',
    period: '/month',
    description: 'Perfect for small businesses ready to establish their digital presence',
    badge: null,
    features: [
      'Social Media Management (2 platforms)',
      'Basic Website Design',
      'Monthly SEO Optimization',
      'Email Marketing Setup',
      'Monthly Analytics Report',
      'Basic Chatbot Integration'
    ],
    color: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-400/50'
  },
  {
    name: 'Growth',
    icon: Zap,
    price: '$5,999',
    period: '/month',
    description: 'Ideal for growing businesses looking to scale their marketing efforts',
    badge: 'Most Popular',
    features: [
      'Social Media Management (4 platforms)',
      'Professional Website + E-commerce',
      'Advanced SEO + Content Marketing',
      'Email + SMS Automation',
      'Weekly Analytics + Strategy Calls',
      'AI Chatbot + Lead Scoring',
      'PPC Campaign Management',
      'Brand Identity Package'
    ],
    color: 'from-blue-500 to-purple-500',
    borderColor: 'border-blue-400/50'
  },
  {
    name: 'Premium',
    icon: Crown,
    price: '$9,999',
    period: '/month',
    description: 'Comprehensive solution for established businesses seeking market dominance',
    badge: 'Best Value',
    features: [
      'Full Social Media Suite (All platforms)',
      'Custom Web Application',
      'Enterprise SEO + PR Strategy',
      'Multi-channel Automation',
      'Daily Analytics + Weekly Strategy',
      'Advanced AI Automation Suite',
      'Multi-platform PPC Management',
      'Complete Brand Ecosystem',
      'Dedicated Account Manager',
      'Custom Integrations'
    ],
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-400/50'
  },
  {
    name: 'Corporate',
    icon: Building,
    price: 'Custom',
    period: 'pricing',
    description: 'Enterprise-level solutions with unlimited scalability and support',
    badge: 'Enterprise',
    features: [
      'Unlimited Social Media Management',
      'Custom Software Development',
      'Enterprise SEO + Global Strategy',
      'Complete Marketing Automation',
      'Real-time Analytics Dashboard',
      'Custom AI Solutions',
      'Unlimited PPC + Media Buying',
      'Full Brand Management',
      '2+ Dedicated Specialists',
      'Priority Support + SLA',
      'Custom Integrations + APIs',
      'White-label Solutions'
    ],
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-400/50'
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Growth Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable solutions designed to grow with your business. Every package includes our signature blend of creativity and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className={`bg-white/5 backdrop-blur-sm border-white/10 hover:${pkg.borderColor} transition-all duration-300 h-full relative overflow-hidden`}>
                {pkg.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${pkg.color} text-white border-0`}>
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-400 text-lg">{pkg.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{pkg.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white border-0 py-6 text-lg font-semibold rounded-lg transition-all duration-300`}
                  >
                    {pkg.name === 'Corporate' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">All packages include:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full">Monthly Strategy Reviews</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Performance Guarantees</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">No Setup Fees</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}