import React, { Component } from 'react';
import * as THREE from 'three';
import orbControls from './OrbitControls';
import Stats from 'stats.js';
import {DnDContainer, DnDBackgroundComponent, DnDLayout} from 'dnd-box'
import { CSS3DRenderer, CSS3DObject } from './Utilities/CSS3DRenderer';




class DemoApp extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        this.deployState();
        this.frustumSize = 500
        const aspect = 1920 / 800;
		this.camera1 = new THREE.PerspectiveCamera( 
            100,
            aspect,
            0.1,
            1000 
        );	
		this.scene = new THREE.Scene();
        this.camera1.position.set( - 20, 20, 20 );
		this.scene.background = new THREE.Color( 0xf0f0f0 );
        this.createPlane(20, 20,'chocolate',new THREE.Vector3( 0, 10, 0 ),new THREE.Euler( 0, - 90 * THREE.MathUtils.DEG2RAD, 0 ))
        this.renderer = new THREE.WebGLRenderer();
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( 1920, 800);
		this.mount.appendChild( this.renderer.domElement );
        this.sceneGrid = new THREE.GridHelper(50,50)
        this.scene.add(this.sceneGrid)

        this.camera2 = new THREE.PerspectiveCamera(
            70,
            200 / 200,
            0.1,
            1000
        )
        this.camera2.position.z =20
        this.camera2.position.x =0
        this.camera2.position.y =1
        this.camera2.lookAt(0,0,0)
        this.renderer2 = new THREE.WebGLRenderer()
        this.renderer2.setClearColor(0xeeeeee, 1.0) 


        this.orbitControlSet()
        this.animate()
        
    }

    componentDidUpdate(preProps, preState){
    
       
    }

    componentWillUnmount() {
    }

    deployState = () => {
        this.stats = new Stats()
        this.stats.setMode(0) // FPS mode
        this.stats.domElement.style.position = 'absolute'
        this.mainBody.appendChild(this.stats.domElement)
    }

    animate=()=>{
        //console.log("DemoApp animate")
        //console.log(this.mesh.rotation.x)
        this.stats.begin();
        //let c1Background = new THREE.Color('rgb(255,255,255)')
        //this.renderer.setClearColor(c1Background)
        this.renderer.render(this.scene, this.camera1)
        this.mesh.rotation.x += 0.01
        //this.renderer2.render(this.scene2, this.camera );
        this.stats.end();
        window.requestAnimationFrame(this.animate)
    }

    orbitControlSet = () => {
        this.cameraControl = new orbControls(this.camera1)
    }

    createPlane=(width, height, cssColor, pos, rot)=>{   
        const material = new THREE.MeshBasicMaterial( { color: 0x0000ff, side: THREE.DoubleSide } );

		const geometry = new THREE.PlaneGeometry( width, height );
		this.mesh = new THREE.Mesh( geometry, material );
		this.mesh.position.copy( pos );
		this.scene.add( this.mesh );
    }

    onClick=()=>{
        console.log("THREE Scene be clicked !")
    }

    render(){
        console.log("DemoApp render")
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

        return(
            <div ref={(mainBody)=>{this.mainBody = mainBody}} style={{border:"1px solid black"}}>
                <DnDLayout backgroundColor={'pink'} width={1920} height={800} boxColor={''} boxHeaderColor={''} boxTabColor={''} boxHeaderHoverColor={''} boxTabHoverColor={''} boxTabSelectedColor={''} iconHoverColor={''} boxTabRadius={'0px 10px 0px 0px'} boxesSetting={boxesSetting} openContainer={this.state.showContainer}  tabHeight={25}>
                    <DnDBackgroundComponent>
                        <div onClick={this.onClick} ref={(mount) => { this.mount = mount }}>
                        </div>
                    </DnDBackgroundComponent>
                    <DnDContainer containerTabTitle={"front view"} containerID={1} boxID={'A'}>
                        <div ref={(frontView) => { this.frontView = frontView }}>
                            {"front view"}
                        </div>
                    </DnDContainer>
                    <DnDContainer containerTabTitle={"side view"} containerID={2} boxID={'B'}>
                        <div ref={(frontView) => { this.frontView = frontView }}>
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