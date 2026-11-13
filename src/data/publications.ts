export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  doi: string;
};

export const publications: Publication[] = [
  {
    title: 'Comparative Study Between ResNet and EfficientNet Family for Classification of Leukemia',
    authors: ['Tushar Ibtekar', 'Md. Rakibul Haque', 'Azmain Yakin Srizon'],
    venue: "26th International Conference on Computer and Information Technology (ICCIT 2023), IEEE, Cox's Bazar, Bangladesh",
    doi: '10.1109/ICCIT60459.2023.10441438',
  },
];
