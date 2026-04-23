import { motion } from 'framer-motion'
import { Cpu, Code, Database, Zap, Globe, MessageSquare } from 'lucide-react'

const skills = [
  { 
    category: "Tecnologia & IA", 
    icon: <Cpu className="w-6 h-6" />,
    items: ["Automação N8N", "Agentes de IA", "Engenharia de Prompts", "SQL & Modelagem", "NoCode/LowCode", "APIs (Meta, Instagram)", "Infraestrutura Serverless", "Machine Learning"]
  },
  { 
    category: "Comunicação", 
    icon: <Globe className="w-6 h-6" />,
    items: ["Produção Audiovisual", "Fotografia Profissional", "Design Gráfico", "Social Media", "Roteiro e Narrativa"]
  },
  { 
    category: "Gestão", 
    icon: <Database className="w-6 h-6" />,
    items: ["Gestão Pública", "Planejamento Estratégico", "Liderança de Equipes", "Captação de Recursos"]
  }
]

const Skills = () => {
  return (
    <section id="stack" className="py-24 px-6 container mx-auto">
      <h2 className="orbitron text-4xl mb-16 text-center neon-text">CORE TECNOLÓGICO</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="glass p-8 rounded-lg border-t-2 border-t-cyber-accent"
          >
            <div className="flex items-center gap-3 mb-6 text-cyber-accent">
              {skill.icon}
              <h3 className="orbitron text-xl font-bold">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span key={i} className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full hover:border-cyber-accent/50 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
