import recursive from 'recursive-readdir'
import path from 'path'

const dir = path.join(process.cwd(), 'pages')

export const getFiles = async ():Promise<string[]> =>{
  const recursiveFiles: string[] = await recursive(dir)
  const files = recursiveFiles.map(item=>path.relative(dir, item)).filter(item=>item.includes('.mdx'))
  return files
}

export const getPaths = async ()=>{
  const files = await getFiles()
  const paths = files.map(item=>item.replace(/\..*$/g, ''))
  return paths
}
