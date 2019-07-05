const Methods = {
    init() {
        Methods.searchAndRender();
    },

    searchAndRender() {
        const productsList = document.querySelector('#products-list');
        const searchTerm = window.location.search;

        fetch(`https://mystique-v2-americanas.b2w.io/search?content=${searchTerm}&sortBy=relevance&source=nanook&limit=24`).then( res => {
            return res.json().then(function(json) {
                let products = json.products;

                products.forEach( product => {
                    let name = product.name;
                    let id = product.id;

                    fetch(`https://restql-server-api-v2-americanas.b2w.io/run-query/catalogo/product-without-promotion/12?id=${id}`).then( res => {
                        return res.json().then(function(infoProduct) {
                            
                            let installments;
                            
                            try {
                                installments = `${infoProduct.installment.result[0].quantity}x de ${infoProduct.installment.result[0].value} sem juros`;
                            } catch(err) {
                                installments = '';
                            }
                            
                            let imgSrc = `${infoProduct.product.result.images[0].large}`;
                            let price; 

                            try {
                                price = `R$ ${infoProduct.installment.result[0].total.replace('.',',')}`;
                            } catch(err) {
                                console.log(err);
                                price = '';
                            }

                            let item = `
                                <li>
                                    <div class="img">
                                        <img src="${imgSrc}" alt="${name}" >
                                    </div>
                                    <div class="product-content">
                                        <h2 class="product-name">
                                            ${name}
                                        </h2>
                                        <strong class="product-price">${price}</strong>
                                        <small class="product-installments">${installments}</small>

                                        <a href="/product?id=${id}" class="buy-button">Comprar</a>
                                    </div>
                                </li>
                            `;
                            
                            productsList.innerHTML += item;			
                        });
                    });
                });
            });
        });
    }
};

export default {
    init: Methods.init,
}