import React, { useState } from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

interface SideMenuProps {
  isCollapsed: boolean;
  categories: string[];
  onApplyFilters: (filters: Filters) => void;
}

export interface Filters {
  name: string;
  inStockOnly: boolean;
  category: string;
}
const StyledButton = styled(Button)(({ theme }) => ({
  height: '40px',
  borderRadius: '22px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&.apply': {
    backgroundImage: 'linear-gradient(135deg, rgba(50,120,72,1) 2%, rgba(88,69,144,1) 44%, rgba(78,61,87,1) 81%)', 
    color: '#ffffff',
    border: 'none', 
    '&:hover': {
      backgroundImage: 'linear-gradient(135deg, rgba(95,73,106,1) 19%, rgba(88,69,144,1) 55%, rgba(50,120,72,1) 99%)', 
    },
  },
  '&.reset': {
    backgroundImage: 'linear-gradient(135deg, rgba(140,89,166,1) 24%, rgba(55,104,84,1) 55%, rgba(50,120,72,1) 99%)', 
    color: '#ffffff',
    border: 'none', 
    '&:hover': {
      backgroundImage: 'linear-gradient(135deg, rgba(50,120,72,1) 2%, rgba(88,69,144,1) 44%, rgba(78,61,87,1) 81%)', 
    },
  },
}));

const Sidebar: React.FC<SideMenuProps> = ({ isCollapsed, categories, onApplyFilters }) => {
  const [name, setName] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [category, setCategory] = useState('');

  const handleApplyFilters = () => onApplyFilters({ name, inStockOnly, category });

  const handleResetFilters = () => {
    setName('');
    setInStockOnly(false);
    setCategory('');
  };

  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed',
        left: 0,
        width: isCollapsed ? '60px' : '240px',
        background: '#d0c5ad', 
        height: 'calc(100vh - 60px)',
        padding: isCollapsed ? '20px 10px' : '20px',
        boxSizing: 'border-box',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        transition: 'width 1s ease',
        top: '60px', 
      }}
    >
      {!isCollapsed && (
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              label="Название товара"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{
                
                minWidth: '170px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderWidth: '3.5px',
                    borderColor: '#224224', 
                    borderRadius: '20px',
                  },
                  '&:hover fieldset': {
                    borderColor: '#224224', 
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#224224', 
                },
                '& .MuiInputBase-input': {
                  color: '#224224', 
                },
              }}
            />
            <IconButton onClick={() => setName('')}>
              <ClearIcon sx={{ color: '#224224' }} />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
              fullWidth
              size="small"
              sx={{
                minWidth: '170px',
                backgroundColor: '#d0c5ad',
                borderRadius: '22px',
                color: '#333',
                '& fieldset': { borderColor: '#224224', borderWidth: '3px'  }, 
                '&:hover fieldset': { borderColor: '#ffffff', borderWidth: '3px' }, 
              }}
            >
              <MenuItem value="">Все категории</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
            <IconButton onClick={() => setCategory('')}>
              <ClearIcon sx={{ color: '#224224' }} /> 
            </IconButton>
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                sx={{
                  color: '#c7ffca', 
                  '&.Mui-checked': { color: '#224224' },
                }}
              />
            }
            label={<Typography color="white">Только в наличии</Typography>}
          />

          
          <StyledButton className="apply" onClick={handleApplyFilters}>
            Применить
          </StyledButton>
          <StyledButton className="reset" variant="outlined" onClick={handleResetFilters}>
            Сбросить
          </StyledButton>
        </Stack>
      )}
    </Box>
  );
};

export default Sidebar;