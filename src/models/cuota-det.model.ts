import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'CuotaDet' } } })
export class CuotaDet extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: { columnName: 'CuotaDetId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  cuotaDetId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: { columnName: 'CuotaCabId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  cuotaCabId: number;

  @property({
    type: 'date',
    generated: false,
    mssql: { columnName: 'FechaVence', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  fechaVence?: string;

  @property({
    type: 'number',
    precision: 9,
    scale: 2,
    generated: false,
    mssql: { columnName: 'ValorCuota', dataType: 'decimal', dataLength: null, dataPrecision: 9, dataScale: 2, nullable: 'YES', generated: false },
  })
  valorCuota?: number;

  @property({
    type: 'number',
    precision: 4,
    scale: 2,
    generated: false,
    mssql: { columnName: 'Interes', dataType: 'decimal', dataLength: null, dataPrecision: 4, dataScale: 2, nullable: 'YES', generated: false },
  })
  interes?: number;

  @property({
    type: 'number',
    precision: 6,
    scale: 2,
    generated: false,
    mssql: { columnName: 'Mora', dataType: 'decimal', dataLength: null, dataPrecision: 6, dataScale: 2, nullable: 'YES', generated: false },
  })
  mora?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CuotaDet>) {
    super(data);
  }
}

export interface CuotaDetRelations {
  // describe navigational properties here
}

export type CuotaDetWithRelations = CuotaDet & CuotaDetRelations;
