// src/api/compoundApi.ts
export interface Compound {
  id: number;
  name: string;
  image: string;
  mpoScore: number;
  cLogP: number;
  hBondAcceptors: number;
  hBondDonors: number;
  mass: number;
  admetScore: number;
  syntheticAccessibility: number;
}

const mockData: Compound[] = [
  {
    id: 0,
    name: "CN1[C@H](COc2nc3cc(-c4cc(O)cc5ccccc45)ncc3c(N3CC(CC4)NC4C3)n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/000_dummy.png`,
    mpoScore: 7.74,
    cLogP: 0.06,
    hBondAcceptors: 6,
    hBondDonors: 5,
    mass: 411.94,
    admetScore: 0.12,
    syntheticAccessibility: 8.87,
  },
  {
    id: 1,
    name: "CN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/001_dummy.png`,
    mpoScore: 4.3,
    cLogP: 4.74,
    hBondAcceptors: 8,
    hBondDonors: 1,
    mass: 308.48,
    admetScore: 0.4,
    syntheticAccessibility: 3.9,
  },
  {
    id: 2,
    name: "Cn1c(CCOc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)ncc1",
    image: `${process.env.PUBLIC_URL}/images/002_dummy.png`,
    mpoScore: 9.43,
    cLogP: 3.87,
    hBondAcceptors: 3,
    hBondDonors: 5,
    mass: 464.29,
    admetScore: 0.53,
    syntheticAccessibility: 7.96,
  },
  {
    id: 3,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCc3ncccc3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/003_dummy.png`,
    mpoScore: 3.6,
    cLogP: 1.15,
    hBondAcceptors: 3,
    hBondDonors: 4,
    mass: 237.98,
    admetScore: 0.62,
    syntheticAccessibility: 3.52,
  },
  {
    id: 4,
    name: "Cn1nccc1COc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/004_dummy.png`,
    mpoScore: 4.33,
    cLogP: 0.57,
    hBondAcceptors: 7,
    hBondDonors: 0,
    mass: 357.7,
    admetScore: 0.37,
    syntheticAccessibility: 2.46,
  },
  {
    id: 5,
    name: "Cc1cccnc1CCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/005_dummy.png`,
    mpoScore: 8.86,
    cLogP: 0.75,
    hBondAcceptors: 3,
    hBondDonors: 1,
    mass: 444.44,
    admetScore: 0.22,
    syntheticAccessibility: 6.27,
  },
  {
    id: 6,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCc3ncccn3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/006_dummy.png`,
    mpoScore: 2.79,
    cLogP: 2.1,
    hBondAcceptors: 5,
    hBondDonors: 4,
    mass: 341.05,
    admetScore: 0.01,
    syntheticAccessibility: 7.21,
  },
  {
    id: 7,
    name: "Cn1nc(COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)cc1",
    image: `${process.env.PUBLIC_URL}/images/007_dummy.png`,
    mpoScore: 5.4,
    cLogP: 4.09,
    hBondAcceptors: 9,
    hBondDonors: 4,
    mass: 359.4,
    admetScore: 0.4,
    syntheticAccessibility: 9.44,
  },
  {
    id: 8,
    name: "Cn1cnc(COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)c1",
    image: `${process.env.PUBLIC_URL}/images/008_dummy.png`,
    mpoScore: 7.28,
    cLogP: 1.4,
    hBondAcceptors: 3,
    hBondDonors: 0,
    mass: 493.79,
    admetScore: 0.01,
    syntheticAccessibility: 9.55,
  },
  {
    id: 9,
    name: "CN1[C@H](CCOc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/009_dummy.png`,
    mpoScore: 7.96,
    cLogP: 3.14,
    hBondAcceptors: 8,
    hBondDonors: 4,
    mass: 310.45,
    admetScore: 0.29,
    syntheticAccessibility: 2.55,
  },
  {
    id: 10,
    name: "CCN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/010_dummy.png`,
    mpoScore: 5.33,
    cLogP: 2.94,
    hBondAcceptors: 4,
    hBondDonors: 1,
    mass: 309.63,
    admetScore: 0.91,
    syntheticAccessibility: 6.93,
  },
  {
    id: 11,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OC[C@H]3N(Cc4ccccc4)CCC3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/011_dummy.png`,
    mpoScore: 7.91,
    cLogP: 1.94,
    hBondAcceptors: 0,
    hBondDonors: 2,
    mass: 274.66,
    admetScore: 0.19,
    syntheticAccessibility: 4.77,
  },
  {
    id: 12,
    name: "CN(C)C(CCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1)=O",
    image: `${process.env.PUBLIC_URL}/images/012_dummy.png`,
    mpoScore: 6.93,
    cLogP: 2.39,
    hBondAcceptors: 5,
    hBondDonors: 3,
    mass: 319.52,
    admetScore: 0.09,
    syntheticAccessibility: 4.7,
  },
  {
    id: 13,
    name: "CN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c(c3ccccc33)cc(O)c3Br)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/013_dummy.png`,
    mpoScore: 1.86,
    cLogP: 1.5,
    hBondAcceptors: 0,
    hBondDonors: 4,
    mass: 247.44,
    admetScore: 0.75,
    syntheticAccessibility: 6.86,
  },
  {
    id: 14,
    name: "Cc1c2c(-c(ncc(c3n4)c(N5CC(CC6)NC6C5)nc4OC[C@H]4N(C)CCC4)c3F)cccc2ccc1",
    image: `${process.env.PUBLIC_URL}/images/014_dummy.png`,
    mpoScore: 5.55,
    cLogP: 4.74,
    hBondAcceptors: 8,
    hBondDonors: 4,
    mass: 494.39,
    admetScore: 0.51,
    syntheticAccessibility: 9.76,
  },
  {
    id: 15,
    name: "CN(C1)[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)C[C@H]1F",
    image: `${process.env.PUBLIC_URL}/images/015_dummy.png`,
    mpoScore: 7.97,
    cLogP: 1.82,
    hBondAcceptors: 3,
    hBondDonors: 2,
    mass: 371.7,
    admetScore: 0.8,
    syntheticAccessibility: 2.54,
  },
  {
    id: 16,
    name: "C[C@H](CN(C)C)Oc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/016_dummy.png`,
    mpoScore: 7.07,
    cLogP: 1.82,
    hBondAcceptors: 9,
    hBondDonors: 1,
    mass: 255.15,
    admetScore: 0.45,
    syntheticAccessibility: 0.91,
  },
  {
    id: 17,
    name: "CN(C)CCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/017_dummy.png`,
    mpoScore: 8.04,
    cLogP: 3.75,
    hBondAcceptors: 1,
    hBondDonors: 0,
    mass: 210.85,
    admetScore: 0.86,
    syntheticAccessibility: 6.2,
  },
  {
    id: 18,
    name: "CN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c(c3c4)cccc3ccc4F)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/018_dummy.png`,
    mpoScore: 7.6,
    cLogP: 2.16,
    hBondAcceptors: 0,
    hBondDonors: 4,
    mass: 465.39,
    admetScore: 0.7,
    syntheticAccessibility: 0.66,
  },
  {
    id: 19,
    name: "CN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cccc4ccccc34)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/019_dummy.png`,
    mpoScore: 9.57,
    cLogP: 2.92,
    hBondAcceptors: 0,
    hBondDonors: 3,
    mass: 471.38,
    admetScore: 0.36,
    syntheticAccessibility: 2.41,
  },
  {
    id: 20,
    name: "CN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c(CCCC4)c4ccc3)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/020_dummy.png`,
    mpoScore: 9.22,
    cLogP: 1.37,
    hBondAcceptors: 6,
    hBondDonors: 1,
    mass: 266.33,
    admetScore: 0.78,
    syntheticAccessibility: 0.91,
  },
  {
    id: 21,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCCN3CCOCC3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/021_dummy.png`,
    mpoScore: 5.68,
    cLogP: 4.99,
    hBondAcceptors: 4,
    hBondDonors: 2,
    mass: 339.2,
    admetScore: 0.54,
    syntheticAccessibility: 2.96,
  },
  {
    id: 22,
    name: "CN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c(CCC4)c4ccc3)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/022_dummy.png`,
    mpoScore: 1.37,
    cLogP: 4.52,
    hBondAcceptors: 4,
    hBondDonors: 5,
    mass: 429.5,
    admetScore: 0.62,
    syntheticAccessibility: 2.71,
  },
  {
    id: 23,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCCN3[C@@H](C4)CO[C@@H]4C3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/023_dummy.png`,
    mpoScore: 4.62,
    cLogP: 0.29,
    hBondAcceptors: 3,
    hBondDonors: 4,
    mass: 246.44,
    admetScore: 0.5,
    syntheticAccessibility: 5.04,
  },
  {
    id: 24,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCN3CCOCC3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/024_dummy.png`,
    mpoScore: 4.79,
    cLogP: 0.97,
    hBondAcceptors: 3,
    hBondDonors: 2,
    mass: 475.82,
    admetScore: 0.64,
    syntheticAccessibility: 9.07,
  },
  {
    id: 25,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCN3[C@@H](C4)CO[C@@H]4C3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/025_dummy.png`,
    mpoScore: 7.7,
    cLogP: 1.42,
    hBondAcceptors: 10,
    hBondDonors: 3,
    mass: 483.64,
    admetScore: 0.91,
    syntheticAccessibility: 3.47,
  },
  {
    id: 26,
    name: "CC(C1N(C)CCC1)Oc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/026_dummy.png`,
    mpoScore: 9.29,
    cLogP: 1.8,
    hBondAcceptors: 9,
    hBondDonors: 5,
    mass: 354.07,
    admetScore: 0.17,
    syntheticAccessibility: 8.45,
  },
  {
    id: 27,
    name: "CN(C1)[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)C[C@H]1C(F)(F)F",
    image: `${process.env.PUBLIC_URL}/images/027_dummy.png`,
    mpoScore: 5.81,
    cLogP: 0.05,
    hBondAcceptors: 7,
    hBondDonors: 2,
    mass: 450.12,
    admetScore: 0.7,
    syntheticAccessibility: 6.62,
  },
  {
    id: 28,
    name: "CC(C)N1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4ccc3)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/028_dummy.png`,
    mpoScore: 2.85,
    cLogP: 0.84,
    hBondAcceptors: 6,
    hBondDonors: 1,
    mass: 461.78,
    admetScore: 0.42,
    syntheticAccessibility: 0.04,
  },
  {
    id: 29,
    name: "Cn1c(cccc2)c2nc1CCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/029_dummy.png`,
    mpoScore: 9.39,
    cLogP: 0.84,
    hBondAcceptors: 7,
    hBondDonors: 1,
    mass: 394.68,
    admetScore: 0.78,
    syntheticAccessibility: 3.33,
  },
  {
    id: 30,
    name: "CN1[C@H](COc2nc(N3CC([C@@H](C4)O)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/030_dummy.png`,
    mpoScore: 6.96,
    cLogP: 2.35,
    hBondAcceptors: 3,
    hBondDonors: 5,
    mass: 366.04,
    admetScore: 0.48,
    syntheticAccessibility: 8.53,
  },
  {
    id: 31,
    name: "O[C@@H](C1)[C@H](C2)N[C@@H]1CN2c1c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2nc(OCCc(cc2)ncc2F)n1",
    image: `${process.env.PUBLIC_URL}/images/031_dummy.png`,
    mpoScore: 2.31,
    cLogP: 0.58,
    hBondAcceptors: 5,
    hBondDonors: 2,
    mass: 375.7,
    admetScore: 0.5,
    syntheticAccessibility: 1.63,
  },
  {
    id: 32,
    name: "Fc(c1n2)c(-c3c4c(Cl)cccc4cnc3)ncc1c(N1CC(CC3)NC3C1)nc2OCC1(CCC2)N2CCC1",
    image: `${process.env.PUBLIC_URL}/images/032_dummy.png`,
    mpoScore: 1.41,
    cLogP: 0.35,
    hBondAcceptors: 1,
    hBondDonors: 5,
    mass: 342.17,
    admetScore: 0.63,
    syntheticAccessibility: 3.83,
  },
  {
    id: 33,
    name: "CN(C1)[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4ccc3)c3F)c3n2)C[C@H]1OC",
    image: `${process.env.PUBLIC_URL}/images/033_dummy.png`,
    mpoScore: 4.63,
    cLogP: 1.65,
    hBondAcceptors: 7,
    hBondDonors: 2,
    mass: 347.72,
    admetScore: 0.71,
    syntheticAccessibility: 2.32,
  },
  {
    id: 34,
    name: "OCC(CO)COc1nc(N2CC(CC3)NC3C2)c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/034_dummy.png`,
    mpoScore: 8.0,
    cLogP: 0.95,
    hBondAcceptors: 3,
    hBondDonors: 2,
    mass: 349.66,
    admetScore: 0.81,
    syntheticAccessibility: 5.39,
  },
  {
    id: 35,
    name: "Oc1cc(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCC3(CCC4)N4CCC3)c2F)c2c(Cl)cccc2c1",
    image: `${process.env.PUBLIC_URL}/images/035_dummy.png`,
    mpoScore: 9.06,
    cLogP: 3.31,
    hBondAcceptors: 6,
    hBondDonors: 0,
    mass: 433.67,
    admetScore: 0.86,
    syntheticAccessibility: 3.24,
  },
  {
    id: 36,
    name: "OC(C1)CN1c1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/036_dummy.png`,
    mpoScore: 8.99,
    cLogP: 2.71,
    hBondAcceptors: 8,
    hBondDonors: 1,
    mass: 342.26,
    admetScore: 0.91,
    syntheticAccessibility: 8.41,
  },
  {
    id: 37,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCCC(F)(F)F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/037_dummy.png`,
    mpoScore: 8.08,
    cLogP: 0.51,
    hBondAcceptors: 5,
    hBondDonors: 1,
    mass: 455.59,
    admetScore: 0.59,
    syntheticAccessibility: 6.41,
  },
  {
    id: 38,
    name: "COCCN(CC1)CCC1Oc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cccc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/038_dummy.png`,
    mpoScore: 9.2,
    cLogP: 0.0,
    hBondAcceptors: 9,
    hBondDonors: 1,
    mass: 292.75,
    admetScore: 0.48,
    syntheticAccessibility: 5.52,
  },
  {
    id: 39,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OC[C@H]3N(CC4)C[C@H]4C3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/039_dummy.png`,
    mpoScore: 1.1,
    cLogP: 3.62,
    hBondAcceptors: 6,
    hBondDonors: 4,
    mass: 494.88,
    admetScore: 0.16,
    syntheticAccessibility: 1.14,
  },
  {
    id: 40,
    name: "COCCCN(CC1)CCC1Oc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/040_dummy.png`,
    mpoScore: 4.97,
    cLogP: 3.18,
    hBondAcceptors: 9,
    hBondDonors: 1,
    mass: 221.35,
    admetScore: 0.34,
    syntheticAccessibility: 6.54,
  },
  {
    id: 41,
    name: "CN(C1)[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)C[C@H]1OC",
    image: `${process.env.PUBLIC_URL}/images/041_dummy.png`,
    mpoScore: 9.19,
    cLogP: 0.64,
    hBondAcceptors: 0,
    hBondDonors: 4,
    mass: 444.67,
    admetScore: 0.54,
    syntheticAccessibility: 3.76,
  },
  {
    id: 42,
    name: "CCO[C@H]1CN(C)[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4ccc3)c3F)c3n2)C1",
    image: `${process.env.PUBLIC_URL}/images/042_dummy.png`,
    mpoScore: 2.85,
    cLogP: 4.34,
    hBondAcceptors: 8,
    hBondDonors: 5,
    mass: 256.38,
    admetScore: 0.43,
    syntheticAccessibility: 3.3,
  },
  {
    id: 43,
    name: "CN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c(cccc3cc4)c3c(Cl)c4F)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/043_dummy.png`,
    mpoScore: 9.82,
    cLogP: 4.12,
    hBondAcceptors: 8,
    hBondDonors: 4,
    mass: 345.3,
    admetScore: 0.26,
    syntheticAccessibility: 3.43,
  },
  {
    id: 44,
    name: "Fc(c1n2)c(-c3c4c(Cl)cccc4ccc3)ncc1c(N1CC(CC3)NC3C1)nc2OCC1(CCC2)N2CCC1",
    image: `${process.env.PUBLIC_URL}/images/044_dummy.png`,
    mpoScore: 3.68,
    cLogP: 3.81,
    hBondAcceptors: 10,
    hBondDonors: 5,
    mass: 272.48,
    admetScore: 0.24,
    syntheticAccessibility: 3.76,
  },
  {
    id: 45,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCC3(CCCC3)C(F)(F)F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/045_dummy.png`,
    mpoScore: 8.55,
    cLogP: 0.61,
    hBondAcceptors: 10,
    hBondDonors: 2,
    mass: 298.37,
    admetScore: 0.48,
    syntheticAccessibility: 0.25,
  },
  {
    id: 46,
    name: "CCCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/046_dummy.png`,
    mpoScore: 8.69,
    cLogP: 2.88,
    hBondAcceptors: 3,
    hBondDonors: 4,
    mass: 418.18,
    admetScore: 0.76,
    syntheticAccessibility: 0.88,
  },
  {
    id: 47,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCC(F)(F)F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/047_dummy.png`,
    mpoScore: 5.34,
    cLogP: 3.48,
    hBondAcceptors: 6,
    hBondDonors: 0,
    mass: 316.45,
    admetScore: 0.07,
    syntheticAccessibility: 4.09,
  },
  {
    id: 48,
    name: "O[C@H](C1)[C@@H](C2)N[C@H]1CN2c1c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2nc(OCC2(CCC3)N3CCC2)n1",
    image: `${process.env.PUBLIC_URL}/images/048_dummy.png`,
    mpoScore: 9.25,
    cLogP: 2.55,
    hBondAcceptors: 0,
    hBondDonors: 0,
    mass: 442.01,
    admetScore: 0.72,
    syntheticAccessibility: 7.97,
  },
  {
    id: 49,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OC[C@H]3NCCC3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/049_dummy.png`,
    mpoScore: 2.71,
    cLogP: 2.27,
    hBondAcceptors: 6,
    hBondDonors: 4,
    mass: 342.19,
    admetScore: 0.45,
    syntheticAccessibility: 7.89,
  },
  {
    id: 50,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCC3(CC3)C(F)(F)F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/050_dummy.png`,
    mpoScore: 3.02,
    cLogP: 1.75,
    hBondAcceptors: 7,
    hBondDonors: 0,
    mass: 402.52,
    admetScore: 0.39,
    syntheticAccessibility: 3.08,
  },
  {
    id: 51,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCC(C(F)F)(F)F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/051_dummy.png`,
    mpoScore: 5.34,
    cLogP: 1.34,
    hBondAcceptors: 2,
    hBondDonors: 5,
    mass: 445.42,
    admetScore: 0.09,
    syntheticAccessibility: 5.73,
  },
  {
    id: 52,
    name: "Fc(c1n2)c(-c3c4c(Cl)cccc4ccc3)ncc1c(N1CC(CC3)NC3C1)nc2OCC1COC1",
    image: `${process.env.PUBLIC_URL}/images/052_dummy.png`,
    mpoScore: 1.54,
    cLogP: 0.27,
    hBondAcceptors: 10,
    hBondDonors: 1,
    mass: 224.91,
    admetScore: 0.93,
    syntheticAccessibility: 1.46,
  },
  {
    id: 53,
    name: "Fc(c1n2)c(-c3c4c(Cl)cccc4ccc3)ncc1c(N1CC(CC3)NC3C1)nc2OCC1(CCC2)N2CCCC1",
    image: `${process.env.PUBLIC_URL}/images/053_dummy.png`,
    mpoScore: 4.86,
    cLogP: 1.31,
    hBondAcceptors: 6,
    hBondDonors: 3,
    mass: 254.86,
    admetScore: 0.75,
    syntheticAccessibility: 5.25,
  },
  {
    id: 54,
    name: "OC[C@@H](COc1nc(N2CC(CC3)NC3C2)c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2n1)O",
    image: `${process.env.PUBLIC_URL}/images/054_dummy.png`,
    mpoScore: 5.67,
    cLogP: 3.07,
    hBondAcceptors: 10,
    hBondDonors: 2,
    mass: 328.97,
    admetScore: 0.28,
    syntheticAccessibility: 9.94,
  },
  {
    id: 55,
    name: "OC[C@H](COc1nc(N2CC(CC3)NC3C2)c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2n1)O",
    image: `${process.env.PUBLIC_URL}/images/055_dummy.png`,
    mpoScore: 4.94,
    cLogP: 3.3,
    hBondAcceptors: 3,
    hBondDonors: 0,
    mass: 340.73,
    admetScore: 0.36,
    syntheticAccessibility: 4.51,
  },
  {
    id: 56,
    name: "OCC(CCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2n1)O",
    image: `${process.env.PUBLIC_URL}/images/056_dummy.png`,
    mpoScore: 6.07,
    cLogP: 2.44,
    hBondAcceptors: 7,
    hBondDonors: 2,
    mass: 470.43,
    admetScore: 0.6,
    syntheticAccessibility: 6.41,
  },
  {
    id: 57,
    name: "OCC[C@@H](CO)Oc1nc(N2CC(CC3)NC3C2)c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/057_dummy.png`,
    mpoScore: 5.15,
    cLogP: 4.18,
    hBondAcceptors: 4,
    hBondDonors: 3,
    mass: 274.07,
    admetScore: 0.09,
    syntheticAccessibility: 8.83,
  },
  {
    id: 58,
    name: "OCC(COc1nc(N2CC(CC3)NC3C2)c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2n1)c1cnccc1",
    image: `${process.env.PUBLIC_URL}/images/058_dummy.png`,
    mpoScore: 8.18,
    cLogP: 1.21,
    hBondAcceptors: 0,
    hBondDonors: 1,
    mass: 468.59,
    admetScore: 0.83,
    syntheticAccessibility: 8.55,
  },
  {
    id: 59,
    name: "OC(CCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2c3c(Cl)cccc3ccc2)c2F)c2n1)=O",
    image: `${process.env.PUBLIC_URL}/images/059_dummy.png`,
    mpoScore: 4.85,
    cLogP: 2.79,
    hBondAcceptors: 6,
    hBondDonors: 4,
    mass: 419.14,
    admetScore: 0.98,
    syntheticAccessibility: 1.41,
  },
  {
    id: 60,
    name: "Oc1c(C=O)cc(CCOc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4ccc3)c3F)c3n2)cc1",
    image: `${process.env.PUBLIC_URL}/images/060_dummy.png`,
    mpoScore: 4.11,
    cLogP: 0.34,
    hBondAcceptors: 9,
    hBondDonors: 3,
    mass: 298.51,
    admetScore: 0.01,
    syntheticAccessibility: 8.16,
  },
  {
    id: 61,
    name: "CN1[C@H](COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4cc(O)c3)c3F)c3n2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/061_dummy.png`,
    mpoScore: 3.44,
    cLogP: 2.32,
    hBondAcceptors: 10,
    hBondDonors: 2,
    mass: 496.86,
    admetScore: 0.06,
    syntheticAccessibility: 6.31,
  },
  {
    id: 62,
    name: "CC(C)(C)[Si](C)(C)OCC1N(CCC2)C2(COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4cc(O)c3)c3F)c3n2)CC1",
    image: `${process.env.PUBLIC_URL}/images/062_dummy.png`,
    mpoScore: 8.3,
    cLogP: 3.21,
    hBondAcceptors: 2,
    hBondDonors: 3,
    mass: 244.08,
    admetScore: 0.33,
    syntheticAccessibility: 9.87,
  },
  {
    id: 63,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCc(cccc3)c3F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/063_dummy.png`,
    mpoScore: 9.47,
    cLogP: 3.14,
    hBondAcceptors: 1,
    hBondDonors: 0,
    mass: 293.39,
    admetScore: 0.11,
    syntheticAccessibility: 6.51,
  },
  {
    id: 64,
    name: "COCCCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/064_dummy.png`,
    mpoScore: 7.03,
    cLogP: 0.9,
    hBondAcceptors: 0,
    hBondDonors: 5,
    mass: 456.11,
    admetScore: 0.92,
    syntheticAccessibility: 2.22,
  },
  {
    id: 65,
    name: "OCCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/065_dummy.png`,
    mpoScore: 3.25,
    cLogP: 0.09,
    hBondAcceptors: 5,
    hBondDonors: 1,
    mass: 319.1,
    admetScore: 0.1,
    syntheticAccessibility: 5.68,
  },
  {
    id: 66,
    name: "COCCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/066_dummy.png`,
    mpoScore: 6.66,
    cLogP: 1.76,
    hBondAcceptors: 1,
    hBondDonors: 2,
    mass: 247.0,
    admetScore: 0.62,
    syntheticAccessibility: 6.45,
  },
  {
    id: 67,
    name: "Oc1cc2ccccc2c(-c2ncc3c(N4CC(CC5)NC5C4)nc(OC(CC4)CCS4(=O)=O)nc3c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/067_dummy.png`,
    mpoScore: 5.31,
    cLogP: 4.43,
    hBondAcceptors: 4,
    hBondDonors: 3,
    mass: 254.11,
    admetScore: 0.46,
    syntheticAccessibility: 2.85,
  },
  {
    id: 68,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OC3CCOCC3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/068_dummy.png`,
    mpoScore: 7.96,
    cLogP: 0.42,
    hBondAcceptors: 10,
    hBondDonors: 2,
    mass: 296.71,
    admetScore: 0.15,
    syntheticAccessibility: 5.44,
  },
  {
    id: 69,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCC3CCCC3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/069_dummy.png`,
    mpoScore: 9.35,
    cLogP: 4.63,
    hBondAcceptors: 7,
    hBondDonors: 5,
    mass: 351.44,
    admetScore: 0.26,
    syntheticAccessibility: 3.73,
  },
  {
    id: 70,
    name: "Oc1cc2ccccc2c(-c(ncc2c(N3CC(CC4)NC4C3)nc(N(C3)CC33CCOCC3)nc22)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/070_dummy.png`,
    mpoScore: 8.45,
    cLogP: 2.02,
    hBondAcceptors: 3,
    hBondDonors: 0,
    mass: 230.75,
    admetScore: 0.61,
    syntheticAccessibility: 1.56,
  },
  {
    id: 71,
    name: "OCCCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/071_dummy.png`,
    mpoScore: 1.74,
    cLogP: 2.44,
    hBondAcceptors: 5,
    hBondDonors: 5,
    mass: 369.12,
    admetScore: 0.1,
    syntheticAccessibility: 1.41,
  },
  {
    id: 72,
    name: "Oc1cc2ccccc2c(-c(ncc2c(N3CC(CC4)NC4C3)nc(N(C3)CC33COCC3)nc22)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/072_dummy.png`,
    mpoScore: 7.32,
    cLogP: 3.21,
    hBondAcceptors: 5,
    hBondDonors: 0,
    mass: 442.67,
    admetScore: 0.77,
    syntheticAccessibility: 3.63,
  },
  {
    id: 73,
    name: "OC[C@H](CCC1)N1c1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/073_dummy.png`,
    mpoScore: 7.08,
    cLogP: 1.65,
    hBondAcceptors: 1,
    hBondDonors: 2,
    mass: 363.88,
    admetScore: 0.4,
    syntheticAccessibility: 5.5,
  },
  {
    id: 74,
    name: "CC(N(CC1)CCC1Oc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1)=O",
    image: `${process.env.PUBLIC_URL}/images/074_dummy.png`,
    mpoScore: 9.12,
    cLogP: 1.51,
    hBondAcceptors: 6,
    hBondDonors: 1,
    mass: 367.63,
    admetScore: 0.5,
    syntheticAccessibility: 8.76,
  },
  {
    id: 75,
    name: "Oc1cc2ccccc2c(-c2ncc3c(N4CC(CC5)NC5C4)nc(OC4CCSCC4)nc3c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/075_dummy.png`,
    mpoScore: 4.3,
    cLogP: 2.56,
    hBondAcceptors: 7,
    hBondDonors: 1,
    mass: 374.0,
    admetScore: 0.47,
    syntheticAccessibility: 4.6,
  },
  {
    id: 76,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OC(CC3)CCC3(F)F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/076_dummy.png`,
    mpoScore: 2.79,
    cLogP: 0.82,
    hBondAcceptors: 9,
    hBondDonors: 0,
    mass: 274.36,
    admetScore: 0.24,
    syntheticAccessibility: 6.78,
  },
  {
    id: 77,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCC(F)(F)F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/077_dummy.png`,
    mpoScore: 9.13,
    cLogP: 1.93,
    hBondAcceptors: 7,
    hBondDonors: 2,
    mass: 317.27,
    admetScore: 0.38,
    syntheticAccessibility: 4.59,
  },
  {
    id: 78,
    name: "Oc1cc2ccccc2c(-c2ncc3c(N4CC(CC5)NC5C4)nc(OC(CC4)CCS4=O)nc3c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/078_dummy.png`,
    mpoScore: 9.07,
    cLogP: 0.2,
    hBondAcceptors: 0,
    hBondDonors: 3,
    mass: 400.36,
    admetScore: 0.79,
    syntheticAccessibility: 0.89,
  },
  {
    id: 79,
    name: "O=C1N(CCC2)C2(COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4ccc3)c3F)c3n2)CC1",
    image: `${process.env.PUBLIC_URL}/images/079_dummy.png`,
    mpoScore: 4.47,
    cLogP: 3.81,
    hBondAcceptors: 0,
    hBondDonors: 0,
    mass: 207.41,
    admetScore: 0.81,
    syntheticAccessibility: 4.21,
  },
  {
    id: 80,
    name: "Cc1nccn1CCOc1nc(N2CC(CC3)NC3C2)c(cnc(-c2cc(O)cc3ccccc23)c2F)c2n1",
    image: `${process.env.PUBLIC_URL}/images/080_dummy.png`,
    mpoScore: 1.32,
    cLogP: 2.39,
    hBondAcceptors: 6,
    hBondDonors: 1,
    mass: 327.86,
    admetScore: 1.0,
    syntheticAccessibility: 9.82,
  },
  {
    id: 81,
    name: "CC(C)Cn1c(CCOc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)ncc1",
    image: `${process.env.PUBLIC_URL}/images/081_dummy.png`,
    mpoScore: 2.38,
    cLogP: 0.84,
    hBondAcceptors: 6,
    hBondDonors: 4,
    mass: 277.4,
    admetScore: 0.64,
    syntheticAccessibility: 5.15,
  },
  {
    id: 82,
    name: "COc1ncc(CCOc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4ccc3)c3F)c3n2)cc1",
    image: `${process.env.PUBLIC_URL}/images/082_dummy.png`,
    mpoScore: 3.64,
    cLogP: 3.22,
    hBondAcceptors: 4,
    hBondDonors: 3,
    mass: 417.39,
    admetScore: 0.17,
    syntheticAccessibility: 9.52,
  },
  {
    id: 83,
    name: "Cc1cccc(CCOc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)n1",
    image: `${process.env.PUBLIC_URL}/images/083_dummy.png`,
    mpoScore: 4.35,
    cLogP: 3.64,
    hBondAcceptors: 2,
    hBondDonors: 5,
    mass: 338.0,
    admetScore: 0.07,
    syntheticAccessibility: 7.8,
  },
  {
    id: 84,
    name: "Cc(ccc1c2cn[nH]1)c2-c(ncc(c1n2)c(N3CC(CC4)NC4C3)nc2OCCc2nccn2C)c1F",
    image: `${process.env.PUBLIC_URL}/images/084_dummy.png`,
    mpoScore: 2.77,
    cLogP: 2.93,
    hBondAcceptors: 7,
    hBondDonors: 4,
    mass: 483.04,
    admetScore: 0.35,
    syntheticAccessibility: 2.39,
  },
  {
    id: 85,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCc3ncccc3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/085_dummy.png`,
    mpoScore: 9.76,
    cLogP: 3.95,
    hBondAcceptors: 4,
    hBondDonors: 3,
    mass: 434.71,
    admetScore: 0.84,
    syntheticAccessibility: 0.25,
  },
  {
    id: 86,
    name: "Fc1ccc(cccc2-c(ncc(c3n4)c(N5CC(CC6)NC6C5)nc4OCCc4cnccc4)c3F)c2c1",
    image: `${process.env.PUBLIC_URL}/images/086_dummy.png`,
    mpoScore: 9.38,
    cLogP: 2.53,
    hBondAcceptors: 0,
    hBondDonors: 2,
    mass: 445.88,
    admetScore: 0.44,
    syntheticAccessibility: 6.54,
  },
  {
    id: 87,
    name: "CC(C)n1c(CCOc2nc(N3CC(CC4)NC4C3)c(cnc(-c(c3ccccc3cc3)c3O)c3F)c3n2)ncc1",
    image: `${process.env.PUBLIC_URL}/images/087_dummy.png`,
    mpoScore: 2.01,
    cLogP: 3.21,
    hBondAcceptors: 10,
    hBondDonors: 1,
    mass: 257.62,
    admetScore: 0.17,
    syntheticAccessibility: 7.67,
  },
  {
    id: 88,
    name: "Fc(c1n2)c(-c3c4c(Cl)cccc4ccc3)ncc1c(N1CC(CC3)NC3C1)nc2OCCc1cn(cccc2)c2n1",
    image: `${process.env.PUBLIC_URL}/images/088_dummy.png`,
    mpoScore: 4.9,
    cLogP: 0.83,
    hBondAcceptors: 3,
    hBondDonors: 4,
    mass: 311.4,
    admetScore: 0.27,
    syntheticAccessibility: 3.6,
  },
  {
    id: 89,
    name: "FC1(CN(CCC2)C2(COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3c4c(Cl)cccc4ccc3)c3F)c3n2)C1)F",
    image: `${process.env.PUBLIC_URL}/images/089_dummy.png`,
    mpoScore: 2.02,
    cLogP: 2.21,
    hBondAcceptors: 5,
    hBondDonors: 0,
    mass: 302.47,
    admetScore: 0.22,
    syntheticAccessibility: 1.24,
  },
  {
    id: 90,
    name: "Cn1c(CCOc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cccc4ccccc34)c3F)c3n2)ncc1",
    image: `${process.env.PUBLIC_URL}/images/090_dummy.png`,
    mpoScore: 6.32,
    cLogP: 4.88,
    hBondAcceptors: 0,
    hBondDonors: 3,
    mass: 277.38,
    admetScore: 0.86,
    syntheticAccessibility: 6.16,
  },
  {
    id: 91,
    name: "Cn1c(COc2nc(N3CC(CC4)NC4C3)c(cnc(-c3cc(O)cc4ccccc34)c3F)c3n2)cnc1",
    image: `${process.env.PUBLIC_URL}/images/091_dummy.png`,
    mpoScore: 9.32,
    cLogP: 4.63,
    hBondAcceptors: 10,
    hBondDonors: 2,
    mass: 342.34,
    admetScore: 0.61,
    syntheticAccessibility: 3.76,
  },
  {
    id: 92,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCc3ccccc3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/092_dummy.png`,
    mpoScore: 7.73,
    cLogP: 2.58,
    hBondAcceptors: 9,
    hBondDonors: 5,
    mass: 370.17,
    admetScore: 0.26,
    syntheticAccessibility: 8.8,
  },
  {
    id: 93,
    name: "Fc(c1n2)c(-c3c4c(Cl)cccc4ccc3)ncc1c(N1CC(CC3)NC3C1)nc2OCC1N(Cc2ccccc2)CCC1",
    image: `${process.env.PUBLIC_URL}/images/093_dummy.png`,
    mpoScore: 1.53,
    cLogP: 4.86,
    hBondAcceptors: 4,
    hBondDonors: 4,
    mass: 408.43,
    admetScore: 0.03,
    syntheticAccessibility: 7.96,
  },
  {
    id: 94,
    name: "Fc(ccc1cccc(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCC3(CCC4)N4CCC3)c2F)c11)c1Cl",
    image: `${process.env.PUBLIC_URL}/images/094_dummy.png`,
    mpoScore: 4.08,
    cLogP: 2.62,
    hBondAcceptors: 3,
    hBondDonors: 1,
    mass: 274.61,
    admetScore: 0.99,
    syntheticAccessibility: 4.57,
  },
  {
    id: 95,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCc3cnccc3)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/095_dummy.png`,
    mpoScore: 9.12,
    cLogP: 2.13,
    hBondAcceptors: 5,
    hBondDonors: 0,
    mass: 279.89,
    admetScore: 0.91,
    syntheticAccessibility: 4.48,
  },
  {
    id: 96,
    name: "Cc1c2c(-c(ncc(c3n4)c(N5CC(CC6)NC6C5)nc4OCCc4nccn4C)c3F)cccc2ccc1",
    image: `${process.env.PUBLIC_URL}/images/096_dummy.png`,
    mpoScore: 3.16,
    cLogP: 1.65,
    hBondAcceptors: 3,
    hBondDonors: 2,
    mass: 279.8,
    admetScore: 0.47,
    syntheticAccessibility: 3.06,
  },
  {
    id: 97,
    name: "Cc1c2c(-c(ncc(c3n4)c(N5CC(CC6)NC6C5)nc4OCCc4cnccc4)c3F)cccc2ccc1",
    image: `${process.env.PUBLIC_URL}/images/097_dummy.png`,
    mpoScore: 1.05,
    cLogP: 0.8,
    hBondAcceptors: 4,
    hBondDonors: 5,
    mass: 433.2,
    admetScore: 0.21,
    syntheticAccessibility: 2.09,
  },
  {
    id: 98,
    name: "Oc1cc2ccccc2c(-c(ncc(c2n3)c(N4CC(CC5)NC5C4)nc3OCCc(cc3)ncc3F)c2F)c1",
    image: `${process.env.PUBLIC_URL}/images/098_dummy.png`,
    mpoScore: 7.08,
    cLogP: 4.21,
    hBondAcceptors: 10,
    hBondDonors: 4,
    mass: 466.88,
    admetScore: 0.63,
    syntheticAccessibility: 0.19,
  },
  {
    id: 99,
    name: "Fc(c1n2)c(-c3c4c(Cl)cccc4ccc3)ncc1c(N1CC(CC3)NC3C1)nc2OCCCN1[C@@H](C2)CO[C@@H]2C1",
    image: `${process.env.PUBLIC_URL}/images/099_dummy.png`,
    mpoScore: 6.55,
    cLogP: 4.02,
    hBondAcceptors: 4,
    hBondDonors: 2,
    mass: 273.63,
    admetScore: 0.89,
    syntheticAccessibility: 3.12,
  },
];

export default mockData;
// export const fetchCompounds = async (): Promise<Compound[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(mockData), 500); // 500msの遅延でダミーデータを返す
//   });
// };
