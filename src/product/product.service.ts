/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    productFunc(): string {
        return 'Hello from product service';
    }
    
    productFunc2(): string {
        return 'Hello from product service2';
    } 
}
