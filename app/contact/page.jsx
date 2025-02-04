"use client";

import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com'; 

const info =[
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 844 992 2025"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tanishqsom19@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Dehmi kalan, Jaipur, Rajasthan, 303007, IN"
  },
]

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('service_sh4br2c', 'template_551fkdr', e.target, '_bn6DGmun1EJyLXtW')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Error sending email:', error.text);
        alert('error');
      });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Connect with me!</h3>
              <p className="text-white/60">Feel free to reach out for collaborations, freelance projects, or just a friendly chat about tech, engineering, or AI. I'm always excited to connect with like-minded individuals and explore new opportunities!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" placeholder="Firstname" />
                <Input name="lastname" placeholder="Lastname" />
                <Input name="email" placeholder="Email address" />
                <Input name="phone" placeholder="Phone number" />
              </div>

              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web & Software Development</SelectItem>
                    <SelectItem value="UI/UX Design">Machine Learning & AI Solutions</SelectItem>
                    <SelectItem value="Logo Design">Engineering & Robotics</SelectItem>
                    <SelectItem value="SEO">Consulting & Research</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea name="message" className="h-[200px]" placeholder="Type your message here." />
              <Button type="submit" size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
