import {Entity, model, property} from '@loopback/repository';

@model()
export class MydpmResend extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'date',
    required: true,
  })
  SYNCDATE: string;

  @property({
    type: 'string',
    required: true,
  })
  PlantCode: string;

  @property({
    type: 'string',
    required: true,
  })
  EmpNo: string;

  @property({
    type: 'string',
    required: true,
  })
  KPI: string;

  @property({
    type: 'string',
    required: false,
  })
  Period: string;

  constructor(data?: Partial<MydpmResend>) {
    super(data);
  }
}

export interface MydpmResendRelations {
  // describe navigational properties here
}

export type MydpmResendWithRelations = MydpmResend & MydpmResendRelations;
