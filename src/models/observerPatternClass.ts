import { IObservable } from '../interfaces/IObserverPattern';
import {IObserver} from '../interfaces/IObserverPattern';

export class Observable implements IObservable {
    private observers: IObserver[] = [];
    attach (observer: IObserver) :void {
        const isExist = this.observers.includes(observer)
        if(isExist){
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.')
        this.observers.push(observer)
    }
    detach (observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    notify () {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update();
        }
    }
}
export class Observer implements IObserver {
    constructor () {

    }
    public update() {}
}