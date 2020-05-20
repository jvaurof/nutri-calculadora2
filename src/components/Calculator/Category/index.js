import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setEnabledCategory } from '../../../store/modules/calculator/actions';

import { Container, Button, Text } from './styles';

const Category = ({ category1, category2, category3 }) => {
  const enabledCategory = useSelector(state => state.calculator.enabledCategory);
  const dispatch = useDispatch();

  function handleEnabledCategory(enabledCategory) {
    dispatch(setEnabledCategory(enabledCategory));
  }

  return (
    <Container>
      <Button
        elevation={enabledCategory.category1 ? 0 : 4}
        onPress={() => handleEnabledCategory({
          category1: true,
          category2: false,
          category3: false,
        })}
      >
        <Text>{category1}</Text>
      </Button>

      <Button
        elevation={enabledCategory.category2 ? 0 : 4}
        onPress={() => handleEnabledCategory({
          category1: false,
          category2: true,
          category3: false,
        })}
      >
        <Text>{category2}</Text>
      </Button>

      {category3
        ? <Button
          elevation={enabledCategory.category3 ? 0 : 4}
          onPress={() => handleEnabledCategory({
            category1: false,
            category2: false,
            category3: true,
          })}
        >
          <Text>{category3}</Text>
        </Button>
        : null
      }
    </Container>
  );
}

export default Category;
