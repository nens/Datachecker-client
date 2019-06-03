import React, {Component} from 'react';
import './App.css';


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

    // authenticate with bootstrap
    // Below is the redux variant
    // adapted from lizard-management-client /src/actions.js
    // dispatch(requestLizardBootstrap());
    // fetch("https://demo.lizard.net/bootstrap/lizard/", {
    //   credentials: "same-origin"
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data && data.user && data.user.authenticated === true) {
    //       dispatch(receiveLizardBootstrap(data));
    //     } else {
    //       const nextUrl = window.location.href;
    //       window.location.href = `${data.sso.login}&next=${nextUrl}`;
    //     }
    //   });

    // post
    const url = "https://datachecker.staging.lizard.net/api/upload/";
    const opts = {
      credentials: "same-origin",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    };
    fetch(url, opts)
      .then(responseParsed => {
        return responseParsed.json();
      })
      .then(parsedBody => {
        console.log("parsedBody", parsedBody);
      });

    // next line should be removed when pushing to master
    // it is to make sure that the page does not refresh for development
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
