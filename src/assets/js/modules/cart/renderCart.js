const Methods = {
    init() {
        Methods.validCart();
    },

    validCart() {
        const emptyCart = document.querySelector('.empty-cart');
        const contentCart = document.querySelector('.cart-content');

        if ( localStorage.getItem('productsCart') ) {
            Methods.renderProduct();
        } else {
            emptyCart.style.display = 'block';
            contentCart.style.display = 'none';
        }
    },

    renderProduct() {
        const cartWrapper = document.querySelector('.js--cart-list');
        const items = JSON.parse(localStorage.getItem('productsCart'));

        items.map( (id, index) => {
            
            fetch(`https://restql-server-api-v2-americanas.b2w.io/run-query/catalogo/product-without-promotion/12?id=${id}`).then( res => {
                return res.json().then(function(infoProduct) {
                    console.log(infoProduct)
                    let item = `
                                <tr>
                                    <td class='item-left'>
                                        <p>
                                            ${infoProduct.product.result.name || 'Smartphone Motorola - Moto g6 64gb'}
                                        </p>
                                    </td>
                                    <td class='item-right'>
                                        <p>
                                            R$ ${infoProduct.installment.result.total || '0,99'} 
                                        </p>
                                    </td>
                                </tr>
                    `;

                    cartWrapper.innerHTML += item;
                });
            });
        });
    }
};

export default {
    init: Methods.init
}