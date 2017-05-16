var ProfileDetails = React.createClass({ 

	getInitialState() { 
		return { 
			profile: null
		} 
	},

	componentDidMount() { 
		console.log('Component mounted'); 
		$.getJSON('/api/v1/profile/1.json', (response) => { 
			console.log(response)
			this.setState({ profile: response }) 
		});
	}, 

	profileData(){
		return (
			<div key={this.state.profile.id}> 
				<h1>Fullname: {this.state.profile.first_name} {this.state.profile.last_name}</h1> 
				<h2>Date of Birth: {this.state.profile.dob}</h2> 
				<h2>Email: {this.state.profile.email}</h2> 
			</div> 
		)
	},

	render() { 
		if (this.state.profile === null){
			return <h1>No Profile Details Available</h1>
	  }
		else{ 
			return this.profileData()
	 }
	} 

	
});