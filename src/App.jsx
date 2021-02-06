import React, { useState,useEffect } from 'react';
import {AppStyles,HeaderStyles,FormStyles,ButtonStyles} from './App.styles';
import ListItems from './ListItems';
import swal from 'sweetalert';



const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });

  // this is where persistance is done in local storage .....
  useEffect(()=>{
    const data=localStorage.getItem('itemlist');
    if(data){
      setItems(JSON.parse(data));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('itemlist',JSON.stringify(items));
  });
  
  const handleInput = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now()
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem.text === '') {
      swal("Oops!", "Please enter some text!", "error");    }else{
      const checkItem = currentItem;
      setItems([...items, checkItem]);
      setCurrentItem({ text: '', key: '' });

    }
  };


  const deleteItems = (key) => {
    const filteredItems = items.filter(item => item.key !== key);
    setItems(filteredItems);
  }

  return (
    <>
    
     <AppStyles>
      <HeaderStyles>
        <form className='to-do-form' onSubmit={handleSubmit}>
          <FormStyles type='text' placeholder='Add Tasks...' value={currentItem.text} onChange={handleInput} />
          <ButtonStyles type='submit'>Add</ButtonStyles>
        </form>
      </HeaderStyles>
      <ListItems items={items}  deleteItems={deleteItems} />
    </AppStyles>
</>
  )};
export default App;