import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'dbo', table: 'MostrarClientesCuyasCuotasTienenMoras'}
  }
})
export class MostrarClientesCuyasCuotasTienenMoras extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'ClienteId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  clienteId: number;

  @property({
    type: 'string',
    required: true,
    length: 30,
    generated: 0,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    generated: 0,
    mssql: {columnName: 'Apellido', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO', generated: 0},
  })
  apellido: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'CuotaCabId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  cuotaCabId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'CuotaDetId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  cuotaDetId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MostrarClientesCuyasCuotasTienenMoras>) {
    super(data);
  }
}

export interface MostrarClientesCuyasCuotasTienenMorasRelations {
  // describe navigational properties here
}

export type MostrarClientesCuyasCuotasTienenMorasWithRelations = MostrarClientesCuyasCuotasTienenMoras & MostrarClientesCuyasCuotasTienenMorasRelations;
