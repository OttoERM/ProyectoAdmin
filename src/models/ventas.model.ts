import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'Ventas' } } })
export class Ventas extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: { columnName: 'VentaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  ventaId: number;

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
    mssql: { columnName: 'LoteId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false },
  })
  loteId: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: false,
    mssql: { columnName: 'BancoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: false },
  })
  bancoId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ventas>) {
    super(data);
  }
}

export interface VentasRelations {
  // describe navigational properties here
}

export type VentasWithRelations = Ventas & VentasRelations;
