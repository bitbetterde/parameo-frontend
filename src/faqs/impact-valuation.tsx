import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>parameo calculates the individual impact value indicated by material (origin, type, processing, quantity) and machine runtime (electricity consumption).</p>

    <h4>Approach:</h4>
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
        <a href="https://commission.europa.eu/system/files/2023-09/BR%20toolbox%20-%20Jul%202023%20-%20FINAL.pdf" target="_blank">
          "Better Regulation TOOLBOX 2023" European Commission
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
  title: "Impact valuation",
  id: "impact-valuation",
  tags: ["Manufacturing"],
  body,
  teaser: "Calculating your environmental footprint",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
