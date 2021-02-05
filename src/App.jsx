import React, { useState,useEffect } from 'react';
import {AppStyles,HeaderStyles,FormStyles,ButtonStyles} from './App.styles';
import ListItems from './ListItems';
import {Alert} from 'react-bootstrap';



const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });
  const[show,setShow]=useState(false);

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
setShow(true);
    }else{
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
      <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Please enter text to add task!!!
        </p>
      </Alert>

    {!show && <AppStyles>
      <HeaderStyles>
        <form className='to-do-form' onSubmit={handleSubmit}>
          <FormStyles type='text' placeholder='Add Tasks...' value={currentItem.text} onChange={handleInput} />
          <ButtonStyles type='submit'>Add</ButtonStyles>
        </form>
      </HeaderStyles>
      <ListItems items={items} show={show} deleteItems={deleteItems} />
    </AppStyles>}
</>
  )};
export default App;