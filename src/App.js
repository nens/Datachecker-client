import React, {Component} from 'react';
import './App.css';

import { getPassword } from './GetPassword.js'
import { getUserName } from './GetUsername.js' 


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // Step 1
      modelTypeRiolering: false,
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
          // window.location.href = `${"/accounts/login/"}?next=${nextUrl}`;
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
    console.log(this.state);

    var form = new FormData();

    // Append files to the form if they exist
    // Append mandatory file, this will become the metadatafile
    const metadata = {
      username: this.state.name,
      email: this.state.email
    };
    form.append("file", metadata);
    // Add files for model
    if (this.state.fileDeliveryFormatGWSW[0]) {
      console.log(this.state.fileDeliveryFormatGWSW[0]);
      form.append("fileDeliveryFormatGWSW", this.state.fileDeliveryFormatGWSW[0]);
    }
    if (this.state.fileDeliveryFormatSuf[0]) {
      console.log(this.state.fileDeliveryFormatSuf[0]);
      form.append("fileDeliveryFormatSuf", this.state.fileDeliveryFormatSuf[0]);
    }
    if (this.state.fileDeliveryFormatGBI[0]) {
      console.log(this.state.fileDeliveryFormatGBI[0]);
      form.append("fileDeliveryFormatGBI", this.state.fileDeliveryFormatGBI[0]);
    }
    if (this.state.fileDeliveryFormatOther[0]) {
      console.log(this.state.fileDeliveryFormatOther[0]);
      form.append("fileDeliveryFormatOther", this.state.fileDeliveryFormatOther[0]);
    }
    if (this.state.fileAdditionalDataHardenedSurface[0]) {
      console.log(this.state.fileAdditionalDataHardenedSurface[0]);
      form.append("fileAdditionalDataHardenedSurface", this.state.fileAdditionalDataHardenedSurface[0]);
    }
    if (this.state.fileAdditionalDataDrinkingWaterUsage[0]) {
      console.log(this.state.fileAdditionalDataDrinkingWaterUsage[0]);
      form.append("fileAdditionalDataDrinkingWaterUsage", this.state.fileAdditionalDataDrinkingWaterUsage[0]);
    }
    if (this.state.fileAdditionalDataDrainageAreas[0]) {
      console.log(this.state.fileAdditionalDataDrainageAreas[0]);
      form.append("fileAdditionalDataDrainageAreas", this.state.fileAdditionalDataDrainageAreas[0]);
    }
    if (this.state.fileAdditionalDataOtherData[0]) {
      console.log(this.state.fileAdditionalDataOtherData[0]);
      form.append("fileAdditionalDataOtherData", this.state.fileAdditionalDataOtherData[0]);
    }
    if (this.state.fileHardenedSurfaceBGT[0]) {
      console.log(this.state.fileHardenedSurfaceBGT[0]);
      form.append("fileHardenedSurfaceBGT", this.state.fileHardenedSurfaceBGT[0]);
    }
    if (this.state.fileHardenedSurfaceOther[0]) {
      console.log(this.state.fileHardenedSurfaceOther[0]);
      form.append("fileHardenedSurfaceOther", this.state.fileHardenedSurfaceOther[0]);
    }

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
          <div className="App-header-top">
            Datachecker
          </div>
          <div className="App-header-bottom"></div>
        </header>
        <main className="App-main">
          <form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
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
              Oppervlakte water
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
                    <td>Aanvullende data</td>
                    <td>Verhard oppervlak</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-gwsw-hydx" value="gwsw-hydx" checked={this.state.deliveryFormatGWSW} onChange={this.handleChangeDeliveryFormatGWSW} />
                      GWSW Hydx (aanbevolen)
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-verhard-oppervlak" value="verhard-oppervlak" checked={this.state.additionalDataHardenedSurface} onChange={this.handleChangeAdditionalDataHardenedSurface} />
                      Verhard oppervlak
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-bgt-inloopmodel" value="bgt-inloopmodel" checked={this.state.hardenedSurfaceBGT} onChange={this.handleChangeHardenedSurfaceBGT} />
                      BGT inloopmodel
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-suf-hydx" value="suf-hydx" checked={this.state.deliveryFormatSuf} onChange={this.handleChangeDeliveryFormatSuf} />
                      Suf Hydx (aanbevolen)
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-drinkwater-gebruik" value="drinkwater-gebruik" checked={this.state.additionalDataDrinkingWaterUsage} onChange={this.handleChangeAdditionalDataDrinkingWaterUsage} />
                      Drinkwater gebruik
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-anders-2" value="anders-2" checked={this.state.hardenedSurfaceOther} onChange={this.handleChangeHardenedSurfaceOther} />
                      Anders
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-gbi" value="gbi" checked={this.state.deliveryFormatGBI} onChange={this.handleChangeDeliveryFormatGBI} />
                      GBI
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-bemalings-gebieden" value="bemalings-gebieden" checked={this.state.additionalDataDrainageAreas} onChange={this.handleChangeAdditionalDataDrainageAreas} />
                      Bemalings gebieden
                    </td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="model-data-anders" value="anders" checked={this.state.deliveryFormatOther} onChange={this.handleChangedeliveryFormatOther} />
                      Anders
                    </td>
                    <td>
                      <input type="checkbox" name="model-data-andere-data" value="andere-data" checked={this.state.additionalDataOtherData} onChange={this.handleChangeAdditionalDataOtherData} />
                      Andere data
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
              Upload bestanden voor GWSW Hydx
              <br />
              <input type="file" name="gwsw-hydx-file" onChange={this.handleChangeFileDeliveryFormatGWSW} />
              <br />
              <br />
              Upload bestanden voor Suf-Hyd
              <br />
              <input type="file" name="suf-hyd-file" onChange={this.handleChangeFileDeliveryFormatSuf} />
              <br />
              <br />
              Upload bestanden voor GBI
              <br />
              <input type="file" name="gbi-file" onChange={this.handleChangeFileDeliveryFormatGBI} />
              <br />
              <br />
              Upload bestanden voor een ander aanleverformaat
              <br />
              <input type="file" name="ander-file" onChange={this.handleChangeFileDeliveryFormatOther} />
              <br />
              <br />
              Upload bestanden voor Verhard oppervlak
              <br />
              <input type="file" name="verhard-oppervlak-file" onChange={this.handleChangeFileAdditionalDataHardenedSurface} />
              <br />
              <br />
              Upload bestanden voor Verhard oppervlak - BGT inloopmodel
              <br />
              <input type="file" name="verhard-oppervlak-bgt-file" onChange={this.handleChangeFileHardenedSurfaceBGT} />
              <br />
              <br />
              Upload bestanden voor Verhard oppervlak - Anders
              <br />
              <input type="file" name="verhard-oppervlak-anders-file" onChange={this.handleChangeFileHardenedSurfaceOther} />
              <br />
              <br />
              Upload bestanden voor Drinkwater gebruik
              <br />
              <input type="file" name="drinkwater-gebruik-file" onChange={this.handleChangeFileAdditionalDataDrinkingWaterUsage} />
              <br />
              <br />
              Upload bestanden voor Bemalings Gebieden
              <br />
              <input type="file" name="bemalings-gebieden-file" onChange={this.handleChangeFileAdditionalDataDrainageAreas} />
              <br />
              <br />
              Upload bestanden voor Andere data
              <br />
              <input type="file" name="andere-data-file" onChange={this.handleChangeFileAdditionalDataOtherData} />
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
        </footer>
      </div>
    );
  }
}

export default App;
