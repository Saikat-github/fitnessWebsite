
import conf from './conf';

const sendTelegramNotification = async (formData, formtype="Form Type - None") => {
    try {
        // Telegram Bot Configuration
        const TELEGRAM_BOT_TOKEN = conf.telegramBotToken
        const TELEGRAM_CHAT_ID = conf.telegramChatId;

        // Construct message
        const message = `
NEW FORM SUBMISSION ZERODIET.IN
TYPE - ${formtype}
WhatsApp Link - https://wa.me/91${formData.phoneNo || "None"}

Details - 
${Object.entries(formData).map(([key, value]) => `• ${key}: ${value}`).join('\n')}
    `;

        // Send message to Telegram
        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                }),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to send Telegram notification');
        }

        return true;
    } catch (error) {
        console.error('Telegram Notification Error:', error);
        return false;
    }
};


export {sendTelegramNotification}