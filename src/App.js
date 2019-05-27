import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
        <form>
          <div>
            1 Wat voor model wilt u checken?
            <br />
            <input type="radio" name="model-type-riolering" value="riolering" />
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
              <tr>
                <td>Aanleverformaat</td>
                <td>Aanvullende data</td>
                <td>Verhard oppervlak</td>
              </tr>
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
            </table>
            <button>VOLGENDE</button>
            <br />
            <br />
          </div>
          <div>
            3 Upload bestanden voor GWSW Hydx
            <br />
            <input type="file" name="gwsw-hydx-file" value="" />
            <br />
            <br />
            Upload bestanden voor Suf-Hyd
            <br />
            <input type="file" name="suf-hyd-file" value="" />
            <br />
            <br />
            Upload bestanden voor een ander aanleverformaat
            <br />
            <input type="file" name="ander-file" value="" />
            <br />
            <br />
            Upload bestanden voor Verhard oppervlak - BGT inloopmodel
            <br />
            <input type="file" name="verhard-opplervlak-bgt-inloopmodel" value="" />
            <br />
            <br />
            Upload bestanden voor Drinkwater gebruik
            <br />
            <input type="file" name="drinkwater-gebruik-file" value="" />
            <br />
            <br />
            Upload bestanden voor Andere data
            <br />
            <input type="file" name="andere-data-file" value="" />
            <br />
            <br />
            <button>VOLGENDE</button>
            <br />
            <br />
          </div>
          <div>
            4 Naam en email-adres
            <br />
            <input type="text" name="name" value="" placeholder="Name" />
            <br />
            <input type="text" name="email" value="" placeholder="Email" />
            <br />
            <button>VOLGENDE</button>
            <br />
            <br />
          </div>
          <div>
            U bent nu klaar. Controleer nog een keer uw aangeleverde data of verzend direct.
            <button>VERZENDEN</button>
          </div>
        </form>
      </main>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
