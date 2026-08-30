self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SCHEDULE_REMINDER') {
        const reminder = event.data.reminder;
        const targetTime = new Date(`${reminder.date}T${reminder.time}:00`).getTime();
        const delay = targetTime - Date.now();

        if (delay > 0) {
            setTimeout(() => {
                self.registration.showNotification("Напоминание ИИ", {
                    body: reminder.title,
                    icon: "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsrounded/calendar_month/default/24px.svg"
                });
            }, delay);
        }
    }
});
