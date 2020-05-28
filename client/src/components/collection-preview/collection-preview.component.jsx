import React from 'react';
import './collection-preview.styles.scss';

import { withRouter } from 'react-router';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, history }) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(history.location.pathname + '/' + title.toLowerCase())}>{title}</h1>
        <div className='preview'>
            {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default withRouter(CollectionPreview);