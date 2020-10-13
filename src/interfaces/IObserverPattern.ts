// import {Entreprise} from '../models/Entreprise'
export interface IObservable {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}
export interface IObserver {
    update(): void
}