import React,{Component} from 'react';
import {withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
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
                                <div key={x.url} className="imageFrame detail">                                
                                    <img src={x.url} alt="" />
                                </div>
                                )}
                                </div>
                                <div className="content clear">
                                 <h2>{data.name}</h2>
                                <h5>operating hours</h5>
                                 {data.operatingHours.length > 0 && data.operatingHours.map((x, i) =>
                                    <p key={'a'+i}>
                                    {Object.keys(x.standardHours).length > 0 && Object.keys(x.standardHours).map((y,j) =>
                                    <span key={'b'+j}>
                                       <strong>{y} </strong> : {x.standardHours[y]}<br/>
                                    </span>
                                    )}
                                    </p>
                                 )}
                                 <h5>Entrance fees</h5>
                                {data.entranceFees.length > 0 && data.entranceFees.map((x, k) =>
                                    <>
                                    <p key={'c'+k}> 
                                    <strong>fees cost</strong>: {x.cost}
                                    </p>
                                    <p>{x.description}</p>
                                    </>

                                )}
                                 
                                 <h5>Contact Details</h5>
                                 {data.contacts && data.contacts.phoneNumbers && data.contacts.phoneNumbers.length > 0 && data.contacts.phoneNumbers.map((x,l) =>
                                 <div key={'d'+l}>
                                 {x.phoneNumber ? <p><strong>Phone No </strong>:{x.phoneNumber}</p> :''}
                                 {x.extension ? <p><strong>Ext:</strong>{x.extension}</p> : ''}
                                 {x.type ? <p><strong>Type:</strong>{x.type}</p> : ''}
                                 {x.description ? <p><strong>Description:</strong>{x.description}</p> : ''}
                                 </div>
                                  )}
                                 
                                 <p>
                                 <Link to={`/`} className="btn btn-info">Google map</Link>
                                  <Link to={`/`} className="btn btn-info">Events</Link>
                                  <Link to={`/`} className="btn btn-info">Vote/Like</Link>
                                 </p>                           

                                 <p><Link to={`/`}> Back</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </li>  
            )}
            </ul> 
              {this.props.loading ? <div className="loader"></div> :''}
            </div> 
        </>
    )
    }
}
function mapStateToProps(state) {
	return({
		parkList:state.home.parkList,
         loading:state.commonR.loading
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
