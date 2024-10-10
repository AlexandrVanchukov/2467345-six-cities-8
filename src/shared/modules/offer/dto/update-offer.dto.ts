import { City, Goods, Location, OfferType } from '../../../types/index.js';

export class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public createdDate?: Date;
  public city?: City;
  public previewImage?: string;
  public images?: string[];
  public type?: OfferType;
  public price?: number;
  public isPremium?: boolean;
  public isFavorite?: boolean;
  public rating?: number;
  public bedrooms?: number;
  public maxAdults?: number;
  public goods?: Goods[];
  public location?: Location;
}
