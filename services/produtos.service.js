import { Produto } from "../models/product.js";

export const produtoServices = {
    getAll: async (req, res) => {
        try {
            const produtos = await Produto.findAll();
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao buscar produtos", error });
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao buscar produto", error });
        }
    },
    create: async (req, res) => {
        try {
            const { nome, descricao, preco, desconto, categoria, ativo } = req.body;
            const produto = await Produto.create({
                nome,
                descricao,
                preco,
                desconto,
                categoria,
                ativo
            });
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao criar produto", error });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { nome, descricao, preco, desconto, categoria, ativo } = req.body;
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }
            produto.nome = nome;
            produto.descricao = descricao;
            produto.preco = preco;
            produto.desconto = desconto;
            produto.categoria = categoria;
            produto.ativo = ativo;
            await produto.save();
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao atualizar produto", error });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const produto = await Produto.findByPk(id);
            if (!produto) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }
            await produto.destroy();
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: "Erro ao excluir produto", error });
        }
    },
};
