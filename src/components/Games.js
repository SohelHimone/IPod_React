import React from "react";

class Games extends React.Component{
    render(){
        return(
         <div style={styles.GamesContainer}>
            <div style={styles.titleBar}>
                <p style={{fontSize:20}}>Games</p>
                <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/664/664883.png" alt="batteryimg"></img>
            </div>
            <div style={{width : '100%' , height : '90%'}}>
                <img style={styles.image} src="https://i.giphy.com/media/uYe2emzPgDfj2/giphy.webp" alt="gameimg"></img>

            </div>

         </div>
        )
    }
}


const styles = {
    GamesContainer : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'100%',
        height:'85%',
        position:'relative',
        top:5

    },
    titleBar : {
        height:'15%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '30px',
        height: '30px',
    }
}

export default Games;