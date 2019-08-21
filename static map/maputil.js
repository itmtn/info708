
/**
 * Utility class to convert between geo-locations and Cartesian screen coordinates.
 * Can be used with a bounding box defining the map section.
 *
 * (c) 2011 Till Nagel, tillnagel.com
 */
class MercatorMap {
  
      DEFAULT_TOP_LATITUDE = 80;
      DEFAULT_BOTTOM_LATITUDE = -80;
      DEFAULT_LEFT_LONGITUDE = -180;
      DEFAULT_RIGHT_LONGITUDE = 180;
    
    /** Horizontal dimension of this map, in pixels. */
      mapScreenWidth;
    /** Vertical dimension of this map, in pixels. */
      mapScreenHeight;
  
    /** Northern border of this map, in degrees. */
      topLatitude;
    /** Southern border of this map, in degrees. */
      bottomLatitude;
    /** Western border of this map, in degrees. */
      leftLongitude;
    /** Eastern border of this map, in degrees. */
      rightLongitude;
  
      topLatitudeRelative;
      bottomLatitudeRelative;
      leftLongitudeRadians;
      rightLongitudeRadians;
  
    // constructor( mapScreenWidth,  mapScreenHeight) {
    //     this.mapScreenWidth = mapScreenWidth;
    //     this.mapScreenHeight = mapScreenHeight;
    // }
    
    /**
     * Creates a new MercatorMap with dimensions and bounding box to convert between geo-locations and screen coordinates.
     *
     * @param mapScreenWidth Horizontal dimension of this map, in pixels.
     * @param mapScreenHeight Vertical dimension of this map, in pixels.
     * @param topLatitude Northern border of this map, in degrees.
     * @param bottomLatitude Southern border of this map, in degrees.
     * @param leftLongitude Western border of this map, in degrees.
     * @param rightLongitude Eastern border of this map, in degrees.
     */
    constructor( mapScreenWidth,  mapScreenHeight,  topLatitude,  bottomLatitude,  leftLongitude,  rightLongitude) {
      this.mapScreenWidth = mapScreenWidth;
      this.mapScreenHeight = mapScreenHeight;
      this.topLatitude = topLatitude;
      this.bottomLatitude = bottomLatitude;
      this.leftLongitude = leftLongitude;
      this.rightLongitude = rightLongitude;
  
      this.topLatitudeRelative = this.getScreenYRelative(topLatitude);
      this.bottomLatitudeRelative = this.getScreenYRelative(bottomLatitude);
      this.leftLongitudeRadians = this.getRadians(leftLongitude);
      this.rightLongitudeRadians = this.getRadians(rightLongitude);
    }
  
    /**
     * Projects the geo location to Cartesian coordinates, using the Mercator projection.
     *
     * @param geoLocation Geo location with (latitude, longitude) in degrees.
     * @returns The screen coordinates with (x, y).
     */
    getScreenLocation(geoLocation) {
       let latitudeInDegrees = geoLocation.x;
       let longitudeInDegrees = geoLocation.y;
  
      return createVector(this.getScreenX(longitudeInDegrees), this.getScreenY(latitudeInDegrees));
    }
  
      getScreenYRelative( latitudeInDegrees) {
      return log(tan(latitudeInDegrees / 360 * PI + PI / 4));
    }
  
      getScreenY( latitudeInDegrees) {
      return this.mapScreenHeight * (this.getScreenYRelative(latitudeInDegrees) - this.topLatitudeRelative) / (this.bottomLatitudeRelative - this.topLatitudeRelative);
    }
    
      getRadians( deg) {
      return deg * PI / 180;
    }
  
      getScreenX( longitudeInDegrees) {
       let longitudeInRadians = this.getRadians(longitudeInDegrees);
      return this.mapScreenWidth * (longitudeInRadians - this.leftLongitudeRadians) / (this.rightLongitudeRadians - this.leftLongitudeRadians);
    }
  }