import React, {Component} from 'react';
import './App.css';

import { getPassword } from './GetPassword.js'
import { getUserName } from './GetUsername.js'
import * as Cookies from 'js-cookie';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // Step 1
      // Since riolering is currently the only model type that can be
      // selected, set it to true as default.
      modelTypeRiolering: true,
      modelTypeOppervlakteWater: false,
      // Step 2
      deliveryFormatGWSW: false,
      deliveryFormatSuf: false,
      deliveryFormatGBI: false,
      deliveryFormatOther: false,
      additionalDataHardenedSurface: false,
      additionalDataDrinkingWaterUsage: false,
      additionalDataDrainageAreas: false,
      additionalDataOtherData: false,
      hardenedSurfaceBGT: false,
      hardenedSurfaceOther: false,
      // Step 3
      fileDeliveryFormatGWSW: [],
      fileDeliveryFormatSuf: [],
      fileDeliveryFormatGBI: [],
      fileDeliveryFormatOther: [],
      fileAdditionalDataHardenedSurface: [],
      fileAdditionalDataDrinkingWaterUsage: [],
      fileAdditionalDataDrainageAreas: [],
      fileAdditionalDataOtherData: [],
      fileHardenedSurfaceBGT: [],
      fileHardenedSurfaceOther: [],
      // Step 4
      name: "",
      email: "",
      // Step 5
      folderName: "",
    };

    // Step 1
    this.handleChangeModelTypeRiolering = this.handleChangeModelTypeRiolering.bind(this);
    this.handleChangeModelTypeOppervlakteWater = this.handleChangeModelTypeOppervlakteWater.bind(this);
    // Step 2
    this.handleChangeDeliveryFormatGWSW = this.handleChangeDeliveryFormatGWSW.bind(this);
    this.handleChangeDeliveryFormatSuf = this.handleChangeDeliveryFormatSuf.bind(this);
    this.handleChangeDeliveryFormatGBI = this.handleChangeDeliveryFormatGBI.bind(this);
    this.handleChangedeliveryFormatOther = this.handleChangedeliveryFormatOther.bind(this);
    this.handleChangeAdditionalDataHardenedSurface = this.handleChangeAdditionalDataHardenedSurface.bind(this);
    this.handleChangeAdditionalDataDrinkingWaterUsage = this.handleChangeAdditionalDataDrinkingWaterUsage.bind(this);
    this.handleChangeAdditionalDataDrainageAreas = this.handleChangeAdditionalDataDrainageAreas.bind(this);
    this.handleChangeAdditionalDataOtherData = this.handleChangeAdditionalDataOtherData.bind(this);
    this.handleChangeHardenedSurfaceBGT = this.handleChangeHardenedSurfaceBGT.bind(this);
    this.handleChangeHardenedSurfaceOther = this.handleChangeHardenedSurfaceOther.bind(this);
    // Step 3
    this.handleChangeFileDeliveryFormatGWSW = this.handleChangeFileDeliveryFormatGWSW.bind(this);
    this.handleChangeFileDeliveryFormatSuf = this.handleChangeFileDeliveryFormatSuf.bind(this);
    this.handleChangeFileDeliveryFormatGBI = this.handleChangeFileDeliveryFormatGBI.bind(this);
    this.handleChangeFileDeliveryFormatOther = this.handleChangeFileDeliveryFormatOther.bind(this);
    this.handleChangeFileAdditionalDataHardenedSurface = this.handleChangeFileAdditionalDataHardenedSurface.bind(this);
    this.handleChangeFileAdditionalDataDrinkingWaterUsage = this.handleChangeFileAdditionalDataDrinkingWaterUsage.bind(this);
    this.handleChangeFileAdditionalDataDrainageAreas = this.handleChangeFileAdditionalDataDrainageAreas.bind(this);
    this.handleChangeFileAdditionalDataOtherData = this.handleChangeFileAdditionalDataOtherData.bind(this);
    this.handleChangeFileHardenedSurfaceBGT = this.handleChangeFileHardenedSurfaceBGT.bind(this);
    this.handleChangeFileHardenedSurfaceOther = this.handleChangeFileHardenedSurfaceOther.bind(this);
    // Step 4
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    // Step 5
    this.handleChangeFolderName = this.handleChangeFolderName.bind(this);
    // Submit
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    const url = "/api/upload/"
    const opts = {
      credentials: "same-origin",
      method: "OPTIONS",
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, opts).then(function(response) {
      if (response.status == 403) {
        console.log("Authentication credentials were not provided.");
        const nextUrl = window.location.href;
        // next line needs be active on prod, but commented out on dev
        window.location.href = `${"/accounts/login/"}?next=${nextUrl}`;
      } else {
        console.log("You appear to be logged in");
      }
    });

  }

  // Step 1
  handleChangeModelTypeRiolering(event) {
    this.setState({modelTypeRiolering: !this.state.modelTypeRiolering});
  }
  handleChangeModelTypeOppervlakteWater(event) {
    this.setState({modelTypeOppervlakteWater: !this.state.modelTypeOppervlakteWater});
  }

  // Step 2
  handleChangeDeliveryFormatGWSW(event) {
    this.setState({deliveryFormatGWSW: !this.state.deliveryFormatGWSW});
  }
  handleChangeDeliveryFormatSuf(event) {
    this.setState({deliveryFormatSuf: !this.state.deliveryFormatSuf});
  }
  handleChangeDeliveryFormatGBI(event) {
    this.setState({deliveryFormatGBI: !this.state.deliveryFormatGBI});
  }
  handleChangedeliveryFormatOther(event) {
    this.setState({deliveryFormatOther: !this.state.deliveryFormatOther});
  }
  handleChangeAdditionalDataHardenedSurface(event) {
    this.setState({additionalDataHardenedSurface: !this.state.additionalDataHardenedSurface});
  }
  handleChangeAdditionalDataDrinkingWaterUsage(event) {
    this.setState({additionalDataDrinkingWaterUsage: !this.state.additionalDataDrinkingWaterUsage});
  }
  handleChangeAdditionalDataDrainageAreas(event) {
    this.setState({additionalDataDrainageAreas: !this.state.additionalDataDrainageAreas});
  }
  handleChangeAdditionalDataOtherData(event) {
    this.setState({additionalDataOtherData: !this.state.additionalDataOtherData});
  }
  handleChangeHardenedSurfaceBGT(event) {
    this.setState({hardenedSurfaceBGT: !this.state.hardenedSurfaceBGT});
  }
  handleChangeHardenedSurfaceOther(event) {
    this.setState({hardenedSurfaceOther: !this.state.hardenedSurfaceOther});
  }

  // Step 3
  handleChangeFileDeliveryFormatGWSW(event) {
    this.setState({fileDeliveryFormatGWSW: event.target.files});
  }
  handleChangeFileDeliveryFormatSuf(event) {
    this.setState({fileDeliveryFormatSuf: event.target.files});
  }
  handleChangeFileDeliveryFormatGBI(event) {
    this.setState({fileDeliveryFormatGBI: event.target.files});
  }
  handleChangeFileDeliveryFormatOther(event) {
    this.setState({fileDeliveryFormatOther: event.target.files});
  }
  handleChangeFileAdditionalDataHardenedSurface(event) {
    this.setState({fileAdditionalDataHardenedSurface: event.target.files});
  }
  handleChangeFileAdditionalDataDrinkingWaterUsage(event) {
    this.setState({fileAdditionalDataDrinkingWaterUsage: event.target.files});
  }
  handleChangeFileAdditionalDataDrainageAreas(event) {
    this.setState({fileAdditionalDataDrainageAreas: event.target.files});
  }
  handleChangeFileAdditionalDataOtherData(event) {
    this.setState({fileAdditionalDataOtherData: event.target.files});
  }
  handleChangeFileHardenedSurfaceBGT(event) {
    this.setState({fileHardenedSurfaceBGT: event.target.files});
  }
  handleChangeFileHardenedSurfaceOther(event) {
    this.setState({fileHardenedSurfaceOther: event.target.files});
  }

  // Step 4
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  // Step 5
  handleChangeFolderName(event) {
    this.setState({folderName: event.target.value});
  }

  // Submit
  handleSubmit(event) {

    var form = new FormData();

    // Append files to the form if they exist
    // const metadata = {
    //   username: this.state.name,
    //   email: this.state.email
    // };
    // form.append("metadata", metadata);
    // Add files for model, at least one file should be added for the backend
    if (this.state.fileDeliveryFormatGWSW[0]) {
      form.append("file", this.state.fileDeliveryFormatGWSW[0]);
    }
    if (this.state.fileDeliveryFormatSuf[0]) {
      form.append("file", this.state.fileDeliveryFormatSuf[0]);
    }
    if (this.state.fileDeliveryFormatGBI[0]) {
      form.append("file", this.state.fileDeliveryFormatGBI[0]);
    }
    if (this.state.fileDeliveryFormatOther[0]) {
      form.append("file", this.state.fileDeliveryFormatOther[0]);
    }
    if (this.state.fileAdditionalDataHardenedSurface[0]) {
      form.append("file", this.state.fileAdditionalDataHardenedSurface[0]);
    }
    if (this.state.fileAdditionalDataDrinkingWaterUsage[0]) {
      console.log(this.state.fileAdditionalDataDrinkingWaterUsage[0]);
      form.append("file", this.state.fileAdditionalDataDrinkingWaterUsage[0]);
    }
    if (this.state.fileAdditionalDataDrainageAreas[0]) {
      form.append("file", this.state.fileAdditionalDataDrainageAreas[0]);
    }
    if (this.state.fileAdditionalDataOtherData[0]) {
      form.append("file", this.state.fileAdditionalDataOtherData[0]);
    }
    if (this.state.fileHardenedSurfaceBGT[0]) {
      form.append("file", this.state.fileHardenedSurfaceBGT[0]);
    }
    if (this.state.fileHardenedSurfaceOther[0]) {
      form.append("file", this.state.fileHardenedSurfaceOther[0]);
    }

    const csrftoken = Cookies.get('csrftoken');
    const url = "/api/upload/";
    const opts = {
      credentials: "same-origin",
      method: "POST",
      headers: {
        // next line needs be commented out on prod, but active on dev
        // 'Authorization': 'Basic ' + btoa(getUserName() + ":" + getPassword()),
        'X-CSRFToken': csrftoken
      },
      body: form
    };
    var responseResult = {};
    fetch(url, opts)
      .then(response => {

        responseResult = response;
        if (response.status < 300) {
          return response;
        } else {
          return response.json();
        }

      })
      .then(result => {

        var message = "";
        if (result && result.file && result.file[0]) {
          console.log(result);
          if (result && result.file && result.file[0] === "This field is required.") {
            message = `Error ${responseResult.status}: A file is required.`;
          } else {
            message = `Error ${responseResult.status}: ${result.file[0]}`;
          }
        } else {
          if (responseResult.status == 204) {
            message = "De bestanden zijn verstuurd.";
          } else {
            message = `Error ${responseResult.status}: ${responseResult.statusText}`;
          }
        }
        alert(message);

      });
    // Don't reload the page when you send the form.
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-top">
            Datachecker
          </div>
          <div className="App-header-bottom"></div>
        </header>
        <main className="App-main">
          <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div>
              <br />
              <div className="step-counter">
                <span className="step-counter-span">1</span>
                <span className="step-counter-title">Wat voor model wilt u checken?</span>
              </div>
              <input type="radio" name="model-type-riolering" value="riolering" checked={this.state.modelTypeRiolering} onChange={this.handleChangeModelTypeRiolering} />
              Riolering
              <br />
              <input type="radio" name="model-type-oppervlakte-water" value="oppervlakte-water" checked={this.state.modelTypeOppervlakteWater} onChange={this.handleChangeModelTypeOppervlakteWater} disabled/>
                      <span className="not-available">Oppervlakte water</span>
            </div>
            <br />
            <div>
              <div className="step-counter">
                <span className="step-counter-span">2</span>
                <span className="step-counter-title">Uit wat voor data bestaat uw riolering-model?</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Aanleverformaat</td>
                    <td><span className="not-available">Aanvullende data</span></td>
                    <td>
                      {(this.state.additionalDataHardenedSurface) ?
                          (<div>
                            Verhard oppervlak
                          </div>)
                        : null
                      }
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-gwsw-hydx" value="gwsw-hydx" checked={this.state.deliveryFormatGWSW} onChange={this.handleChangeDeliveryFormatGWSW} />
                      GWSW Hydx (aanbevolen)
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-verhard-oppervlak" value="verhard-oppervlak" checked={this.state.additionalDataHardenedSurface} onChange={this.handleChangeAdditionalDataHardenedSurface} disabled />
                      <span className="not-available">Verhard oppervlak</span>
                    </td>
                    <td>
                      {(this.state.additionalDataHardenedSurface) ?
                          (<div>
                            <input type="checkbox" name="model-data-bgt-inloopmodel" value="bgt-inloopmodel" checked={this.state.hardenedSurfaceBGT} onChange={this.handleChangeHardenedSurfaceBGT} />
                            BGT inloopmodel
                          </div>)
                        : null
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-suf-hydx" value="suf-hydx" checked={this.state.deliveryFormatSuf} onChange={this.handleChangeDeliveryFormatSuf} />
                      Suf Hydx (aanbevolen)
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-drinkwater-gebruik" value="drinkwater-gebruik" checked={this.state.additionalDataDrinkingWaterUsage} onChange={this.handleChangeAdditionalDataDrinkingWaterUsage} disabled />
                      <span className="not-available">Drinkwater gebruik</span>
                    </td>
                    <td>
                      {(this.state.additionalDataHardenedSurface) ?
                          (<div>
                            <input type="checkbox" name="model-data-anders-2" value="anders-2" checked={this.state.hardenedSurfaceOther} onChange={this.handleChangeHardenedSurfaceOther} />
                            Anders
                          </div>)
                        : null
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-gbi" value="gbi" checked={this.state.deliveryFormatGBI} onChange={this.handleChangeDeliveryFormatGBI} />
                      GBI
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-bemalings-gebieden" value="bemalings-gebieden" checked={this.state.additionalDataDrainageAreas} onChange={this.handleChangeAdditionalDataDrainageAreas} disabled />
                      <span className="not-available">Bemalings gebieden</span>
                    </td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-anders" value="anders" checked={this.state.deliveryFormatOther} onChange={this.handleChangedeliveryFormatOther} disabled />
                      <span className="not-available">Anders</span>
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-andere-data" value="andere-data" checked={this.state.additionalDataOtherData} onChange={this.handleChangeAdditionalDataOtherData} disabled />
                      <span className="not-available">Andere data</span>
                    </td>
                    <td>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div>
              <div className="step-counter">
                <span className="step-counter-span">3</span>
                <span className="step-counter-title">Upload bestanden</span>
              </div>
              {(this.state.deliveryFormatGWSW) ?
                  (<div>
                    Upload bestanden voor GWSW Hydx
                    <br />
                    <input type="file" name="gwsw-hydx-file" onChange={this.handleChangeFileDeliveryFormatGWSW} />
                    <br />
                    <br />
                  </div>)
                : null
              }
              {(this.state.deliveryFormatSuf) ?
                  (<div>
                    Upload bestanden voor Suf-Hyd
                    <br />
                    <input type="file" name="suf-hyd-file" onChange={this.handleChangeFileDeliveryFormatSuf} />
                    <br />
                    <br />
                  </div>)
                : null
              }
              {(this.state.deliveryFormatGBI) ?
                  (<div>
                    Upload bestanden voor GBI
                    <br />
                    <input type="file" name="gbi-file" onChange={this.handleChangeFileDeliveryFormatGBI} />
                    <br />
                    <br />
                  </div>)
                : null
              }
              {(this.state.deliveryFormatOther) ?
                  (<div>
                    Upload bestanden voor een ander aanleverformaat
                    <br />
                    <input type="file" name="ander-file" onChange={this.handleChangeFileDeliveryFormatOther} />
                    <br />
                    <br />
                  </div>)
                : null
              }
              {(this.state.hardenedSurfaceBGT) ?
                  (<div>
                    Upload bestanden voor Verhard oppervlak - BGT inloopmodel
                    <br />
                    <input type="file" name="verhard-oppervlak-bgt-file" onChange={this.handleChangeFileHardenedSurfaceBGT} />
                    <br />
                    <br />
                  </div>)
                : null
              }
              {(this.state.hardenedSurfaceOther) ?
                  (<div>
                    Upload bestanden voor Verhard oppervlak - Anders
                    <br />
                    <input type="file" name="verhard-oppervlak-anders-file" onChange={this.handleChangeFileHardenedSurfaceOther} />
                    <br />
                    <br />
                  </div>)
                : null
              }
              {(this.state.additionalDataDrinkingWaterUsage) ?
                  (<div>
                    Upload bestanden voor Drinkwater gebruik
                    <br />
                    <input type="file" name="drinkwater-gebruik-file" onChange={this.handleChangeFileAdditionalDataDrinkingWaterUsage} />
                    <br />
                    <br />
                  </div>)
                : null
              }
              {(this.state.additionalDataDrainageAreas) ?
                  (<div>
                    Upload bestanden voor Bemalings Gebieden
                    <br />
                    <input type="file" name="bemalings-gebieden-file" onChange={this.handleChangeFileAdditionalDataDrainageAreas} />
                    <br />
                    <br />
                  </div>)
                : null
              }
              {(this.state.additionalDataOtherData) ?
                  (<div>
                    Upload bestanden voor Andere data
                    <br />
                    <input type="file" name="andere-data-file" onChange={this.handleChangeFileAdditionalDataOtherData} />
                  </div>)
                : null
              }
            </div>
            <br />
            <div>
              <div className="step-counter">
                <span className="step-counter-span">4</span>
                <span className="step-counter-title">Naam en email-adres</span>
              </div>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} placeholder="Name" />
              <br />
              <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email" />
            </div>
            <br />
            <div>
              U bent nu klaar. Controleer nog een keer uw aangeleverde data of verzend direct.
              <br />
              <br />
              <input type="submit" value="VERZENDEN" />
            </div>
            <br />
            <br />
          </form>
        </main>
        <footer className="App-footer">
            Welkom op de Datachecker!
        </footer>
      </div>
    );
  }
}

export default App;
