
import SingleCart from "../components/SingleCart";
import "./Home.css";

function Home({ products, setCartItem, cartItem, itemQuantity, setItemQuantity, inputValue, button,setCurrPage,currPage }) {
  console.log("products", products);

  const opArray = products.filter((item) => item?.description?.toLowerCase().includes(inputValue?.toLowerCase(), 0));

  console.log("hii")

  return (
    <>    <div>
      {
        inputValue !== undefined ? (
          <div>
            {
              opArray?.length === 0 ? (<p>No matching item exist type to right i</p>) : (<div className="product-grid">
                {
                  opArray?.map((it, index) => (
                    <SingleCart
                      key={index}
                      item={it}
                      setCartItem={setCartItem}
                      cartItem={cartItem}
                      itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}
                    />
                  ))
                }
              </div>)
            }


          </div>
        ) :
          <div className="product-grid">
            {
              products.map((it, index) => (
                <SingleCart
                  key={index}
                  item={it}
                  setCartItem={setCartItem}
                  cartItem={cartItem}
                  itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}
                />
              ))
            }
          </div>
      }


    </div>
      <div className="pagination">
      <button   disabled={currPage === 1}  onClick={()=>{
        if(currPage>1) { setCurrPage(currPage-1)}
        }}>Prev</button>
        {
          
          button.map((i) => {
            return (<button  key={i}   
            className={currPage === i ? "active" : ""}
            onClick={()=>{setCurrPage(i)}}>{i}</button>)
          })
        }
        <button   disabled={currPage === button.length} onClick={()=>{
          if(currPage<button.length){  setCurrPage(currPage+1)}
          }}>Next</button>

      </div></>
  );
}

export default Home;
