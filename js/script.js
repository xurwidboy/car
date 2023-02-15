window.addEventListener('DOMContentLoaded', () => {
    class MenuCard {
        constructor(srs, alt, title, descr, price, parentSelector, ...classes) {

            this.srs = srs;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 10.500;
            this.changeToUSD()
        }
        changeToUSD() {
            this.price = this.price * this.transfer
        }
        render() {
            const element = document.createElement('div')


            if (this.classes.length === 0) {
                this.classes = 'menu__item'
                element.classList.add(this.classes)

            } else {
                this.classes.forEach(className => element.classList.add(className))
            }

            element.innerHTML = `
            <div class="menu__item">
            <img src="${this.srs }" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> $</div>
            </div>
        </div>
        `

            this.parent.append(element)
        }
    }
    new MenuCard(
        'img/tabs/audi.jpg',
        'audi',
        'Audi',
        'Немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi. Штаб-квартира расположена в городе Ингольштадт (Германия).',
        10000,
        '.menu .container',

    ).render()

    new MenuCard(
        'img/tabs/bmw.jpg',
        'bmw',
        'BMW',
        'Немецкий производитель легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств, входящая в состав немецкого концерна. Является одним из самых узнаваемых автомобильных брендов во всём мире',
        20000,
        '.menu .container',

    ).render()


    new MenuCard(
        'img/tabs/merc.jpg',
        'mers',
        'Mercedes',
        'Немецкий производитель легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств, входящая в состав немецкого концерна. Является одним из самых узнаваемых автомобильных брендов во всём мире',
        20000,
        '.menu .container',

    ).render()

})