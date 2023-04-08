import React from "react";

class Setting extends React.Component{
    render(){
        return(
            <div style={styles.settings}>
            <div style={styles.titleBar}>
                <p style={{fontSize:20}}>Setting</p>
                <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/664/664883.png" alt="batteryimg"></img>
            </div>
            <div style={{width : '100%' , height : '90%'}}>
                <img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/738/738853.png" alt="gameimg"></img>

            </div>

         </div>
        )
    }
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap',
        alignItems:'center'
    },
    image : {
        width:'80%',
        height:'80%',
        position:'relative',
        left:30,
        top:10
       
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

export default Setting;