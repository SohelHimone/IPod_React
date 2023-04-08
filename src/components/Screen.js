import React from "react";
import Home from "./Home";
import Music from "./Music";
import Games from "./Games";
import Setting from "./Settings";
import Artists from "./Artists";
import MyMusic from "./MyMusic";


class Screen extends React.Component{
    render(){
        return(
         <div style={styles.screen}>
              {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games /> : null}
                {this.props.activePage==='Settings'?<Setting /> : null}
                {this.props.activePage==='Artists'?<Artists /> : null}
                {this.props.activePage==='MyMusic'?<MyMusic/>:null}
         </div>
        )   
    }
}


const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'white',
        border : '2px solid black',
        marginTop : '1rem'
    }
}


export default Screen;