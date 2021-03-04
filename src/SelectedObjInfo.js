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
      
        return(    
                this.props.selectedObjInfo.name?
                <div>
                    <div>{"Object Infomation"}</div>
                    <div>
                        <div>{"ID"}</div>
                        <div>{this.state.selectedObjInfo.name}</div>
                    </div>
                    <div>
                        <div>{"Type"}</div>
                        <div>{this.state.selectedObjInfo.type}</div>
                    </div>
                    <div>{"Position"}</div>
                    <div>
                        <div>{"X"}</div>
                        <div>{this.state.selectedObjInfo.position.x}</div>
                    </div>
                    <div>
                        <div>{"Y"}</div>
                        <div>{this.state.selectedObjInfo.position.y}</div>
                    </div>
                    <div>
                        <div>{"Z"}</div>
                        <div>{this.state.selectedObjInfo.position.z}</div>
                    </div>
                    <div>{"Scale"}</div>
                    <div>
                        <div>{"Width"}</div>
                        <div>{this.state.selectedObjInfo.scale.width}</div>
                    </div>
                    <div>
                        <div>{"Height"}</div>
                        <div>{this.state.selectedObjInfo.scale.height}</div>
                    </div>
                    <div>
                        <div>{"Depth"}</div>
                        <div>{this.state.selectedObjInfo.scale.depth}</div>
                    </div>                  
                </div>
                :
                "None object been selected"           
        )
    }
}
export default SelectedObjInfo