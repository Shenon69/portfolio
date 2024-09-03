type ProjectLabelProps = {
  name: string;
}

export default function ProjectLabel({ name }: ProjectLabelProps) {
  return (
    <div className="relative">
      <span className="border border-gray-600 bg-gray-600/20 rounded-full px-2 py-1 text-xs text-white/80">{name}</span>
    </div>
  )
}
