import { Body, Controller, Param, Post, Res } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { Result } from 'src/types';
import { Response } from 'express';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post('/create/:name')
  async create(
    @Body() requestParams: { domain: string; token: string },
    @Param('name') name: string,
    @Res() res: Response,
  ): Promise<void> {
    console.log(requestParams);
    const creater = this.entitiesService.requestCreate(
      requestParams.domain,
      requestParams.token,
    );
    const result: Result = await creater(name);
    res.status(result.status);
    res.send(result);
  }
}
