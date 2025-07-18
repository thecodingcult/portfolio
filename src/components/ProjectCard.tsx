import Link from 'next/link'
import { Star, GitFork } from 'lucide-react'

export interface Project {
  title: string
  description: string
  stack: string[]
  github?: string
  githubStats?: { stars: number; forks: number } | null
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-4 border rounded-lg bg-card">
      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
      <p className="mb-2 text-sm text-muted-foreground">{project.description}</p>
      <ul className="flex flex-wrap gap-2 text-xs mb-2">
        {project.stack.map(s => (
          <li key={s} className="px-2 py-0.5 bg-muted rounded">
            {s}
          </li>
        ))}
      </ul>
      {project.github && (
        <div className="flex items-center gap-4 mt-4">
          <Link href={project.github} className="text-sm text-primary underline">
            GitHub
          </Link>
          {project.githubStats && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Star size={14} /> {project.githubStats.stars}</span>
              <span className="flex items-center gap-1"><GitFork size={14} /> {project.githubStats.forks}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
