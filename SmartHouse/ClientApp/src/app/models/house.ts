import { Room } from './room';

export interface House{
    id: string;
    address: string;
    rooms: Room[];
}