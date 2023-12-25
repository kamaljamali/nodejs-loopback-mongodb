import {Entity, model, property} from '@loopback/repository';

@model({name: 'students'})
export class Student extends Entity {
  @property({type: 'string', id: true, generated: true}) id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  family: string;

  @property({
    type: 'number',
    required: true,
  })
  average_dip: number;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  fields: string[];

  @property({
    type: 'object',
  })
  other?: object;

  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
