import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { withRouter } from '../common/with-router';

class Tutorial extends Component {
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
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        cilindrada: "",
        anoLanzamiento: "",
        frenos: "",
        velocidadMaxima: "",
        torqueMaximo: "",
        peso: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }));
  }
  onChangeCilindrada(e) {
    const cilindrada = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        cilindrada: cilindrada
      }
    }));
  }
  onChangeAnoLanzamiento(e) {
    const anoLanzamiento = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        anoLanzamiento: anoLanzamiento
      }
    }));
  }
  onChangeFrenos(e) {
    const frenos = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        frenos: frenos
      }
    }));
  }
  onChangeVelocidadMaxima(e) {
    const velocidadMaxima = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        velocidadMaxima: velocidadMaxima
      }
    }));
  }
  onChangeTorqueMaximo(e) {
    const torqueMaximo = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        torqueMaximo: torqueMaximo
      }
    }));
  }
  onChangePeso(e) {
    const peso = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        peso: peso
      }
    }));
  }

  getTutorial(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      cilindrada:this.state.currentTutorial.cilindrada,
      anoLanzamiento: this.state.currentTutorial.anoLanzamiento,
      frenos: this.state.currentTutorial.frenos,
      velocidadMaxima: this.state.currentTutorial.velocidadMaxima,
      torqueMaximo: this.state.currentTutorial.torqueMaximo,
      peso: this.state.currentTutorial.peso,

      published: status
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "La moto se ha actualizado correctamente!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {    
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/tutorials');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Moto</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cilindrada">Cilindrada</label>
                <input
                  type="number"
                  className="form-control"
                  id="cilindrada"
                  value={currentTutorial.cilindrada}
                  onChange={this.onChangeCilindrada}
                />
              </div>
              <div className="form-group">
                <label htmlFor="anoLanzamiento">Año Lanzamiento</label>
                <input
                  type="text"
                  className="form-control"
                  id="anoLanzamiento"
                  value={currentTutorial.anoLanzamiento}
                  onChange={this.onChangeAnoLanzamiento}
                />
              </div>
              <div className="form-group">
                <label htmlFor="frenos">Frenos</label>
                <input
                  type="text"
                  className="form-control"
                  id="frenos"
                  value={currentTutorial.frenos}
                  onChange={this.onChangeFrenos}
                />
              </div>
              <div className="form-group">
                <label htmlFor="velocidadMaxima">Velocidad Maxima</label>
                <input
                  type="number"
                  className="form-control"
                  id="velocidadMaxima"
                  value={currentTutorial.velocidadMaxima}
                  onChange={this.onChangeVelocidadMaxima}
                />
              </div>
              <div className="form-group">
                <label htmlFor="torqueMaximo">Torque Maximo</label>
                <input
                  type="number"
                  className="form-control"
                  id="torqueMaximo"
                  value={currentTutorial.torqueMaximo}
                  onChange={this.onChangeTorqueMaximo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="peso">Peso</label>
                <input
                  type="number"
                  className="form-control"
                  id="peso"
                  value={currentTutorial.peso}
                  onChange={this.onChangePeso}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor haga click en la moto...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Tutorial);