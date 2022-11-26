export const products = [
  {
    id: 1,
    title: "Desarrollo sitio web",
    descuento: 10,
    price: 900,
    stock: 10,
    category: "sitios web",
    img: "https://res.cloudinary.com/db9rq00mf/image/upload/v1667169576/header-sitios-web-srweb_ih9smx.png",
  },
  {
    id: 2,
    title: "Desarrollo Aplicaciones",
    descuento: 20,
    price: 5000,
    stock: 10,
    category: "Apps",
    img: "https://res.cloudinary.com/db9rq00mf/image/upload/v1667169794/desarrollo_apps_entornos_empresariales_g6mlvv.jpg",
  },
  {
    id: 3,
    descuento: 5,
    title: "Marketing Digital",
    price: 500,
    stock: 10,
    category: "Marketing",
    img: "https://res.cloudinary.com/db9rq00mf/image/upload/v1667169969/5-fatores-que-otimizam-seus-resultados-de-marketing-digital_xukvtv.jpg",
  },
];

export const getProducts = (categoryName) => {
  return new Promise((res, rej) => {
    const prodFiltrados = products.filter(
      (prod) => prod.category === categoryName
    );
    const ref = categoryName ? prodFiltrados : products;
    setTimeout(() => {
      res(ref);
    }, 500);
  });
};

export const getProduct = (idProd) => {
  return new Promise((res, rej) => {
    const product = products.find((prod) => prod.id === +idProd);
    setTimeout(() => {
      res(product);
    }, 500);
  });
};