
import Highlight from 'react-highlight'

// Component for the heading label
const HeadingLabel = ({ text }) => (
    <div className='absolute -top-2 self-center text-gray-700 z-[9999] font-mono text-sm px-5 py-1.5 rounded-t-md border border-gray-300'>
        {text}
    </div>
);

// Component for the step indicator
const StepIndicator = ({ stepNumber, title, description }) => (
    <div className='flex flex-col mt-4 gap-4 items-center mb-8'>
        <div className='w-12 h-12 flex justify-center items-center rounded-full font-semibold bg-[#D1E9FC]'>
            {stepNumber}
        </div>
        <div className='text-2xl sm:text-3xl font-semibold'>
            {title}
        </div>
        <div className='mb-3 text-gray-500 dark:text-neutral-400 text-center text-sm sm:text-base'>
            {description}
        </div>
    </div>
);

// Component for the email notification list
const EmailNotificationList = () => (
    <div className='w-full border border-gray-300 '>
        <div className='p-4 border-b border-inherit font-mono text-sm bg-gray-50 '>Subject: Flag Moderated</div>
        <ul className='p-4'>
            <ListItem label="reported by" content="Me" />
            <ListItem label="reportee" content="John Doe" />
            <ListItem label="action" content="Banned" />
        </ul>
    </div>
);

// Component for list items in the email notification
const ListItem = ({ label, content }) => (
    <li className='mb-2 pb-2 last:pb-0 last:mb-0 border-b last:border-b-0 border-gray-200 '>
        <div className='text-gray-500 dark:text-neutral-500 font-mono text-sm mb-2'>{label}</div>
        {content}
    </li>
);

// Main component
function HowWork() {
    return (
        <div className='relative flex mt-24 mb-2 pb-8 flex-col w-full from-gray-50 border-y border-gray-300 bg-gradient-to-b'>
            <div className='relative flex flex-col w-[92%] max-w-[500px] gap-24 mx-auto -mt-40 z-10'>

                <HeadingLabel text="How It Works" />

                <StepCard
                    stepNumber="1"
                    title="Send us your flags"
                    description="📦 It must parse into a valid JSON object 📦"
                    code={`{
  "content": {
    "content_id": "10002",
    "type": {
      "id": "IMG"
    }
  },
  "status": "received",
  "reporter": {
    "id": "300",
    "name": "Automated user",
    "emailAddress": "reporter@tremau.net"
  },
  "reportee": {
    "id": "445",
    "name": "Reportee Stella",
    "emailAddress": "reportee@tremau.net"
  },
  "label": [
    "nudity"
  ]
}`}
                    language="json"
                />

                <StepCard
                    stepNumber="2"
                    title="Submit it"
                    description="🔥 You can use any framework 🔥"
                    code={`// Use fetch to POST the data
fetch(apiURL, {
  method: 'POST', // Specify the method to use
  headers: {
    'Content-Type': 'application/json', // Specify the content type of the payload
  },
  body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
})
.then(response => response.json()) // Parse JSON response
.then(data => console.log('Success:', data)) // Handle success
.catch((error) => console.error('Error:', error)); // Handle errors`}
                    language="javascript"
                />

                <StepCard
                    stepNumber="3"
                    title="Get notified"
                    description="⚡️ In real-time via email. Easy peasy. ⚡️"
                    render={() => <EmailNotificationList />}
                />

            </div>
        </div>
    );
}

// Component for the step card
const StepCard = ({ stepNumber, title, description, code, language, render }) => (
    <div className='bg-white border mt-6 border-gray-400 shadow-md rounded-md'>
        <StepIndicator stepNumber={stepNumber} title={title} description={description} />
        {code && (
            <Highlight language={language}>
                {code}
            </Highlight>
        )}
        {render && render()}
    </div>
);

export default HowWork;
