import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { apiRequest } from '@/lib/queryClient';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here we would normally submit to the server
      // await apiRequest('POST', '/api/contact', data);
      
      // For now, just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelectChange = (value: string) => {
    setValue('projectType', value);
  };

  return (
    <section id="contact" className="py-20 bg-background relative" 
             style={{ 
               backgroundImage: "url('https://images.unsplash.com/photo-1632395627727-3b97d0724446?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')", 
               backgroundSize: 'cover', 
               backgroundPosition: 'center' 
             }}>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary font-montserrat text-sm mb-4">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">Ready to go viral?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Whether you have a specific project in mind or just want to explore possibilities, I'm here to help bring your vision to life. Let's create content that stands out and gets the engagement it deserves.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a href="mailto:vishwaszsoni@gmail.com" className="text-gray-300 hover:text-primary">vishwaszsoni@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <i className="fab fa-whatsapp text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium">WhatsApp</h3>
                  <a href="https://wa.me/919430562996" className="text-gray-300 hover:text-primary">+91 9430562996</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-300">Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-secondary/70 backdrop-blur-md rounded-xl border border-primary/30 p-8">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block mb-2 text-gray-200">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary/70 focus:outline-none text-white"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block mb-2 text-gray-200">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary/70 focus:outline-none text-white"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="projectType" className="block mb-2 text-gray-200">Project Type</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary/70 focus:outline-none text-white">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social-media">Social Media Content</SelectItem>
                      <SelectItem value="commercial">Commercial/Advertisement</SelectItem>
                      <SelectItem value="music-video">Music Video</SelectItem>
                      <SelectItem value="event">Event Video</SelectItem>
                      <SelectItem value="short-film">Short Film</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectType && (
                    <p className="mt-1 text-red-500 text-sm">{errors.projectType.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="block mb-2 text-gray-200">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary/70 focus:outline-none text-white resize-none"
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-neon hover:shadow-neon-hover flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i> Let's Go Viral!
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
