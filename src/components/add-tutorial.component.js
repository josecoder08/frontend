import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCilindrada = this.onChangeCilindrada.bind(this);
    this.onChangeAnoLanzamiento = this.onChangeAnoLanzamiento.bind(this);
    this.onChangeFrenos = this.onChangeFrenos.bind(this);
    this.onChangeVelocidadMaxima = this.onChangeVelocidadMaxima.bind(this);
    this.onChangeTorqueMaximo = this.onChangeTorqueMaximo.bind(this);
    this.onChangePeso = this.onChangePeso.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      cilindrada: "",
      anoLanzamiento: "",
      frenos: "",
      velocidadMaxima: "",
      torqueMaximo: "",
      peso: "",
      published: false,
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeCilindrada(e) {
    this.setState({
      cilindrada: e.target.value
    });
  }
  onChangeAnoLanzamiento(e) {
    this.setState({
      anoLanzamiento: e.target.value
    });
  }
  onChangeFrenos(e) {
    this.setState({
      frenos: e.target.value
    });
  }
  onChangeVelocidadMaxima(e) {
    this.setState({
      velocidadMaxima: e.target.value
    });
  }
  onChangeTorqueMaximo(e) {
    this.setState({
      torqueMaximo: e.target.value
    });
  }
  onChangePeso(e) {
    this.setState({
      peso: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      cilindrada: this.state.cilindrada,
      anoLanzamiento: this.state.anoLanzamiento,
      frenos: this.state.frenos,
      velocidadMaxima: this.state.velocidadMaxima,
      torqueMaximo: this.state.torqueMaximo,
      peso: this.state.peso,
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          cilindrada: response.data.cilindrada,
          anoLanzamiento: response.data.anoLanzamiento,
          frenos: response.data.frenos,
          velocidadMaxima: response.data.velocidadMaxima,
          torqueMaximo: response.data.torqueMaximo,
          peso: response.data.peso,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      cilindrada: "",
      anoLanzamiento: "",
      frenos: "",
      velocidadMaxima: "",
      torqueMaximo: "",
      peso: "",

      published: false,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Marca</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Modelo</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cilindrada">Cilindrada</label>
              <input
                type="number"
                className="form-control"
                id="cilindrada"
                required
                value={this.state.cilindrada}
                onChange={this.onChangeCilindrada}
                name="cilindrada"
              />
            </div>
            <div className="form-group">
              <label htmlFor="anoLanzamiento">Año Lanzamiento</label>
              <input
                type="number"
                className="form-control"
                id="anoLanzamiento"
                required
                value={this.state.anoLanzamiento}
                onChange={this.onChangeAnoLanzamiento}
                name="anoLanzamiento"
              />
            </div>
            <div className="form-group">
              <label htmlFor="frenos">Frenos</label>
              <input
                type="text"
                className="form-control"
                id="frenos"
                required
                value={this.state.frenos}
                onChange={this.onChangeFrenos}
                name="frenos"
              />
            </div>
            <div className="form-group">
              <label htmlFor="velocidadMaxima">Velocidad Maxima</label>
              <input
                type="number"
                className="form-control"
                id="velocidadMaxima"
                required
                value={this.state.velocidadMaxima}
                onChange={this.onChangeVelocidadMaxima}
                name="velocidadMaxima"
              />
            </div>
            <div className="form-group">
              <label htmlFor="torqueMaximo">Torque Maximo</label>
              <input
                type="number"
                className="form-control"
                id="torqueMaximo"
                required
                value={this.state.torqueMaximo}
                onChange={this.onChangeTorqueMaximo}
                name="torqueMaximo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="peso">Peso</label>
              <input
                type="number"
                className="form-control"
                id="peso"
                required
                value={this.state.peso}
                onChange={this.onChangePeso}
                name="peso"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
