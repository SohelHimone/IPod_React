import React from "react";
import { ListGroup} from "react-bootstrap";


class Home extends React.Component{
    render(){
        return(
           <div style={styles.homeScreen}>
            <div style={styles.menuList}>
            <div style={styles.titleBar}>
                <p style={{fontSize:20 ,bottomMargin:30}}>Home</p>
                <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/664/664883.png" alt="batteryimg"></img>
            </div>
            <ListGroup style={{borderRadius:'0'}}>
                <ListGroup.Item style={{border:'0' ,padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='NowPlaying'?'active':''}>
                NowPlaying{this.props.activeItem==='NowPlaying'?<span style={{float:'right',fontWeight:'bold'}} >  &gt;</span>:''}
                </ListGroup.Item>
                <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Music'?'active':''}>
                Music{this.props.activeItem==='Music'?<span style={{float:'right',fontWeight:'bold'}} >&gt;</span>:''}
                </ListGroup.Item>
                <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}}className={this.props.activeItem==='Games'?'active':''}>
                Games{this.props.activeItem==='Games'?<span style={{float:'right',fontWeight:'bold'}} >&gt;</span>:''}
                </ListGroup.Item>
                <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}}className={this.props.activeItem==='Settings'?'active':''}>
                Settings{this.props.activeItem==='Settings'?<span style={{float:'right',fontWeight:'bold'}} >&gt;</span>:''}
                </ListGroup.Item>
            </ListGroup>

            </div>
            <div style={styles.imageContainer} id='image-container'>
            </div>
           </div>
        )
    }
}

const styles = {
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row',
        zIndex : '5',

    },
    menuList : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1',
        
    },
    imageContainer : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0'
    },
    titleBar : {
        height:'15%',
        width:'192%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between',
        bottomMargin:20
        

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Home;