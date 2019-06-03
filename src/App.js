import React, {Component} from 'react';
import './App.css';


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
    this.setState({folderName: event.target.value}); // gives error that this is undefined..
  }

  // Submit
  handleSubmit(event) {
    console.log(this.state);

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

    // Create the metadata file

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
          <form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
            <div>
              1 Wat voor model wilt u checken?
              <br />
              <input type="radio" name="model-type-riolering" value="riolering" checked={this.state.modelTypeRiolering} onChange={this.handleChangeModelTypeRiolering} />
              Riolering
              <br />
              <input type="radio" name="model-type-oppervlakte-water" value="oppervlakte-water" checked={this.state.modelTypeOppervlakteWater} onChange={this.handleChangeModelTypeOppervlakteWater} disabled/>
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
              <button>VOLGENDE</button>
              <br />
              <br />
            </div>
            <div>
              3 Upload bestanden voor GWSW Hydx
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
              <input type="text" name="folderName" value={this.state.folderName} onChange={this.handleChangeFolderName} placeholder="Folder" />
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
