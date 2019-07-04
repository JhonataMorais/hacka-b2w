const Methods = {
	init() {
        $(document).ajaxStop( () => {
            Methods.setInfos();
            Methods.open();
            Methods.close();
            Methods.removeItemMinicart();
            Methods.updateQtdMinicart();
        });

        if ( window.innerWidth <= 768 ) {
            Methods.renderMobile();
        }
    },
    
    _convertCurrency(number) {
        const int = number.toString().substr(0, number.toString().length - 2)
        const decimal = number.toString().substr(number.toString().length - 2, number.toString().length);

        return `R$ ${int},${decimal}`;
    },

    _removeItem(index) {
        vtexjs.checkout.getOrderForm()
        .then(function(orderForm) {
          let itemIndex = 0
          let item = orderForm.items[itemIndex];
          let itemsToRemove = [
            {
              "index": index,
              "quantity": 0,
            }
          ]
          return vtexjs.checkout.removeItems(itemsToRemove);
        })
    },

    _updateQty(index, qtd) {
        vtexjs.checkout.getOrderForm()
        .then(function(orderForm) {
          let updateItem = {
            index: index,
            quantity: qtd
          };

          return vtexjs.checkout.updateItems([updateItem], null, false);
        })
    },

    open() {
        const btn = document.querySelector('.j-minicart > img');
        const minicart = document.querySelector('.j-minicart__content');


        btn.addEventListener('click', () => {
            minicart.classList.add('is--active');
        });
    },

    close() {
        const btn = document.querySelector('.j-minicart-close');
        const minicart = document.querySelector('.j-minicart__content');


        btn.addEventListener('click', () => {
            minicart.classList.remove('is--active');
        });
    },

    setInfos() {
        const items = vtexjs.checkout.orderForm.items;
        const minicart = document.querySelector('.j-minicart__content-js');
        const totalPrice = Methods._convertCurrency(vtexjs.checkout.orderForm.value);
        let wrapper;

        if ( items.length < 1 ) {
            wrapper = `
                        <div class="j-minicart-empty">
                            <p>
                                Seu carrinho <br/>
                                ainda está vazio
                            </p>
                        </div>
                    `;	
        } else {
            wrapper = `
                <div class="j-minicart-items">
                    <ul class='j-minicart-items__list'>
            `;
            
            items.forEach( (item, index) => {                
                let formattedPrice = Methods._convertCurrency(item.price);

                wrapper += `
                    <li data-index="${index}" data-product-id="${item.productId}">
                        <div class="j-minicart-img">
                            <a href="${item.detailUrl}">
                                <img src="${item.imageUrl}" alt="${item.skuName}" />
                            </a>
                        </div>
                        <div class="j-minicart-item">
                            <a href="${item.detailUrl}" class="j-minicart-item__name">
                                ${item.skuName}
                            </a>
                            
                            <div class="j-minicart-item__bottom">
                                <div class='j-minicart-price'>
                                    <p>${formattedPrice}</p>
                                </div>
                                <div class="j-minicart-qty">
                                    <form class="j-minicart__form">
                                        <button class='j-minicart__form-btn js--minicart-minus'>
                                            -
                                        </button>
                                        <input type="number" value="${item.quantity}" class='j-minicart__form-ipt js--minicart-qty' />
                                        <button class='j-minicart__form-btn js--minicart-plus'>
                                            +
                                        </button>
                                    </form>

                                    <small class='j-minicart-remove__item'>
                                        excluir
                                    </small>
                                </div>
                            </div>
                        </div>
                    </li>
                `;
            });

            wrapper += `
                        </ul>
                            <div class="j-minicart-total">
                                <p> Total R$ <strong class='js--minicart-total'> ${totalPrice} </strong> </p>
                            </div>

                            <a class='j-minicart-btn' href="/checkout/#/cart">
                                Finalizar compra
                            </a>
                        </div>
                    `;
        }

        minicart.innerHTML = '';
        minicart.innerHTML += wrapper;
    },

    removeItemMinicart() {
        const btnRemove = document.querySelectorAll('.j-minicart-remove__item');

        btnRemove.forEach( item => {
            item.addEventListener('click', () => {
                let index = item.closest('li').dataset.index;
                
                Methods._removeItem(index);
            });
        });
    },

    updateQtdMinicart() {
        const form = document.querySelectorAll('.j-minicart__form');

        form.forEach( item => {
            let btns = item.querySelectorAll('button');
            let input = item.querySelector('input');
            let index = item.closest('li').dataset.index;
        
            btns.forEach( btn => {
                btn.addEventListener('click', ev => {
                    ev.preventDefault();
                    
                    if ( btn.classList.contains('js--minicart-minus') ) {
                        if ( input.value > 1 ) {
                            input.value = input.value - 1;

                            Methods._updateQty(index, input.value);
                        }
                    } else {
                        input.value++;
                        Methods._updateQty(index, input.value);
                    }
                });
            });
            
        });
    },

    renderMobile() {
        const wrapper = document.querySelector('.j-main-header__left');
        const minicart = document.querySelector('.j-minicart');

        wrapper.appendChild(minicart)
    }
};

export default {
	init: Methods.init,
}