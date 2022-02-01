import { Stack } from "."

describe('Stack', () => {
  it('should insert a element at the top of the stack', () => {
    const stack = new Stack()

    stack.push<number>(1)
    stack.push<number>(2)
    stack.push<number>(3)

    expect(stack.elements[0]).toEqual(3)
  })

  it('should remove the top element of the stack', () => {
    const stack = new Stack()

    stack.push<number>(1)
    stack.push<number>(2)
    stack.push<number>(3)

    const removedElement = stack.pop()

    expect(removedElement).toEqual(3)
    expect(stack.size).toEqual(2)
  })

  it('should return the top element of the stack', () => {
    const stack = new Stack()

    stack.push<number>(1)
    stack.push<number>(2)
    stack.push<number>(3)

    const topElement = stack.peek()

    expect(topElement).toBe(3)
    expect(stack.size).toBe(3)
  })

  it('should verify if stack is empty', () => {
    const stack = new Stack()
    const stack2 = new Stack()

    stack.push<number>(1)
    stack.push<number>(2)
    stack.push<number>(3)

    expect(stack.isEmpty).toBeFalsy()
    expect(stack2.isEmpty).toBeTruthy()
  })

  it('should clear the stack', () => {
    const stack = new Stack()

    stack.push<number>(1)
    stack.push<number>(2)
    stack.push<number>(3)

    expect(stack.size).toEqual(3)
    expect(stack.isEmpty).toBeFalsy()

    stack.clear()
    expect(stack.size).toEqual(0)
    expect(stack.isEmpty).toBeTruthy()
  })

  it('should return all elements of the stack', () => {
    const stack = new Stack()

    stack.push<number>(1)
    stack.push<number>(2)
    stack.push<number>(3)

    expect(stack.elements).toEqual([3, 2, 1])
  })

  it('should return size of the stack', () => {
    const stack = new Stack()

    stack.push<number>(1)
    stack.push<number>(2)

    expect(stack.size).toEqual(2)
  })
})