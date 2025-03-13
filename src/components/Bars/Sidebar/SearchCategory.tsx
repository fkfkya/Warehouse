import React from 'react';

const SearchCategory: React.FC = () => (
    <label>
        Категория товара:
        <select>
            <option value="">Все категории</option>
            <option value="electronics">Одежда</option>
            <option value="clothing">Оружие</option>
            <option value="books">Еда</option>
        </select>
    </label>
);

export default SearchCategory;