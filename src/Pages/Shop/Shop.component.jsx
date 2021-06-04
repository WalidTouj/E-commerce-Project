import React from 'react'
import SHOP_DATA from './Shop.data'
import CollectionPreview from '../../component/collection-preview/collection-preview.component'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collection: SHOP_DATA
        }
    }

    render(){
      const  {collection}= this.state;
        return(
            <div>{collection.map(({id,...othercollectionProps})=> 
            <CollectionPreview key={id} {...othercollectionProps}/>)}
                </div>
        )
    }
}



export default ShopPage;