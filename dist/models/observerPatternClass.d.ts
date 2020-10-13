import { IObservable } from '../interfaces/IObserverPattern';
import { IObserver } from '../interfaces/IObserverPattern';
export declare class Observable implements IObservable {
    private observers;
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}
export declare class Observer implements IObserver {
    constructor();
    update(): void;
}
