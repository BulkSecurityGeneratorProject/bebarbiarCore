package ir.anijuu.products.web.rest.util;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kavenegar.sdk.KavenegarApi;
import com.kavenegar.sdk.excepctions.ApiException;
import com.kavenegar.sdk.excepctions.HttpException;
import com.kavenegar.sdk.models.SendResult;
import ir.anijuu.products.domain.*;
import ir.anijuu.products.web.rest.dto.farzad.IbartarProductDTO;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

/**
 * @author : Hamed Hatami ,  Farzad Sedaghatbin, Atefeh Ahmadi, Mostafa Rastgar
 * @version : 0.8
 */

public class RESTfulClientUtil {

    public static String restFullService(String url, String serviceName, String jsonString) {
        try {
            HttpClient client = new DefaultHttpClient();
            HttpPost postRequest = new HttpPost(url + serviceName);
            postRequest.setHeader("Content-type", "application/json");
            postRequest.setEntity(new StringEntity(jsonString, "UTF-8"));
            HttpResponse response = client.execute(postRequest);
            if (response.getStatusLine().getStatusCode() != 200 | response.getStatusLine().getStatusCode() != 202) {
                throw new RuntimeException("Failed : HTTP error code : "
                    + response.getStatusLine().getStatusCode());
            }

            return IOUtils.toString(response.getEntity().getContent(), "UTF-8");

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String restFullServiceString(String url, String serviceName, String value) {
        try {
            HttpClient client = new DefaultHttpClient();
            HttpPost postRequest = new HttpPost(url + serviceName);
            postRequest.setHeader("Content-type", "TEXT/PLAIN");
            postRequest.setEntity(new StringEntity(value, "UTF-8"));
            HttpResponse response = client.execute(postRequest);
            if (response.getStatusLine().getStatusCode() != 200 | response.getStatusLine().getStatusCode() != 202) {
                throw new RuntimeException("Failed : HTTP error code : "
                    + response.getStatusLine().getStatusCode());
            }

            return IOUtils.toString(response.getEntity().getContent(), "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    public static String restFullService(String url, String serviceName) {
        try {
            HttpClient client = new DefaultHttpClient();
            HttpPost postRequest = new HttpPost(url + serviceName);
            postRequest.setHeader("Content-type", "application/json; charset=UTF-8");
            HttpResponse response = client.execute(postRequest);
            if (response.getStatusLine().getStatusCode() != 200 && response.getStatusLine().getStatusCode() != 400) {
                throw new RuntimeException("Failed : HTTP error code : "
                    + response.getStatusLine().getStatusCode());
            }
            String asd = IOUtils.toString(response.getEntity().getContent(), "UTF-8");
            return IOUtils.toString(response.getEntity().getContent(), "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

//    public static void main(String[] args) {
//////        for (int i = 351; i <=476 ; i++) {
////            new Thread(new A(i)).start();
////        }
////
////////
////        restFullService("http://127.0.0.1:8080/api/1","/namaieshagah");
//
//        String fileName = "c:\\book.txt";
//
//        List<Book> books = new ArrayList<>();
//        //read file into stream, try-with-resources
//        try (Stream<String> stream = Files.lines(Paths.get(fileName))) {
//
//            stream.forEach(line -> {
//                String[] splited = line.split(",,");
////                System.out.println(splited.length);
//                if (splited.length > 5) {
//
//                    Book book = new Book();
//                    book.title = splited[0];
//                    book.shabak = splited[1];
//                    book.writer = splited[2];
//                    book.nasher = splited[3];
//                    book.price = splited[4];
//                    book.year = splited[5];
//                    if (splited.length > 8) {
//                        book.bakhsh = splited[6];
//                        book.salon = splited[7];
//                        book.rahro = splited[8];
//                        book.ghorfe = splited[9];
//                    } else {
//                        book.salon = splited[6];
//                        book.rahro = splited[7];
//                    }
//                    books.add(book);
//                }
//            });
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    List<List<Book>> lists= new ArrayList<>();
//        System.out.println(books.size());
//        for (int i = 0; i <277 ; i++) {
//          lists.add(books.subList(i*1000,(i+1)*1000));
//        }
//        lists.add(books.subList(277000,277347));
//        lists.parallelStream().forEach(books1 -> {
//            try {
//                restFullService("http://app.anijuu.ir/api/1","/namaieshagah",new ObjectMapper().writeValueAsString(books1));
//            } catch (JsonProcessingException e) {
//                e.printStackTrace();
//            }
//
//        });
//    }

//    public static void main(String[] args) {
//        KavenegarApi api = new KavenegarApi("5635717141617A52534F636F49546D38454E647870773D3D");
//        Send(api);
//        System.out.print("\r\n\r\n");
//    }
//
//public static void main(String[] args) {
//    restFullService("http://www.travelinsure.ir/api/v1.1/cancel","?ins_code=123&cancel_cause=11&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEyOSwiaXNzIjoiaHR0cDpcL1wvd3d3LnRyYXZlbGluc3VyZS5pclwvYXBpXC92MS4xXC9hdXRoZW50aWNhdGUiLCJpYXQiOjE0OTU2NTI3NDUsImV4cCI6MTQ5NTY1NjM0NSwibmJmIjoxNDk1NjUyNzQ1LCJqdGkiOiI3ZTJhYzBhMjU2NjExN2U3ZDUwMjMwYmVhZGRiM2UzZCJ9.YSR7l9i8hwugyk8-6AOd3mYvU93cokLIkqpzRWFqwWI");
//}

    //
//    public static void main(String[] args) {
//        KavenegarApi api = new KavenegarApi("5635717141617A52534F636F49546D38454E647870773D3D");
//            api.verifyLookup("09125031726", "پانته", "آ", "صفری", "signup");
//    }
//    public static void Send(KavenegarApi api) {
//        try {
//            String sender = "10006006606600";
//            String receptor = "09034551568";
//            String message = "Message here";
//            SendResult Result = api.send(sender, receptor, message);
//            System.out.println("messageid : " + Result.getMessageId());
//            System.out.println("message  : " + Result.getMessage());
//            System.out.println("status  : " + Result.getStatus());
//            System.out.println("statustext  : " + Result.getStatusText());
//            System.out.println("sender  : " + Result.getSender());
//            System.out.println("receptor  : " + Result.getReceptor());
//            System.out.println("date  : " + Result.getDate());
//            System.out.println("cost  : " + Result.getCost());
//        } catch (HttpException ex) { // در صورتی که خروجی وب سرویس 200 نباشد این خطارخ می دهد.
//            System.out.print("HttpException  : " + ex.getMessage());
//        } catch (ApiException ex) { // در صورتی که خروجی وب سرویس 200 نباشد این خطارخ می دهد.
//            System.out.print("ApiException : " + ex.getMessage());
//        }
//    }
    public static class A implements Runnable {

        int folder;

        public A(int folder) {
            this.folder = folder;
        }

        @Override
        public void run() {
            try {
                HashMap<Integer, Integer> cityID = new HashMap<>();
                FileInputStream file = new FileInputStream(new File("c:\\city.xlsx"));

                //Get first sheet from the workbook
                Workbook wb = new XSSFWorkbook(file);

                Sheet s = wb.getSheetAt(0);
                s.rowIterator().forEachRemaining(r -> {
                    cityID.put((int) r.getCell(0).getNumericCellValue(), (int) r.getCell(2).getNumericCellValue());

                });

//            try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir)) {
//                for (Path f : stream) {

                DirectoryStream<Path> ss = Files.newDirectoryStream(Paths.get("C:\\dataanijuu\\data2\\" + folder));
                Stream<Path> stss = StreamSupport.stream(ss.spliterator(), true);
                List<IbartarProductDTO> shops = new ArrayList<>();
                stss.parallel().forEach(ff -> {
                    DirectoryStream<Path> sss = null;
                    try {
                        sss = Files.newDirectoryStream(ff);

                        for (Path fff : sss) {

                            byte[] b = Files.readAllBytes(fff);
                            String[] values = new String(b, "UTF-8").split("\"data\":");
                            for (int i = 1; i < values.length; i++) {
                                IbartarProductDTO ibartarProductDTO = new IbartarProductDTO();
                                ibartarProductDTO.setProductTypeId(String.valueOf(ff.getFileName()));

                                ibartarProductDTO.setJson(values[i - 1]);
                                ibartarProductDTO.setStateId(Long.valueOf(cityID.get(folder)));
                                shops.add(ibartarProductDTO);
                            }
                        }
                    } catch (IOException e1) {
                        e1.printStackTrace();
                    }

                });

                shops.parallelStream().forEach(sp -> {
                    String json = null;
                    try {
                        System.out.println("*******************");
                        json = new ObjectMapper().writeValueAsString(sp);
                        restFullService("http://app.anijuu.ir/api/", "1/productIbartar", json);
                    } catch (JsonProcessingException e) {
                        e.printStackTrace();
                    }
                });

//                }
            } catch (IOException | DirectoryIteratorException x) {
                // IOException can never be thrown by the iteration.
                // In this snippet, it can only be thrown by newDirectoryStream.
                System.err.println(x);
            }
//        } catch (
//            IOException e
//            )
//
//        {
//            e.printStackTrace();
//        }
        }
    }

//    public static void main(String[] args) {
//        try {
//            cinema();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }


}

