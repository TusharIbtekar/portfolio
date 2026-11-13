export type Link = { label: string; href: string; footerOnly?: boolean };

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/TusharIbtekar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tushar-ibtekar/' },
  { label: 'Email', href: 'mailto:tushar.ibtekar@gmail.com' },
  { label: 'Resume', href: '/resume.pdf' }, // TODO: add public/resume.pdf
  { label: 'dev.to', href: 'https://dev.to/ibtekar', footerOnly: true },
  { label: 'Medium', href: 'https://medium.com/@ibtekar', footerOnly: true },
];
