import Item from "../item.js"

describe('Teste dos itens', () => {
    it('Deve ter 3 campos: nome, valor, idade', () => {
        const item = new Item('Beterraba', 2.5, 10);
    
        expect(item.nome).toBe('Beterraba');
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
        
    });

    it('Deve ter o preço calculado de acordo com a quantidade', ()=> {
        const item = new Item('Batata', 25, 10);

        expect(item.pegaValorTotalItem()).toBe(250);
    })
})