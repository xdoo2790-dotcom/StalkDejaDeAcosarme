const axios = require('axios');

class WolfsvilleQuestBot {
  constructor(apiKey, baseUrl = 'https://api.wolvesville.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Authorization': `Bot ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  async skipClanQuestWaitingTime(clanId) {
    try {
      const endpoint = `/clans/${clanId}/quests/active/skipWaitingTime`;
      const response = await this.client.post(endpoint);
      return true;
      
    } catch (error) {
      return false;
    }
  }
}


const API_KEY = 'LjNgvPQnLSUpofguobJi6D07Q7yQCWlCdC22U2PfRH3AHSFdvpG9yqg5G7dvIPd9';
const BOT_ID = '251193e4-b009-4d34-a7f7-031f3ca9830e';
const CLAN_ID = 'f541a31f-0176-4615-8371-ed3f1d37c0c0';

const bot = new WolfsvilleQuestBot(API_KEY);
bot.skipClanQuestWaitingTime(CLAN_ID);

