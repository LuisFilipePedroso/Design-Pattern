import ConcreteSubject from './app/subjects/ConcreteSubject'
import ProductObserver from './app/observers/ProductObserver'

const subject = new ConcreteSubject()
new ProductObserver(subject)

subject.setValue('Camiseta')