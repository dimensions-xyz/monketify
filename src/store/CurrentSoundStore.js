import { observable } from "mobx";

class CurrentSoundStore{
    @observable count = 1;
    
    decrement = () => {
        this.count--;
    }
    increment = () => {
        this.count++;
    }
}
export default new CurrentSoundStore()