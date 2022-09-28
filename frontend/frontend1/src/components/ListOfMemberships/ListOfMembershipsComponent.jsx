import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import MembershipsService from '../../services/Memberships/MembershipsService';

class ListOfMembershipsComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            memberships:[],
            message:'',
        }
        this.deleteMembership=this.deleteMembership.bind(this);
        // this.editMembership=this.editMembership.bind(this);
        // this.reloadMembershipsList = this.reloadMembershipsList.bind(this);
        this.admin = this.admin.bind(this);
    }
    componentDidMount() {
        this.reloadMembershipsList();
    }

    reloadMembershipsList() {
        MembershipsService.fetchMemberships()
            .then((res) => {
                this.setState({memberships: res.data})
                console.log(this.state.memberships);
            });
    }
    deleteMembership=(id)=>{
        MembershipsService.deleteMembership(id)
           .then(res => {
               this.setState({message : res.data.message});
               this.setState({memberships: this.state.memberships.filter(membership => membership.id !== id)});
               if(res.data.message==='Membership details deleted'){
                swal("Success!",res.data.message , "success");
               }
              else{
                swal("Wrong!","Membership details deletion failed", "error");
              }
           })

    }
    // editMembership=(id)=>{
    //     // window.localStorage.setItem("membershipId", id);
    //     // this.props.history.push('/editmembership');
    // }
    admin=(e)=>{
        this.props.history.push('/admin');
    }
    render(){
        return(
            <div><br/><br/>
                 <h2 className="text-center">LIST OF MEMBERSHIPS</h2><br/><br/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><h5>Name</h5></th>
                            <th><h5>Amount</h5></th>
                            <th><h5>Period</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.memberships.map(
                                membership =>
                                    <tr key={membership.id}>
                                        <td><h5>{membership.membershipName}</h5></td>
                                        <td><h5>{membership.membershipAmount}</h5></td>
                                        <td><h5>{membership.membershipPeriod}</h5></td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteMembership(membership.id)}> Delete MemberShip</button>
                                            {/* <button className="btn btn-success" onClick={() => this.editMembership(membership.id)} style={{marginLeft: '20px'}}>Edit Membership</button> */}
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <button className="btn btn-success" onClick={this.admin}>Back</button><br/><br/><br/>
              
            </div>
        );
    }

}
export default ListOfMembershipsComponent;