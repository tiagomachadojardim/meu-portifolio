import { Education } from '@/types';

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bacharel em Engenharia de Computação',
    school: 'Universidade Federal do Pampa (UNIPAMPA)',
    startDate: '2015',
    endDate: '2026',
    description:
      'Graduação em engenharia de computação (3.600 h), com formação em algoritmos, arquitetura de computadores, engenharia de software, sistemas embarcados, redes e banco de dados. A experiência em informática médica veio da participação no GIMM e do TCC em avaliação e treinamento respiratório.',
    researchGroup: {
      name: 'GIMM — Grupo de Informática Médica e Microeletrônica',
      url: 'https://gimm_unipampa.gitlab.io/page/',
    },
    thesisTitle:
      'RESPIRO.SCAN: Sistema Integrado de Avaliação e Treinamento Respiratório',
    advisor: 'Érico Marcelo Hoff do Amaral',
  },
  {
    id: 2,
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    school: 'Universidade Cesumar (UniCesumar)',
    startDate: '2021',
    endDate: '2022',
    description:
      'Formação tecnológica em Análise e Desenvolvimento de Sistemas (EAD), com base em algoritmos, estruturas de dados, engenharia de software, banco de dados, front-end, programação orientada a objetos, dispositivos móveis, redes e gestão de projetos tecnológicos, incluindo imersões profissionais em projetos e fábrica de software.',
  },
];

export const LATTES_URL = 'http://lattes.cnpq.br/9279305328822367';
