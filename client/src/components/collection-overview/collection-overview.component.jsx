import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForReview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverView = ({ collections }) => (
    <div className='collection-overview'>
          {collections.map(({ id, ...otherProps }) => (
                  <CollectionPreview key={id} {...otherProps} />
              ))}
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForReview
})

export default connect(mapStateToProps)(CollectionOverView);
