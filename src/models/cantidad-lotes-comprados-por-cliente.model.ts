import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'dbo', table: 'CantidadLotesCompradosPorCliente'}
  }
})
export class CantidadLotesCompradosPorCliente extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 30,
    generated: 0,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  nombre: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'CantCompras', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  cantCompras?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CantidadLotesCompradosPorCliente>) {
    super(data);
  }
}

export interface CantidadLotesCompradosPorClienteRelations {
  // describe navigational properties here
}

export type CantidadLotesCompradosPorClienteWithRelations = CantidadLotesCompradosPorCliente & CantidadLotesCompradosPorClienteRelations;
