import * as React from 'react';
import logo from '../../images/LinkedIn_icon.svg';
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import '../../output.css';
export default class App extends React.Component{

    
  render() {

    return (<div className='control-pane'>
                <div className='row justify-content-center m-5'>
                    <DashboardLayoutComponent  >
                        <img src={logo} alt="LinkedIn Logo" className='m-5'></img>
                        
                        <div className="textboxes">
                            <TextBoxComponent placeholder="Email" floatLabelType="Auto" />
                        </div>
                        <div className="textboxes">
                            <TextBoxComponent placeholder="Password" floatLabelType="Auto" type="password"/>
                        </div>
                        <ButtonComponent className='mt-5 e-btn' content='CONNECT MY LINKEDIN ACCOUNT'></ButtonComponent>
                    </DashboardLayoutComponent>

                </div>
                
                
            </div>
            );
}
};
