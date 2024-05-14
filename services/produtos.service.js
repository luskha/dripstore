import { Produto } from "../models/product.js";

export const produtoServices = {
    getAll: async (req, res) => {
        const produtos = await Produto.findAll();

        return res.status(200).json(produtos);
    },
    getById: async (req, res) => {
        const id  = req.params.id;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ message: "Produto não encontrado" });
            }
    },
}