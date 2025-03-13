import React, { useEffect, useState }  from 'react';
import './ProductList.css'; 
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
}

const ProductList: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('./src/testdata.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ошибка загрузки данных");
            } else {
                console.log("Data downloaded successfull")
                return response.json();
            }
        })
        .then((data: Product[]) => {
            setProducts(data);
        })
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });
    }, []);
      
    const openModal = (product: Product) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);
    
    console.log('Компонент MyComponent был отрендерен!');
    
    return(
        <section className='product-list'>
            {products.map((product) => (
                <Card key={product.id}
                {...product}
                onClick={() => openModal(product)}
                 />
            ))}
            {selectedProduct && (
                <Modal 
                {...selectedProduct}
                onClose={closeModal}/>
            )}
            
        </section>
    );

}

export default ProductList;