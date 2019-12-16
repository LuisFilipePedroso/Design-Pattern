import Subject from '../interfaces/Subject'
import Observer from '../interfaces/Observer'

export default class ConcreteSubject implements Subject {
  private value: any
  private observers: Observer[] = []

  setValue(T: any) {
    this.value = T
    this.notifyAll()
  }

  public attachObserver(observer: Observer) {
    this.observers.push(observer)
  }

  public detachObserver(observer: Observer) {
    const index = this.observers.indexOf(observer)
    this.observers.splice(index, 1)
  }

  public notifyAll() {
    for(let observer of this.observers) {
      observer.update(this.value)
    }
  }
}