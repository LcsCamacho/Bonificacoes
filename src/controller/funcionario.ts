import { Request, Response } from "express";
import prisma from "../dao/prisma";


// A bonificação é 2% do salário multiplicado pelo total de anos de trabalho vezes a nota do desempenho (de 0 a 10)
// funcionario - matricula, nome_completo, data_admissao, salario, data_pagamento, desempenho, bonificacao
export const inserir = (req: Request, res:Response) => { 
    const { matricula, nomeCompleto, dataAdmissao, salario, dataPagamento, desempenho } = req.body;
    const quantidadeDeAnosTrabalhados = new Date().getFullYear() - new Date(dataAdmissao).getFullYear();
    console.log(quantidadeDeAnosTrabalhados)
    const bonificacao = (salario * 0.02) * (quantidadeDeAnosTrabalhados * desempenho);

    prisma.funcionario.create({
        data: {
            matricula,
            nome_completo:nomeCompleto,
            data_admissao:new Date(dataAdmissao),
            salario,
            data_pagamento:new Date(dataPagamento),
            desempenho,
            bonificacao:Number(bonificacao.toFixed(2))
        }
    }).then((funcionario) => {
        res.status(201).json(funcionario);
    }
    ).catch((error) => {
        console.log(error)
        res.status(500).json(error);
    });

}

export const alterar = (req: Request, res:Response) => {
    const { matricula, nomeCompleto, dataAdmissao, salario, dataPagamento, desempenho } = req.body;

    const quantidadeDeAnosTrabalhados = new Date().getFullYear() - new Date(dataAdmissao).getFullYear();

    const bonificacao = (salario * 0.02) * (quantidadeDeAnosTrabalhados * desempenho);

    prisma.funcionario.update({
        where: {
            matricula: matricula
        },
        data: {
            nome_completo:nomeCompleto,
            data_admissao:new Date(dataAdmissao),
            salario,
            data_pagamento:new Date(dataPagamento),
            desempenho,
            bonificacao:Number(bonificacao.toFixed(2))
        }
    }).then((funcionario) => {
        res.status(201).json(funcionario);
    }
    ).catch((error) => {
        res.status(500).json(error);
    });
 }

export const excluir = (req: Request, res:Response) => {
    const { matricula } = req.body;

    prisma.funcionario.delete({
        where: {
            matricula: matricula
        }
    }).then((funcionario) => {
        res.status(201).json(funcionario);
    }
    ).catch((error) => {
        res.status(500).json(error);
    });
 }

export const listar = (req: Request, res:Response) => {
    prisma.funcionario.findMany({
        select: {
            matricula: true,
            nome_completo: true,
            data_admissao: true,
            salario: true,
            data_pagamento: true,
            desempenho: true,
            bonificacao: true
        }
    }).then((funcionario) => {
        res.status(201).json(funcionario);
    }
    ).catch((error) => {
        res.status(500).json(error);
    });
 }

