import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const caseStudies = [
  {
    title: 'Tenants Choice',
    website: 'tenantschoice.ae',
    industry: 'Property Management & Real Estate',
    challenge: 'Establishing digital presence in competitive UAE real estate market and generating quality leads for property management services',
    solution: 'Comprehensive digital strategy with SEO-optimized website, targeted social media campaigns, and automated lead nurturing system',
    results: [
      { metric: 'Lead Generation', value: '+380%', icon: Users },
      { metric: 'Website Traffic', value: '+250%', icon: TrendingUp },
      { metric: 'Revenue Growth', value: '+190%', icon: DollarSign }
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    tags: ['Real Estate', 'Lead Generation', 'SEO']
  },
  {
    title: 'Eco Smart Cleaning',
    website: 'ecosmartcleaning.ae',
    industry: 'Eco-Friendly Cleaning Services',
    challenge: 'Building brand awareness for sustainable cleaning solutions and competing with established cleaning companies in Dubai market',
    solution: 'Green-focused content marketing, Instagram engagement strategy, and automated booking system with eco-conscious messaging',
    results: [
      { metric: 'Client Bookings', value: '+320%', icon: Users },
      { metric: 'Social Engagement', value: '+280%', icon: TrendingUp },
      { metric: 'Monthly Revenue', value: '+240%', icon: DollarSign }
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    tags: ['Eco-Friendly', 'Service Business', 'Social Media']
  }
];

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real UAE businesses. See how we've helped local companies scale their growth through strategic marketing and intelligent automation.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Case Study Content */}
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentCase.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-blue-400/50 text-blue-400">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-2">{currentCase.title}</h3>
                <p className="text-blue-400 font-semibold mb-2">{currentCase.website}</p>
                <p className="text-gray-300 mb-6">{currentCase.industry}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-400">Challenge</h4>
                  <p className="text-gray-300">{currentCase.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-green-400">Solution</h4>
                  <p className="text-gray-300">{currentCase.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentCase.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
                    >
                      <result.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                      <div className="text-2xl font-bold text-green-400 mb-1">{result.value}</div>
                      <div className="text-sm text-gray-400">{result.metric}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                View Full Case Study
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Case Study Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={currentCase.image} 
                  alt={currentCase.title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="!bg-transparent !hover:bg-transparent border-white/20 text-white hover:border-blue-400/50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="!bg-transparent !hover:bg-transparent border-white/20 text-white hover:border-blue-400/50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}