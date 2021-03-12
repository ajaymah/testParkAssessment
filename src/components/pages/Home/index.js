import React,{Component} from 'react';
import {withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import home from '../../../components/services/home'

class Home extends Component {
     constructor(props){
        super(props)
        this.state={  
            text:'' ,
            searchStr:''
        }
    }

    handleChangeFn = (e) => {
        this.setState({ 
            text: e.target.value 
        });
    }

    doSearch = ()=>{
        this.setState({ 
            text: ''
        });
        this.setState({ 
            searchStr:'&stateCode=' + this.state.text 
        });
         this.props.parkListget('&stateCode=' + this.state.text)
    }

    doReset = ()=>{
         this.setState({ 
            searchStr:'' 
        });
        this.props.parkListget('')
    }

    componentDidMount(){
        this.props.parkListget(this.state.searchStr)
        console.log(this.props.parkList && this.props.parkList.length)
    }
    render(){
    return(
        <>
            <div className="parkWrapper">
            <div className="row filter">
            <div className="col-md-12">
            <div className="col-md-12 pad_l_0">
            <h2>Total {this.props.totalCount}</h2>
            </div>
            </div>
            </div>

            <div className="row filter">
            <div className="col-md-12">
            <div className="col-md-12 pad_l_0">
            <input type="text" onChange={(e)=> this.handleChangeFn(e)}   value={this.state.text} />
            <button onClick={()=> this.doSearch()}>Park search</button> <button onClick={()=> this.doReset()}>Reset</button>
            <p className="note">Note: Search parks by multiple US state codes single and multiple comma-separated</p>
            </div>
            </div>
            </div>
            
            <ul>
            {this.props.parkList.length > 0 && this.props.parkList.map((data) =>
                  <li key={data.id}>
                    <div  className="cards">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="imageFrameWraper">
                                {data.images.length > 0 ?
                                <div className="imageFrame">                                
                                    <img src={data.images[0].url} alt="" />
                                </div> : ''
                                }
                                </div>
                                <div className="content">
                                 <h2>{data.name}</h2>
                                 <p>{data.addresses.length > 0 && data.addresses.map((x) =>
                                    <span className="tags">{x.stateCode}</span>
                                 )}
                                 </p>
                                 <p>{data.description}</p>
                                 <p><Link to={`/parkList/${data.id}`}> Park details</Link></p>
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
        totalCount:state.home.totalCount,
        loading:state.commonR.loading
	})
}
function mapDispatchToProps(dispatch){
	return ({
        parkListget: (statusCose) => {
		   home.parkList(dispatch, statusCose)
	    },
        createUser:(inputDTO)=>{
         
        }	
	})
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
