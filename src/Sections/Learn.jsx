import cockpit from '../assets/cockpit.png'
import userlevel from '../assets/userlevel.png'
import integration from '../assets/integration.png'
import ai from '../assets/ai.png'
import qc from '../assets/qc.png'
import best from '../assets/best.png'
function Learn() {
    const data = {
        "Centralized_Moderating_Cockpit": {
            icon: cockpit,
            array: [
                "Holistic view of your moderation processes",
                "Detailed moderation analytics with customizable dashboards & high volume processing",
                "Peak and crisis detection modules",
                "Automate transparency reporting across all jurisdictions in which you operate",
                "Automatically send your statements of reasons to the EU database"
            ]
        },
        "User_Level_Moderation": {
            icon: userlevel,
            array: [
                "Customizable strike system, enabling gradual strengthening of moderation action",
                "Identification & blocking of abusive reporting",
                "User scoring & predictive analysis"
            ]
        },
        "Integration_Of_Reporting_Bodies": {
            icon: integration,
            array: [
                "Pre-integrated connection to Law Enforcement Agencies (Pharos, ...)",
                "Customize your workflows to connect automatically to NCMEC, GIFCT, ...",
                "Integrate with 250+ trusted flagger organisations & OOC dispute bodies"
            ]
        },
        "Automated_Detection": {
            icon: ai,
            array: [
                "Monitor all your content through a single end-point",
                "Upgrade detection tools with a single click of a button",
                "Integrate user & trusted flagger reports"
            ]
        },
        "Quality_Control": {
            icon: qc,
            array: [
                "Built-in LLM co-pilot enhancing moderation decisions",
                "Full fledge quality control console",
                "Advanced algorithms to automate Quality Control processes for high volume data"
            ]
        },
        "Best_In_Class_Moderation": {
            icon: best,
            array: [
                "Best in class moderation"
            ]
        }
    }

    return (
        <div className='relative w-full flex flex-col items-center py-16 pb-12'><div className='flex flex-col items-center text-center mb-10'>

            <div className='mb-3 text-gray-500 font-mono text-sm'>Dive Deeper</div>
            <h3 className='text-3xl sm:text-4xl font-semibold'>Ready to learn more?</h3>
        </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-4'>
                {Object.entries(data).map(([key, value]) => <div key={key} className='flex flex-col p-6 bg-white border border-gray-300 rounded-lg transition
      cursor-pointer hover:scale-[1.02] hover:border-gray-800 dark:hover:border-neutral-500
      sj-gradient 
      '><img src={value.icon} className='w-24 h-24 relative -left-5' alt="icon" />
                    <div className='text-xl'>{key.split('_').join(' ')}</div>
                    <div className='flex flex-col gap-2 justify-start mt-4 items-start'>
                        {value.array.map(p => <div key={p} className='text-gray-700 '>- {p}</div>)}

                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Learn