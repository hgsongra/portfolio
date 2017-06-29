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
			<div>
				<table className='table'>
					<tbody>
						<tr>
							<td rowSpan='4'><img src={this.state.profile.avatar}/></td>
						</tr>
						<tr>
							<td>
								<h1>Fullname: {this.state.profile.name}</h1>
							</td>
						</tr>

						<tr>
							<td>
								<h3>Date of Birth: {this.state.profile.dob}</h3>
							</td>
						</tr>
						<tr>
							<td>
								<h3>Email: {this.state.profile.email}</h3>
							</td>
						</tr>
					</tbody>
				</table>
				<hr/>

				<center><h1>Winter is coming...</h1></center>
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