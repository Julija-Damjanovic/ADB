import BlacklistedToken from "../models/blackListedTokens"

const cleanup = async () => {
  try {
    const content = await BlacklistedToken.findAll({ attributes: ['token'] });
    if (content.length === 0) {
      console.log("No records were found to clean up.");
    } else {
      await BlacklistedToken.destroy({ truncate: true });
      console.log("Records deleted");
    }

  } catch (error) {
    console.error("An error occurred during database cleanup:", error);
  }
}

export default cleanup