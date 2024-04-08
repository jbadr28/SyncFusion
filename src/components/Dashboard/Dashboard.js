import * as React from 'react';

import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent,  CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import '../../output.css';
import {  SkeletonComponent } from '@syncfusion/ej2-react-notifications';
export default class App extends React.Component{
    
    render() {

        return (<div className='control-pane row justify-content-center dashboard'>
                        <DashboardLayoutComponent  className='dashboard justify-content-center m-5' >
                            <div className='header-dashboard checkbox-skeleton-container justify-content-center'>
                                <div className='checkbox-skeleton-container m-3'>
                                    <CheckBoxComponent  disabled/>
                                    <TextBoxComponent disabled />
                                </div>
                                <div className='checkbox-skeleton-container m-3'>
                                    <CheckBoxComponent  disabled/>
                                    <TextBoxComponent disabled />
                                </div>
                                <div className='checkbox-skeleton-container m-3'>
                                    <CheckBoxComponent  disabled/>
                                    <TextBoxComponent disabled />
                                </div>
                                <div className='checkbox-skeleton-container m-3'>
                                    <CheckBoxComponent  disabled/>
                                    <TextBoxComponent disabled />
                                </div>
                            </div>
                            <div className='m-5 justify-content-center container-dashboard'>
                                <img src="https://placehold.co/350x150" alt="placeholder" ></img>
                                <div className='vertical-container-left'>
                                    <SkeletonComponent height='2rem' width='20rem' className='skeleton-figure-3 mt-1' shimmerEffect= 'Pulse'/>
                                    <SkeletonComponent height='0.6rem' width='32rem' className='skeleton-figure-3 mt-4' shimmerEffect= 'Pulse'/>
                                    <SkeletonComponent height='0.6rem' width='32rem' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                    <SkeletonComponent height='0.6rem' width='32rem' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                    <SkeletonComponent height='0.6rem' width='28rem' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                </div>
                            </div>
                            <div className='container-dashboard-gray m-5'>
                                <div className='button-container-dashboard m-5'>
                                    <h3 className='ml-4'><b>Digitalize your </b></h3>
                                    <h3 className='ml-4'>Experiance</h3>
                                    <ButtonComponent className=' e-btn btn-dashboard' content='Import your Linked Profile'></ButtonComponent>
                                </div>
                            </div>
                            <div className='m-5 justify-content-center container-dashboard'>
                                <div className='vertical-container-left'>
                                    <SkeletonComponent height='2rem' width='20rem' className='skeleton-figure-3 mt-1' shimmerEffect= 'Pulse'/>
                                    <SkeletonComponent height='0.6rem' width='32rem' className='skeleton-figure-3 mt-4' shimmerEffect= 'Pulse'/>
                                    <SkeletonComponent height='0.6rem' width='32rem' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                    <SkeletonComponent height='0.6rem' width='32rem' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                    <SkeletonComponent height='0.6rem' width='28rem' className='skeleton-figure-3 mt-3' shimmerEffect= 'Pulse'/>
                                </div>
                                <img src="https://placehold.co/350x150" alt="placeholder" ></img>
                            </div>
                            <div className='footer-dashboard justify-content-center m-3'>
                                <div className='footer-element'>
                                    <SkeletonComponent height='0.6rem' width='14rem' className='skeleton-figure-3 m-3' shimmerEffect= 'Pulse'/>
                                </div>
                                
                            </div>
                        </DashboardLayoutComponent>
                    
                    
                </div>
                );
    }
};