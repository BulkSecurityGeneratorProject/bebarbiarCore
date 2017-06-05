package ir.anijuu.products.web.rest.dto.farzad;

public final class Query {
    public  Card cards[];
    public  long id;
    public  long pageNum;
    public  String position;
    public  String isShop;

    public Query() {
    }

    public Query(Card[] cards, long id){
        this.cards = cards;
        this.id = id;
    }

    public static final class Card {
        public  String name;
        public  String type;
        public  String values;

        public Card() {
        }

        public Card(String name, String type, String values){
            this.name = name;
            this.type = type;
            this.values = values;
        }
    }
}
