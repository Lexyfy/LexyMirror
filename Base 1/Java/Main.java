package Java;
import java.util.HashMap;

public class Main{

  public static void main(String[] args) {
    HashMap<Integer, String> dex = new HashMap<>();

    dex.put(1,"Bisasam");
    dex.put(4,"Schiggy");
    dex.put(7,"Glumanda");

    System.out.println("DexNr. 1: " + dex.get(1));



  }
}