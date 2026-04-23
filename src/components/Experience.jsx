import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Assessor de Comunicação",
    company: "DEMSUR – Muriaé/MG",
    period: "2025 – Atual",
    description: "Desenvolvimento e gestão de campanhas publicitárias institucionais e estratégias de comunicação digital."
  },
  {
    role: "Gestor Público – Cultura e Projetos",
    company: "FUNDARTE – Muriaé/MG",
    period: "2023 – 2024",
    description: "Planejamento e execução de políticas públicas culturais e gestão de eventos municipais."
  },
  {
    role: "Assessor de Comunicação",
    company: "Prefeitura Municipal de Muriaé/MG",
    period: "2022",
    description: "Gerenciamento de campanhas digitais e produção audiovisual para transparência pública."
  },
  {
    role: "Gestor Público – Políticas para Juventude",
    company: "FUNDARTE – Muriaé/MG",
    period: "2021 – 2022",
    description: "Implementação de projetos de engajamento juvenil e coordenação de programas educacionais."
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-black/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="orbitron text-4xl mb-16 text-center neon-text">TRAJETÓRIA</h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-cyber-accent/30 hover:border-cyber-accent transition-colors duration-500"
            >
              <div className="absolute w-3 h-3 bg-cyber-accent rounded-full -left-[7px] top-2 shadow-[0_0_10px_#00C2E0]"></div>
              <span className="orbitron text-cyber-accent text-sm mb-2 block">{exp.period}</span>
              <h3 className="orbitron text-2xl font-bold mb-1">{exp.role}</h3>
              <p className="text-white/60 mb-3">{exp.company}</p>
              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
