import type { IFaqFile } from "@interfaces";

const body = (
  <>
    <h2>Are you ready to be part of something remarkable?</h2>
    <p>
    <b> Join the Revolution: </b> <br/>
    Open source is the future of technology. Be at the forefront of the movement, shaping the way software is developed and shared.
    </p>
    <p>
<b> Give Back: </b> <br/>
Open source is about giving back to the community. Your contribution helps others, fostering a culture of mutual support and innovation.
</p>
<p>
<b> Make Your Mark: </b> <br/>
Your code, your ideas, your expertise – they all count. By contributing, you leave a lasting imprint on a project that could reshape industries or improve lives.
</p>
<p>
Your passion, creativity, and commitment can drive this project to new heights. Join us on GitLab and let's build something amazing together. 
<b> Embrace the open-source spirit and be a part of our journey!</b>
    </p>
  </>
);

export default {
  title: "For developers",
  id: "for-developers",
  tags: ["Code"],
  body,
  teaser:
    "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
  showOnHomePage: false,
  order: 3,
} as IFaqFile;
