import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DpmDataSource} from '../datasources';
import {MydpmResend, MydpmResendRelations} from '../models';

export class MydpmResendRepository extends DefaultCrudRepository<
  MydpmResend,
  typeof MydpmResend.prototype.ID,
  MydpmResendRelations
> {
  constructor(
    @inject('datasources.dpm') dataSource: DpmDataSource,
  ) {
    super(MydpmResend, dataSource);
  }
}
