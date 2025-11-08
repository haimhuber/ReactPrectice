
// in file POIData.ts

export type POI = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
};

export const allPois: POI[] = [
    { id: '1', name: 'Tower', description: 'Old tower.', imageUrl: '...' },
    { id: '2', name: 'Park', description: 'Nice place to walk.', imageUrl: '...' },
    { id: '3', name: 'Museum', description: 'Modern art.', imageUrl: '...' }
];
