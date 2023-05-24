import React, { Component } from 'react'

class TampilNama extends Component {
    // state = { nama:'' } //variable yg digunakan
    state = { nama: "" }
    tampilNama=(e)=>{
        this.setState({nama : e.target.value})
    }

    render() { 
        return (
            <div>

                <label > {this.state.nama}</label>
                <br></br>
                <label> Nama </label>
                <br></br>
                <input type='text' defaultValue=""></input>
                <br></br>
                <button type='submit' onClick={this.tampilNama}>Tampilkan Nama</button>

            </div>
        );
    }
}
 
export default TampilNama;