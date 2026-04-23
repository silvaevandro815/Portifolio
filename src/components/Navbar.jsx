import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center"
    >
      <div className="orbitron font-black text-cyber-accent text-2xl tracking-tighter">
        EVANDRO <span className="text-white">SG</span>
      </div>
      
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
        <a href="#home" className="hover:text-cyber-accent transition-colors">Início</a>
        <a href="#projects" className="hover:text-cyber-accent transition-colors">Projetos</a>
        <a href="#experience" className="hover:text-cyber-accent transition-colors">Trajetória</a>
        <a href="#stack" className="hover:text-cyber-accent transition-colors">Stack</a>
      </div>

      <a 
        href="https://wa.me/5532984587255" 
        className="text-[10px] orbitron border border-cyber-accent px-4 py-2 hover:bg-cyber-accent hover:text-black transition-all"
      >
        CONTATO
      </a>
    </motion.nav>
  )
}

export default Navbar
