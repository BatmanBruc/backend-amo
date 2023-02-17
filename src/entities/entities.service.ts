import { ErrorResult } from './../../dist/types.d';
import axios from 'axios';
import { Result, SuccessResult } from './../types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EntitiesService {
  requestCreate(
    domain: string,
    token: string,
  ): (
    enitity_string: string,
  ) => Promise<SuccessResult<any> | ErrorResult<any>> {
    const instance = axios.create({
      baseURL: 'https://' + domain,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      validateStatus: () => true,
    });
    return async (
      enitity_string: string,
    ): Promise<SuccessResult<any> | ErrorResult<any>> => {
      const response = await instance.post('/api/v4/' + enitity_string, [
        {
          name: enitity_string,
        },
      ]);
      if (
        String(response.status)[0] == '4' ||
        String(response.status)[0] == '5'
      ) {
        return {
          title: 'Ошибка создания',
          status: response.status,
          success: false,
          content: response.data,
        };
      } else {
        return {
          status: 200,
          success: true,
          content: response.data,
        };
      }
    };
  }
}
