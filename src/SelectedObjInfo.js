import React, { Component } from 'react';

class SelectedObjInfo extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount(){   
       
    }

    componentDidUpdate(preProps, preState){
        
    }

    componentWillUnmount() {
    }

    

    render(){
        console.log("SelectedObjInfo render")
        let headerStyle={
            padding:'10px',
            backgroundColor:'#c1e6e8'
        }

        let rowStyle={
            display:'flex',
            backgroundColor:'#93d5d9'
        }

        let titleStyle={
            width:'30%',
            padding:'5px',
        }
      
        return(    
                this.props.selectedObjInfo.name?
                <div>
                    <div style={headerStyle}>{"Object Infomation"}</div>
                    <div style={rowStyle}>
                        <div style={titleStyle}>{"ID"}</div>
                        <div>{this.props.selectedObjInfo.name}</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={titleStyle}>{"Type"}</div>
                        <div>{this.props.selectedObjInfo.type}</div>
                    </div>
                    <div style={headerStyle}>{"Position"}</div>
                    <div style={rowStyle}>
                        <div style={titleStyle}>{"X"}</div>
                        <div>{this.props.selectedObjInfo.position.x}</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={titleStyle}>{"Y"}</div>
                        <div>{this.props.selectedObjInfo.position.y}</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={titleStyle}>{"Z"}</div>
                        <div>{this.props.selectedObjInfo.position.z}</div>
                    </div>
                    <div style={headerStyle}>{"Scale"}</div>
                    <div style={rowStyle}>
                        <div style={titleStyle}>{"Width"}</div>
                        <div>{this.props.selectedObjInfo.scale.width}</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={titleStyle}>{"Height"}</div>
                        <div>{this.props.selectedObjInfo.scale.height}</div>
                    </div>
                    <div style={rowStyle}>
                        <div style={titleStyle}>{"Depth"}</div>
                        <div>{this.props.selectedObjInfo.scale.depth}</div>
                    </div>                  
                </div>
                :
                "None object been selected"           
        )
    }
}
export default SelectedObjInfo