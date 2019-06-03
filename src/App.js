import React, {Component} from 'react';
import './App.css';

import { getPassword } from './GetPassword.js'
import { getUserName } from './GetUsername.js' 


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      email: "",
      // modelType: {
      //   riolering: false
      // }
      modelTypeRiolering: false
    };

    this.handleChangeModelTypeRiolering = this.handleChangeModelTypeRiolering.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
    const url = "/api/upload/"
    const opts = {
      credentials: "same-origin",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, opts)
      .then(responseParsed => {
        return responseParsed.json();
      })
      .then(parsedBody => {
        if (parsedBody.detail === "Authentication credentials were not provided.") {
          console.log("Authentication credentials were not provided.");
          const nextUrl = window.location.href;
          // next line needs be active on prod, but commented out on dev
          window.location.href = `${"/accounts/login/"}?next=${nextUrl}`;
        } else {
          console.log("You appear to be logged in");
        }

        


      });
  }

  handleChangeModelTypeRiolering(event) {
    this.setState({modelTypeRiolering: !event.target.modelTypeRiolering});
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    console.log('modelTypeRiolering: ' + this.state.modelTypeRiolering);
    console.log('Name: ' + this.state.name);
    console.log('Email: ' + this.state.email);

    var fileInput = document.getElementsByName('suf-hyd-file')[0];
    console.log('fileInput', fileInput, fileInput.files, fileInput.files[0]);
    var form = new FormData();
    form.append("file", fileInput.files[0]);
    const url = "/api/upload/"
    const opts = {
      credentials: "same-origin",
      method: "POST",
      headers: { 
        'Authorization': 'Basic ' + btoa(getUserName() + ":" + getPassword())
      },
      body: form
    };
    fetch(url, opts)
    .then(responseParsed => {
      return responseParsed.json();
    })
    .then(parsedBody => {
      console.log(parsedBody)
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main className="App-main">
          <form onSubmit={this.handleSubmit}>
            <div>
              1 Wat voor model wilt u checken?
              <br />
              <input type="radio" name="model-type-riolering" value="riolering" checked={this.state.modelTypeRiolering} onChange={this.handleChangeModelTypeRiolering} />
              Riolering
              <br />
              <input type="radio" name="model-type-oppervlakte-water" value="oppervlakte-water" disabled/>
              Oppervlakte water
              <br />
              <button>VOLGENDE</button>
              <br />
              <br />
            </div>
            <div>
              2 Uit wat voor data bestaat uw riolering-model?
              <br />
              <table>
                <thead>
                  <tr>
                    <td>Aanleverformaat</td>
                    <td>Aanvullende data</td>
                    <td>Verhard oppervlak</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-gwsw-hydx" value="gwsw-hydx" />
                      GWSW Hydx (aanbevolen)
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-verhard-oppervlak" value="verhard-oppervlak" />
                      Verhard oppervlak
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-bgt-inloopmodel" value="bgt-inloopmodel" />
                      BGT inloopmodel
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-suf-hydx" value="suf-hydx" />
                      Suf Hydx (aanbevolen)
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-drinkwater-gebruik" value="drinkwater-gebruik" />
                      Drinkwater gebruik
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-anders-2" value="anders-2" />
                      Anders
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-gbi" value="gbi" />
                      GBI
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-bemalings-gebieden" value="bemalings-gebieden" />
                      Bemalings gebieden
                    </td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-anders" value="anders" />
                      Anders
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-andere-data" value="andere-data" />
                      Andere data
                    </td>
                    <td>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button>VOLGENDE</button>
              <br />
              <br />
            </div>
            <div>
              3 Upload bestanden voor GWSW Hydx
              <br />
              <input type="file" name="gwsw-hydx-file" />
              <br />
              <br />
              Upload bestanden voor Suf-Hyd
              <br />
              <input type="file" name="suf-hyd-file" />
              <br />
              <br />
              Upload bestanden voor een ander aanleverformaat
              <br />
              <input type="file" name="ander-file" />
              <br />
              <br />
              Upload bestanden voor Verhard oppervlak - BGT inloopmodel
              <br />
              <input type="file" name="verhard-opplervlak-bgt-inloopmodel" />
              <br />
              <br />
              Upload bestanden voor Drinkwater gebruik
              <br />
              <input type="file" name="drinkwater-gebruik-file" />
              <br />
              <br />
              Upload bestanden voor Andere data
              <br />
              <input type="file" name="andere-data-file" />
              <br />
              <br />
              <button>VOLGENDE</button>
              <br />
              <br />
            </div>
            <div>
              4 Naam en email-adres
              <br />
              <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} placeholder="Name" />
              <br />
              <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email" />
              <br />
              <button>VOLGENDE</button>
              <br />
              <br />
            </div>
            <div>
              5 Folder naam
              <br />
              <input type="text" name="folder-name" value="" placeholder="Folder" />
              <br />
              <button>VOLGENDE</button>
              <br />
              <br />
            </div>
            <div>
              U bent nu klaar. Controleer nog een keer uw aangeleverde data of verzend direct.
              <input type="submit" value="VERZENDEN" />
            </div>
          </form>
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
