import { Entity, model, property } from '@loopback/repository';

@model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'Clientes' } } })
export class Clientes extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: true,
    id: 1,
    mssql: { columnName: 'ClienteId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: true },
  })
  clienteId?: number;

  @property({
    type: 'string',
    required: true,
    length: 30,
    generated: false,
    mssql: { columnName: 'Nombre', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false },
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    generated: false,
    mssql: { columnName: 'Apellido', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false },
  })
  apellido: string;

  @property({
    type: 'string',
    length: 1,
    generated: false,
    mssql: { columnName: 'Sexo', dataType: 'char', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  sexo?: string;

  @property({
    type: 'string',
    length: 15,
    generated: false,
    mssql: { columnName: 'Identidad', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  identidad?: string;

  @property({
    type: 'string',
    length: 15,
    generated: false,
    mssql: { columnName: 'RTN', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  rtn?: string;

  @property({
    type: 'date',
    generated: false,
    mssql: { columnName: 'FechaNac', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  fechaNac?: string;

  @property({
    type: 'string',
    length: 9,
    generated: false,
    mssql: { columnName: 'Telefono', dataType: 'varchar', dataLength: 9, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  telefono?: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: { columnName: 'Email', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false },
  })
  email?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Clientes>) {
    super(data);
  }
}

export interface ClientesRelations {
  // describe navigational properties here
}

export type ClientesWithRelations = Clientes & ClientesRelations;
