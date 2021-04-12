package life.majiang.community.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;

public class TestController {
    @ResponseBody
    @RequestMapping(value = "/test", method = RequestMethod.POST)
    public Object test(){
        HashMap<String,String> hashMap = new HashMap<>();
        hashMap.put("1","2");
        return hashMap;
    }
}
