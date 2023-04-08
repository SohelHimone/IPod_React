
import React from "react";
import { Howl } from "howler";
import song1 from './static/songs/Despacito(PagalWorld) (1).mp3';
import song2 from './static/songs/Bela-Chaw-Chaw(PagalWorld).mp3'
import song3 from './static/songs/Kehndi-Hundi-Si-Chan-Tak-Raah-Bana-De_320(PaglaSongs).mp3';
import song4 from './static/songs/Likhe-Jo-Khat-Tujhe-x-Divine_320(PaglaSongs).mp3';
import song5 from './static/songs/Mera-Dil-Ye-Pukare-Aaja_320(PaglaSongs).mp3';
 

const audioclips=[
    {sound:song1,label:'Despacito'},
    {sound:song2,label:'Bela-Chaw-Chaw'},
    {sound:song3,label:'Kehndi-Hundi'},
    {sound:song4,label:'Likhe-Jo-Khat-Tujhe'},
    {sound:song5,label:'Mera-Dil-Ye-Pukare-Aaja'}
   
]

class MyMusic  extends React.Component{


    
    SoundPlay=(src)=>{
          const sound= new Howl({
            src,
            html5:true
          })
         sound.play();
        
        
    }


    rendrBtnSound=()=>{
     return audioclips.map((soundobj,index)=>{
        return(
            <button key={index} onClick={()=>{this.SoundPlay(soundobj.sound)}}>
                {soundobj.label}
            </button>
            
        )
     })
    }
   
    render(){
        return(
            <div style={styles.MymusicScreen}>
                 <div style={styles.titleBar}>
                <p style={{fontSize:20}}>Music</p>
                <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/664/664883.png" alt="batteryimg"></img>
               </div >
               
              <div style={styles.imageContainer} id='image-container'>
                <div style={styles.musicdiv}>
                {this.rendrBtnSound()}
                </div>
              
            </div>
            </div>
        )
    }
}

const styles = {
    MymusicScreen : {
        height : '100%',
        width : '100%',
        // display : 'flex',
        // flexDirecton : 'row'
    },
    musicdiv:{
        height : '100%',
        width : '50%', 
        display:'inline',
        
    },
    imageContainer : {
        //border:'1px solid black',
        height : '80%',
        width : '100%',
        backgroundImage : 'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0',
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
export default MyMusic;