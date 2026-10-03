class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
        List<List<String>> result = new ArrayList<>();
        Map<String, List<String>> hm  = new HashMap<>(); 
        for(String st: strs){
            char[] chars = st.toCharArray();
            Arrays.sort(chars);
            String sorted = new String(chars);
            if(hm.containsKey(sorted)){
                hm.get(sorted).add(st);
            } else {
                                List<String> list = new ArrayList<>();
                list.add(st);

                hm.put(sorted, list);
            }
        }

        for(List<String> op: hm.values()){
            result.add(op);
        }

    return result;

    }
}
