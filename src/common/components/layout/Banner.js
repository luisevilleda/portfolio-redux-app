import React, { Component } from 'react';

class Banner extends Component {
  unObfEmail() {
    var email = 'yhvfrivyyrqn@tznvy.pbz';
    return email.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
  };

  render() {
    return (
	    <div className="contact-banner">
    		<p>Contact me at <em>
          <a id="obfEmail" href={'mailto:' + this.unObfEmail()}>{this.unObfEmail()}</a>
        </em></p>
    	</div>
    );
  }
}

export default Banner;
