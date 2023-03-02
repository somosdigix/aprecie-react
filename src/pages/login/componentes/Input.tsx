import React, { useCallback} from "react";
import { cpf, dataDeNascimento } from './Mask'


interface MascarasProps {
  mask: any;
  id: string;
  name: string
  placeholder: string;
  label: string;
  type:string;
  onChange: (e: any) => void;

}
export const Input = ({ mask, ...props }: MascarasProps) => {

  const handleKeyUp = useCallback((e: { currentTarget: { maxLength: number; value: any; }; }) => {
    if (mask === 'dataDeNascimento') {
      return dataDeNascimento(e)
    }
    if (mask === 'cpf') {
      return cpf(e)
    }
  }, [mask])


  return (

    <div className='campo-login'>
      <input typeof="text" {...props} onKeyUp={handleKeyUp} />
      <label className="label" > {props.label}</label>
    </div>


  );
}