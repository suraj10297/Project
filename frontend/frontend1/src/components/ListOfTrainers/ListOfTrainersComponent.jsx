import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import TrainerService from '../../services/Trainer/TrainerService';

class ListOfTrainers extends Component{
    constructor(props){
        super(props)
        this.state={
            trainers:[],
            message:'',
        }
        this.deleteTrainer=this.deleteTrainer.bind(this);
        this.editTrainer=this.editTrainer.bind(this);
        this.reloadTrainerList = this.reloadTrainerList.bind(this);
        this.admin = this.admin.bind(this);
    }
    componentDidMount(){
        this.reloadTrainerList();
    }

    reloadTrainerList(){
        TrainerService.fetchTrainers()
            .then((res) => {
                this.setState({trainers: res.data})
                console.log(this.state.trainers);
            });
    }
    deleteTrainer=(id)=>{
        TrainerService.deleteTrainer(id)
           .then(res => {
               this.setState({message : res.data.message});
               this.setState({trainers: this.state.trainers.filter(trainer => trainer.id !== id)});
               if(res.data.message==='Trainer details deleted'){
                swal("Success!",res.data.message , "success");
               }
              else{
                swal("Wrong!","Trainer details deletion failed", "error");
              }
           })

    }
    editTrainer=(id)=>{
        window.localStorage.setItem("trainerId", id);
        this.props.history.push('/edittrainer');
    }
    admin=(e)=>{
        this.props.history.push('/admin');
    }
    render(){
        return(
            <div><br/><br/>
                 <h2 className="text-center">LIST OF TRAINERS</h2><br/><br/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><h5>Name</h5></th>
                            <th><h5>Contact</h5></th>
                            <th><h5>Address</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trainers.map(
                                trainer =>
                                    <tr key={trainer.id}>
                                        <td><h5>{trainer.trainerName}</h5></td>
                                        <td><h5>{trainer.trainerContact}</h5></td>
                                        <td><h5>{trainer.trainerAddress}</h5></td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteTrainer(trainer.id)}> Delete Trainer</button>
                                            <button className="btn btn-success" onClick={() => this.editTrainer(trainer.id)} style={{marginLeft: '20px'}}>Edit Trainer</button>
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
export default ListOfTrainers;