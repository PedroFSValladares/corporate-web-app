export class FuncionarioResumido {
  cpf: string;
  matricula: string;
  nome: string
  nome_cargo: string
  status: boolean

    constructor(cpf: string, nome: string, matricula: string, nome_cargo: string, status: boolean) {
        this.cpf = cpf;
        this.nome = nome;
        this.matricula = matricula;
        this.nome_cargo = nome_cargo;
        this.status = status;
    }
}
