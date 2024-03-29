import { PaginationDTO } from 'src/common/dto/pagination.dto';
import { SuccessVO } from 'src/common/dto/success.dto';
import { PictureDTO } from './picture.dto';

export class PictureListItem extends PictureDTO {}

export class PictureListVO {
  list: PictureListItem[];
  pagination: PaginationDTO;
}

export class PictureListSuccessVO extends SuccessVO {
  data: {
    list: PictureListItem[];
    pagination: PaginationDTO;
  };
}
