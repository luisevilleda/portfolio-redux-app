import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> front-end and full-stack web applications.</h1>
          <p><a href="#" onClick={this.eventToggleSidebar}> Find out More</a></p>
			</div>
  
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
            <li><em>React</em>
              <ul>
                <li><em>Redux</em></li>
                <li><em>Flux</em></li>
              </ul>
            </li>
						<li><em>Angular</em></li>
						<li><em>React-Native</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em>MongoDB</em></li>
            <li><em>MySQL</em></li>
						<li><em>Node</em>
							<ul>
								<li><em>Express</em></li>
                <li><em>Passport</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Mocha</em></li>
						<li><em>Chai</em></li>
						<li><em>Sinon</em></li>
            <li><em>Jasmine</em></li>
            <li><em>Enzyme</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
            <li><em>Webpack</em></li>
            <li><em>Grunt</em></li>
            <li><em>Gulp</em></li>
						<li><em>Nginx</em></li>
					</ul>
				</div>

  			</div>


  			<div className="post clearfix">

			<Banner />

  		</div>
    </div>
    );
  }
}

export default Home;
