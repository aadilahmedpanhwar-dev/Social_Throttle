import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Send,
  Clock,
  Globe
} from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Get instant responses to your questions',
    action: 'Chat Now',
    link: 'https://wa.me/971501234567',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Calendar,
    title: 'Calendly',
    description: 'Book a free 30-minute strategy session',
    action: 'Schedule Call',
    link: 'https://calendly.com/socialthrottle',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us a detailed message',
    action: 'Send Email',
    link: 'mailto:hello@socialthrottle.ae',
    color: 'from-purple-500 to-pink-500'
  }
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 50 123 4567',
    link: 'tel:+971501234567'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@socialthrottle.ae',
    link: 'mailto:hello@socialthrottle.ae'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Business Bay, Dubai, UAE',
    link: '#'
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Sun-Thu: 9AM-6PM GST',
    link: '#'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to scale your brand and automate your growth? Get in touch with our team for a free consultation and discover how we can accelerate your UAE business success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center`}>
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                            <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                            <Button 
                              size="sm" 
                              className={`bg-gradient-to-r ${method.color} hover:opacity-90 text-white border-0`}
                              onClick={() => window.open(method.link, '_blank')}
                            >
                              {method.action}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <info.icon className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-gray-400 text-sm">
                    We typically respond within 24 hours. For urgent inquiries, please use WhatsApp or call us directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-white/10"
        >
          <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">UAE-Based Support, Global Expertise</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Based in Dubai with deep understanding of the UAE market. 
            Whether you're a startup or an established enterprise, we're here to help you scale across the region.
          </p>
        </motion.div>
      </div>
    </section>
  );
}