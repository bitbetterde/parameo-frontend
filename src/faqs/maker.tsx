import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <p>
It's great that you decided to use parameo to build or have new products built for you. Either way, you support us in promoting local production. If you encounter any problems during configuration, assembly or anything else, please let us know via the contact form. If you have found any bugs or have suggestions for improvement, please let us know! Of course, we are most happy about parameo products that have been successfully built - feel free to send a picture or tag us!
    </p>
  </>
);

export default {
  title: "Maker",
  id: "maker",
  tags: ["Manufacturing"],
  body,
  teaser:
    "Makers empowering makers",
  showOnHomePage: false,
  order: 5,
} as IFaqFile;
