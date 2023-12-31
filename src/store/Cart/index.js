  import React from 'react'
  import { useSelector, useDispatch } from 'react-redux';
  import { addToCart, deleteFromCart} from './cartSlice';

  function Cart() {
    const [show, setShow] = React.useState(false);
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    
    const Click = () => {
      setShow(true);
    };

    const Close = () => {
      setShow(false);
    };

 const price = (product) => {
  const isProductInCart = cartItems.some(item => item.id === product.id);
  if (!isProductInCart) {
    dispatch(addToCart(product));
  }
};


    return (
      <div className=''>

        <button onClick={Click} className='p-[15px] bg-[rgb(47,51,58)] shadow-[rgba(0,0,0,0.75)_0px_0px_16px_-1px] rounded-[3px] fixed right-0 top-[40%] '>
          <div className='flex flex-col items-center'>
            <svg className='text-[rgb(255,112,4)] w-[20px] h-[20px]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span className='text-[white] font-bold mt-[4px] mb-[4px]'>{cartItems.length} items</span>

            <span className='font-bold text-[rgb(255,112,4)] rounded-[3px] bg-white w-[65px] h-[25px]'>$0.00</span>
          </div>
        </button>

        {show &&
          <div className='fixed top-0 h-screen w-screen flex justify-end items-center bg-[black] bg-opacity-40'>
            <div className='w-[380px] h-screen bg-[white]'>

              <div className='flex p-5 justify-between border-b-[rgb(235,235,235)] border-b border-solid'>
                <h3 className='cart text-xl font-bold'>Cart</h3>
                <button onClick={Close}
                  className='text-[rgb(255,112,4)] text-xl font-bold w-[50px]'>✕
                </button>
              </div>


              <div className='mt-[100px] flex flex-col items-center'>

                {cartItems.length < 1 ? (
        

      <div>
  <svg className='text-[100px] text-[rgb(255,112,4)] ml-[60px]'
  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"></path></svg>
  <h2 className='text-xl font-semibold mt-[15px] '>There are no products!</h2>
    </div>

                
                ) : (
        
                  cartItems.map(prod => (
                    <div key={prod.id}>

              <div className='borderr'>
                <div className='flex justify-around'>
                      <h2 className='text-sm text-[#888]'>{prod.main}</h2>
                      
                      <button
                          onClick={() =>
                          dispatch(deleteFromCart(prod.id))} 
                      className=' close-cart'>✕</button>
                      </div>
                      <div className='flex'>
                        <div>
                        <img className='w-[220px]' src={prod.image}/>
                        </div>

                        <div>
                        <h2 className='ml-[8px]'>{prod.title}</h2>
                      <h2 className='text-center text-[#888]'>x {prod.price}</h2>
                          
                        <div className=''>
                    <button className='text-xl bg-[orange] w-[90px] h-[35px] '>
                      <span
                      >+</span>
                      <span className='mr-[15px] ml-[15px]'></span>
                      <span 
                      >-</span>
                    </button>
                          </div>

                          </div>


                      </div>
                     
              </div>  

                    </div>
              ))  )}

              
                <div className='h-[50px] w-[345px] bg-[rgb(255,112,4)] flex justify-between rounded-[3px] cart mt-[690px] absolute'>
                  <button className='ml-[10px] text-base text-[white] font-semibold'>View Cart</button>
                  <span className='w-[62px] h-[37px] bg-[white] text-[rgb(255,112,4)] rounded-[3px] mr-[10px] font-semibold mt-[7px] text-center'>
                    <p className='text-xl mt-[4px]'>{cartItems.map((prod) => prod.price)}</p></span>
                </div>

              </div>
            </div>

          </div>
  }
      </div>
    )
      }
  export default Cart;