import * as fs from "fs/promises";

export const logger = async (message: string): Promise<void> => {
  try {
    const LOGGER_FILE: string = "logs.json";
    const fileData = await fs.readFile(LOGGER_FILE, "utf-8");
    const data = JSON.parse(fileData);
    data["requests"] = [...data["requests"], message];

    await fs.writeFile(LOGGER_FILE, JSON.stringify(data, null, 2));
  } catch (err) {
    throw Error(`Could not perform file opereation: ${err}`);
  }
};
