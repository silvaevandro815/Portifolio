import { motion } from 'framer-motion'
import { Instagram, Linkedin, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 text-center">
      <div className="flex justify-center gap-8 mb-8">
        <motion.a whileHover={{ y: -3, color: '#00C2E0' }} href="https://www.instagram.com/evandrosilvagallina" target="_blank">
          <Instagram size={24} />
        </motion.a>
        <motion.a whileHover={{ y: -3, color: '#00C2E0' }} href="https://www.linkedin.com/in/evandro-sillva-gallina-83097b1aa" target="_blank">
          <Linkedin size={24} />
        </motion.a>
        <motion.a whileHover={{ y: -3, color: '#00C2E0' }} href="https://evandrosilvagallina.cloud" target="_blank">
          <Globe size={24} />
        </motion.a>
      </div>
      <p className="orbitron text-[10px] tracking-[0.3em] text-gray-500 uppercase">
        © 2026 EVANDRO SILVA GALLINA - HOSPEDADO VIA COOLIFY
      </p>
    </footer>
  )
}

export default Footer
