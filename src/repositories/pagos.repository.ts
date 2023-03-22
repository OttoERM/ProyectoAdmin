import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Pagos, PagosRelations} from '../models';

export class PagosRepository extends DefaultCrudRepository<
  Pagos,
  typeof Pagos.prototype.pagoId,
  PagosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Pagos, dataSource);
  }
}
