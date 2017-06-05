package ir.anijuu.products.service;

import ir.anijuu.products.config.JHipsterProperties;
import ir.anijuu.products.domain.ProductContent;
import ir.anijuu.products.domain.enumeration.ContentType;
import ir.anijuu.products.utils.ImageUtils;
import ir.anijuu.products.utils.MultipartFileUploadUtil;
import ir.anijuu.products.web.rest.dto.ProductPropertyCategoryDTO;
import ir.anijuu.products.web.rest.dto.ProductTypeCategoryDTO;
import ir.anijuu.products.web.rest.dto.backtory.LoginRestDTO;
import net.coobird.thumbnailator.Thumbnails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import javax.imageio.ImageIO;
import javax.inject.Inject;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URL;
import java.security.KeyStoreException;
import java.security.cert.CertificateException;
import java.util.Collections;
import java.util.UUID;

/**
 * Created by M_Bahrevar on 7/2/2016.
 */
@Service
public class BacktoryService {

//    static {
//        URL url ;
//        try {
//            url = new URL("https://storage.backtory.com/anijuu/fonticon/drawable-xxxhdpi-icon.png");
//            water = ImageIO.read(url);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
    private static  BufferedImage water;
    private final Logger log = LoggerFactory.getLogger(BacktoryService.class);

    private LoginRestDTO loginDTO;

    private int imageWidth;
    private int imageHeight;
    private String thumbnailPath;
    private int thumbnailSize;
    private String cdnBacktoryId;


    @Inject
    private JHipsterProperties jHipsterProperties;

    @PostConstruct
    public void initIt() throws Exception {
        loginDTO = login();
        imageWidth = Integer.parseInt(jHipsterProperties.getBacktory().getImageWidth());
        imageHeight = Integer.parseInt(jHipsterProperties.getBacktory().getImageHeight());
        thumbnailPath = jHipsterProperties.getBacktory().getThumbnailPath();
        thumbnailSize = Integer.parseInt(jHipsterProperties.getBacktory().getThumbnailSize());
        cdnBacktoryId = jHipsterProperties.getBacktory().getxBacktoryCdnId();

    }

    private synchronized LoginRestDTO login() throws CertificateException, KeyStoreException {
        RestTemplate rest = new RestTemplate();
        MultiValueMap<String, String> requestHeaders = new LinkedMultiValueMap<>();
        requestHeaders.add(jHipsterProperties.getBacktory().getHeaderXBacktoryAuthenticationId(), jHipsterProperties.getBacktory().getxBacktoryAuthenticationId());
        requestHeaders.add(jHipsterProperties.getBacktory().getHeaderXBacktoryAuthenticationKey(), jHipsterProperties.getBacktory().getxBacktoryAuthenticationKey());
        requestHeaders.add("Content-Type", MediaType.MULTIPART_FORM_DATA.toString());
        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.put("username", Collections.singletonList(jHipsterProperties.getBacktory().getUsername()));
        formData.put("password", Collections.singletonList(jHipsterProperties.getBacktory().getPassword()));
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(formData, requestHeaders);
        ResponseEntity<LoginRestDTO> result = null;
        try {
            result = rest.exchange(jHipsterProperties.getBacktory().getUrlLoin(), HttpMethod.POST, requestEntity, LoginRestDTO.class);
            log.info("result loginDTO is ={}", result.toString());
        } catch (Exception e) {
            log.error("loginDTO to backtory error", e);
        }
        return result != null ? result.getBody() : null;
    }

