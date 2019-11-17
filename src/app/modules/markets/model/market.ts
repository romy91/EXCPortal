import {Etype} from './etype.enum';

export interface Market {

   id: number;
   type: Etype;
   description: string;
   place: string;
   amount: number;
   date: string;

}
