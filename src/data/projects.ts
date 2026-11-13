export type Project = {
  name: string;
  affiliation?: string;
  tags: string[];
  highlights: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: 'Fireform',
    tags: ['go', 'docker', 'docker-in-docker', 'yaml'],
    highlights: [
      'Self-hostable Docker learning platform. Each learner gets a Docker-in-Docker sandbox, and the commands they type draw the container and network architecture on a canvas in real time.',
      'Missions are YAML files validated against real Docker state, not against what was typed.',
    ],
    repo: 'https://github.com/TusharIbtekar/fireform',
  },
  {
    name: 'Retrieval Workbench',
    tags: ['python', 'rag', 'chroma', 'bm25', 'anthropic-api', 'pytest'],
    highlights: [
      'Progressive RAG starter in three tiers: vector search, hybrid BM25 and vector retrieval with reciprocal rank fusion, then query rewriting, cross-encoder reranking and context compression.',
      'Every stage is logged and inspectable, with a beginner\'s guide and a pytest suite.',
    ],
    repo: 'https://github.com/TusharIbtekar/retrieval-workbench',
  },
  {
    name: 'Typ0',
    tags: ['go', 'bubble-tea', 'cobra', 'cli'],
    highlights: [
      'Terminal typing trainer in Go with Bubble Tea: live WPM and accuracy, per-key mistype analysis, random sentences and configurable length.',
      'Shipped as cross-platform binaries and a Homebrew tap.',
    ],
    repo: 'https://github.com/TusharIbtekar/go-typ0',
  },
  {
    name: 'Rusty C Compiler',
    tags: ['rust'],
    highlights: [
      'A lightweight C compiler in Rust: lexical analysis, parsing, semantic checking, IR generation and x86-64 assembly output. Supports arithmetic, variable assignment and if-else.',
    ],
    repo: 'https://github.com/TusharIbtekar/rusty-c-compiler',
  },
  {
    name: 'Ethereum Lottery',
    tags: ['web3', 'solidity', 'ethereum', 'reactjs', 'javascript', 'mocha', 'ganache'],
    highlights: ['Lottery smart contract with a React frontend, tested with Mocha against Ganache.'],
    repo: 'https://github.com/TusharIbtekar/lottery',
  },
  {
    name: 'Portfolio',
    tags: ['astro', 'typescript', 'css'],
    highlights: ['This site. Static Astro, plain CSS, and a dozen lines of JavaScript.'],
    repo: 'https://github.com/TusharIbtekar/portfolio',
  },
];
