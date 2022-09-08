import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dpm',
  connector: 'mysql',
  url: '',
  host: '10.66.24.103',
  port: 3306,
  user: 'dpmuser230',
  password: 'dpm230@wks',
  database: 'dpm230',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DpmDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'dpm';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dpm', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
