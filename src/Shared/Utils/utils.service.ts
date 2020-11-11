import { Injectable } from '@nestjs/common';
import { validateBr } from 'js-brasil'
import { hash, compare } from 'bcrypt';




@Injectable()
export class UtilsValidation {

  /**
   * Valida o CPF
  */
  async validaCpf(cpf: string): Promise<boolean> {
    try {
      const validaCpf = validateBr.cpf(cpf)
      return (validaCpf) ? true :  false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Valida o RG
  */
  async validaRg(rg: string): Promise<boolean> {
    try {
      
      const validaRg = validateBr.rg(rg)
      return (validaRg) ? true :  false;

    } catch (error) {
      return error;
    }
  }

  /**
   * Valida o Cnpj
  */
  async validaCnpj(cnpj: string): Promise<boolean> {
    try {
      const validaCnpj = validateBr.cnpj(cnpj)
      return (validaCnpj) ? true :  false;
    } catch (error) {
      return error;
    }
  }





}

@Injectable()
export class UtilsHash {

  /**
   * Cria o Hash
  */
  async cripto(senha: string): Promise<string> {
    try {
      const senhaCripto = await hash(senha, 10)
      return senhaCripto;
    } catch (error) {
      return error;
    }
  }

  /**
   * Compara o Hash
  */
 async comparaCripto(senha: string, senhaCriptografada: string): Promise<boolean> {
  try {
    const senhaCripto = await compare(senha, senhaCriptografada);
    return senhaCripto
  } catch (error) {
    return error;
  }
}


}