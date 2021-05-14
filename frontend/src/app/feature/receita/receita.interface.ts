export interface IReceita {
  _id: string;
  imagePath?: IImagePath;
  tempoPreparo: Number;
  nome: string;
  descricao: string;
  ingredientes?: Array<string>;
  passos?: Array<any>;
}

export interface IImagePath {
  small?: string;
  large?: string;
}
