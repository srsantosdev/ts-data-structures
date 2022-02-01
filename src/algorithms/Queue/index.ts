export class Queue {
  private items = []

  public enqueue<T>(element: T) {
    this.items.push(element)
  }

  public dequeue() {
    return this.items.shift()
  }

  public front() {
    return this.items[0]
  }

  public clear() {
    this.items = []
  }

  public get size() {
    return this.items.length
  }

  public get elements() {
    return this.items
  }

  public get isEmpty() {
    return this.items.length === 0
  }
}