import { Module } from '@nestjs/common';
import { UtilsHash, UtilsValidation } from './utils.service';

@Module({
    imports: [],
    controllers: [],
    providers: [UtilsValidation, UtilsHash],
    exports: [ UtilsValidation, UtilsHash]
})
export class UtilsModule {}
