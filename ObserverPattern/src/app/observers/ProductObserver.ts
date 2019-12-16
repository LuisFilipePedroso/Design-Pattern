import Observer from '../interfaces/Observer'
import Subject from '../interfaces/Subject'

import Mail from '../lib/Mail'

export default class ProductObserver implements Observer{
  private subject: Subject

  constructor(subject: Subject) {
    this.subject = subject
    subject.attachObserver(this)
  }

  public update(product: string) {
    console.log('New product: ', product)
    Mail.sendEmail()
  }
}