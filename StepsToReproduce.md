1. Add an Arango database named loopback-sandbox with user root / root (or change datasource.json to reflect your settings)
2. Start Loopback server: `yarn start`
3. Create a Parent object: `curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{}" "http://localhost:3000/api/Parents"`
4. Copy the id from the created Parent object
5. Trigger the test method (using your Parent id): `curl -X GET --header "Accept: application/json" "http://localhost:3000/api/Parents/PARENT_ID_GOES_HERE/testPolymorphic"`
6. Response contains the error message.  Server logs will have the full Error (including stacktrace)

**Note:** The code in server/boot/automigrate.js to drops collections on server restart.  Comment this if you don't want that behavior


Versions:
Windows 10 Home OS Build 14393.953
Node 6.10.0
loopback 2.22.0 (also reproduced in 3.4.0)
loopback-connector-arangodb 1.1.0
