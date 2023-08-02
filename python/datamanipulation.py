import mysql.connector
import time

# Connect to the MySQL instance in the container
cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="test_db"
)

# Use a cursor to execute a query and retrieve data
cursor = cnx.cursor()

while True:
    # Check for new data in table1
    query = "SELECT * FROM table1 WHERE processed = 0"
    cursor.execute(query)
    rows = cursor.fetchall()

    # Process each row of new data
    for row in rows:
        # Insert corresponding data into table2
        insert_query = "INSERT INTO table2 (column1, column2) VALUES (%s, %s)"
        cursor.execute(insert_query, (row[1], row[2]))
        cnx.commit()

        # Add a result from a calcul to table
        calcul_query = "INSERT INTO result (result) VALUES (%s)"
        cursor.execute(calcul_query, ())

        # Mark the row as processed
        update_query = "UPDATE table1 SET processed = 1 WHERE id = %s"
        cursor.execute(update_query, (row[0],))
        cnx.commit()

    # Sleep for a short period of time before checking again
    time.sleep(5)

# Close the cursor and connection
cursor.close()
cnx.close()
