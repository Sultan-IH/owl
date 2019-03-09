import json

import requests

api_path = "https://api.jsonbin.io/b"

if __name__ == "__main__":

    with open("profiles.json", "rt") as file:
        profiles = json.load(file)

    with open("projects.json", "rt") as file:
        projects = json.load(file)

    headers = {
        'secret-key': "$2a$10$PMflazmcGFk4GBGo1BY10uRNnH8KvcTwMdf1XnlvVUXcv20Yo08PC",
        'Content-Type': "application/json"
    }

    profile_map = {}
    project_map = {}

    for profile in profiles:
        resp = requests.post(api_path, headers=headers, json=profile)
        print(f"created profile with [{profile['email']}] with status [{resp.status_code}]")
        body = resp.json()
        profile_map[profile['email']] = body['id']

    for project in projects:
        resp = requests.post(api_path, headers=headers, json=project)
        print(f"created project with [{project['name']}] with status [{resp.status_code}]")
        body = resp.json()
        project_map[project['name']] = body['id']

    with open("profile_mapping.json", "wt") as file:
        json.dump(profile_map, file)

    with open("project_mapping.json", "wt") as file:
        json.dump(project_map, file)
