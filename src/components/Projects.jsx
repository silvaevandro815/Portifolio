import { motion } from 'framer-motion'
import { ExternalLink, Terminal } from 'lucide-react'

const projects = [
  {
    title: "PROJETO IRIS",
    description: "Infraestrutura avançada de agentes inteligentes e automação empresarial utilizando as tecnologias mais recentes do mercado.",
    link: "https://agencia.evandrosilvagallina.cloud/",
    tags: ["AI Agents", "n8n", "Automation"]
  },
  {
    title: "MARCÃO PERSONAL IA",
    description: "SaaS Fitness com inteligência artificial integrada via WhatsApp e OpenAI, oferecendo planos personalizados.",
    link: "https://marcaopersonal.com/",
    tags: ["SaaS", "OpenAI", "WhatsApp API"]
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 container mx-auto">
      <h2 className="orbitron text-4xl mb-16 text-center neon-text">ECOSSISTEMA ATIVO</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="glass group p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Terminal size={100} />
            </div>
            
            <div>
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest border border-cyber-accent/30 px-2 py-1 rounded text-cyber-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="orbitron text-3xl font-bold mb-4 group-hover:text-cyber-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>

            <motion.a
              whileHover={{ x: 5 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyber-accent font-bold orbitron text-sm tracking-tighter"
            >
              ACESSAR LABS <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
