package ir.anijuu.products.monitoring;


import com.google.common.base.Joiner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by majid on 4/25/17.
 */

@Component
public class ValidatedToken {
    private final Logger log = LoggerFactory.getLogger(ValidatedToken.class);
    private static final ConcurrentHashMap<String, Integer> userValidate = new ConcurrentHashMap();
    private static final Joiner.MapJoiner mapJoiner = Joiner.on(",").withKeyValueSeparator("=");

    @Scheduled(fixedDelay = 360000)
    public void statisticPrinter() {
        Integer sum=userValidate.values().stream().mapToInt(Number::intValue).sum();
        log.info("Number of users:{} and sum token validation: {}",userValidate.size(), sum);
        log.info("Current statistics: {}", mapJoiner.join(userValidate));
    }

    @Scheduled(cron = "0 1 12 1/1 * ? ")
    public void statisticReset() {
        userValidate.clear();

    }
    @Async
    public void userIsValid(String userName){
       Integer current= userValidate.putIfAbsent(userName,0);
        userValidate.put(userName,current==null ?1:current++);
    }


}
