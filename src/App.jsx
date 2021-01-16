import React, { useState } from 'react';
import {AppStyles,HeaderStyles,FormStyles,ButtonStyles} from './App.styles';
import ListItems from './ListItems';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });

  const handleInput = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now()
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkItem = currentItem;
    setItems([...items, checkItem]);
    setCurrentItem({ text: '', key: '' });
  };


  const deleteItems = (key) => {
    const filteredItems = items.filter(item => item.key !== key);
    setItems(filteredItems);
  }

  return (
    <AppStyles>
      <HeaderStyles>
        <form className='to-do-form' onSubmit={handleSubmit}>
          <FormStyles type='text' placeholder='Add Tasks...' value={currentItem.text} onChange={handleInput} />
          <ButtonStyles type='submit'>Add</ButtonStyles>
        </form>
      </HeaderStyles>
      <ListItems items={items} deleteItems={deleteItems} />
    </AppStyles>

  )
};
export default App;