import React from 'react';
import './Modal.css'; // Подключаем стили

interface ModalProps {
    id: number;
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ name, description, category, quantity, unit, imageUrl, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-content">
                    <div className="modal-image">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="modal-image-preview" />
                        ) : (
                            <span className="modal-image-placeholder">Изображение отсутствует</span>
                        )}
                    </div>
                    <h2 className="modal-name">{name}</h2>
                    <p className="modal-description">{description}</p>
                    <div className="modal-category">
                        <span>Категория:</span> {category}
                    </div>
                    <div className="modal-quantity">
                        <span>Количество:</span> {quantity} {unit}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;