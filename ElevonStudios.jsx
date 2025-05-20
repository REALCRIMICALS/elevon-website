
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ElevonStudios() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a23] to-[#1a1a40] text-white p-6">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-10"
      >
        <h1 className="text-5xl font-bold tracking-wide">Elevon Studios</h1>
        <p className="mt-4 text-xl text-gray-300">
          Elevating the next generation of metaverse games
        </p>
        <Button className="mt-6 text-lg">Partner With Us</Button>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
      >
        {[
          {
            title: "Game Acquisitions",
            desc: "We invest in promising titles and help scale them globally."
          },
          {
            title: "Developer Support",
            desc: "Tools, mentorship, and funding to help creators thrive."
          },
          {
            title: "Marketing & Monetization",
            desc: "Data-driven strategies to boost player engagement and revenue."
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Card className="w-full max-w-sm bg-[#232347] border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-28"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Game Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Voxel Rush", "Pixel Realms", "Skybound Arena"].map((game, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex justify-center">
              <Card className="w-full max-w-sm bg-[#2b2b4d] border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{game}</h3>
                  <p className="text-gray-300">A groundbreaking experience in the metaverse, powered by Elevon Studios.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-28 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <form className="bg-[#2b2b4d] p-6 rounded-xl space-y-4">
          <Input placeholder="Your Name" className="bg-[#1f1f3a] text-white border-none" />
          <Input placeholder="Email Address" className="bg-[#1f1f3a] text-white border-none" />
          <Textarea placeholder="Your Message" className="bg-[#1f1f3a] text-white border-none" rows={5} />
          <Button type="submit">Send Message</Button>
        </form>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mt-28 pb-10 text-gray-500"
      >
        &copy; {new Date().getFullYear()} Elevon Studios. All rights reserved.
      </motion.footer>
    </div>
  );
}
