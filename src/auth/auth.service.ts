import axios from 'axios';
import {
  SuccessResult,
  SuccessResultAuth,
  ErrorResult,
  ErrorResultAuth,
} from './../types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async apiAuth(
    id: string,
  ): Promise<SuccessResult<SuccessResultAuth> | ErrorResult<ErrorResultAuth>> {
    const response = await axios.get(
      'https://test.gnzs.ru/oauth/get-token.php',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Client-Id': id,
        },
        validateStatus: () => true,
      },
    );
    if (
      String(response.status)[0] == '4' ||
      String(response.status)[0] == '5'
    ) {
      return {
        title: 'Ошибка',
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
  }
}
