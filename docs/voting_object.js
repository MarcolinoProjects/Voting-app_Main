
/**
 * https://app.json-generator.com/
 *
 [
 ...JG.repeat(3, 6, {
    uuid: JG.guid(),
    name: "voting",
    candidates: [
      ...JG.repeat(1, 6,{
          uuid: JG.guid(),
          name: JG.firstName(),
          votes: 0
      })]
  }),
 ...JG.repeat(3, 6, {
  uuid: JG.guid(),
  name: "voting",
  candidates: [
    ...JG.repeat(1, 6,{
    	uuid: JG.guid(),
      	name: JG.firstName(),
    	votes: JG.integer(0,20)
    })]
})
 ]
**/
const example = [
  {
    "uuid": "2b06e708-e397-47db-a4d6-16e0d6a797af",
    "name": "voting",
    "candidates": [
      {
        "uuid": "2115b418-b13b-4374-91bf-c25ae94f8540",
        "name": "Darcy",
        "votes": 0
      },
      {
        "uuid": "9756e701-4d88-4e76-977a-b63ff3398a2a",
        "name": "Kara",
        "votes": 0
      },
      {
        "uuid": "b2448415-4f20-4731-9d27-39f276b1ca3d",
        "name": "Magdalena",
        "votes": 0
      }
    ]
  },
  {
    "uuid": "c5cba160-e26f-4fc6-b317-0aa15de4d536",
    "name": "voting",
    "candidates": [
      {
        "uuid": "2394e94c-ad42-4e42-b15e-5faf0ae846c8",
        "name": "Susanne",
        "votes": 0
      },
      {
        "uuid": "9f80ccc5-0fe7-4b41-bebf-d4e9083239a2",
        "name": "Farmer",
        "votes": 0
      }
    ]
  },
  {
    "uuid": "28a77758-fdd8-42a4-80ad-52a294413261",
    "name": "voting",
    "candidates": [
      {
        "uuid": "1426ac13-4447-4954-a716-019df439d967",
        "name": "Penelope",
        "votes": 0
      },
      {
        "uuid": "1103cdd9-ef60-41ee-b043-46c244226f4f",
        "name": "Berg",
        "votes": 0
      },
      {
        "uuid": "2f0cd657-c914-401f-ba4a-07b2616e8eb4",
        "name": "Roxanne",
        "votes": 0
      },
      {
        "uuid": "2d75c349-c863-4eef-b845-7c5d5da405b5",
        "name": "Foreman",
        "votes": 0
      },
      {
        "uuid": "d95b2ae6-7146-4d43-be05-a75e566b1d27",
        "name": "Brock",
        "votes": 0
      },
      {
        "uuid": "5a8ecffc-d17b-42dd-bf10-9ffe7076040b",
        "name": "Louella",
        "votes": 0
      }
    ]
  },
  {
    "uuid": "cde993d4-73ec-48f8-bfeb-7f4ed9bf2f93",
    "name": "voting",
    "candidates": [
      {
        "uuid": "900043db-8a51-4652-9328-d5d6a5dd5c1a",
        "name": "Sally",
        "votes": 0
      },
      {
        "uuid": "76b371f6-ef6c-4aa9-8fdc-de29d5d5801e",
        "name": "Nell",
        "votes": 0
      },
      {
        "uuid": "ff48f4c7-b419-47b1-b2e8-46a155b7b25c",
        "name": "Hood",
        "votes": 0
      },
      {
        "uuid": "f5d16ff1-3a5e-4d43-b0fb-04e8440d13cd",
        "name": "Gillespie",
        "votes": 0
      },
      {
        "uuid": "dd67d974-4e10-498f-a64b-835a6e42b2d6",
        "name": "Solomon",
        "votes": 0
      }
    ]
  },
  {
    "uuid": "13532ca3-905e-42b6-8a8c-2262df95bcf6",
    "name": "voting",
    "candidates": [
      {
        "uuid": "0d043992-a730-4fac-9aa0-b4462f4d9f83",
        "name": "Alford",
        "votes": 0
      }
    ]
  },
  {
    "uuid": "5ff4a852-3429-4f4f-9fba-76b58a401d52",
    "name": "voting",
    "candidates": [
      {
        "uuid": "5b6c07d9-5560-41e0-88a7-ded6f4c79be7",
        "name": "Rose",
        "votes": 12
      },
      {
        "uuid": "47c46274-fca9-4b03-a920-40b0b9bb6ead",
        "name": "Rachel",
        "votes": 19
      },
      {
        "uuid": "62930393-35dc-4209-8845-f237139b771b",
        "name": "Small",
        "votes": 1
      },
      {
        "uuid": "eeddaccc-eb89-4dc7-a5cc-8b1c54e3c927",
        "name": "Leila",
        "votes": 19
      }
    ]
  },
  {
    "uuid": "1d109f06-18c4-42a0-9b19-7d7e50832196",
    "name": "voting",
    "candidates": [
      {
        "uuid": "084413e0-fd9b-4fca-8518-e80de05bd981",
        "name": "Winters",
        "votes": 15
      },
      {
        "uuid": "43b48c54-cdee-45d9-a734-253f6366977e",
        "name": "Witt",
        "votes": 7
      }
    ]
  },
  {
    "uuid": "ef3bbdb3-6762-4099-8dc6-67e25782701e",
    "name": "voting",
    "candidates": [
      {
        "uuid": "23b05c9b-2fa6-4431-a6fe-e31bf3d416ac",
        "name": "Fuller",
        "votes": 6
      },
      {
        "uuid": "24395184-96eb-4b0e-ab7c-91f01a2759aa",
        "name": "Josie",
        "votes": 5
      },
      {
        "uuid": "1ced1e46-00e3-4f3c-bb93-481fcc77e067",
        "name": "Mcneil",
        "votes": 4
      }
    ]
  },
  {
    "uuid": "40391e27-91c7-42d3-83a2-2fcef79aa2ff",
    "name": "voting",
    "candidates": [
      {
        "uuid": "016ccba7-a9e9-4ced-88b5-9879ba4a704c",
        "name": "Rosa",
        "votes": 4
      },
      {
        "uuid": "00ef84e4-e98a-44b5-a443-26da3abca9d5",
        "name": "Josefina",
        "votes": 16
      },
      {
        "uuid": "f35a269f-63f5-4aa6-aeab-3b09c3399e4f",
        "name": "Judith",
        "votes": 19
      }
    ]
  },
  {
    "uuid": "82937dd0-7d18-4d85-a82a-e55de2ed5fb2",
    "name": "voting",
    "candidates": [
      {
        "uuid": "18f0893b-b0d0-4a91-9f82-efb9517b7b38",
        "name": "Maldonado",
        "votes": 13
      },
      {
        "uuid": "ff73e8b2-cac4-455a-aed5-b1fb7260c2fe",
        "name": "Tamra",
        "votes": 12
      },
      {
        "uuid": "675f85fb-f898-4a9a-a75d-57d22007f89e",
        "name": "Ada",
        "votes": 16
      },
      {
        "uuid": "74b9c26b-0521-4874-839c-cf5dbc5d0c96",
        "name": "Summers",
        "votes": 14
      },
      {
        "uuid": "7ff7beef-69dc-40ea-8530-f75f25551c5c",
        "name": "Munoz",
        "votes": 10
      },
      {
        "uuid": "5c9058a1-0042-4bac-a3a0-a980586251d5",
        "name": "Fuentes",
        "votes": 12
      }
    ]
  }
]