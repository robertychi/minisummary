import { createPinia, setActivePinia } from "pinia"
import { beforeEach, describe, expect, it } from "vitest"
import { useCounterStore } from "./counter"

describe("counter store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("increment 會 +1", () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
    expect(store.double).toBe(2)
  })

  it("reset 會歸零", () => {
    const store = useCounterStore()
    store.increment()
    store.reset()
    expect(store.count).toBe(0)
  })
})
