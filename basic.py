def init_queue():
    return {
        "collection": []
    }

def print_queue(queue):
    print(queue["collection"])

def enqueue(queue, element):
    queue["collection"].append(element)

def dequeue(queue):
    if is_empty(queue):
        return None
    return queue["collection"].pop(0)

def front(queue):
    if is_empty(queue):
        return None
    return queue["collection"][0]

def size(queue):
    return len(queue["collection"])

def is_empty(queue):
    return len(queue["collection"]) == 0
