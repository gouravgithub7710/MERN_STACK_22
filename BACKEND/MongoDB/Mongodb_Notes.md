# MongoDB = NoSQL Database

    Data JSON jaisa (BSON) format me store hota hai
    Schema-less (flexible)

---

### **Database**

Collections ka group hota hai jaha data store hota hai.
SQL me ise Database kehte hai.

---

### **Collection**

Documents ka group hota hai.
SQL me Table ke equivalent hota hai.

---

### **Document**

Single record hota hai jo JSON/BSON format me store hota hai.
SQL me Row ke barabar hota hai.

---

### **Field**

Document ke andar key–value pair ko field kehte hai.
SQL me Column ke equivalent hota hai.

---

### **_id**

Har document ka unique identifier hota hai.
MongoDB ise automatically generate karta hai.

---

### **BSON**

Binary JSON format hota hai jo MongoDB internally use karta hai.
Ye JSON se fast aur efficient hota hai.

---

### **mongod**

MongoDB ka main server process hota hai.
Database ko run aur manage karta hai.

---

### **mongosh**

MongoDB ka shell hota hai jisse hum commands run karte hai.
Ye mongod server se connect hota hai.

---

### **CRUD**

Create, Read, Update, Delete operations ka short form hai.
MongoDB me basic data operations isi par based hote hai.

---

### **Query**

Database se data nikalne ke liye likhi gayi command hoti hai.
find() ek common query method hai.

---

### **Cursor**

find() query ka result cursor ke form me aata hai.
Ye data ko step-by-step fetch karta hai.

---

### **Index**

Search operations fast karne ke liye use hota hai.
Large data me performance improve karta hai.

---

### **Aggregation**

Data ko process aur analyze karne ke liye use hota hai.
SQL ke GROUP BY jaisa kaam karta hai.

---

### **Schema-less**

MongoDB me fixed structure compulsory nahi hota.
Har document ka structure alag ho sakta hai.

---

### **Embedded Document**

Ek document ke andar dusra document store hota hai.
Related data ko ek jagah rakhne me help karta hai.

---

### **Reference**

Dusre document ka _id use karke relation banaya jata hai.
SQL ke Foreign Key jaisa hota hai.

---

### **Replica Set**

Same data ki multiple copies maintain karta hai.
High availability aur data safety ke liye use hota hai.

---

### **Sharding**

Large data ko parts me divide karke store karta hai.
Scalability improve karne me help karta hai.

---

### **MongoDB Compass**

MongoDB ka GUI tool hota hai.
Database ko visually manage karne ke kaam aata hai.

---

# mongod :

      mongod MongoDB ka main server process hota hai
      Ye database ko run karta hai
      Data store karta hai, read/write handle karta hai

# mongosh :

          mongosh = MongoDB Shell
          Isse hum database ke sath interact karte hai
          Commands likhte hai (CRUD operations)
          Ye server (mongod) se connect hota hai


# Database Commands :
## step 1 :
  1) Sare databases dekho
        show dbs

  2) New database use / create
      use mernDB 

   3) Current DB
        db   

## step 2 : Collection (Table jaisa)

  1) Collection create
        db.createCollection("users")

   2) Collections dekho
        show collections


## STEP 4: CRUD OPERATIONS:

  1) Single document
      db.users.insertOne({
        name: "Gourav",
        age: 21,
        role: "Frontend Developer"
      })

   2) Multiple insert
        db.users.insertMany([
          { name: "Aman", age: 22 },
          { name: "Rohit", age: 23 }
        ])

🔵 READ (Find)
        Sab data
        db.users.find()

    Pretty format
        db.users.find().pretty()

    Condition
      db.users.find({ age: 21 })

    Sirf ek record
      db.users.findOne({ name: "Gourav" })

🟡 UPDATE
Single update
              db.users.updateOne(
                { name: "Gourav" },
                { $set: { age: 22 } }
)

Multiple update
          db.users.updateMany(
            { role: "Frontend Developer" },
            { $set: { status: "Active" } }
          )

🔴 DELETE
  One delete
      db.users.deleteOne({ name: "Aman" })

  Multiple delete
      db.users.deleteMany({ age: { $gt: 22 } })

# STEP 5: IMPORTANT OPERATORS (INTERVIEW FAVORITE)
Comparison
            $gt   > 
            $lt   <
            $gte  >=
            $lte  <=
            $ne   !=


Example:

        db.users.find({ age: { $gt: 21 } })

  Logical-----------
            $and
            $or


    Example:

    db.users.find({
      $or: [
        { age: 21 },
        { name: "Rohit" }
      ]
    })

🔥 STEP 6: Projection (Sirf required fields)
db.users.find({}, { name: 1, _id: 0 })

🔥 STEP 7: Sorting & Limit
Sort
db.users.find().sort({ age: -1 })

Limit
db.users.find().limit(2)

🔥 STEP 8: Count Documents
db.users.countDocuments()

🔥 STEP 9: Index (Performance ke liye)
db.users.createIndex({ name: 1 })

🔥 STEP 10: Drop
Collection delete
db.users.drop()

Database delete
db.dropDatabase()

🔥 MongoDB in MERN Stack (Short)

Node.js MongoDB se Mongoose ke through connect hota hai

MongoDB = Data store

Express = API

React = UI

🎯 INTERVIEW QUESTIONS (VERY IMPORTANT)
Q1. MongoDB kya hai?

👉 NoSQL document-based database

Q2. SQL vs MongoDB?

👉 SQL = Tables, Fixed schema
👉 MongoDB = Collections, Flexible schema

Q3. Document kya hota hai?

👉 JSON like object stored in collection

Q4. Collection kya hota hai?

👉 Table jaisa structure

Q5. _id kya hota hai?

👉 Unique identifier (ObjectId)

Q6. CRUD kya hota hai?

👉 Create, Read, Update, Delete

Q7. MongoDB fast kyu hai?

👉 No joins, indexing, flexible schema