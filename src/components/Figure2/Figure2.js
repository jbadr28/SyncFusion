import * as React from 'react';
import logo from '../../images/LinkedIn_icon.svg';
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';

import { ButtonComponent,  CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import '../../output.css';
import {  SkeletonComponent } from '@syncfusion/ej2-react-notifications';
export default class App extends React.Component{
    
    render() {

        return (<div className='control-pane '>
                    <div className='row justify-content-center m-5'>
                        <DashboardLayoutComponent  >
                            <div > 
                                <img src={logo} alt="LinkedIn Logo" className='m-5'></img>
                            </div >

                            <h4>You agree to the following:</h4>
                            <div className='checkbox-skeleton-container mt-5'>
                                <CheckBoxComponent  />

                                <SkeletonComponent height='30px' className='skeleton-figure-2' shimmerEffect= 'Pulse'/>

                            </div>
                            <div className='checkbox-skeleton-container mt-4'>
                                <CheckBoxComponent  />

                                <SkeletonComponent height='30px' className='skeleton-figure-2' shimmerEffect= 'Pulse'/>

                            </div>
                            <div className='checkbox-skeleton-container mt-4'>
                                <CheckBoxComponent  />

                                <SkeletonComponent height='30px' className='skeleton-figure-2' shimmerEffect= 'Pulse'/>

                            </div>
                            <div className='checkbox-skeleton-container mt-4'>
                                <CheckBoxComponent className='checkbox-figure-2' />

                                <SkeletonComponent height='30px' className='skeleton-figure-2' shimmerEffect= 'Pulse'/>

                            </div>
                            <ButtonComponent className='mt-5 e-btn btn-figure-2' content='CONTINUE'></ButtonComponent>
                        </DashboardLayoutComponent>
    
                    </div>
                    
                    
                </div>
                );
    }
};