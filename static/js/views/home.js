import React from "react";
import ReactDOM from "react-dom";

//CSS
import '../../css/home.less';

//JS
import PageNav from '../components/pageNav.js';
import Button from '../components/button.js';

export default class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            notification: '',
            loggedIn: false
        };

        //Buttons
        this.buttonClick = this.buttonClick.bind(this);

        //Notification
        this.closeNotification = this.closeNotification.bind(this);
        this.setNotification = this.setNotification.bind(this);

        //Logged In
        this.setLoggedIn = this.setLoggedIn.bind(this);
    }

    setLoggedIn(l) {
        this.setState({
            loggedIn: l
        });
    }

    closeNotification() {
	    this.setState({
	        notification: ''
	    });
	}

	buttonClick() {
	    return;
	}

	closeNotification() {
	    this.setState({
	        notification: ''
	    });
	}

	setNotification(n) {
	    this.setState({
	        notification: n
	    });
	}

	render() {
		return	<div className="pageContainer">
					<PageNav notification={this.state.notification} closeNotification={this.closeNotification} setNotification={this.setNotification} setLoggedIn={this.setLoggedIn} >
					{
					    <div className="bodyContent">
					    	<div className="section odd">
								<h1>Collection Management</h1>
								<svg width="129" height="129" viewBox="0 0 129 129" fill="none" className="large" xmlns="http://www.w3.org/2000/svg">
									<circle cx="64.5" cy="64.5" r="64.5" fill="#EDB537"/>
									<circle cx="65" cy="64" r="55" fill="#F5DE80"/>
									<path d="M64.9147 12.035L67.4085 16.3544H62.4209L64.9147 12.035Z" fill="#EDB537"/>
									<path d="M62.396 13.5185L67.3829 13.4315L64.9648 17.7937L62.396 13.5185Z" fill="#EDB537"/>
									<path d="M15.9147 61.035L18.4085 65.3544H13.4209L15.9147 61.035Z" fill="#EDB537"/>
									<path d="M13.396 62.5185L18.3829 62.4315L15.9648 66.7937L13.396 62.5185Z" fill="#EDB537"/>
									<path d="M64.9147 110.035L67.4085 114.354H62.4209L64.9147 110.035Z" fill="#EDB537"/>
									<path d="M62.396 111.519L67.3829 111.431L64.9648 115.794L62.396 111.519Z" fill="#EDB537"/>
									<path d="M99.9147 95.035L102.409 99.3544H97.4209L99.9147 95.035Z" fill="#EDB537"/>
									<path d="M97.396 96.5185L102.383 96.4315L99.9648 100.794L97.396 96.5185Z" fill="#EDB537"/>
									<path d="M29.9147 26.035L32.4085 30.3544H27.4209L29.9147 26.035Z" fill="#EDB537"/>
									<path d="M27.396 27.5185L32.3829 27.4315L29.9648 31.7937L27.396 27.5185Z" fill="#EDB537"/>
									<path d="M28.9147 95.035L31.4085 99.3544H26.4209L28.9147 95.035Z" fill="#EDB537"/>
									<path d="M26.396 96.5185L31.3829 96.4315L28.9648 100.794L26.396 96.5185Z" fill="#EDB537"/>
									<path d="M99.9147 26.035L102.409 30.3544H97.4209L99.9147 26.035Z" fill="#EDB537"/>
									<path d="M97.396 27.5185L102.383 27.4315L99.9648 31.7937L97.396 27.5185Z" fill="#EDB537"/>
									<path d="M113.915 61.035L116.409 65.3544H111.421L113.915 61.035Z" fill="#EDB537"/>
									<path d="M111.396 62.5185L116.383 62.4315L113.965 66.7937L111.396 62.5185Z" fill="#EDB537"/>
									<path d="M98.476 84.8V89H98.044V85.184H97.054V84.8H98.476ZM100.788 84.764C101.344 84.764 101.77 84.948 102.066 85.316C102.362 85.68 102.51 86.196 102.51 86.864C102.51 87.332 102.43 87.728 102.27 88.052C102.11 88.376 101.886 88.622 101.598 88.79C101.31 88.954 100.974 89.036 100.59 89.036C100.174 89.036 99.842 88.96 99.594 88.808L99.768 88.46C99.968 88.592 100.24 88.658 100.584 88.658C101.048 88.658 101.412 88.512 101.676 88.22C101.94 87.924 102.072 87.496 102.072 86.936C102.072 86.832 102.066 86.718 102.054 86.594C101.95 86.822 101.784 87 101.556 87.128C101.328 87.252 101.066 87.314 100.77 87.314C100.494 87.314 100.248 87.262 100.032 87.158C99.82 87.054 99.654 86.908 99.534 86.72C99.414 86.528 99.354 86.306 99.354 86.054C99.354 85.798 99.416 85.572 99.54 85.376C99.664 85.18 99.834 85.03 100.05 84.926C100.27 84.818 100.516 84.764 100.788 84.764ZM100.836 86.948C101.048 86.948 101.234 86.908 101.394 86.828C101.558 86.748 101.686 86.638 101.778 86.498C101.87 86.358 101.916 86.202 101.916 86.03C101.916 85.87 101.872 85.722 101.784 85.586C101.7 85.45 101.574 85.34 101.406 85.256C101.238 85.172 101.038 85.13 100.806 85.13C100.502 85.13 100.254 85.214 100.062 85.382C99.874 85.546 99.78 85.766 99.78 86.042C99.78 86.318 99.874 86.538 100.062 86.702C100.254 86.866 100.512 86.948 100.836 86.948ZM104.444 84.764C105 84.764 105.426 84.948 105.722 85.316C106.018 85.68 106.166 86.196 106.166 86.864C106.166 87.332 106.086 87.728 105.926 88.052C105.766 88.376 105.542 88.622 105.254 88.79C104.966 88.954 104.63 89.036 104.246 89.036C103.83 89.036 103.498 88.96 103.25 88.808L103.424 88.46C103.624 88.592 103.896 88.658 104.24 88.658C104.704 88.658 105.068 88.512 105.332 88.22C105.596 87.924 105.728 87.496 105.728 86.936C105.728 86.832 105.722 86.718 105.71 86.594C105.606 86.822 105.44 87 105.212 87.128C104.984 87.252 104.722 87.314 104.426 87.314C104.15 87.314 103.904 87.262 103.688 87.158C103.476 87.054 103.31 86.908 103.19 86.72C103.07 86.528 103.01 86.306 103.01 86.054C103.01 85.798 103.072 85.572 103.196 85.376C103.32 85.18 103.49 85.03 103.706 84.926C103.926 84.818 104.172 84.764 104.444 84.764ZM104.492 86.948C104.704 86.948 104.89 86.908 105.05 86.828C105.214 86.748 105.342 86.638 105.434 86.498C105.526 86.358 105.572 86.202 105.572 86.03C105.572 85.87 105.528 85.722 105.44 85.586C105.356 85.45 105.23 85.34 105.062 85.256C104.894 85.172 104.694 85.13 104.462 85.13C104.158 85.13 103.91 85.214 103.718 85.382C103.53 85.546 103.436 85.766 103.436 86.042C103.436 86.318 103.53 86.538 103.718 86.702C103.91 86.866 104.168 86.948 104.492 86.948ZM109.71 84.8V85.106L107.952 89H107.484L109.212 85.184H107.052V85.97H106.626V84.8H109.71Z" fill="#EDB537"/>
									<path d="M82.76 74.05C82.76 77.6433 81.3833 80.7 78.63 83.22C75.8767 85.6933 71.84 87.07 66.52 87.35V95.4H63.02V87.42C59.6133 87.2333 56.3933 86.58 53.36 85.46C50.3733 84.2933 48.0167 82.8233 46.29 81.05L48.32 77.06C49.9533 78.6467 52.0767 79.9767 54.69 81.05C57.35 82.1233 60.1267 82.7533 63.02 82.94V64.53C59.8 63.7367 57.1167 62.8967 54.97 62.01C52.8233 61.0767 51.0267 59.7467 49.58 58.02C48.18 56.2467 47.48 53.9133 47.48 51.02C47.48 47.4267 48.7867 44.4167 51.4 41.99C54.0133 39.5167 57.8867 38.07 63.02 37.65V29.6H66.52V37.58C69.18 37.6733 71.7467 38.1167 74.22 38.91C76.74 39.6567 78.91 40.66 80.73 41.92L78.98 46.05C77.0667 44.8367 75.0367 43.88 72.89 43.18C70.7433 42.48 68.62 42.0833 66.52 41.99V60.54C69.9733 61.38 72.7967 62.2433 74.99 63.13C77.1833 63.97 79.0267 65.2767 80.52 67.05C82.0133 68.8233 82.76 71.1567 82.76 74.05ZM52.59 50.88C52.59 53.3067 53.4767 55.15 55.25 56.41C57.07 57.67 59.66 58.7433 63.02 59.63V42.13C59.5667 42.41 56.9533 43.3667 55.18 45C53.4533 46.5867 52.59 48.5467 52.59 50.88ZM66.52 82.94C70.2067 82.66 72.9833 81.75 74.85 80.21C76.7167 78.67 77.65 76.71 77.65 74.33C77.65 71.81 76.6933 69.92 74.78 68.66C72.8667 67.4 70.1133 66.3267 66.52 65.44V82.94Z" fill="#EDB537"/>
								</svg>
								<p>Your collection in the palm of your hand.</p>
								<a href="/collections"><Button click={this.buttonClick} type="dark"><span>Get Started</span></Button></a>
					    	</div>
					    	<div className="section even">
						    	<h3>Create a Collection</h3>
						    	<svg width="25" height="25" className="medium" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M22 24.5C22.2761 24.5 22.5 24.2761 22.5 24C22.5 23.7239 22.2761 23.5 22 23.5V24.5ZM1.5 3C1.5 2.72386 1.27614 2.5 1 2.5C0.723858 2.5 0.5 2.72386 0.5 3H1.5ZM22 23.5H2V24.5H22V23.5ZM1.5 23V3H0.5V23H1.5ZM2 23.5C1.72386 23.5 1.5 23.2761 1.5 23H0.5C0.5 23.8284 1.17157 24.5 2 24.5V23.5Z" fill="black"/>
									<path d="M22.5 7.84615C22.5 7.57001 22.2761 7.34615 22 7.34615C21.7239 7.34615 21.5 7.57001 21.5 7.84615H22.5ZM17.1538 3.5C17.43 3.5 17.6538 3.27614 17.6538 3C17.6538 2.72386 17.43 2.5 17.1538 2.5V3.5ZM21.5 7.84615L21.5 24H22.5L22.5 7.84615H21.5ZM1 3.5L17.1538 3.5V2.5L1 2.5V3.5Z" fill="black"/>
									<rect x="21.5394" y="1.45209" width="2.90414" height="9.54581" transform="rotate(45 21.5394 1.45209)" fill="black"/>
									<path d="M22.2394 0.707107C22.63 0.316582 23.2631 0.316582 23.6536 0.707107L24.293 1.34643C24.6835 1.73696 24.6835 2.37012 24.293 2.76065L23.835 3.21857L21.7815 1.16503L22.2394 0.707107Z" fill="black"/>
									<path d="M14.0268 11.0254L14.6778 8.59608L16.4562 10.3745L14.0268 11.0254Z" fill="black"/>
								</svg>
						    	<p>Create an electronic version of your collection. You can view your collection from anywhere at anytime. No matter the device, you will always have access.</p>
					    	</div>
					    	<div className="section odd">
						    	<h3>Add to the Collection</h3>
						    	<svg width="27" height="27" viewBox="0 0 27 27" fill="none" className="small" xmlns="http://www.w3.org/2000/svg">
									<line x1="19.7777" y1="1" x2="19.7777" y2="12" stroke="black" stroke-width="2" stroke-linecap="round"/>
									<line x1="14" y1="6.22223" x2="25" y2="6.22223" stroke="black" stroke-width="2" stroke-linecap="round"/>
									<path d="M13.5 2C14.0523 2 14.5 1.55228 14.5 1C14.5 0.447715 14.0523 0 13.5 0V2ZM13.5 25C7.14873 25 2 19.8513 2 13.5H0C0 20.9558 6.04416 27 13.5 27V25ZM2 13.5C2 7.14873 7.14873 2 13.5 2V0C6.04416 0 0 6.04416 0 13.5H2Z" fill="black"/>
									<path d="M26.5 13.5C26.5 12.9477 26.0523 12.5 25.5 12.5C24.9477 12.5 24.5 12.9477 24.5 13.5H26.5ZM24.5 13.5C24.5 19.8513 19.3513 25 13 25V27C20.4558 27 26.5 20.9558 26.5 13.5H24.5Z" fill="black"/>
								</svg>
						    	<p>Add a new coin to your collection in a couple clicks. You will no longer be limited to adding a coin to your collection when you get back to your computer. Now, you can do it straight from your mobile device.</p>
					    	</div>
					    	<div className="section even">
						    	<h3>View your Collection</h3>
						    	<svg width="32" height="32" className="medium" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="19.7227" cy="12.5" r="6.5" stroke="black" stroke-width="2"/>
									<path d="M14.7071 19.1213L15.4142 18.4142L14 17L13.2929 17.7071L14.7071 19.1213ZM6.92893 24.0711C6.53841 24.4616 6.53841 25.0948 6.92893 25.4853C7.31946 25.8758 7.95262 25.8758 8.34315 25.4853L6.92893 24.0711ZM13.2929 17.7071L6.92893 24.0711L8.34315 25.4853L14.7071 19.1213L13.2929 17.7071Z" fill="black"/>
								</svg>

						    	<p>Looking for a specific coin? Quickly navigate your collection to find exactly the coin you're looking for.</p>
								<a href="/collections"><Button click={this.buttonClick} type=""><span>Get Started</span></Button></a>
					    	</div>
					    </div>
					}
					</PageNav>
				</div>;
	}
}



