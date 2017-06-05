package ir.anijuu.products.utils;


import net.coobird.thumbnailator.Thumbnails;
//import org.apache.commons.lang3.tuple.Pair;
import org.imgscalr.Scalr;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;


public class ImageUtils {
    public enum PlacementPosition {
        TOPLEFT, TOPCENTER, TOPRIGHT, MIDDLELEFT, MIDDLECENTER, MIDDLERIGHT, BOTTOMLEFT, BOTTOMCENTER, BOTTOMRIGHT
    }
    public static BufferedImage watermark(BufferedImage originalImage,
                                          BufferedImage watermarkImage, PlacementPosition position,
                                          double watermarkSizeMaxPercentage) throws IOException {

        int imageWidth = originalImage.getWidth();
        int imageHeight = originalImage.getHeight();

//        int watermarkWidth = getWatermarkWidth(originalImage, watermarkImage,
//            watermarkSizeMaxPercentage);
//        int watermarkHeight = getWatermarkHeight(originalImage, watermarkImage,
//            watermarkSizeMaxPercentage);

        // We create a new image because we want to keep the originalImage
        // object intact and not modify it.
        BufferedImage bufferedImage = new BufferedImage(imageWidth,
            imageHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D g2d = (Graphics2D) bufferedImage.getGraphics();
        g2d.drawImage(originalImage, 0, 0, null);
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
            RenderingHints.VALUE_ANTIALIAS_ON);

        int x = 0;
        int y = 0;
        if (position != null) {
            switch (position) {
                case TOPLEFT:
                    x = 0;
                    y = 0;
                    break;
                case TOPCENTER:
//                    x = (imageWidth / 2) - (watermarkWidth / 2);
                    y = 0;
                    break;
                case TOPRIGHT:
//                    x = imageWidth - watermarkWidth;
                    y = 0;
                    break;

                case MIDDLELEFT:
                    x = 0;
//                    y = (imageHeight / 2) - (watermarkHeight / 2);
                    break;
                case MIDDLECENTER:
//                    x = (imageWidth / 2) - (watermarkWidth / 2);
//                    y = (imageHeight / 2) - (watermarkHeight / 2);
                    break;
                case MIDDLERIGHT:
//                    x = imageWidth - watermarkWidth;
//                    y = (imageHeight / 2) - (watermarkHeight / 2);
                    break;

                case BOTTOMLEFT:
                    x = 0;
//                    y = imageHeight - watermarkHeight;
                    break;
                case BOTTOMCENTER:
//                    x = (imageWidth / 2) - (watermarkWidth / 2);
//                    y = imageHeight - watermarkHeight;
                    break;
                case BOTTOMRIGHT:
//                    x = imageWidth - watermarkWidth;
//                    y = imageHeight - watermarkHeight;
                    break;

                default:
                    break;
            }
        }

//        g2d.drawImage(Scalr.resize(watermarkImage, Scalr.Method.ULTRA_QUALITY,
//            watermarkWidth, watermarkHeight), x, y, null);

        return bufferedImage;

    }
//    private static Pair<Double, Double> calculateWatermarkDimensions(
//        BufferedImage originalImage, BufferedImage watermarkImage,
//        double maxPercentage) {
//
//        double imageWidth = originalImage.getWidth();
//        double imageHeight = originalImage.getHeight();
//
//        double maxWatermarkWidth = imageWidth / 100.0 * maxPercentage;
//        double maxWatermarkHeight = imageHeight / 100.0 * maxPercentage;
//
//        double watermarkWidth = watermarkImage.getWidth();
//        double watermarkHeight = watermarkImage.getHeight();
//
//        if (watermarkWidth > maxWatermarkWidth) {
//            double aspectRatio = watermarkWidth / watermarkHeight;
//            watermarkWidth = maxWatermarkWidth;
//            watermarkHeight = watermarkWidth / aspectRatio;
//        }
//
//        if (watermarkHeight > maxWatermarkHeight) {
//            double aspectRatio = watermarkWidth / watermarkHeight;
//            watermarkHeight = maxWatermarkHeight;
//            watermarkWidth = watermarkHeight / aspectRatio;
//        }
//
//        return Pair.of(watermarkWidth, watermarkHeight);
//    }

    /**
     *
     * @param originalImage
     * @param watermarkImage
     * @param maxPercentage
     * @return
     */
//    public static int getWatermarkWidth(BufferedImage originalImage,
//                                        BufferedImage watermarkImage, double maxPercentage) {
//
//        return calculateWatermarkDimensions(originalImage, watermarkImage,
//            maxPercentage).getLeft().intValue();
//
//    }

    /**
     *
//     * @param originalImage
//     * @param watermarkImage
//     * @param maxPercentage
     * @return
     */
//    public static int getWatermarkHeight(BufferedImage originalImage,
//                                         BufferedImage watermarkImage, double maxPercentage) {
//
//        return calculateWatermarkDimensions(originalImage, watermarkImage,
//            maxPercentage).getRight().intValue();
//
//    }

    public static BufferedImage convertByteArrayToBufferedImage(byte[] imageBytes) {
        if (imageBytes == null) {
            return null;
        }
        try {
            return ImageIO.read(new ByteArrayInputStream(imageBytes));
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static byte[] imageToByteArray(BufferedImage bufferedImage) {
        if (bufferedImage == null) {
            return null;
        }
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            ImageIO.write(bufferedImage, "png", baos);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        return baos.toByteArray();
    }


    public static float calculateScaleRatio(int originalWidth, int targetWidth) {
        //calculate  ratio for scaling
        return (float) targetWidth / originalWidth;
    }

    public static BufferedImage scaleImage(BufferedImage bufferedImage, float scaleRatio) throws IOException {
        //apply scale
        return Thumbnails.of(bufferedImage).scale(scaleRatio).asBufferedImage();
    }

    public static ImageIcon convertToImageIcon(BufferedImage bufferedImage) {
        if (bufferedImage == null) {
            return null;
        }
        return new ImageIcon(bufferedImage);
    }

    public static BufferedImage getBufferedImage(File tempFile) {
        BufferedImage bufferedImage = null;
        try {
            bufferedImage = ImageIO.read(tempFile);
        } catch (IOException e) {
            System.out.println("cant convert file to Buffered image" + tempFile.getPath());
            e.printStackTrace();
        }
        return bufferedImage;
    }

}
