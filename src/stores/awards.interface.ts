export interface AwardItem {
  title: string;
  awarder: string;
  date: string | null;
  summary: string;
  id: string;
}

export interface AwardsStore {
  awards: AwardItem[];
  add: (newEducation: AwardItem) => void;
  get: (index: number) => void;
  remove: (index: number) => void;
  reset: (values: AwardItem[]) => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updateAward: (index: number, updatedInfo: AwardItem) => void;
}
