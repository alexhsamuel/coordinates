This document describes the Locator REST API.

# Preliminaries

The default service port is 11619.

When in doubt, do something the same way the [GitHub
API](https://developer.github.com/v3/) does it.


# Types

- `user_id`: nonempty string (FIXME: characters?), must match user account
- `group_id`: nonempty string (FIXME: characters?), must match group
- `event_id`: nonempty string, chosen by service
- `date`: "YYYY-MM-DD" format
- `status`: string chosen from set of valid strings configured in service
- `notes`: arbitrary string or null


# Errors

On error (4xx or 5xx response), the server returns the following body:
```
{
  "status": http_status,
  "message": "error message"
}
```


# Auth

FIXME


# Events

An event returned from the service looks like this:
```
event = {
  "event_id": event_id,
  "event_url": event_url,
  "user_id": user_id,
  "date": date,
  "status": status,
  "notes: notes
}
```


### Create
```
POST /api/v1/events

request = {
  "user_id": user_id,
  "date": date,
  "status": status,
  "notes: notes
}

response = {
  "status": 201,
  "event": event
}
```

### Retrieve
```
GET /api/v1/events/<event_id>

request = {
}

response = {
  "status": 200,
  "event": event
}
```

### Modify
```
PATCH /api/v1/events/<event_id>

request = {
  "user_id": user_id,
  "date": date,
  "status": status,
  "notes: notes
}

response = {
  "status": 200,
  "event": event
}
```
The request may include any subset of fields to be modified.

### Delete
```
DELETE /api/v1/events/<event_id>

request = {
}

response = {
  "status": 200
}
```

### Search
```
GET /api/v1/events

request = {
}

response = {
  "status": 200,
  "events": [events]
}
```

By default, this request returns all (non-deleted) events.  The following
URL query parameters may be specified to narrow the search:
- `start=YYYY-MM-DD`: start date
- `end=YYYY-MM-DD`: end date
- `user=user_id`: user filter
- `group=group_id`: group filter
- `status=status`: status filter
- `notes=text`: fuzzy text match to notes

Query parameters other than `start` and `end` may appear more than once, in
which case the filter for _that field_ is the union of matches.  The filtering
for multiple fields is the intersectin of matches, however.
