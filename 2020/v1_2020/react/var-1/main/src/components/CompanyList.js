import React, { Component } from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'

class CompanyList extends Component {
	constructor(){
		super()
		this.state = {
			companies : []
		}
		
	}
	save=(id,company)=>{
		this.store.saveOne(id,company)
	}

	componentDidMount(){
		this.store = new CompanyStore()

		this.setState({
			companies : this.store.getAll()
		})

		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				companies : this.store.getAll()
			})			
		})
	}
  render() {
    return (
      <div>
      	{
			  this.state.companies.map((el,index)=>
				  <Company item={el} index={index} onSave={this.save}/>
			  )
		  }
      </div>
    )
  }
}

export default CompanyList
