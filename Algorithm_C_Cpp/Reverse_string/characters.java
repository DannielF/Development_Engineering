public class StringReverse {
  
  /* characters chain (string) and data type (str) */
  public String reverseString(String str){
    if (str.isEmpty()){
      return str;
    } else {
      /* substring index of string */
      return reverseString(str.substring(1))+str.charAt(0);
    }
  }

  public static void main(String[] args){
    StringReverse obj = new StringReverse();
    String result = obj.reverseString("Algorithms are love");
    System.out.println(result);
  }
}