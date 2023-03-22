import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'Banco' } } })
export class Banco extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: true,
    id: 1,
    mssql: { columnName: 'BancoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: true },
  })
  bancoId?: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: { columnName: 'Nombre', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  nombre?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Banco>) {
    super(data);
  }
}

export interface BancoRelations {
  // describe navigational properties here
}

export type BancoWithRelations = Banco & BancoRelations;
