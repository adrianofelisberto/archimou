import {PersonNode} from './../../models/TreeViewModel/index';

const mockData: PersonNode[] = [
  {
    id: '1',
    name: 'Eu',
    relations: [
      {
        id: '2',
        type: 'Parent',
      },
      {
        id: '3',
        type: 'Parent',
      },
      {
        id: '4',
        type: 'Children',
      },
      {
        id: '5',
        type: 'Children',
      },
      {
        id: '6',
        type: 'Children',
      },
      {
        id: '7',
        type: 'Children',
      },
    ],
  },
  {
    id: '2',
    name: 'Pai',
    relations: [],
  },
  {
    id: '3',
    name: 'Mae',
    relations: [
      {
        id: '9',
        type: 'Parent',
      },
      {
        id: '10',
        type: 'Parent',
      },
    ],
  },
  {
    id: '9',
    name: 'Pai da Mae',
    relations: [],
  },
  {
    id: '10',
    name: 'Mae da Mae',
    relations: [],
  },
  {
    id: '4',
    name: 'Fulano',
    relations: [],
  },
  {
    id: '5',
    name: 'Ciclano',
    relations: [],
  },
  {
    id: '6',
    name: 'Beltrano',
    relations: [],
  },
  {
    id: '7',
    name: 'Estranho',
    relations: [
      {
        id: '8',
        type: 'Children',
      },
    ],
  },
  {
    id: '8',
    name: 'Filho do estranho',
    relations: [],
  },
];

export const getUserTree = (nodeId: string): Promise<PersonNode[]> => {
  return new Promise(resolve => {
    resolve(mockData);
  });
};
