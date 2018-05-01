function HouseService(){
var id=1;
var houses=[]
    function House (img,sqft,beds,baths,year,price){
        this.id=id
        this.img=img
        this.sqft=sqft
        this.beds=beds
        this.baths=baths
        this.year=year
        this.price=price
        id++
    }

    var mansion= new House ("https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gelbensande3.jpg/1200px-Gelbensande3.jpg",8400,7,12,1785,20934098304893)
    var mobile= new House("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/67elcona.JPG/220px-67elcona.JPG",200,2,.5,1983,5)
    var submarine=new House("https://dr5dymrsxhdzh.cloudfront.net/blog/images/a18499/2014/03/5940928766_b35744c904_z.jpg",.5,4,3.5,2012,5)

    houses.push(mansion,mobile,submarine)

    this.getHouses = function getHouses(){
       return JSON.parse(JSON.stringify(houses))
    }
    this.addHouse= funtion addHouse(house){
        
    }
}