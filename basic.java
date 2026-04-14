import java.util.ArrayList;
import java.util.List;

public class Queue {
    private List<Object> collection;
    
    public Queue() {
        this.collection = new ArrayList<>();
    }
    
    public void enqueue(Object element) {
        collection.add(element);
    }
    
    public Object dequeue() {
        if (isEmpty()) {
            return null;
        }
        return collection.remove(0);
    }
    
    public Object front() {
        if (isEmpty()) {
            return null;
        }
        return collection.get(0);
    }
    
    public int size() {
        return collection.size();
    }
    
    public boolean isEmpty() {
        return collection.isEmpty();
    }
    
    public void print() {
        System.out.println(collection);
    }
}
