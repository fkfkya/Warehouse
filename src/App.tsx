import { useState, useEffect} from 'react'
import ProductList, {Product} from './components/Table/List/List';
import Sidebar, {Filters} from './components/Bars/Sidebar/Sidebar';
import Navbar from  './components/Bars/Navbar/Navbar';


const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  useEffect(() => {
    fetch('./src/testdata.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        } else {
          console.log("Data downloaded successfully");
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

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [filters, setFilters] = useState<Filters>({ name: '', inStockOnly: false, category: '' });

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
    setIsCollapsed(true); 
  };

  const filteredProducts = products.filter((product) => {
    const regex = new RegExp(filters.name, 'i');
    const matchesName = regex.test(product.name);
    const matchesInStock = !filters.inStockOnly || product.quantity > 0;
    const matchesCategory = !filters.category || product.category === filters.category;

    return matchesName && matchesInStock && matchesCategory;
  });

  return (
    <div>
      <Navbar toggleSidebar={toggleMenu} />
      <div className="app-container">
        <Sidebar isCollapsed={isCollapsed} categories={['Бытовая техника', 'Электроника', 'Продукты питания']} 
        onApplyFilters={handleApplyFilters} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
