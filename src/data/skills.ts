export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['Go', 'TypeScript', 'JavaScript', 'SQL', 'Python'] },
  { group: 'Backend', items: ['gRPC/Protobuf', 'REST', 'WebSocket', 'Node.js', 'Express'] },
  { group: 'Data', items: ['PostgreSQL', 'Redis Streams', 'Redis Pub/Sub', 'InfluxDB', 'MongoDB', 'Parquet', 'Amazon S3'] },
  { group: 'AI and ML', items: ['RAG', 'Chroma', 'Anthropic API', 'LLM observability', 'CNNs'] },
  { group: 'AI tools', items: ['Claude Code', 'Cursor', 'Codex', 'Agent skills', 'MCP'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Zustand', 'Redux Toolkit', 'TanStack Query', 'Vite'] },
  { group: 'Infrastructure', items: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'Grafana', 'Prometheus', 'Loki'] },
];
