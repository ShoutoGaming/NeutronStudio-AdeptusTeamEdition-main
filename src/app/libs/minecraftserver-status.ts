import axios from 'axios';

interface MinecraftServerInfo {
  ip: string;
  port: number;
  version: string;
  onlinePlayers: number;
  maxPlayers: number;
}

async function mcStatusServer(serverIP: string): Promise<MinecraftServerInfo | string> {
  try {
    const response = await axios.get(`https://api.mcsrvstat.us/2/${serverIP}`);
    const data = response.data;
    if (data && data.ip) {
      const serverInfo: MinecraftServerInfo = {
        ip: data.ip,
        port: data.port,
        version: data.version,
        onlinePlayers: data.players.online,
        maxPlayers: data.players.max,
      };
      return serverInfo;
    } else {
      return "offline";
    }
  } catch (error) {
    return "offline";
  }
}

export async function checkServerStatus(serverURL: string): Promise<string> {
    try {
      const response = await axios.get(serverURL);
      if (response.status === 200) {
        return `online: ${serverURL}`;
      } else {
        return "offline";
      }
    } catch (error) {
      return "offline";
    }
  }

export default mcStatusServer;
