import { useFieldArray } from "react-hook-form";

export default function EnderecoForm({ register, control, disabled }) {
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: `enderecos`,
  });

  return (
    <>
      <h6>Endereço</h6>
      {fields.map((field, index) => (
        <div className="card w-100 mt-2 p-4" key={field.id}>
          <div className="mb-1 col">
            <label htmlFor="logradouro" className="form-label form-label-sm">
              Logradouro
            </label>
            <input
              type="text"
              {...register(`enderecos.${index}.logradouro`)}
              className="form-control form-control-sm"
              id="logradouro"
              disabled={disabled}
            />
          </div>
          <div className="mb-1 col">
            <label htmlFor="numero" className="form-label form-label-sm">
              Número
            </label>
            <input
              type="number"
              {...register(`enderecos.${index}.numero`)}
              className="form-control form-control-sm"
              id="numero"
              disabled={disabled}
            />
          </div>
          <div className="mb-1 col">
            <label htmlFor="cep" className="form-label form-label-sm">
              CEP
            </label>
            <input
              type="text"
              {...register(`enderecos.${index}.cep`)}
              className="form-control form-control-sm"
              id="cep"
              disabled={disabled}
            />
          </div>
          <div className="mb-1 col">
            <label htmlFor="bairro" className="form-label form-label-sm">
              Bairro
            </label>
            <input
              type="text"
              {...register(`enderecos.${index}.bairro`)}
              className="form-control form-control-sm"
              id="bairro"
              disabled={disabled}
            />
          </div>
          <div className="mb-1 col">
            <label htmlFor="complemento" className="form-label form-label-sm">
              Complemento
            </label>
            <input
              type="text"
              {...register(`enderecos.${index}.complemento`)}
              className="form-control form-control-sm"
              id="complemento"
              disabled={disabled}
            />
          </div>
          <div className="mb-1 col">
            <label htmlFor="complemento" className="form-label form-label-sm">
              Tipo de Endereço
            </label>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              {...register(`enderecos.${index}.tipoEndereco`)}
              disabled={disabled}
            >
              {disabled ? (
                <>
                  <option value={"RESIDENCIAL"}>Residencial</option>
                  <option value={"COMERCIAL"}>Comercial</option>
                  <option value={"CONSULTORIO"}>Consultório</option>
                </>
              ) : (
                <>
                  <option value={"RESIDENCIAL"}>Residencial</option>
                  <option value={"COMERCIAL"}>Comercial</option>
                  <option value={"CONSULTORIO"}>Consultório</option>
                </>
              )}
            </select>
          </div>
          {/* <div className="mb-1 col">
            <label htmlFor="cidade" className="form-label form-label-sm">
              Cidade
            </label>
            <input
              type="text"
              {...register(`enderecos.${index}.cidade.id`)}
              className="form-control form-control-sm"
              id="cidade"
              disabled={disabled}
            />
          </div> */}
          {/* <div className="mb-1 col">
            <label htmlFor="estado" className="form-label form-label-sm">
              Estado
            </label>
            <input
              type="text"
              {...register(`enderecos.${index}.cidade.estado.id`)}
              className="form-control form-control-sm"
              id="estado"
              disabled={disabled}
            />
          </div> */}
          {!disabled ? (
            <button
              className="btn btn-sm btn-outline-danger mt-2"
              type="button"
              onClick={() => remove(index)}
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
      <button
        className="btn btn-sm btn-outline-primary mt-2"
        type="button"
        onClick={(e) => {
          e.preventDefault;
          append({
            logradouro: "",
            numero: 0,
            cep: "",
            bairro: "",
            complemento: "",
            codigoIbge: null,
            tipoEndereco: "",
            cidade: {
              nome: "",
              estado: {
                id: 1,
              },
            },
          });
        }}
      >
        Adicionar Endereço
      </button>
    </>
  );
}
