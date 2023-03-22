import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'Pagos' } } })
export class Pagos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: { columnName: 'PagoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  pagoId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: { columnName: 'ClienteId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  clienteId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: { columnName: 'CuotaDetId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  cuotaDetId: number;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: { columnName: 'FechaPago', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false },
  })
  fechaPago: string;

  @property({
    type: 'number',
    required: true,
    precision: 9,
    scale: 2,
    generated: false,
    mssql: { columnName: 'ValorCuota', dataType: 'decimal', dataLength: null, dataPrecision: 9, dataScale: 2, nullable: 'NO', generated: false },
  })
  valorCuota: number;

  @property({
    type: 'number',
    required: true,
    precision: 9,
    scale: 2,
    generated: false,
    mssql: { columnName: 'Total', dataType: 'decimal', dataLength: null, dataPrecision: 9, dataScale: 2, nullable: 'NO', generated: false },
  })
  total: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pagos>) {
    super(data);
  }
}

export interface PagosRelations {
  // describe navigational properties here
}

export type PagosWithRelations = Pagos & PagosRelations;
