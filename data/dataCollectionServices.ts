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
        "tab3SubDescr1",
        "tab3SubDescr2",
        "tab3SubDescr3",
        "tab3SubDescr4",
        "tab3SubDescr5",
        "tab3SubDescr6",
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
      [
        "tab4SubDescr1",
        "tab4SubDescr2",
        "tab4SubDescr3",
        "tab4SubDescr4",
        "tab4SubDescr5",
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
        "tab5SubDescr1",
        "tab5SubDescr2",
        "tab5SubDescr3",
        "tab5SubDescr4",
        "tab5SubDescr5",
        "tab5SubDescr6",
        "tab5SubDescr7",
        "tab5SubDescr8",
        "tab5SubDescr9",
        "tab5SubDescr10",
        "tab5SubDescr11",
        "tab5SubDescr12",
        "tab5SubDescr13",
        "tab5SubDescr14",
        "tab5SubDescr15",
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
      ["tab6SubDescr1", "tab6SubDescr2", "tab6SubDescr3", "tab6SubDescr4"],
      "tab6Descr2",
    ],
  },
];
