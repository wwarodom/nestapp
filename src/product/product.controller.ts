/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService, 
                private readonly utilityService: UtilityService,
                private readonly globalHelperService:GlobalHelperService
    ) {}

    @Get('/global')
    globaFunc():string{
        return this.globalHelperService.globalFunc();
    }

    @Get('/shared') // localhost:3000/product/shared
    sharedFunc():string{
        return this.utilityService.shareFunc();
    }

    @Get() // localhost:3000/product
    productFunc(): string {
        return this.productService.productFunc();
    } 

    @Get('/function2') // localhost:3000/product/function2
    productFunc2(): string {
        return this.productService.productFunc2();
    } 
}

