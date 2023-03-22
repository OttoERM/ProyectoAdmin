import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'Lote' } } })
export class Lote extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: { columnName: 'LoteId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  loteId: number;

  @property({
    type: 'number',
    required: true,
    precision: 6,
    scale: 2,
    generated: false,
    mssql: { columnName: 'MetrosCuad', dataType: 'decimal', dataLength: null, dataPrecision: 6, dataScale: 2, nullable: 'NO', generated: false },
  })
  metrosCuad: number;

  @property({
    type: 'number',
    required: true,
    precision: 9,
    scale: 2,
    generated: false,
    mssql: { columnName: 'PrecioLote', dataType: 'decimal', dataLength: null, dataPrecision: 9, dataScale: 2, nullable: 'NO', generated: false },
  })
  precioLote: number;

  @property({
    type: 'string',
    length: 15,
    generated: false,
    mssql: { columnName: 'Matricula', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  matricula?: string;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    mssql: { columnName: 'Latitud', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: false },
  })
  latitud?: number;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    mssql: { columnName: 'Longitud', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: false },
  })
  longitud?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Lote>) {
    super(data);
  }
}

export interface LoteRelations {
  // describe navigational properties here
}

export type LoteWithRelations = Lote & LoteRelations;
