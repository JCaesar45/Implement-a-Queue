# Queue Data Structure Visualization

## Abstract

This project presents a comprehensive implementation of the Queue Abstract Data Type (ADT) following the First-In-First-Out (FIFO) principle. The implementation demonstrates proper algorithmic complexity analysis, memory management patterns, and interactive visualization suitable for educational and professional contexts.

## Theoretical Foundation

The queue data structure operates on the FIFO principle, where elements are inserted at the rear (enqueue) and removed from the front (dequeue). This behavior mirrors real-world queuing systems and is fundamental to breadth-first search algorithms, CPU scheduling, and asynchronous data processing pipelines (Cormen et al., 2022).

### Algorithmic Complexity

| Operation | Time Complexity | Space Complexity | Implementation Notes |
|-----------|----------------|------------------|---------------------|
| `enqueue(x)` | O(1)* amortized | O(1) | Dynamic array expansion |
| `dequeue()` | O(1) | O(1) | Index pointer advancement |
| `front()` | O(1) | O(1) | Non-mutating access |
| `isEmpty()` | O(1) | O(1) | Size counter comparison |
| `size()` | O(1) | O(1) | Cached length property |

*Amortized analysis accounts for occasional array resizing operations (Tarjan, 1985).

## Architecture

### Core Implementation

The queue uses an object-based closure pattern with explicit head/tail pointers:

```javascript
function initQueue() {
    return {
        collection: [],  // Dynamic array storage
        head: 0,         // Front pointer (dequeue position)
        tail: 0,         // Rear pointer (enqueue position)
        size: 0          // Cached length for O(1) access
    };
}
```

This approach avoids the O(n) time penalty of `Array.prototype.shift()` by using index pointers, while the `delete` operator explicitly dereferences dequeued elements to prevent memory leaks (Flanagan, 2020).

### Memory Management

The implementation includes automatic compaction: when the queue empties, indices reset to prevent unbounded growth of the underlying array. This optimization maintains O(1) amortized space complexity per operation.

## Features

- **Interactive Visualization**: Real-time DOM updates showing queue state transitions
- **Memory Map**: Visual representation of array allocation and occupied indices
- **Operation Logging**: Timestamped history of all queue mutations
- **Code Synchronization**: Displays corresponding implementation code for each operation
- **Keyboard Shortcuts**: Ctrl+D for dequeue, Enter for enqueue submission
