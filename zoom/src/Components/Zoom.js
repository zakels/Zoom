import React from 'react'
import Item from './Item'
import propTypes from 'prop-types'

function Zoom(props) {
    return  <div className="photoGrid" >
                {props.posts.map((post, index) => <Item key={index} post={post} onRemoveItem={props.onRemoveItem}/>)}
            </div>
}

Zoom.propTypes = {
    posts: propTypes.array.isRequired,
    onRemoveItem: propTypes.func.isRequired
}


export default Zoom