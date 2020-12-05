import React, { Component } from "react";
import {TokenContext} from '../token-context'; 
import needHelpGraphic from './needHelp.png';
import helpingHandGraphic from './helpingHand.png';
import safetyGraphic from './safety.png';

class DisplayInfo extends Component {  
    
    componentDidUpdate() {
        console.log('scroll attempt')
        const anchor = document.querySelector('#bottomScroll')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }

    render() { 
        
        if (this.context.infoChoice === '1') {
            return(
                <div className="HomePage-Info" id="bottomScroll">
                    <div className="HomePage-InfoImage">
                        <img className="HomePage-Graphic" src={ needHelpGraphic } alt=""/>
                    </div>
                    <div className="HomePage-InfoBlurb">
                        <ol>
                        <h2>How can I get help?</h2>
                        <li>
                            Register or log in by clicking the the button in the top right hand 
                            corner of the homepage.
                        </li>
                        <li>
                            "Step 2 - Navigating to where a new post can be created"
                        </li>
                        <li>
                            "Step 3 - Filling out and submitting a new post."
                        </li>
                        </ol>
                    </div>
                </div>
            );
        } else if (this.context.infoChoice === '2'){
            return(
                <div className="HomePage-Info" id="bottomScroll">
                    <div className="HomePage-InfoImage">
                        <img className="HomePage-Graphic" src={ helpingHandGraphic } alt=""/>
                    </div>
                    <div className="HomePage-InfoBlurb">
                        <ol>
                        <h2>How can I be a volunteer?</h2>
                        <li>
                            Register or log in by clicking the the button in the top right hand 
                            corner of the homepage.
                        </li>
                        <li>
                            "Step 2 - Navigating to the posts"
                        </li>
                        <li>
                            "Step 3 - Marking yourself as a volunteer."
                        </li>
                        </ol>
                    </div>
                </div>
            );
        } else if (this.context.infoChoice === '3'){
            return(
                <div className="HomePage-Info" id="bottomScroll">
                    <div className="HomePage-InfoImage">
                        <img className="HomePage-Graphic" src={ safetyGraphic } alt=""/>
                    </div>
                    <div className="HomePage-InfoBlurb">
                        <ol>
                        <h2>How can I stay safe?</h2>
                        <li>
                            All coordination using VolunteerNation is contactless.
                        </li>
                        <li>
                            Tasks that involve public areas will be marked with a warning and advisement to follow
                            all appropriate safety precautions.
                        </li>
                        </ol>
                    </div>
                </div>
            );
        } else {
            return(
                <div id="bottomScroll"></div>
            );
        }
    }
  }
  DisplayInfo.contextType = TokenContext;

  export default DisplayInfo;