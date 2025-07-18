import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMeta {
  id: string
  title: string
  date: string
  summary: string
}

export function getSortedPostsData(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...(matterResult.data as { title: string; date: string; summary: string }),
    }
  })
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}
