import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'CuotaCab' } } })
export class CuotaCab extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: { columnName: 'CuotaCabId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  cuotaCabId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: { columnName: 'VentaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  ventaId: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: false,
    mssql: { columnName: 'NumCuota', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: false },
  })
  numCuota?: number;

  @property({
    type: 'number',
    precision: 9,
    scale: 2,
    generated: false,
    mssql: { columnName: 'PrecioLote', dataType: 'decimal', dataLength: null, dataPrecision: 9, dataScale: 2, nullable: 'YES', generated: false },
  })
  precioLote?: number;

  @property({
    type: 'date',
    generated: false,
    mssql: { columnName: 'FechaInicio', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  fechaInicio?: string;

  @property({
    type: 'date',
    generated: false,
    mssql: { columnName: 'FechaFinal', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  fechaFinal?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CuotaCab>) {
    super(data);
  }
}

export interface CuotaCabRelations {
  // describe navigational properties here
}

export type CuotaCabWithRelations = CuotaCab & CuotaCabRelations;
