import React, { Component } from 'react';
import * as THREE from 'three';
import orbControls from './OrbitControls';
import {DnDContainer, DnDLayout} from 'dnd-box'
import { CSS3DRenderer, CSS3DObject } from './Utilities/CSS3DRenderer';




class DemoApp extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        this.frustumSize = 500
        const aspect = window.innerWidth / window.innerHeight;
		this.camera1 = new THREE.OrthographicCamera( this.frustumSize * aspect / - 2, this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / - 2, 1, 1000 );	
		this.scene = new THREE.Scene();
        //this.scene2 = new THREE.Scene();
        this.camera1.position.set( - 200, 200, 200 );
		this.scene.background = new THREE.Color( 0xf0f0f0 );
        this.createPlane(100, 100,'chocolate',new THREE.Vector3( - 50, 0, 0 ),new THREE.Euler( 0, - 90 * THREE.MathUtils.DEG2RAD, 0 ))

        this.renderer = new THREE.WebGLRenderer();
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.mount.appendChild( this.renderer.domElement );

        //this.renderer2 = new CSS3DRenderer();
		//this.renderer2.setSize( window.innerWidth, window.innerHeight );
		//this.renderer2.domElement.style.position = 'absolute';
		//this.renderer2.domElement.style.top = 0;
		//document.body.appendChild( this.renderer2.domElement );

        this.animate()
        
    }

    componentDidUpdate(preProps, preState){
    
       
    }

    componentWillUnmount() {
    }

    animate=()=>{
        //let c1Background = new THREE.Color('rgb(255,255,255)')
        //this.renderer.setClearColor(c1Background)
        this.renderer.render(this.scene, this.camera1)
        this.mesh.rotateX += 0.1
        //this.renderer2.render(this.scene2, this.camera );
    }

    

    createPlane=(width, height, cssColor, pos, rot)=>{   
        // const element = document.createElement( 'div' );
		// element.style.width = width + 'px';
		// element.style.height = height + 'px';
		// element.style.opacity = 0.75;
		// element.style.background = cssColor;

		// const object = new CSS3DObject( element );
		// object.position.copy( pos );
		// object.rotation.copy( rot );
		// this.scene2.add( object );

        const material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 1, side: THREE.DoubleSide } );

		const geometry = new THREE.PlaneGeometry( width, height );
		this.mesh = new THREE.Mesh( geometry, material );
		//mesh.position.copy( object.position );
		//mesh.rotation.copy( object.rotation );
		this.scene.add( this.mesh );
    }

    render(){
        let boxesSetting=[
            {
                boxID:'A',
                width:200,
                height:200,
                x:0,
                y:100
            },
            {
                boxID:'B',
                width:200,
                height:200,
                x:200,
                y:100
            },
            {
                boxID:'C',
                width:200,
                height:200,
                x:400,
                y:100
            },
            {
                boxID:'D',
                width:200,
                height:200,
                x:600,
                y:100
            },
            {
                boxID:'E',
                width:200,
                height:200,
                x:800,
                y:100
            }
        ]

        const myStyle = {
            width: '100%',
            height: 800,
        }

        return(
            <div onMouseDown={this.threeDLayerMouseDown} onMouseMove={this.ThreeDLayerMouseMove} onMouseUp={this.threeDLayerMouseUp} onContextMenu={this.onContextMenu} style={myStyle} ref={(mount) => { this.mount = mount }}>
                <DnDLayout backgroundColor={'pink'} width={1920} height={800} boxColor={''} boxHeaderColor={''} boxTabColor={''} boxHeaderHoverColor={''} boxTabHoverColor={''} boxTabSelectedColor={''} iconHoverColor={''} boxTabRadius={'0px 10px 0px 0px'} boxesSetting={boxesSetting} openContainer={this.state.showContainer}  tabHeight={25}>
                    <DnDContainer containerTabTitle={"front view"} containerID={1} boxID={'A'}>
                        <div>
                            {"front view"}
                        </div>
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"side view"} containerID={2} boxID={'B'}>
                        <div>
                            {"side view"}
                        </div>
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"top view"} containerID={3} boxID={'C'}>
                        <div>
                            {"top view"}
                        </div>
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"rotation speed"} containerID={3} boxID={'D'}>
                        <div>
                            {"rotation speed"}
                        </div>
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"info"} containerID={5} boxID={'D'}>
                        <div>
                            {"info"}
                        </div>
                    </DnDContainer>
                </DnDLayout>
            </div>  
        )
    }
}
export default DemoApp