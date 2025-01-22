import { extendTheme } from '@chakra-ui/react';

// Подключение шрифта Roboto
const fonts = {
  body: 'Roboto, sans-serif',
  heading: 'Roboto, sans-serif',
};

// Кастомизация компонента Button
const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'md',
  },
  sizes: {
    md: {
      fontSize: '1rem', // 16px
      px: 6,
      py: 4,
    },
  },
  variants: {
    gradient: {
      bg: 'linear-gradient(45deg, #FF0080, #7928CA)',
      color: 'white',
      _hover: {
        bg: 'linear-gradient(45deg, #7928CA, #FF0080)',
        transition: 'all 0.3s ease',
      },
    },
  },
  defaultProps: {
    variant: 'gradient',
    size: 'md',
  },
};

// Кастомизация компонента Skeleton
const Skeleton = {
  baseStyle: {
    borderRadius: 'md',
    startColor: 'pink.500', 
    endColor: 'orange.500',
  },
};

// Создание темы
const theme = extendTheme({
  fonts,
  components: {
    Button,
    Skeleton,
  },
  styles: {
    global: {
      'html, body': {
        fontSize: '16px', // Размер шрифта по умолчанию
      },
    },
  },
});

export default theme;