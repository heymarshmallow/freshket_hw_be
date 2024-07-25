# Calculator API

API สำหรับการคำนวณราคาสินค้าในร้านอาหาร

## การใช้งาน API ด้วย Postman

### Case 1: Customers order Red set and Green set; price from calculation is 90

- HTTP Method: POST
- URL: `http://localhost:3000/api/calculate`
- Headers: Content-Type: application/json
- Body (raw JSON):
  ```json
  {
      "order": { "Red": 1, "Green": 1 }
  }
  ```
  หรือ
  ```json
  {
      "order": { "Red": 1, "Green": 1 },
      "hasMemberCard": false
  }
  ```
  ### Case 2: Customers can use a member card, then the price should be deducted by discount amount 10%

- HTTP Method: POST
- URL: `http://localhost:3000/api/calculate`
- Headers: Content-Type: application/json
- Body (raw JSON):
  ```json
  {
    "order": { "Red": 1, "Green": 1 },
    "hasMemberCard":true
  }
  ```
  ### Case 3: For Orange sets, if customers order 5 items per bill. customers will get a 5% discount for 4 items (2 pairs)

- HTTP Method: POST
- URL: `http://localhost:3000/api/calculate`
- Headers: Content-Type: application/json
- Body (raw JSON):
  ```json
  {
    "order": { "Orange": 5 }
  }
  ```