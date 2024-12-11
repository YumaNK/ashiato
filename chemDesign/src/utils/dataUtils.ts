// dataUtils.ts

// 型定義
interface Compound {
    id: number;
    name: string;
    mpoScore: number;
    cLogP: number;
    hBondAcceptors: number;
    hBondDonors: number;
    mass: number;
  }
  
  // MPOスコアで化合物をフィルタリング
  export const filterCompoundsByMpoScore = (compounds: Compound[], minScore: number): Compound[] => {
    return compounds.filter(compound => compound.mpoScore >= minScore);
  };
  
  // 平均値を計算
  export const calculateAverageMass = (compounds: Compound[]): number => {
    const totalMass = compounds.reduce((sum, compound) => sum + compound.mass, 0);
    return compounds.length > 0 ? totalMass / compounds.length : 0;
  };
  