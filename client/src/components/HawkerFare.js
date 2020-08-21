import React, { Component }from 'react';

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

class Background extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
        };
    }
 
// 'https://randomuser.me/api/'



    componentDidMount() {
        fetch("https://leejaew.p.rapidapi.com/hawker?name=**", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "leejaew.p.rapidapi.com",
                "x-rapidapi-key": "4b43c4cb7amsh741ac26257228bcp18398ejsn131fd7479c9d"
            }
        })
        .then(results => {
            return results.json();
        }).then(data => {
            let info = data.map((info) => {
                return(
                    <div key={info.id}>
                        {/* <img src={info.picture.medium} /> */}
                        <h1>Stall name: {info.name}</h1>
                        <p>Address: {info.address}</p>
                        <p>Postal Code: {info.postalcode}</p>
                    </div>
                )
            })

            let shuffledInfo = shuffleArray(info);

            this.setState({info: shuffledInfo[0]});
            console.log("state", this.state.info);
        })
    }

    render() {
        return(
            <div className="container">
                    {this.state.info}
            </div>
        )
    }
}


export default Background;
