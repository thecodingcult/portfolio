'use client'

import { motion } from 'framer-motion'
import ProjectCard, { Project } from './ProjectCard'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AnimatedProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <ProjectCard project={project} />
    </motion.div>
  )
}
