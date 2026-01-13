import { InfoNutritional } from "@/types/products";

interface NutritionalProps {
  infoNutritional: InfoNutritional;
}

export default function Table({ infoNutritional }: NutritionalProps) {

  const formatarNumero = (valor: number, maxDecimais = 2) => {
    if (valor === null || valor === undefined) {
      return 0;
    }

    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: Number.isInteger(valor) ? 0 : 1,
      maximumFractionDigits: maxDecimais,
    }).format(valor);
  };

  return (
    <div>
      <table className="table-fixed bg-[#f17f211a] border-spacing-0.5 border-separate">
        <thead>
          <tr>
            <th className="text-sm font-medium border-[#F17E21] border p-0.5">
              Porções por embalagem: Cerca de {infoNutritional.porcaoEmbalagem}{" "}
              porções <br /> Porção: {infoNutritional.porcaoG}g ou (
              {infoNutritional.porcaoU} unidades)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">100g</th>
            <th className="border border-[#F17E21] font-medium p-1">30g</th>
            <th className="border border-[#F17E21] font-medium p-1">%VD(*)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Valor energético (kcal)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.valorEnergetico.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.valorEnergetico.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.valorEnergetico.VD, 2)}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Carboidratos (g)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.carboidratos.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.carboidratos.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.carboidratos.VD, 2)}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Açúcares totais (g)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.acucaresTotais.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.acucaresTotais.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {infoNutritional.acucaresTotais.VD === 0
                ? ""
                : infoNutritional.acucaresTotais.VD}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Açúcares adicionados (g)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.acucaresAdicionados.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.acucaresAdicionados.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.acucaresAdicionados.VD, 2)}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Proteinas (g)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.proteinas.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.proteinas.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.proteinas.VD, 2)}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Gorduras totais (g)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasTotais.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasTotais.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasTotais.VD, 2)}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Gorduras saturadas (g)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasSaturadas.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasSaturadas.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasSaturadas.VD, 2)}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Gorduras trans (g)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasTrans.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasTrans.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.gordurasTrans.VD)}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Fibra alimentar (g)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.fibraAlimentar.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.fibraAlimentar.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.fibraAlimentar.VD, 2)}
            </th>
          </tr>
          <tr>
            <th className="border border-[#F17E21] text-sm font-medium p-1">
              Sódio (mg)
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.sodio.g100, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.sodio.g30, 2)}
            </th>
            <th className="border border-[#F17E21] font-medium p-1">
              {formatarNumero(infoNutritional.sodio.VD, 2)}
            </th>
          </tr>
        </tbody>
      </table>
      <p className="text-xs font-semibold">
        (*) % Percentual de valores diarios fornecidos pela porção.
      </p>
    </div>
  );
}
