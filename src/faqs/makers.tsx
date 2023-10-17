import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>
    <h2>Local demands meet local makers</h2>
    </p>
<p>
We aim to match individual production demands with local makerspaces and FabLabs to empower DIY skills and local making.
Therefore we want to involve more makerspaces and FabLabs from different regions and promote them here.
</p>
<p>
Also you can use parameo to easily manufacture individual products for your makerspace and even offer your own product designs.  
</p>
<p>
<b>Feel free to hit us up via the contact form to join our journey!</b>
    </p>
  </>
);

export default {
  title: "For makers",
  id: "for-makers",
  tags: ["Manufacturing"],
  body,
  teaser:
    "Makers empowering makers",
  showOnHomePage: false,
  order: 5,
} as IFaqFile;
