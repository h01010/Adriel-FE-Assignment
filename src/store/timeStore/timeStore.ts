import { makeAutoObservable, runInAction } from "mobx";

class TimeStore {
  currentTime: Date | null = null;

  showTooltip = false;

  constructor() {
    makeAutoObservable(this);
    this.currentTime = new Date();
  }

  setCurrentTime = async () => {
    try {
      runInAction(() => {
        this.currentTime = new Date();
      });
    } catch (error) {
      console.error("Error: ", error);
      return null;
    }
  };

  setShowTooltip = async (over: boolean) => {
    try {
      runInAction(() => {
        this.showTooltip = over;
      });
    } catch (error) {
      console.error("Error: ", error);
      return null;
    }
  };
}

export default TimeStore;
