import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Ventas, VentasRelations} from '../models';

export class VentasRepository extends DefaultCrudRepository<
  Ventas,
  typeof Ventas.prototype.ventaId,
  VentasRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Ventas, dataSource);
  }
}
