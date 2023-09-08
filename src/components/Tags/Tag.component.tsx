interface TagProps {
  skills: string[];
}
export function Tag({ skills }: TagProps) {
  return (
    <div className="flex flex-wrap justify-start items-center mt-2">
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            className="secondary-morphs text-slate-100 dark:text-zinc-300 text-xs px-2 py-1 mr-2 mb-2"
          >
            {skill}
          </div>
        );
      })}
    </div>
  );
}
