import React from 'react';

const NovedadItem = props => {
    const {title, subtitle, image, body} = props;
    console.log(props)
    
    return(
        <div className='novedades'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={image} alt='la fotito'/>
            <div dangerouslySetInnerHTML={{  __html: body}}/>
        </div>
    )
}

export default NovedadItem;