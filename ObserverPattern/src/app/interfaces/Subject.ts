import Observer from './Observer'

export default interface Subject {
  attachObserver(observer: Observer): void
  detachObserver(observer: Observer): void
  notifyAll(): void
}