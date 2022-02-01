import { Queue } from "."

describe('Queue', () => {
  it('should insert an element into the queue', () => {
    const queue = new Queue()

    queue.enqueue<number>(1)
    queue.enqueue<number>(2)
    queue.enqueue<number>(3)

    expect(queue.elements).toEqual(expect.arrayContaining([1, 2, 3]))
  })


  it('should remove the first element of the queue', () => {
    const queue = new Queue()

    queue.enqueue<number>(1)
    queue.enqueue<number>(2)
    queue.enqueue<number>(3)

    const removedElement = queue.dequeue()

    expect(removedElement).toEqual(1)
    expect(queue.size).toEqual(2)
  })

  it('should return the first element of the queue', () => {
    const queue = new Queue()

    queue.enqueue<number>(1)
    queue.enqueue<number>(2)
    queue.enqueue<number>(3)

    const frontElement = queue.front()

    expect(frontElement).toEqual(1)
    expect(queue.size).toEqual(3)
  })

  it('should verify if queue is empty', () => {
    const queue = new Queue()
    const queue2 = new Queue()

    queue.enqueue<number>(1)
    queue.enqueue<number>(2)
    queue.enqueue<number>(3)

    expect(queue.isEmpty).toBeFalsy()
    expect(queue2.isEmpty).toBeTruthy()
  })

  it('should clear the queue', () => {
    const queue = new Queue()

    queue.enqueue<number>(1)
    queue.enqueue<number>(2)
    queue.enqueue<number>(3)

    expect(queue.size).toEqual(3)
    expect(queue.isEmpty).toBeFalsy()

    queue.clear()
    expect(queue.size).toEqual(0)
    expect(queue.isEmpty).toBeTruthy()
  })

  it('should return all elements of the queue', () => {
    const queue = new Queue()

    queue.enqueue<number>(1)
    queue.enqueue<number>(2)
    queue.enqueue<number>(3)

    expect(queue.elements).toEqual([1, 2, 3])
  })

  it('should return size of the queue', () => {
    const queue = new Queue()

    queue.enqueue<number>(1)
    queue.enqueue<number>(2)

    expect(queue.size).toEqual(2)
  })
})