import * as React from 'react';
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { ButtonComponent} from '@syncfusion/ej2-react-buttons';
import '../../output.css';
import java from '../../images/java-4-logo.svg';
import python from '../../images/python.svg';
import tensorflow from '../../images/Tensorflow_logo.svg.png';
import sql from '../../images/sql-database-generic.svg'
import logo from '../../images/logo192.png'
import {  SkeletonComponent } from '@syncfusion/ej2-react-notifications';
export default class App extends React.Component{
    
    render() {

        return (<div className='control-pane '>
                    <div className='row justify-content-center m-5'>
                        <DashboardLayoutComponent  >
                            <div className='checkbox-skeleton-container mt-4 justify-content-center'>
                                <div className='vertical-container'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black"  height="48px" width="48px" className='m-5'>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                        <SkeletonComponent height='30px' width='150px' className='skeleton-figure-3 mt-1' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-4' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='30px' width='150px' className='skeleton-figure-3 mt-5' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-4' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='130px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                </div>  
                                <div className='justify-content-center col'>
                                    <div className=' justify-content-center mt-5 vertical-container'>
                                        <SkeletonComponent height='40px' width='450px' className='skeleton-figure-3 mt-1 mb-4' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' width='550px' className='skeleton-figure-3 mt-4' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                    </div>
                                    <div className='row justify-content-center mt-5'>
                                        <div className='col vertical-container'>
                                            <SkeletonComponent height='40px' className='skeleton-figure-3 mt-1' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-4' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        </div>
                                        <div className='col vertical-container'>
                                            <SkeletonComponent height='40px' className='skeleton-figure-3 mt-1' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-4' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        </div>
                                        <div className='col vertical-container'>
                                            <SkeletonComponent height='40px' className='skeleton-figure-3 mt-1' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-4' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                            <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                        </div>

                                    </div>
                                </div> 
                                <div className='vertical-container'>
                                    <div > 
                                        <img src={java} alt="LinkedIn Logo" height='60px' width='60px'></img>
                                    </div >
                                    <SkeletonComponent height='10px' width='60px' className='skeleton-figure-3 mt-3 mb-3' shimmerEffect= 'Pulse'/>
                                    <div > 
                                        <img src={python} alt="LinkedIn Logo" height='60px' width='60px'></img>
                                    </div >
                                    <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3 mb-3' shimmerEffect= 'Pulse'/>
                                    <div > 
                                        <img src={tensorflow} alt="LinkedIn Logo" height='45px' width='45px'></img>
                                    </div >
                                    <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3 mb-3' shimmerEffect= 'Pulse'/>
                                    <div > 
                                        <img src={sql} alt="LinkedIn Logo" height='45px' width='45px'></img>
                                    </div >
                                    <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3 mb-3' shimmerEffect= 'Pulse'/>
                                    <div > 
                                        <img src={logo} alt="LinkedIn Logo" height='45px' width='45px'></img>
                                    </div >
                                    <SkeletonComponent height='10px' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                </div>

                            </div>
                            <div className='button-container mt-3 justify-content-center'>
                                <ButtonComponent className='mt-5 e-btn btn-figure-3' height='40px' content='CANCEL'></ButtonComponent>
                                <ButtonComponent className='mt-5 e-btn btn-figure-3' height='40px' content='SAVE'></ButtonComponent>
                            </div>
                            
                        </DashboardLayoutComponent>
    
                    </div>
                    
                    
                </div>
                );
    }
};