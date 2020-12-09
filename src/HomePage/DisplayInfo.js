import React, {Component} from "react";
import {TokenContext} from '../token-context';
import needHelpGraphic from './needHelp.png';
import helpingHandGraphic from './helpingHand.png';
import safetyGraphic from './safety.png';

class DisplayInfo extends Component {

  componentDidUpdate() {
    console.log('scroll attempt')
    const anchor = document.querySelector('#bottomScroll')
    anchor.scrollIntoView({behavior: 'smooth', block: 'center'})
  }

  render() {

    if (this.context.infoChoice === '1') {
      return (
        <div className="HomePage-Info">
          <div className="HomePage-InfoImage">
            <img className="HomePage-Graphic" src={needHelpGraphic} alt=""/>
          </div>
          <div className="HomePage-InfoBlurb">
            <ol>
              <h2>How can I get help?</h2>
              <li>
                Register or log in by clicking the the button in the top right hand
                corner of the homepage.
              </li>
              <li>
                Click the "New Post" button.
              </li>
              <li>
                From here you can describe a task you need assistance with. Just hit the "Publish" button when you're
                done!
              </li>
              <li id="bottomScroll">
                Your task will be added to the search page where a volunteer whose skills match your needs will be able
                to find it and apply to help.
              </li>
            </ol>
          </div>
        </div>
      );
    } else if (this.context.infoChoice === '2') {
      return (
        <div className="HomePage-Info">
          <div className="HomePage-InfoImage">
            <img className="HomePage-Graphic" src={helpingHandGraphic} alt=""/>
          </div>
          <div className="HomePage-InfoBlurb">
            <ol>
              <h2>How can I be a volunteer?</h2>
              <li>
                Register or log in by clicking the the button in the top right hand
                corner of the homepage.
              </li>
              <li>
                Click the menu button in the top right corner of the dashboard page and select "Search".
              </li>
              <li>
                You'll be able to see all of the available tasks that VolunteerNation users need help with.
              </li>
              <li id="bottomScroll">
                Once you find a task that's right for you, just click "Become a Volunteer"!
              </li>
            </ol>
          </div>
        </div>
      );
    } else if (this.context.infoChoice === '3') {
      return (
        <div className="HomePage-Info">
          <div className="HomePage-InfoImage">
            <img className="HomePage-Graphic" src={safetyGraphic} alt=""/>
          </div>
          <div className="HomePage-InfoBlurb">
            <ul>
              <h2>How can I stay safe?</h2>
              <li>
                Safety is our top priority at VolunteerNation!
              </li>
              <li>
                All users are required to review COVID safety guidelines before adding a post to the site.
              </li>
              <li>
                Tasks that involve public areas will be marked with a warning and advisement to follow all appropriate
                safety precautions.
              </li>
              <li id="bottomScroll">
                Users can also request that their task be completed contactlessly.
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div id="bottomScroll"></div>
      );
    }
  }
}


DisplayInfo.contextType = TokenContext;

export default DisplayInfo;
