type tproducts =  {

    readonly ID: Number,
    Name: string,
    readonly price: number,
    catagory: string,
    stock_quality: number,
    Product_available: boolean

}


const product1 : tproducts = {
    ID: 1,
    Name: "Laptop",
    price: 200,
    catagory: "Laptop",
    stock_quality: 2,
    Product_available:true

}

const product2 : tproducts = {
    ID: 2,
    Name: "Laptop",
    price: 200,
    catagory: "Laptop",
    stock_quality: 2,
    Product_available:true

}

const product3 : tproducts = {
    ID: 3,
    Name: "Laptop",
    price: 200,
    catagory: "Laptop",
    stock_quality: 2,
    Product_available:true

}

const product4 : tproducts = {
    ID: 4,
    Name: "Laptop",
    price: 200,
    catagory: "Laptop",
    stock_quality: 2,
    Product_available:true

}

const product5 : tproducts = {
    ID: 5,
    Name: "Laptop",
    price: 200,
    catagory: "Laptop",
    stock_quality: 2,
    Product_available:true

}

let pro : tproducts[] = [product1,product2,product3,product4,product5];

pro.forEach((Jambo) => {
    console.log(Jambo);
} )


let per_products = pro.map((tproducts) => tproducts.Name)
console.log(per_products);

const proADD = (Product: tproducts) : void => {
    pro.push(Product);
    console.log(`Product added successfully.`);
}

proADD({
    ID: 6,
    Name: "Laptop",
    price: 200,
    catagory: "Laptop",
    stock_quality: 2,
    Product_available:true
})

console.log(pro.length)

const proRemove = ((ProRmv : number) : void => {
    pro = pro.filter((Jambo) => Jambo.ID !== ProRmv )
})

proRemove(3)

console.log("Remove Successfully")
console.log(pro.length)