export default function TechStack() {
  const stack = [
    { name: "Frontend", techs: ["React", "Next.js", "Tailwind", "HTML5"] },
    { name: "Backend & Data", techs: ["Python", "SQL", "Node.js", "Power BI"] },
    { name: "Infra", techs: ["Docker", "Git", "Networking", "Linux"] },
  ];

  return (
    <section className="max-w-5xl mx-auto mb-32">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Tech Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stack.map((category) => (
                <div key={category.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                        {category.techs.map((tech) => (
                            <li key={tech} className="text-gray-300 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
  );
}