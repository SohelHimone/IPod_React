import React from 'react';


class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>

              <div style={styles.titleBar}>
                <p style={{fontSize:20}}>Artist</p>
                <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/664/664883.png" alt="batteryimg"></img>
               </div >

                <div style={styles.info}>
                    {/* <div style={styles.imageContainer}>
                    </div> */}
                    
                    <div style={styles.subInfo}>
                       <div  style={styles.imagediv}>
                       <img style={styles.images} src="/src/components/images/20210514_101620.jpg" alt="artistimg"/>
                       </div>
                        
                        
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made by : Sohel Himone</p>
                    </div>
                    
                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thanks for visiting the app !!</h5>
                </div>
            </div>
        );
    }
    
}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        // backgroundImage : `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    imagediv:{
        width: 60,
        height : 60
    },
    images: {
        width: '100%',
        height : '100%'
       },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
    titleBar : {
        height:'15%',
        width:'96%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Artists;