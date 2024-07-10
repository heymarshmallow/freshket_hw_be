# POSTMAN
HTTP Method POST
POST JSON BODY
Case 1 : Customers order Red set and Green set; price from calculation is 90
{
    "order": { "Red": 1, "Green": 1 },
    "hasMemberCard":false
}
หรือ
{
    "order": { "Red": 1, "Green": 1 },
    "hasMemberCard":false
}
Case 2 : Customers can use a member card, then the price should be deducted by discount amount 10%
{
    "order": { "Red": 1, "Green": 1 },
    "hasMemberCard":true
}
Case 3 : For Orange sets, if customers order 5 items per bill. customers will get a 5% discount for 4 items (2 pairs)
{
    "order": { "Orange": 5 },
}