import logo from './logo.svg';
import 'rsuite/dist/rsuite.min.css';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Corusal from './components/Corusal/Corusal';
import ProductCard from './components/ProductCard/productCard';

const products = [
  {name: 'Apple', price: 1, image: 'https://picsum.photos/300/200',category: 'Fruits & Vegetables'},
  {name: 'Orange', price: 2, image:'https://picsum.photos/300/200',category: 'Fruits & Vegetables'},
  {name: 'Banana', price: 3, image: 'https://picsum.photos/300/200',category: 'Fruits & Vegetables'},
  {name: 'Grapes', price: 4, image: 'https://picsum.photos/300/200',category: 'Fruits & Vegetables'},
  {name: 'Mango', price: 5, image: 'https://picsum.photos/300/200',category: 'Fruits & Vegetables'},
  {name: 'Rice', price: 6, image: 'https://picsum.photos/300/200',category: 'Staples'},
  {name: 'Sugar', price: 7, image: 'https://picsum.photos/300/200',category: 'Staples'},
  {name: 'Salt', price: 8, image: 'https://picsum.photos/300/200',category: 'Staples'},
  {name: 'Wheat', price: 9, image: 'https://picsum.photos/300/200',category: 'Staples'},
  {name: 'Milk', price: 10, image: 'https://picsum.photos/300/200',category: 'Dairy Products'},
  {name: 'Cheese', price: 11, image: 'https://picsum.photos/300/200',category: 'Dairy Products'},
  {name: 'Yogurt', price: 12, image:'https://picsum.photos/300/200',category: 'Dairy Products'},
  {name: 'Butter', price: 13, image: 'https://picsum.photos/300/200',category: 'Dairy Products'},];


function App() {
  const [toShow, setToShow] = useState(6);

  //filters
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState([]);
  const [priceTo, setPriceTo] = useState(0);
  const [priceFrom, setPriceFrom] = useState(0);

  //feedback
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="App">
      

        <Header />
        
        <Corusal/>
        <div className='container mt-3 pt-3'>
          <div className='row'>
            {/* FILTER CARD */}
            <div className='col-md-3'>
              <div className='card'>
                <div className='card-header text-right'>
                  <h3 className=''>Filter</h3>
                </div>
                <div className='card-body'>
                  <div className='form-group'>
                    
                    <input type='text' className='form-control' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                  </div>
                  <div className='form-group mt-3 mx-2'>
                    <h5>Category :</h5>
                    
                    <div className='form-check form-check-inline mt-3'>
                      <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='Fruits & Vegetables' 
                      checked={category.includes('Fruits & Vegetables')}
                      onChange={(e)=>{
                        
                        setCategory(category.includes(e.target.value)?category.filter(item=>item!==e.target.value):[...category,e.target.value])
                      }}/>
                      <label className='form-check-label' for='inlineCheckbox1'>Fruits & Vegetables</label>
                    </div><br/>
                    <div className='form-check form-check-inline mt-3'>
                      <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='Staples' 
                      checked={category.includes('Staples')}
                      onChange={(e)=>{
                        
                        setCategory(category.includes(e.target.value)?category.filter(item=>item!==e.target.value):[...category,e.target.value])
                      }}/>
                      <label className='form-check-label' for='inlineCheckbox1'>Staples</label>
                    </div><br/>
                    <div className='form-check form-check-inline mt-3'>
                      <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='Drinks & Breverages' 
                      checked={category.includes('Drinks & Breverages')}
                      onChange={(e)=>{
                        
                        setCategory(category.includes(e.target.value)?category.filter(item=>item!==e.target.value):[...category,e.target.value])
                      }}/>
                      <label className='form-check-label' for='inlineCheckbox1'>Drinks & Breverages</label>
                    </div><br/>
                    <div className='form-check form-check-inline mt-3'>
                      <input className='form-check-input' type='checkbox' id='inlineCheckbox1' 
                      value='Dairy Products' 
                      checked={category.includes('Dairy Products')}
                      onChange={(e)=>{
                        
                        setCategory(category.includes(e.target.value)?category.filter(item=>item!==e.target.value):[...category,e.target.value])
                      }}
                      />
                      <label className='form-check-label' for='inlineCheckbox1'>Dairy Products</label>
                    </div><br/>
                    <div className='form-check form-check-inline mt-3'>
                      <input className='form-check-input' type='checkbox' id='inlineCheckbox1' value='Pet Foods' 
                      // checked={(e)=>{category.includes(e.target.value)}}
                      checked={category.includes('Pet Foods')}
                      onChange={(e)=>{
                        
                        setCategory(category.includes(e.target.value)?category.filter(item=>item!==e.target.value):[...category,e.target.value])
                      }}/>
                      <label className='form-check-label' for='inlineCheckbox1'>Pet Foods</label>
                    </div><br/>
                  </div>

                  <div className='form-group mt-3 mx-2'>
                    <h5>Price Range :</h5>
                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>From</label>
                        <input type='number' className='form-control' placeholder='0' value ={priceFrom} onChange={(e)=>{setPriceFrom(e.target.value)}}/>
                      </div>
                      <div className='col-md-6'>
                        <label>To</label>
                        <input type='number' className='form-control' placeholder='0' value ={priceTo} onChange={(e)=>{setPriceTo(e.target.value)}}/>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* PRODUCT CARD */}
            <div className='col-md-9'>
              <div className='card'>
                <div className='card-header text-right'>
                  <h3 className=''>Products</h3>
                </div>
                <div className='card-body'>
                  <div className='d-flex flex-wrap justify-content-center'>
                   {products
                  //  searchFilter
                   .filter((product)=>{
                    if(search !== ''){
                      return product.name.toLowerCase().includes(search.toLowerCase());
                    }else{
                      return product;
                    }
                   })
                  //  categoryFilter
                    .filter((product)=>{
                      if(category.length > 0){
                        return category.includes(product.category);
                      }else{
                        return product;
                      }
                    })
                    .filter((product)=>{
                      if(priceFrom >= 0 && priceTo > 0){
                        return product.price >= priceFrom && product.price <= priceTo;
                      }else{
                        return product;
                      }
                    })
                   .slice(0, toShow).map((product,index)=>{
                      return <ProductCard key={index} product={product}/>
                   })}
                  </div>
                  {toShow==6?(<div className='d-flex flex-wrap justify-content-center'>
                    <button className='btn btn-secondary mt-3' onClick={()=>{setToShow(products.length)}}>Load More</button>
                  </div>):(<div className='d-flex flex-wrap justify-content-center'>
                    <button className='btn btn-secondary mt-3' onClick={()=>{setToShow(6)}}>Load Less</button>
                  </div>)}
                </div>
              </div>
            </div>

          </div>

          {/* feedback form */}
          <div className='row my-3 '>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header text-right'>
                  <h3 className=''>Feedback Form</h3>
                </div>
                <div className='card-body'>
                  <div className='row maxWid mx-auto'>
                    <div className='col '>
                      <div className='form-group'>
                        <label>Name</label>
                        <input type='text' className='form-control' placeholder='Enter Name' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
                      </div>
                      <div className='form-group'>
                        <label>Email</label>
                        <input type='email' className='form-control' placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                      </div>
                      <div className='form-group'>
                        <label>Message</label>
                        <textarea className='form-control' placeholder='Enter Message' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                      </div>
                      <div className='d-flex flex-wrap justify-content-center mt-3'>
                        <button className='btn btn-primary' onClick={()=>{}}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
