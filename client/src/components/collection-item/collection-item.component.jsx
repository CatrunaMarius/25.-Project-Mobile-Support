import React from 'react';
import { connect } from 'react-redux';


import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';






  

const CollectionsItem = ({item, addItem }) => {
    const {  name, price, imageUrl } = item;


    return(
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />     
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
             Add to cart 
        </AddButton>
    </CollectionItemContainer>
)}

// creare mapDispatch
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionsItem);