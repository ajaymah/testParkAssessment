import React,{Component,useState,useEffect} from 'react';
import {withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import {setParkUserById} from '../../../../store/home/action'
import { Route, Switch, Link } from 'react-router-dom';
import home from '../../../../components/services/home'


class ParkList extends Component {
     constructor(props){
        super(props)
        this.state={   
            id:''
        }
    }
    componentDidMount(){
       
        console.log(this.props.parkList && this.props.parkList.length)
        let ids = this.props.match.params;
         this.props.parkListgetid(ids.id)

    }
    render(){
    return(
        <>
            <div className="parkWrapper">
            <ul>
            {this.props.parkList.length > 0 && this.props.parkList.map((data) =>
                  <li key={data.id}>
                    <div  className="cards">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="imageFrameWraper">
                                {data.images.length > 0 && data.images.map((x) =>
                                <div className="imageFrame detail">                                
                                    <img src={x.url} alt="" />
                                </div>
                                )}
                                </div>
                                <div className="content clear">
                                 <h2>{data.name}</h2>
                                 <p>{data.addresses.length > 0 && data.addresses.map((x) =>
                                    <span>{x.stateCode}</span>
                                 )}
                                 </p>
                                 <p>{data.description}</p>
                                 <p><Link to={`/`}> Back</Link></p>
                                </div>                           
                            </div>
                           
                        </div>
                       
                    </div>
                  </li>  
            )}
            </ul> 
            </div> 
        </>
    )
    }
}
function mapStateToProps(state) {
	return({
		parkList:state.home.parkList,
	})
}
function mapDispatchToProps(dispatch){
	return ({
        parkListgetid: (id) => {
		   home.parkListById(dispatch,id)
	    }	
	})
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ParkList))
