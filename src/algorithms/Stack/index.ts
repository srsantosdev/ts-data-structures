export class Stack {
  private items = []

  public push<T>(element: T) {
    this.items.push(element)

    return element
  }

  public pop() {
    return this.items.pop()
  }

  public peek() {
    return this.items[this.items.length - 1]
  }

  public clear() {
    this.items = []
  }

  public get size() {
    return this.items.length
  }

  public get elements() {
    return this.items.reverse()
  }

  public get isEmpty() {
    return this.items.length === 0
  }
}