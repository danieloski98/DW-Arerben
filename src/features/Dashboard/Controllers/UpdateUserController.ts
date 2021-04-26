import { URL } from "../../../utils/Url";

export class UpdateUserController {
  private URL = URL;

  // static async getLocations(): Promise<{status: number, body: any}> {
  //   const result = fetch
  // }

  static async initialUpdate(body: FormData, headers: any): Promise<{status: number, body: any}> {
    try {
      console.log(body, headers);
      const result = await fetch(`${URL}/userprofile/`, {
        method: 'POST',
        headers: {...headers},
        body: body
      })
      const json = await result.json();
      return {
        status: result.status,
        body: json,
      }
    } catch (error) {
      console.log(JSON.stringify(error));
      return {

        status: 500,
        body: error,
      }
    }
  }
}
