/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
    shareFunc(): string {
        return 'use shared module';
      }
}
