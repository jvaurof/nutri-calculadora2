import React, { useState } from 'react';

import { Container, Button, Text } from './styles';

const Category = () => {
  const [enabledCategory, setEnabledCategory] = useState({
    category1: false,
    category2: true,
    category3: false,
  });

  return (
    <Container>
      <Button
        elevation={enabledCategory.category1 ? 0 : 4}
        onPress={() => setEnabledCategory({
          category1: true,
          category2: false,
          category3: false,
        })}
      >
        <Text>Criança</Text>
      </Button>

      <Button
        elevation={enabledCategory.category2 ? 0 : 4}
        onPress={() => setEnabledCategory({
          category1: false,
          category2: true,
          category3: false,
        })}
      >
        <Text>Adulto</Text>
      </Button>

      <Button
        elevation={enabledCategory.category3 ? 0 : 4}
        onPress={() => setEnabledCategory({
          category1: false,
          category2: false,
          category3: true,
        })}
      >
        <Text>Idoso</Text>
      </Button>
    </Container>
  );
}

export default Category;
