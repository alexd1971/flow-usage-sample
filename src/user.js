// @flow

type Gender = 'male' | 'female';

type Json = {
  [key: string]: any
};

interface JsonEncodable {
  toJson(): Json;
}

export class User implements JsonEncodable {
  id: number;

  name: string;

  age: number;

  gender: Gender;

  constructor (json: Json) {
    this.id = json.id;
    this.name = json.name;
    this.age = json.age;
    this.gender = json.gender;
  }

  toJson () {
    const result: Json = {
      id: this.id,
      name: this.name,
      age: this.age,
      gender: this.gender
    };

    return result;
  }
}