    public boolean uploadProductContent(ProductContent productContent, boolean isUpdate) throws IOException {

        try {
            MultipartFileUploadUtil multipart = new MultipartFileUploadUtil(jHipsterProperties.getBacktory().getUrlCreateFile(), cdnBacktoryId, loginDTO.getAccess_token());
            if (ContentType.IMAGE.equals(productContent.getContentType())) {
                String fileUUID = UUID.randomUUID().toString();
                String fileName = fileUUID + getExtensionOfProductContentType(productContent.getContentType());
                productContent.setContentUrl(fileName);
                productContent.setPosterUrl(fileName);
                multipart.addFormField("fileItems[0].path", getPathOfProductContentType(productContent.getContentType()));
                multipart.addFormField("fileItems[0].replacing", "true");
                multipart.addFormField("fileItems[0].extract", "false");
                ByteArrayOutputStream baos = new ByteArrayOutputStream();

                if (ContentType.IMAGE.equals(productContent.getContentType())) {
                    BufferedImage contentImage = Thumbnails.of(new ByteArrayInputStream(productContent.getContent())).size(imageWidth, imageHeight).asBufferedImage();
                    ImageIO.write(contentImage, "jpg", baos);
                    multipart.addFilePart("fileItems[0].fileToUpload", new ByteArrayInputStream(baos.toByteArray()), fileName);
                    baos = new ByteArrayOutputStream();
                    multipart.addFormField("fileItems[1].path", thumbnailPath);
                    multipart.addFormField("fileItems[1].replacing", "true");
                    multipart.addFormField("fileItems[1].extract", "false");
                    BufferedImage bufferedImage = Thumbnails.of(new ByteArrayInputStream(productContent.getContent())).size(thumbnailSize, thumbnailSize).asBufferedImage();
                    ImageIO.write(bufferedImage, "jpg", baos);
                    multipart.addFilePart("fileItems[1].fileToUpload", new ByteArrayInputStream(baos.toByteArray()), fileName);

                } else {
                    multipart.addFilePart("fileItems[0].fileToUpload", new ByteArrayInputStream(productContent.getContent()), fileName);
                    fileName = fileUUID + getExtensionOfProductContentType(ContentType.IMAGE);
                    productContent.setPosterUrl(fileName);
                    baos = new ByteArrayOutputStream();
                    multipart.addFormField("fileItems[1].path", thumbnailPath);
                    multipart.addFormField("fileItems[1].replacing", "true");
                    multipart.addFormField("fileItems[1].extract", "false");
                    BufferedImage bufferedImage = Thumbnails.of(new ByteArrayInputStream(productContent.getPoster())).size(imageWidth, imageHeight).asBufferedImage();
                    ImageIO.write(bufferedImage, "jpg", baos);
                    multipart.addFilePart("fileItems[1].fileToUpload", new ByteArrayInputStream(baos.toByteArray()), fileName);
                }

            }
            multipart.finish();
        } catch (IOException ex) {
            log.error("Error on upload file ", ex);
            throw ex;
        }
        return true;
    }

    public String uploadProductTypeCategory(ProductTypeCategoryDTO category) throws IOException {
        String fileUUID = UUID.randomUUID().toString();
        String fileName = fileUUID + ".svg";
        try {
            fileContentUploader( fileName,cdnBacktoryId,new ByteArrayInputStream(category.getIconImage()));

        } catch (IOException ex) {
            log.error("Error on upload product category  ", ex);
            throw ex;
        }
        return fileName;
    }

    public String uploadProductPropertyCategory(ProductPropertyCategoryDTO category) throws IOException {
        String fileUUID = UUID.randomUUID().toString();
        String fileName = fileUUID + ".svg";
        try {
            fileContentUploader(fileName, cdnBacktoryId, new ByteArrayInputStream(category.getIcon()));

        } catch (IOException ex) {
            log.error("Error on upload product category  ", ex);
            throw ex;
        }
        return fileName;
    }

    private void fileContentUploader(String fileName, String cdnBacktoryId, ByteArrayInputStream inputStream) throws IOException {
        MultipartFileUploadUtil multipart = new MultipartFileUploadUtil(jHipsterProperties.getBacktory().getUrlCreateFile(), cdnBacktoryId, loginDTO.getAccess_token());
        multipart.addFormField("fileItems[0].path", jHipsterProperties.getBacktory().getCategoryPath());
        multipart.addFormField("fileItems[0].replacing", "true");
        multipart.addFormField("fileItems[0].extract", "false");
        multipart.addFilePart("fileItems[0].fileToUpload", inputStream, fileName);
        multipart.finish();
    }

