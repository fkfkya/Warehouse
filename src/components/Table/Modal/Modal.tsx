import React from 'react';
import { Typography, Dialog, DialogTitle, DialogContent, Button, IconButton, Box } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface Product {
    id: number;
    name: string;
    description?: string;
    category?: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
}


interface ModalProps {
    product: Product
    onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ product, onClose }) => {
    return (
        <Dialog
            open={true}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            sx={{ backdropFilter: 'blur(4px)' }}
        >
            <DialogTitle
                sx={{
                    fontWeight: 700,
                    fontSize: '28px',
                    color: '#2c3e50', 
                    textAlign: 'center',
                    position: 'relative',
                    backgroundColor: '#f8f9fa', 
                    borderBottom: '1px solid #e0e0e0',
                }}
            >
                {product.name}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: '#888',
                        '&:hover': { color: '#e74c3c' }, 
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent
                sx={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    animation: 'fadeInUp 0.5s ease-out',
                    overflow: 'hidden',
                    padding: '24px',
                }}
            >
                <Box
                    component="img"
                    src={product.imageUrl || 'placeholder.jpg'}
                    alt={product.name}
                    sx={{
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'contain',
                        marginBottom: '16px',
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    }}
                />

                <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: '16px', color: '#555', lineHeight: 1.8, textAlign: 'justify' }}
                >
                    {product.description || 'Описание отсутствует'}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '15px',
                        color: '#666',
                        margin: '8px 0',
                        display: 'flex',
                        alignItems: 'center',
                        '&::before': {
                            content: '"\\f07c"',
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                            marginRight: '8px',
                            color: '#3498db', 
                        },
                    }}
                >
                    Категория: {product.category}
                </Typography>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        fontSize: '16px',
                        color: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        '&::before': {
                            content: '"\\f543"',
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                            marginRight: '8px',
                            color: '#2ecc71',
                        },
                    }}
                >
                    Количество: {product.quantity} {product.unit}
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#3498db', 
                        color: '#fff',
                        borderRadius: '8px',
                        padding: '12px 24px',
                        fontSize: '16px',
                        marginTop: '20px',
                        '&:hover': {
                            backgroundColor: '#2980b9', 
                        },
                    }}
                >
                    Купить
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;