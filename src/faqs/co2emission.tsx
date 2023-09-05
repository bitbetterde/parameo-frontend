import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>Environmental, social and economic impact valuation.</p>

    <h4>Methodology:</h4>
    <ul>
      <li>
        <a
          href="https://ecochain.com/blog/life-cycle-assessment-lca-guide/"
          target="_blank"
        >
          Product Lifecycle Assessment
        </a>
      </li>
    </ul>

    <h4>Standards:</h4>
    <ul>
      <li>
        <a
          href="https://ecochain.com/blog/iso-14000-iso-14001-standards/"
          target="_blank"
        >
          ISO 14000 Environmental Managementstandards
        </a>
      </li>

      <li>
        <a href="https://ghgprotocol.org/" target="_blank">
          PAS 2050 GHG Protocol Carbon Footprinting
        </a>
      </li>
    </ul>

    <h4>Certificates:</h4>
    <ul>
      <li>
        <a href="https://fsc.org/en/fsc-standards" target="_blank">
          FSC (Forest Stewardship Council) international wood certification for
          sustainable forestry management
        </a>
      </li>
      <li>
        <a
          href="https://pefc.org/discover-pefc/facts-and-figures"
          target="_blank"
        >
          PEFC (Program for the Endorsement of Forest Certification)
        </a>
      </li>
    </ul>

    <h4>Resources:</h4>
    <ul>
      <li>
        <a
          href="https://www.probas.umweltbundesamt.de/php/index.php"
          target="_blank"
        >
          German Material Emission Database
        </a>
      </li>

      <li>
        <a
          href="https://www.umweltbundesamt.de/sites/default/files/medien/11740/publikationen/2023_05_23_climate_change_20-2023_strommix.pdf"
          target="_blank"
        >
          German Energy Emission Database
        </a>
      </li>

      <li>
        <a href="https://www.openlca.org/" target="_blank">
          Open Source LCA Tool
        </a>
      </li>
    </ul>

    <h4>Publications:</h4>
    <ul>
      <li>
        <a href="https://www.bmel.de/EN/Home/home_node.html" target="_blank">
          Federal Ministry of Food and Agriculture
        </a>
      </li>
      <li>
        <a href="https://www.charta-fuer-holz.de/" target="_blank">
          "Charta für Holz 2.0" Bundesministerium für Ernährung und
          Landwirtschaft
        </a>
      </li>
      <li>
        <a
          href="https://www.bmel.de/SharedDocs/Downloads/DE/Broschueren/Waldstrategie2050.pdf"
          target="_blank"
        >
          "Waldstrategie 2050" Bundesministerium für Ernährung und
          Landwirtschaft
        </a>
      </li>
      <li>
        <a
          href="https://www.umweltbundesamt.de/daten/land-forstwirtschaft/nachhaltige-waldwirtschaft#die-vielfaltigen-funktionen-des-waldes"
          target="_blank"
        >
          "Nachhaltige Waldwirtschaft" Umweltbundesamt
        </a>
      </li>
    </ul>
  </>
);

export default {
  title: "CO2 Emission",
  id: "co2",
  tags: ["Manufacturing"],
  body,
  teaser: "Your environmental footprint",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
