import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthGuard } from 'src/authlogin/authlogin.service';

const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('x'), false);
  }
  callback(null, true);
};
const fileUploadInterceptor = FileInterceptor('image', {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
      const UniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename =
        file.fieldname +
        '-' +
        UniqueSuffix +
        '.' +
        file.originalname.split('.').pop();
      callback(null, filename);
    },
  }),
});

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('create')
  @UseInterceptors(fileUploadInterceptor)
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    createProductDto.image = image.filename;
    return this.productService.create(createProductDto);
  }

  @Get('findall')
  @UseGuards(AuthGuard)
  findAll() {
    return this.productService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch('update/:id')
  @UseInterceptors(fileUploadInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    updateProductDto.image = image.filename;
    return this.productService.update(+id, updateProductDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
