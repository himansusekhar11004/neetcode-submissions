class Solution {
    public boolean hasDuplicate(int[] nums) {
        Hashtable<Integer, Integer> hset = new Hashtable<>();

        for(int num: nums){
            if(hset.containsKey(num)){
                return true;
            } else {
                hset.put(num, 1);
            }
        }

        return false;
    }
}