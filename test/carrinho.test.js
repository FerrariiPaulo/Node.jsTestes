import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Teste do carrinho', () => {
    it('Deve inicializar vazio', () => {
        const carrinho = new Carrinho();
        expect(carrinho.subtotal).toBeNull();
    })

    it('Deve ter itens', () => {
        const item = new Item("Jaca", 2, 5);
        const item2 = new Item("Feijão", 1, 1);

        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2);
    })

    it('Deve ter a propriedade "total" na inicialização', () => {
        const carrinho = new Carrinho();

        expect(carrinho).toHaveProperty('total');
    } )

    it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {        
        function engloabaErroCarrinho() {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();

        }

        expect(engloabaErroCarrinho).toThrow(Error('Carrinho de compras vazio'));
    })

    it('Deve adicionar frete', () => {
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(10);

        expect(carrinho.frete).toBe(10);
    })

    it('Deve finalizar as compras', () => {
        const item = new Item("banana", 10, 2);
        const item2 = new Item("Cereja", 10, 2);

        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(10);

        expect(carrinho.finalizaCompra()).toStrictEqual({
            subtotal: 40,
            frete: 10,
            total: 50
        });

    })
});