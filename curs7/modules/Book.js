import {Product} from './Product'

class Book extends Product{
    constructor(name, price, percent, author){
        super(name, price, percent);
        this.author = author
    }
}

export {Book}