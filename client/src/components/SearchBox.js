import React from 'react';
// Widget from Zomato
const style = {
    width: '320px', 
    height: '797px', 
    display: 'inline-block'
}

const frame = {
    position: 'relative',
    width: '100%',
    height: '100%',
    border: '0',
    frameBorder:'0'
}

const SearchBox = () => {
    return (
        <div class="widget_wrap" 
             style={style}>
            <iframe 
                src="https://www.zomato.com/widgets/res_search_widget.php?city_id=52&language_id=1&theme=red&hideCitySearch=on&sort=popularity" 
                style={frame}>
            </iframe>
        </div>
    )
}

export default SearchBox;