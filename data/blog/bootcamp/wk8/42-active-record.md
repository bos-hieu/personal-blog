---
title: Active Record in Rails
date: '2022-08-22'
tags: ['Active Record', 'Rails', 'Ruby']
images: 'https://miro.medium.com/max/1023/1*wgoBp6ixxE52_SOfAo05Yw.png'
draft: false
summary: Basics of Active Record in Rails, the ORM that Rails uses to interact with the database.
---

Active Record is the ORM (Object Relational Mapper) that Rails uses to interact with the database. It is a library that is included in Rails and is used to create and modify tables in the database, as well as to query the database.

Take the following example:

- `Users` model will connect to the `users` table in the database
- the table has two field
  - `email`
  - `name`
  - and a primary key `id`
- the Active Record model `User` will allows us to CRUD (Create, Read, Update, Delete) these records in the database for a given instance of `User`.

```rb
# Executes the following SELECT and returns an instance attributes for that record:
#   SELECT * FROM users WHERE email = 'bob@loblaw.com' LIMIT 1;
user = User.find_by(email: 'bob@loblaw.com')

# Reads an attribute (like an attr_reader)
user.id # => 5

# These are just like an attr_writers, performing changes in memory (no UPDATE sql)
user.name  = 'Bob'
user.email = 'bob@loblaw.org'

# Executes the following UPDATE statement:
#   UPDATE users SET name = 'Bob', email = 'bob@loblaw.org' WHERE id = 1;
# (Assuming id of record was 1)
user.save
```

## Basics of Active Record

see here: http://edgeguides.rubyonrails.org/active_record_basics.html

- creation and use of objects who data maps to database tables

- Object Relational Mapping (ORM)
  - makes it so you don't have to write SQL queries

### Naming Conventions

- Model Class - singular, capitalized, and camel cased

  - `User`
  - `Post`
  - `Comment`

- Database table - plural, lowercase, and snake cased
  - `users_list`
  - `posts_list`
  - `comments`

| Model Class | Database Table |
| ----------- | -------------- |
| User        | users          |
| Post        | posts          |
| Comment     | comments       |
| LineItem    | line_items     |
| Person      | people         |

### Schema Conventions

- Primary Key

  - by default, uses an integer column named `id`

- Foreign Keys

  - named with snake case
  - `user_id`
  - `order_id`
  - are the fields that Active Record uses to connect two models together

- Optional column names that add additional information
  - `created_at`
  - `(table_name)_count` - used for caching the number of belonging objects on associations
    - For example, a `comments_count` column in an `Article` class that has many instances of `Comment` will cache the number of existent comments for each article.

## Creating AR Models

- subclass the `ApplicationRecord` class

```rb
class Product < ApplicationRecord
end
```

- this creates a `Product` model that is connected to the `products` table in the database
- you can now map the columns of each row in the `products` table to the attributes of the `Product` model

```rb
CREATE TABLE products (
  id int(11) NOT NULL auto_increment,
  name varchar(255),
  PRIMARY KEY  (id)
);
```

The schema above declares a table with two columns:

- `id` and `name`
- Each row of this table represents a certain product with these two parameters.

Thus, you would be able to write code like the following:

```rb
p = Product.new
p.name = "Some Book"
puts p.name # "Some Book"
```

## CRUD Operations

Create, Read, Update and Delete

### Create

- objects can be created from a **hash**, **block**, or have their attributes set individually
- the `new` method return a new object
- the `create` method returns a new object and saves it to the database

Using the `create` method:

```rb
user = User.create(name: "David", occupation: "Code Artist")
```

Using the `new` method:

```rb
user = User.new
user.name = "David"
user.occupation = "Code Artist"
```

- is instantiated without being saved:
- need to call `user.save` to save it to the database

Using a `block`:

```rb
user = User.new do |u|
  u.name = "David"
  u.occupation = "Code Artist"
end
```

> uses both the `new` and `create` methods

### Read

- Return a collection with all users:

```rb
users = User.all
```

- Return the first user:

```rb
user = User.first
```

- Return the first user _named David_

```rb
user = User.find_by(name: "David")
```

- Find all users named _David_ who are _Code Artist_ and sort by `created_at` in reverse chronological order:

```rb
users = User.where(name: 'David', occupation: 'Code Artist').order(created_at: :desc)
```

More on querying the database: https://edgeguides.rubyonrails.org/active_record_querying.html

### Update

After an AR has been retrieved, you can update its attributes and save it to the database:

```rb
user = User.find_by(name: 'David')
user.name = 'Dave'
user.save

# or use the shorthand

user = User.find_by(name: 'David')
user.update(name: 'Dave')
```

- When updating several attributes at once, you can use the `update_all` method:

```rb
User.update_all "max_login_attempts = 3, must_change_password = 'true'"

# or

User.update(:all, max_login_attempts: 3, must_change_password: true)
```

### Delete

destroying a record will remove it from the database

```rb
user = User.find_by(name: 'David')
user.destroy
```

```rb
# find and delete all users named David
User.destroy_by(name: 'David')

# delete all users
User.destroy_all
```

### Validations

You can validate the state of a model before it is saved to the database.

- check that attribute is **not empty**
- check that attribute is **unique**
- check that attribute is **of a certain type** or **matches a certain pattern**

```rb
class User < ApplicationRecord
  validates :name, presence: true
end
```

```ruby
# in irb
user = User.new
user.save
user.save!
# ActiveRecord::RecordInvalid: Validation failed: Name can't be blank
```

More on validations: https://edgeguides.rubyonrails.org/active_record_validations.html