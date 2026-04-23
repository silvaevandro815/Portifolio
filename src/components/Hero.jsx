import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="orbitron text-5xl md:text-8xl font-black mb-4 neon-text tracking-tighter">
          EVANDRO SILVA GALLINA
        </h1>
        <p className="text-xl md:text-3xl text-cyber-accent orbitron mb-8 tracking-widest opacity-90">
          ESPECIALISTA EM SISTEMAS DE IA & AUTOMAÇÃO
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5532984587255"
            className="cyber-button"
          >
            DISCUTIR PROJETO
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="cyber-button-outline"
          >
            VER LABS
          </motion.a>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-1 h-12 rounded-full bg-cyber-accent"></div>
      </div>
    </section>
  )
}

export default Hero
