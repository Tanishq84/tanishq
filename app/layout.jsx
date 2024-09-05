import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import BlockTransition from "@/components/BlockTransition";



const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});



export const metadata = {
  title: "Tanishq Som | Portfolio",
  description: "Hi, I am Tanishq Som, an AI/ML enthusiast, researcher, and freelance web developer. With a deep passion for Automation, Robotics, Artificial Intelligence, and Machine Learning, I explore cutting-edge technologies and conduct research in fields like astrophysics and clean energy. From building innovative models to excelling in national competitions, I aim to push the boundaries of tech. Let's collaborate on future-ready projects and research. Based in New Delhi, India, and available for global opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <BlockTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
