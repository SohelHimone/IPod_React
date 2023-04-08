import React from 'react';
import Screen from './Screen';
import ZingTouch from 'zingtouch';



class Ipod extends React.Component{

    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'Home',
            enter : 0,
            play : true
        }
    }

    rotateWheel = () => {

        var containerElement = document.getElementById('inner-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        // var childElement = document.getElementById('inner-container');
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
        
        if(self.state.enter < 2){
            activeRegion.bind(containerElement, 'rotate', function(event){
                //Perform Operations
                
                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);
        
                if(newAngle > 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }
                });
        }else{
            console.log("Not allowed to enter")
        }
        
    }

    changePage = () => {

        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : this.state.activeItem
            })
        }else if(this.state.activeItem === 'NowPlaying'){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'MyMusic'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }
        
        
    }

    changePageToHomeScreen = () => {

        if(this.state.activePage === 'Artists' || this.state.activePage === 'MyMusic'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : 'Music'
            })
        }
        if(this.state.activeItem === 'MyMusic'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : 'Music'
            })
        }
        if(this.state.activeItem === 'MyMusic' && this.state.activePage==='Music'){
             this.setState({
                activeItem : 'NowPlaying',
                activePage : 'Home'
             })
        }
        else{
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'Home'
            })
        }
        
        
    }

    toggle = () =>{
        if(this.state.activePage === 'MyMusic'){
            if(this.state.play === true){
                this.state.audio.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.audio.play();
                this.setState({
                    play : true
                })
            }
            console.log("toggled")
        }
    }

    

    render(){
        return(
            <div style = {styles.ipodContainer}>
                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} />
                <div id="inner-container" style={styles.btncontainer} onMouseOver={this.rotateWheel}> 
                    <button onClick={this.changePageToHomeScreen} style={styles.menuBtn}>
                        <img style={styles.images} src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png" alt="menuimg"></img>
                    </button>
                    <button onClick={this.changePage} style={styles.selectbtn}>Select
                    </button>
                    <button style={styles.forwardBtn}>
                        <img style={styles.images} src="https://cdn-icons-png.flaticon.com/512/660/660276.png" alt="forwardimg"></img>
                    </button>
                    <button style={styles.backwardBtn}>
                        <img style={styles.images} src="https://cdn-icons-png.flaticon.com/512/3318/3318703.png" alt="backwardimg"></img>
                    </button>
                    <button style={styles.pauseBtn}>
                        <img style={styles.images} src="https://cdn-icons-png.flaticon.com/512/709/709691.png" alt="pauseimg"></img>
                    </button>

                </div>

                
            </div>
        );
    }
    
}

const styles = {
    ipodContainer : {
        height : '33rem',
        width : '20rem',
        backgroundImage: 'radial-gradient(#adb1b5, #4d4f50)',
        margin : '4rem auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px'
        
    },
    btncontainer:{
       width:230,
       height:230,
       border:'3px solid black',
       position:'relative',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       borderRadius : '50%',

    },
    images:{
        width: '100%',
        height:'100%'
    },
    menuBtn:{
       width:40,
       height:40,
       position:'absolute',
       top:0,
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
    },
    selectbtn:{
        width:'40%',
        height:'40%',
        borderRadius:'50%'

     },
    forwardBtn:{
        width:40,
        height:40,
        position:'absolute',
        right:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
     },
     backwardBtn:{
        width:40,
        height:40,
        position:'absolute',
        left:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
     },
     pauseBtn:{
        width:40,
        height:40,
        position:'absolute',
        bottom:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
     },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    middleButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    image: {
        alignSelf : 'center',
        fontSize: '1.5rem',
        color : 'white'
    },
}

export default Ipod;