import Cartcontext from "./Cartcontext"
const Cartprovider=props=>{
    const additemhandler=item=>{}
    const removeitemhandler=id=>{}
    const cartcontext={
        items:[],
        totalAmount:0,
        additem: additemhandler ,
        removeitem: removeitemhandler,
    }
    return <Cartcontext.Provider value={cartcontext}>
        {props.children}
    </Cartcontext.Provider>
}
export default Cartprovider