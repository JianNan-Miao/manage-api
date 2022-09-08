import {repository} from '@loopback/repository';
import {param, post, response} from '@loopback/rest';
import {MydpmResend} from '../models';
import {MydpmResendRepository} from '../repositories';

let moment = require('moment');

export class DpmproductivityController {
  constructor(
    @repository(MydpmResendRepository)
    public mydpmResendRepository: MydpmResendRepository,
  ) {}

  // @post('/mydpm-resends')
  // @response(200, {
  //   description: 'MydpmResend model instance',
  //   content: {'application/json': {schema: getModelSchemaRef(MydpmResend)}},
  // })
  // async create(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(MydpmResend, {
  //           title: 'NewMydpmResend',
  //           exclude: ['ID'],
  //         }),
  //       },
  //     },
  //   })
  //   mydpmResend: Omit<MydpmResend, 'ID'>,
  // ): Promise<MydpmResend> {
  //   return this.mydpmResendRepository.create(mydpmResend);
  // }

  // @get('/mydpm-resends/count')
  // @response(200, {
  //   description: 'MydpmResend model count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async count(
  //   @param.where(MydpmResend) where?: Where<MydpmResend>,
  // ): Promise<Count> {
  //   return this.mydpmResendRepository.count(where);
  // }

  // @get('/mydpm-resends')
  // @response(200, {
  //   description: 'Array of MydpmResend model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'array',
  //         items: getModelSchemaRef(MydpmResend, {includeRelations: true}),
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(MydpmResend) filter?: Filter<MydpmResend>,
  // ): Promise<MydpmResend[]> {
  //   return this.mydpmResendRepository.find(filter);
  // }

  @post('/dpm/productivity/resend/yesterday')
  @response(200, {
    description: '补抛送昨天生产力',
    content: {
      'application/json': {},
    },
  })
  resend_productivity(
    @param.query.string('plantCode', {
      required: true,
      description: 'plantCode(F232)',
    })
    plantCode: string,
    @param.query.string('empNo', {
      required: true,
      description: 'empNo(K1111111)',
    })
    empNo: string,
  ): any {
    let mydpmResend = new MydpmResend();
    mydpmResend.KPI = 'PRODUCTIVITY';
    mydpmResend.SYNCDATE = moment(Date.now())
      .add(8, 'hour')
      .format('YYYY-MM-DD HH:mm:ss');
    mydpmResend.PlantCode = plantCode.toUpperCase();
    mydpmResend.EmpNo = empNo;
    mydpmResend.Period = moment().add(-1, 'day').format('YYYY-MM-DD');
    console.log(moment().add(-1, 'day').format('YYYY-MM-DD HH:mm:ss'));

    return this.mydpmResendRepository.create(mydpmResend);
  }

  @post('/dpm/productivity/resend')
  @response(200, {
    description: '补抛送特定某一天的生产力',
    content: {
      'application/json': {},
    },
  })
  resend_productivity2(
    @param.query.string('plantCode', {
      required: true,
      description: 'plantCode(F232)',
    })
    plantCode: string,
    @param.query.string('Period', {
      required: true,
      description: 'Period(2021-11-24)',
    })
    Period: string,
    @param.query.string('empNo', {
      required: true,
      description: 'empNo(K1111111)',
    })
    empNo: string,
  ): any {
    let mydpmResend = new MydpmResend();
    mydpmResend.KPI = 'PRODUCTIVITY';
    mydpmResend.SYNCDATE = moment(Date.now())
      .add(8, 'hour')
      .format('YYYY-MM-DD HH:mm:ss');
    mydpmResend.PlantCode = plantCode.toUpperCase();
    mydpmResend.EmpNo = empNo;
    mydpmResend.Period = Period;
    return this.mydpmResendRepository.create(mydpmResend);
  }



  @post('/dpm/resend')
  @response(200, {
    description: '补抛送特定某一天的kpi',
    content: {
      'application/json': {},
    },
  })
  resendData(
    @param.query.string('plantCode', {
      required: true,
      description: 'plantCode(F232)',
    })
    plantCode: string,
    @param.query.string('Period', {
      required: true,
      description: 'Period(2021-11-24)',
    })
    Period: string,
    @param.query.string('empNo', {
      required: true,
      description: 'empNo(K1111111)',
    })
    empNo: string,
    @param.query.string('kpi', {
      required: true,
      description: 'kpi(upphn)',
    })
    kpi: string,
  ): any {
    let mydpmResend = new MydpmResend();
    mydpmResend.SYNCDATE = moment(Date.now())
      .add(8, 'hour')
      .format('YYYY-MM-DD HH:mm:ss');
    mydpmResend.PlantCode = plantCode.toUpperCase();
    mydpmResend.EmpNo = empNo;
    mydpmResend.Period = Period;
    mydpmResend.KPI=kpi;
    return this.mydpmResendRepository.create(mydpmResend);
  }
}
