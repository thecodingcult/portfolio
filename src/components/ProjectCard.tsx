import Link from 'next/link'
import { Star, GitFork, ArrowUpRight } from 'lucide-react'

export interface Project {
  title: string
  description: string
  stack: string[]
  github?: string
  githubStats?: { stars: number; forks: number } | null
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.github && project.github !== '#' ? project.github : '/projects'}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <ArrowUpRight className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

      <div className="mt-4 flex items-center justify-between text-muted-foreground">
        <p className="text-xs font-mono">
          {project.stack.join(' • ')}
        </p>

        {project.githubStats && (
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5"><Star size={14} /> {project.githubStats.stars}</span>
            <span className="flex items-center gap-1.5"><GitFork size={14} /> {project.githubStats.forks}</span>
          </div>
        )}
      </div>
    </Link>
  )
}
