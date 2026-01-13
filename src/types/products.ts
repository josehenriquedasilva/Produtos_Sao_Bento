export interface Nutrient {
  g100: number;
  g30: number;
  VD: number;
}

export interface InfoNutritional {
  porcaoEmbalagem: number;
  porcaoG: number;
  porcaoU: number | string;
  valorEnergetico: Nutrient;
  carboidratos: Nutrient;
  acucaresTotais: Nutrient;
  acucaresAdicionados: Nutrient;
  proteinas: Nutrient;
  gordurasTotais: Nutrient;
  gordurasSaturadas: Nutrient;
  gordurasTrans: Nutrient;
  fibraAlimentar: Nutrient;
  sodio: Nutrient;
}

export interface Product {
  id: number;
  slug: string;
  nome: string;
  imagem: string;
  igredientes: string;
  alergicos: string;
  infoNutricinal: InfoNutritional;
}