    public String getExtensionOfProductContentType(ContentType contentType) {
        switch (contentType) {
            case AUDIO:
                return ".wav";
            case VIDEO:
                return ".mkv";
            case IMAGE:
                return ".jpg";

        }
        return null;
    }

    private String getPathOfProductContentType(ContentType contentType) {
        switch (contentType) {
            case AUDIO:
                return jHipsterProperties.getBacktory().getProductBasePath() + "/audio/";
            case VIDEO:
                return jHipsterProperties.getBacktory().getProductBasePath() + "/video/";
            case IMAGE:
                return jHipsterProperties.getBacktory().getProductBasePath() + "/image/";
        }

        return jHipsterProperties.getBacktory().getProductBasePath();
    }


    public ProductContent uploadPicture(byte[] main, byte[] thumbnail, String fileName,String folder,boolean resize) throws IOException {

        ProductContent productContent = new ProductContent();
        try {
            MultipartFileUploadUtil multipart = new MultipartFileUploadUtil(jHipsterProperties.getBacktory().getUrlCreateFile(), cdnBacktoryId, loginDTO.getAccess_token());
            productContent.setContentUrl(fileName);
            productContent.setPosterUrl(fileName);
            productContent.setContentType(ContentType.IMAGE);

            if (main!=null) {
                multipart.addFormField("fileItems[0].path", "/product/image/"+folder+"/");
                multipart.addFormField("fileItems[0].replacing", "true");
                multipart.addFormField("fileItems[0].extract", "false");
                BufferedImage contentImage = Thumbnails.of(new ByteArrayInputStream(main)).size(imageWidth, imageHeight).asBufferedImage();
                BufferedImage captionedImage = ImageUtils.watermark(contentImage,water, ImageUtils.PlacementPosition.TOPRIGHT,15);

                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                ImageIO.write(captionedImage, "jpg", baos );
                multipart.addFilePart("fileItems[0].fileToUpload", new ByteArrayInputStream(baos.toByteArray()), fileName);
                baos = new ByteArrayOutputStream();
                multipart.addFormField("fileItems[1].path", thumbnailPath+folder+"/");
                multipart.addFormField("fileItems[1].replacing", "true");
                multipart.addFormField("fileItems[1].extract", "false");
                BufferedImage bufferedImage = Thumbnails.of(new ByteArrayInputStream(thumbnail)).size(thumbnailSize, thumbnailSize).asBufferedImage();
                ImageIO.write(bufferedImage, "jpg", baos);
                multipart.addFilePart("fileItems[1].fileToUpload", new ByteArrayInputStream(baos.toByteArray()), fileName);
            } else {
                ByteArrayOutputStream baos = new ByteArrayOutputStream();

                multipart.addFormField("fileItems[0].path", thumbnailPath+folder+"/");
                multipart.addFormField("fileItems[0].replacing", "true");
                multipart.addFormField("fileItems[0].extract", "false");
                if(resize) {
                    BufferedImage bufferedImage = Thumbnails.of(new ByteArrayInputStream(thumbnail)).size(thumbnailSize, thumbnailSize).asBufferedImage();
                    ImageIO.write(bufferedImage, "jpg", baos);
                    multipart.addFilePart("fileItems[0].fileToUpload", new ByteArrayInputStream(baos.toByteArray()), fileName);
                }else{
                    multipart.addFilePart("fileItems[0].fileToUpload", new ByteArrayInputStream(thumbnail), fileName);
                }

            }


            multipart.finish();

        } catch (IOException ex) {
            log.error("Error on upload file ", ex);
            throw ex;
        }

        return productContent;
    }

}
