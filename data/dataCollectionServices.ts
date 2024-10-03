import img1 from "@/images/gestion-des-comptes.svg";
import img2 from "@/images/recouvrement-des-creances.svg";
import img3 from "@/images/lelaboration-dune-politique.svg";
import img4 from "@/images/la-revision-et-la-redaction.svg";
import img5 from "@/images/letablissement-de-scripts.svg";
import img6 from "@/images/conseils-et-accompagnement.svg";

export interface CollectionServicesItem {
  id: string;
  title: string;
  img: string;
  description: string[];
}

export const dataCollectionServices = [
  {
    id: "gestion-des-comptes-recevables",
    title: "tabTitle1",
    img: img1,
    description: ["tab1Descr1", "tab1Descr2", "tab1Descr3"],
  },
  {
    id: "recouvrement-des-creances",
    title: "tabTitle2",
    img: img2,
    description: ["tab2Descr1", "tab2Descr2", "tab2Descr3", "tab2Descr4"],
  },
  {
    id: "lelaboration-dune-politique-de-recouvrement",
    title: "tabTitle3",
    img: img3,
    description: [
      "tab3Descr1",
      [
        { title: "tab3SubTitle1", desc: "tab3SubDescr1" },
        { title: "tab3SubTitle2", desc: "tab3SubDescr2" },
        { title: "tab3SubTitle3", desc: "tab3SubDescr3" },
        { title: "tab3SubTitle4", desc: "tab3SubDescr4" },
        { title: "tab3SubTitle5", desc: "tab3SubDescr5" },
        { title: "tab3SubTitle6", desc: "tab3SubDescr6" },
      ],
      "tab3Descr2",
    ],
  },
  {
    id: "la-revision-et-la-redaction-des-contrats",
    title: "tabTitle4",
    img: img4,
    description: [
      "tab4Descr1",
      "tab4SubDescr1",
      [
        { title: "tab4SubTitle2", desc: "tab4SubDescr2" },
        { title: "tab4SubTitle3", desc: "tab4SubDescr3" },
        { title: "tab4SubTitle4", desc: "tab4SubDescr4" },
        { title: "tab4SubTitle5", desc: "tab4SubDescr5" },
      ],
      "tab4Descr2",
    ],
  },
  {
    id: "letablissement-de-scripts",
    title: "tabTitle5",
    img: img5,
    description: [
      "tab5Descr1",
      "tab5Descr2",
      [
        { title: "tab5SubTitle1", desc: "tab5SubDescr1" },
        { title: "tab5SubTitle2", desc: "tab5SubDescr2" },
        { title: "tab5SubTitle3", desc: "tab5SubDescr3" },
        { title: "tab5SubTitle4", desc: "tab5SubDescr4" },
        { title: "tab5SubTitle5", desc: "tab5SubDescr5" },
        { title: "tab5SubTitle6", desc: "tab5SubDescr6" },
        { title: "tab5SubTitle7", desc: "tab5SubDescr7" },
        { title: "tab5SubTitle8", desc: "tab5SubDescr8" },
        { title: "tab5SubTitle9", desc: "tab5SubDescr9" },
        { title: "tab5SubTitle10", desc: "tab5SubDescr10" },
        { title: "tab5SubTitle11", desc: "tab5SubDescr11" },
        { title: "tab5SubTitle12", desc: "tab5SubDescr12" },
        { title: "tab5SubTitle13", desc: "tab5SubDescr13" },
        { title: "tab5SubTitle14", desc: "tab5SubDescr14" },
        { title: "tab5SubTitle15", desc: "tab5SubDescr15" },
      ],
      "tab5Descr3",
    ],
  },
  {
    id: "conseils-et-accompagnement-juridiques",
    title: "tabTitle6",
    img: img6,
    description: [
      "tab6Descr1",
      [
        { title: "tab6SubTitle1", desc: "tab6SubDescr1" },
        { title: "tab6SubTitle2", desc: "tab6SubDescr2" },
        { title: "tab6SubTitle3", desc: "tab6SubDescr3" },
        { title: "tab6SubTitle4", desc: "tab6SubDescr4" },
      ],
      "tab6Descr2",
    ],
  },
];
