import { Client, Databases, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66b81afd001328f16bd9");
const databases = new Databases(client);

export const setInteractions = async (attr: string) => {
  try {
    const res = await getInteractions(attr);
    if (res) {
      if (attr === "pdfs_made") {
        const addCount = await databases.updateDocument(
          "66b81b6b0002ffe7c91f",
          "66b81bb200161e962c0f",
          "66b81ce500077cf21bbb",
          {
            pdfs_made: res.pdfs_made + 1,
          }
        );

        return addCount;
      } else if (attr === "user_likes") {
        const addLike = await databases.updateDocument(
          "66b81b6b0002ffe7c91f",
          "66b81bb200161e962c0f",
          "66b81ce500077cf21bbb",
          {
            user_likes: res.user_likes + 1,
          }
        );
        return addLike;
      }
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const increaseDecreaseLikes = async (decrease?: boolean) => {
  try {
    const res = await getInteractions("user_likes");
    if (res) {
      if (decrease) {
        const addLike = await databases.updateDocument(
          "66b81b6b0002ffe7c91f",
          "66b81bb200161e962c0f",
          "66b81ce500077cf21bbb",
          {
            user_likes: res.user_likes - 1,
          }
        );

        return addLike;
      } else {
        const addLike = await databases.updateDocument(
          "66b81b6b0002ffe7c91f",
          "66b81bb200161e962c0f",
          "66b81ce500077cf21bbb",
          {
            user_likes: res.user_likes + 1,
          }
        );
        return addLike;
      }
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getInteractions = async (attr: string) => {
  try {
    const res = await databases.getDocument(
      //   process.env.APPWRITE_DATABASE_ID,
      //   process.env.APPWRITE_COLLECTION_ID,
      "66b81b6b0002ffe7c91f",
      "66b81bb200161e962c0f",
      "66b81ce500077cf21bbb",
      [Query.select([attr])]
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};
export const leaveFeedback = async (feedback: string) => {
  try {
    const res = await getInteractions("user_feedback");
    if (res) {
      const addFeedback = await databases.updateDocument(
        "66b81b6b0002ffe7c91f",
        "66b81bb200161e962c0f",
        "66b81ce500077cf21bbb",
        {
          user_feedback: [...res.user_feedback, feedback],
        }
      );
      return addFeedback;
    }
  } catch (error) {
    console.log(error);
  }
};
