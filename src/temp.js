{e.target.name == this.state.firstname || this.state.lastname 
    ? this.setState({firstNameError: true}) 
    : this.setState({lastNameError: true})
    }

{e.target.name == this.state.email || this.state.password 
    ? this.setState({emailError: true}) 
    : this.setState({passwordError: true})
    }

{e.target.name == this.state.confirmPasswordError
    ? this.setState({confirmPasswordError: true})
    : this.setState({confirmPasswordError: false})
   }
