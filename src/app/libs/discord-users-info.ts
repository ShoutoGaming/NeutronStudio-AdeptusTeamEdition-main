import axios from 'axios';

interface DiscordUserInfo {
  username: string;
  discriminator: string;
  avatar: string | null;
}

export async function getDiscordUserInfo(user_id: string): Promise<DiscordUserInfo | string> {
  const url = `https://discord.com/api/v10/users/${user_id}`;
  const headers = {
    Authorization: `Bot MTE2NjcwMTEyMjQ1OTc5NTQ3Ng.GQv0dv.jkRFweiAe8ah430xxwuG1BCMySQHpGVIHnNoF0`,
  };

  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      const userData = response.data;
      const userInfo: DiscordUserInfo = {
        username: userData.username,
        discriminator: userData.discriminator,
        avatar: userData.avatar,
      };

      return userInfo;
    } else if (response.status === 404) {
      return `No se encontró un usuario con ID ${user_id}`;
    } else {
      return `Error al buscar el usuario. Código de estado: ${response.status}`;
    }
  } catch (error) {
    return `Error al realizar la solicitud: ${error.message}`;
  }
}

// Ejemplo de uso:
// const user_id_to_check = '123456789012345678';
// const bot_token = 'TU_TOKEN_DE_BOT_AQUI';
// getDiscordUserInfo(user_id_to_check, bot_token).then((result) => console.log(result));
