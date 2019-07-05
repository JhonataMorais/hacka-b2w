const Methods = {
    init() {
        Methods.infosProduct();
        Methods.addToCart();
    },

    infosProduct() {
        const id = window.location.search.split('=')[1];
        const productImage = document.querySelector('.product-image');
        const productTitle = document.querySelector('.product-title');
        const productPrice = document.querySelector('.product-price');
        const productInstallments = document.querySelector('.product-installments');

        fetch(`https://restql-server-api-v2-americanas.b2w.io/run-query/catalogo/product-without-promotion/12?id=${id}`).then( res => {
            return res.json().then( (infoProduct) => {
                productImage.setAttribute('src', infoProduct.product.result.images[0].large);
                productTitle.innerHTML = infoProduct.product.result.name;

                try {
                    productPrice.innerHTML = `R$ ${infoProduct.installment.result.total.replace('.',',')}`;
                } catch(err) {
                    productPrice.innerHTML = `R$ 999,99`;
                }

                try {
                    productInstallments.innerHTML = `${infoProduct.installment.result[0].quantity}x de ${infoProduct.installment.result[0].value} sem juros`;
                } catch(err) {
                    productInstallments.innerHTML = `10x de 99,99 sem juros`;
                }
                
            });
        });
    },

    addToCart() {
        
        const btn = document.querySelector('.buy-button');

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let id = window.location.search.split('id=')[1];

            if ( localStorage.getItem('productsCart') ) {
                let items = JSON.parse(localStorage.getItem('productsCart'));
                items.push(id);

                localStorage.setItem('productsCart', JSON.stringify(items));
            } else {
                localStorage.setItem('productsCart', JSON.stringify([id]));
            } 
            
            window.location = '/cart';
        });
    }
};

export default {
    init: Methods.init
}