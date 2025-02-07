# HNG Stage one task

This is a basic api that returns random facts about numbers

### How to use

request format

```
GET https://hng-be-stage1.onrender.com/api/classify-number?number=yournumber
```

where ==yournumber== can be any integer

Response format

```
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```
