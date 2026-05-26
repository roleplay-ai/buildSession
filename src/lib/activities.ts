import {
  PhoneCall,
  Workflow,
  Network,
  BarChart3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type PromptBlock = {
  label: string;
  content: string;
};

export type Step = {
  title: string;
  instruction: string;
  details: string[];
  success: string;
  prompt?: PromptBlock;
};

export type InfoCard = {
  title: string;
  text: string;
};

export type BuildOption = {
  title: string;
  difficulty: string;
  trigger: string;
  what: string;
  variables: string;
  finalAction: string;
};

export type Idea = {
  title: string;
  tech: string;
  description: string;
};

export type Activity = {
  id: string;
  title: string;
  tool: string;
  outcome: string;
  color: string; // brand hex
  icon: LucideIcon;
  // Optional sections — render only what is present
  concept?: InfoCard;
  promptIntro?: string;
  threeWays?: InfoCard[];
  variablesConcept?: InfoCard;
  appLogic?: InfoCard[];
  ideas?: Idea[];
  buildOptions?: BuildOption[];
  steps: Step[];
  prompts?: PromptBlock[];
  troubleshooting?: { issue: string; fix: string }[];
  checklist: string[];
};

export const activities: Activity[] = [
  {
    id: "voice-agent",
    title: "Appointment Booking Voice Agent",
    tool: "Vapi + Google Calendar",
    outcome:
      "Build a voice agent that checks availability and books a physiotherapy appointment.",
    color: "#FFCE00",
    icon: PhoneCall,
    steps: [
      {
        title: "Open Vapi and log in",
        instruction: "Open Vapi.ai and log in using your personal Gmail account.",
        details: [
          "Enter your name if asked.",
          "Click Start Building.",
          "Select Inbound.",
        ],
        success: "You are inside the Vapi builder screen.",
      },
      {
        title: "Close Agent Configuration",
        instruction: "Close the Agent Configuration panel from the top-right side.",
        details: [
          "This lets you build the agent manually.",
          "Keep the builder area open.",
        ],
        success: "You can clearly see the manual builder area.",
      },
      {
        title: "Connect Google Calendar",
        instruction:
          "From the left panel, click Integration → Google Calendar → Connect.",
        details: [
          "Select your personal Gmail account.",
          "Allow the required permissions.",
          "Return to Vapi after the connection is complete.",
        ],
        success: "Google Calendar appears as connected inside Vapi.",
      },
      {
        title: "Create Check Availability tool",
        instruction:
          "Go to Tools → Create Tool → Google Calendar → Check Availability.",
        details: [
          "Calendar ID: your Gmail ID",
          "Timezone: Asia/Calcutta",
          "Click Save.",
        ],
        success: "The Check Availability tool is created.",
      },
      {
        title: "Create Event tool",
        instruction:
          "Repeat the same process for Google Calendar → Create Event.",
        details: [
          "Calendar ID: your Gmail ID",
          "Timezone: Asia/Calcutta",
          "Click Save.",
        ],
        success: "You can see two Google Calendar tools.",
      },
      {
        title: "Add tools to the Assistant",
        instruction:
          "Click Assistants, open your agent, and go to Tools.",
        details: [
          "Add Check Availability.",
          "Add Create Event.",
          "Save the assistant settings.",
        ],
        success: "Both tools are attached to the assistant.",
      },
      {
        title: "Add System Prompt",
        instruction:
          "Paste the appointment booking prompt into the System Prompt section.",
        details: [
          "Use the copy button below.",
          "Make sure Amit, services, locations, and tools are included.",
        ],
        success: "The assistant now knows how to book appointments.",
        prompt: {
          label: "System Prompt",
          content: `You are Amit, a warm and professional appointment coordinator at Livewell Physio & Wellness.
Your sole purpose on this call is to book a 30-minute appointment at the right clinic, on the right date, at the right time.
You collect four things in order: name -> service -> location -> date and time.
You do NOT give medical advice, discuss pricing, or handle anything outside booking.
Today's date: 22nd May 2026, IST, Asia/Kolkata.
All times are India Standard Time.

YOUR IDENTITY
You are Amit from the scheduling team at Livewell Physio & Wellness.
You are NOT an AI, bot, or automated system. Never say those words.
If asked "Are you a real person?", say: "I'm Amit from the Livewell scheduling team!"

SERVICES
1. Physical Therapy: musculoskeletal issues, pain relief, mobility
2. Sports Rehab: sports injuries, performance recovery
3. Post-Surgery Rehab: recovery after an operation
4. Wellness Program: general health, fitness, preventive care

Mapping vague inputs:
"physio" or "PT" -> Physical Therapy
"sports", "injury", or "athlete" -> Sports Rehab
"surgery" or "post-op" -> Post-Surgery Rehab
"wellness" or "fitness" -> Wellness Program
Always confirm: "That sounds like [Service]. Is that right?"

LOCATIONS
Mumbai clinic: Monday to Saturday, 9:00 AM to 6:00 PM IST
Delhi clinic: Monday to Saturday, 9:00 AM to 6:00 PM IST
Both clinics are closed on Sundays.

CALL FLOW
STEP 1: Greet
STEP 2: Ask for service
STEP 3: Ask for location
STEP 4: Ask for date and time
STEP 5: Check availability using checkAvailability
STEP 6: Book using scheduleAppointment after confirmation
STEP 7: Confirm and end the call using endCall

TOOLS
checkAvailability -> google.calendar.availability.check
scheduleAppointment -> google.calendar.event.create
endCall -> VAPI built-in

STYLE
Short, natural replies. 1 to 2 sentences per turn. Friendly but professional.
Never read ISO timestamps aloud. Never say AI, automated, or virtual assistant.`,
        },
      },
      {
        title: "Change welcome message",
        instruction:
          "Replace the default first message with the Amit welcome message.",
        details: [
          "Use the copy button below.",
          "This is what the agent says at the start of the call.",
        ],
        success: "The call starts as Amit from Livewell Physio & Wellness.",
        prompt: {
          label: "Welcome Message",
          content:
            "Hi, this is Amit from Livewell Physio & Wellness. I can help you book your appointment. May I know your name?",
        },
      },
      {
        title: "Publish and talk",
        instruction: "Click Publish on the top-right side, then click Talk.",
        details: [
          "Use the test script below.",
          "Give your name if the agent asks.",
          "Let the agent confirm the appointment.",
        ],
        success: "The agent completes the call and confirms the booking.",
        prompt: {
          label: "Test Script",
          content:
            "I want to book a Physical Therapy appointment at the Mumbai clinic on 29th May at 5 PM.",
        },
      },
      {
        title: "Check your calendar",
        instruction:
          "Open Google Calendar and check whether the appointment was created.",
        details: [
          "Look for the Physical Therapy appointment.",
          "Check date, time, and clinic location.",
        ],
        success: "The calendar invite is visible in your Google Calendar.",
      },
    ],

    troubleshooting: [
      {
        issue: "Google Calendar does not connect",
        fix: "Select the correct Gmail account and allow the required permissions.",
      },
      {
        issue: "Agent does not book the event",
        fix: "Check whether both Google Calendar tools are added to the Assistant.",
      },
      {
        issue: "Wrong timezone appears",
        fix: "Use Asia/Calcutta for this activity.",
      },
      {
        issue: "Appointment does not appear",
        fix: "Check whether the Create Event tool is connected, saved, and added to the Assistant.",
      },
    ],
    checklist: [
      "Google Calendar is connected",
      "Both calendar tools are created",
      "Both tools are added to the assistant",
      "Prompt and welcome message are updated",
      "Calendar invite is visible",
    ],
  },
  {
    id: "workflow-automation",
    title: "AI Workflow Automation",
    tool: "Google Workspace Studio",
    outcome:
      "Build a workflow using triggers, variables, Gemini, decisions, and Google app actions.",
    color: "#3699FC",
    icon: Workflow,
    threeWays: [
      {
        title: "Describe with AI",
        text: "Tell Gemini what workflow you want in simple language.",
      },
      {
        title: "Use a template",
        text: "Start from a ready-made flow when it is close to your use case. Edit the trigger, apps, variables, and final action.",
      },
      {
        title: "Start from scratch",
        text: "Build each trigger and step manually when you need more control.",
      },
    ],
    variablesConcept: {
      title: "Variables carry data across the workflow",
      text: "Variables are pieces of data picked from the trigger or created during a workflow. Example: email arrives, Workspace Studio picks sender email, subject, and body, Gemini creates a summary, and Chat uses that summary.",
    },
    prompts: [
      {
        label: "Demo Prompt",
        content: `Analyze incoming customer emails. If it contains a customer complaint, extract the following details in a clean, single-paragraph format suitable for a chat notification:

Customer Name: [Name or "Unknown"]
Email Address: [Sender Email]
Nature of Complaint: [Brief 1-sentence summary of the issue]

If not, no action is needed.`,
      },
    ],
    steps: [
      {
        title: "Open Workspace Studio",
        instruction:
          "Open Google Workspace Studio from your Google Workspace account.",
        details: [
          "Look for the page where you can describe a task for Gemini.",
          "Keep this guide open beside it.",
        ],
        success: "You can see the task description box.",
      },
      {
        title: "Describe the demo workflow",
        instruction: "Paste the customer complaint prompt and click Create.",
        details: [
          "Use the demo prompt.",
          "Let Gemini create a suggested workflow.",
          "Review the workflow before testing.",
        ],
        success:
          "Gemini creates a suggested customer complaint workflow.",
      },
      {
        title: "Set the trigger",
        instruction: "Use the trigger: When I get an email.",
        details: [
          "Variables can include sender email, subject, body, received time, and attachments.",
          "These variables will be used in later steps.",
        ],
        success:
          "The workflow knows when to start and what email data it can use.",
      },
      {
        title: "Add the decision step",
        instruction: "Check whether the email is a customer complaint.",
        details: [
          "Condition: Is this email a customer complaint?",
          "Output: True or False",
          "Continue only when the condition is true.",
        ],
        success:
          "The workflow separates complaint emails from non-complaint emails.",
      },
      {
        title: "Extract relevant information",
        instruction: "Ask Gemini to extract useful details from the email.",
        details: [
          "Input variables: sender email, email subject, and email body.",
          "New variables: customer name, email address, and complaint summary.",
        ],
        success:
          "The workflow turns the email into clean, usable information.",
      },
      {
        title: "Notify in Chat",
        instruction:
          "Create a Google Chat message using the extracted variables.",
        details: [
          "Use customer name, email address, and complaint summary.",
          "Keep the notification short and readable.",
        ],
        success: "The Chat message uses the extracted details correctly.",
      },
      {
        title: "Test run",
        instruction:
          "Run the workflow with a sample customer complaint email.",
        details: [
          "Check the trigger.",
          "Check whether the true or false step works.",
          "Check whether the Chat notification is created.",
        ],
        success:
          "The test run is successful and the Chat notification is created.",
      },
    ],
    buildOptions: [
      {
        title: "Customer Holding Response Email",
        difficulty: "Easy",
        trigger: "When I get an email",
        what: "Reads the email and drafts a polite holding response.",
        variables: "Sender name, sender email, email body, issue summary",
        finalAction: "Draft a reply in Gmail",
      },
      {
        title: "Live Sheet Tracking Bot",
        difficulty: "Medium",
        trigger: "When a Google Sheet changes",
        what: "Summarizes the change and notifies you in Chat.",
        variables: "Changed row, changed value, sheet name, timestamp",
        finalAction: "Send Chat notification and create a task",
      },
      {
        title: "Refund Support",
        difficulty: "Medium",
        trigger: "When I get an email",
        what: "Checks the refund request against a refund policy and drafts a reply.",
        variables: "Sender email, email body, refund reason, order details",
        finalAction: "Draft a reply in Gmail",
      },
      {
        title: "CV Shared Folder Saver",
        difficulty: "Easy",
        trigger: "When I get an email with an attachment",
        what: "Extracts candidate details and saves the CV to Drive.",
        variables: "Candidate name, sender email, attachment, email subject",
        finalAction: "Save attachment to Drive",
      },
      {
        title: "End-of-Day Email Cleanup",
        difficulty: "Medium",
        trigger: "On a schedule at 5:00 PM",
        what: "Reviews unread emails, summarizes important items, and sends a Chat recap.",
        variables: "Unread emails, subject, sender, email body, action items",
        finalAction: "Send Chat summary",
      },
    ],
    troubleshooting: [
      {
        issue: "The workflow misses email details",
        fix: "Check whether the right email variables are selected and passed into the Gemini step.",
      },
      {
        issue: "The condition does not work",
        fix: "Rewrite the decision step as a clear true or false check.",
      },
      {
        issue: "The Chat message is blank",
        fix: "Check whether the Chat step is using extracted variables.",
      },
      {
        issue: "The template feels wrong",
        fix: "Edit the template trigger, apps, variables, and final action to match your use case.",
      },
    ],
    checklist: [
      "The trigger is clear",
      "The right variables are selected",
      "Gemini has clear instructions",
      "The output uses the right variables",
      "The test run is successful",
    ],
  },
  {
    id: "org-chart",
    title: "Org Chart Generator Artifact",
    tool: "Claude Artifact + Excel",
    outcome:
      "Build a reusable artifact that converts updated Excel files into collapsible org charts.",
    color: "#F68A29",
    icon: Network,
    concept: {
      title: "One artifact, updated charts every month",
      text: "The Excel file keeps changing. The artifact should stay reusable. Upload the latest Excel file and the org chart should update automatically.",
    },
    promptIntro:
      "Paste this into Claude. Edit the prompt if you want to change the design, fields, validation, or chart behavior. Use this exact prompt. Do not add extra validation constraints.",
    prompts: [
      {
        label: "Org Chart Prompt",
        content: `Build me an interactive org chart generator as a Claude artifact.
Excel columns required: Name, Designation, Team, ReportsTo (leave blank for the root/top person)
Chart behavior:
* Top-down collapsible tree. Each node shows a "−" when expanded and "+N" when collapsed
* CSS T-bar connectors between parent and children. Straight vertical line for single child
* Horizontally scrollable so wide trees don't break layout
Each node card shows:
* Auto-generated circular avatar with initials, using deterministic pastel colors (6–7 color pairs, cycled by name)
* Name (bold), Designation (muted), Team (as a small pill/chip)
UI:
* Drag-and-drop upload zone with file browse. Show hint with the 4 required column names
* After upload: show filename, "Upload new" button, "Expand all" button
* Root node gets a highlighted border
* Error messages for missing columns or bad files
No external CSS libraries. Use CSS variables for light/dark mode.`,
      },
    ],
    steps: [
      {
        title: "Open Claude Artifacts",
        instruction:
          "Open Claude and click Artifacts from the left menu panel.",
        details: [
          "Click New artifact.",
          "Choose Apps and websites.",
          "Start from scratch.",
        ],
        success: "You are ready to describe the artifact you want to build.",
      },
      {
        title: "Describe the org chart generator",
        instruction:
          "Paste the prompt, then edit it if you want the artifact to behave differently.",
        details: [
          "The prompt asks for a reusable Excel-based org chart generator.",
          "It also asks for a top-down collapsible chart.",
          "Keep the required columns: Name, Designation, Team, ReportsTo.",
        ],
        success: "Claude starts building the org chart generator artifact.",
      },
      {
        title: "Use the first sample file",
        instruction: "Upload the first Excel file into the artifact.",
        details: [
          "Check whether the file is read correctly.",
          "Review whether the top person, managers, and team members appear in the right place.",
        ],
        success: "The artifact creates the first org chart from Excel.",
      },
      {
        title: "Check the chart behavior",
        instruction:
          "Test expand, collapse, scroll, and node card behavior.",
        details: [
          "Each card should show name, designation, team, and initials avatar.",
          "The root node should stand out.",
          "Wide charts should remain scrollable.",
        ],
        success: "The chart is usable and easy to read.",
      },
      {
        title: "Test with the second sample file",
        instruction:
          "Upload the second Excel file and check whether the artifact updates the org chart.",
        details: [
          "This tests the repeated use case.",
          "The artifact should work when the Excel data changes.",
        ],
        success: "The second file also generates the correct org chart.",
      },
    ],
    troubleshooting: [
      {
        issue: "The file does not upload",
        fix: "Check whether the artifact supports .xlsx upload in the browser.",
      },
      {
        issue: "The chart is empty",
        fix: "Check whether the Excel file has Name, Designation, Team, and ReportsTo columns.",
      },
      {
        issue: "Reporting lines look wrong",
        fix: "Check whether ReportsTo exactly matches the manager's Name.",
      },
      {
        issue: "The chart is too wide",
        fix: "Ask Claude to improve horizontal scrolling and spacing.",
      },
    ],
    checklist: [
      "Excel upload works",
      "Reporting lines look correct",
      "Node cards show key details",
      "Expand and collapse works",
      "Second file also works",
    ],
  },
  {
    id: "sale-mis",
    title: "Sale MIS Automation",
    tool: "Claude Skills + Excel + PowerPoint",
    outcome:
      "Create a reusable Skill that turns sales data into an MIS PowerPoint.",
    color: "#23CE6B",
    icon: BarChart3,
    concept: {
      title: "Turn an MIS task into a reusable Skill",
      text: "The Skill should capture the analysis logic, slide structure, charts, branding, and output quality. After saving it, you can use it again with another sales data file.",
    },
    promptIntro:
      "Use this as the starting point. Edit it based on the sample Excel and sample PPT.",
    prompts: [
      {
        label: "Sale MIS Automation Prompt",
        content: `I want to design a Claude Skill for Sale MIS Automation.

I have uploaded:
1. A sample sales data Excel file
2. A sample MIS PowerPoint deck

Study both files and create a reusable Claude Skill.

The Skill should help me:
* Analyze the uploaded sales data
* Calculate the key KPIs
* Identify important trends and insights
* Create charts similar to the sample MIS deck
* Follow the same slide structure, branding, and visual style
* Generate the final MIS as a PowerPoint deck

Create the Skill instructions clearly so I can save it in Claude and use it again with another sales data file.`,
      },
    ],
    steps: [
      {
        title: "Open Claude Skills",
        instruction: "Open Claude and go to the Skills section.",
        details: [
          "Use the starting point shown in the activity.",
          "Keep the sample Excel and sample MIS PPT ready.",
        ],
        success: "You are ready to design the Skill.",
      },
      {
        title: "Upload the sample files",
        instruction:
          "Upload the sample sales Excel file and the sample MIS PowerPoint deck.",
        details: [
          "Ask Claude to study the data structure.",
          "Ask Claude to study the slide structure, charts, branding, and insight style.",
        ],
        success: "Claude understands the input data and expected MIS output.",
      },
      {
        title: "Design the Skill",
        instruction:
          "Paste the Sale MIS Automation prompt and let Claude create the Skill instructions.",
        details: [
          "Review whether the Skill captures analysis, charting, slide structure, and branding rules.",
          "Edit the Skill instructions if something important is missing.",
        ],
        success: "The Skill instructions are ready.",
      },
      {
        title: "Download the Skill",
        instruction: "Download the Skill package created by Claude.",
        details: [
          "Check that the Skill package is saved on your laptop.",
          "Do not rename files unless Claude asks you to.",
        ],
        success: "The Skill package is ready to save.",
      },
      {
        title: "Save the Skill in Claude",
        instruction: "Save or upload the Skill in your Claude account.",
        details: [
          "Check that the Skill appears in your Skills list.",
          "Enable the Skill if Claude asks you to.",
        ],
        success: "The Skill is saved and available in Claude.",
      },
      {
        title: "Use the Skill with a sales file",
        instruction:
          "Start a new chat, select or mention the Skill, upload the sales data file, and ask Claude to generate the MIS PPT.",
        details: [
          "Do not use any slash command.",
          "Ask naturally for the MIS PowerPoint output.",
        ],
        success: "Claude generates the MIS PowerPoint.",
      },
      {
        title: "Check the final output",
        instruction:
          "Open the generated PowerPoint and review the output.",
        details: [
          "Check slide structure, charts, KPIs, insights, and branding.",
          "Ask Claude to fix any gaps before final download.",
        ],
        success: "The MIS deck is ready.",
      },
    ],
    checklist: [
      "Skill is saved in Claude",
      "Skill can be used again",
      "Sales data file is accepted",
      "MIS PPT is generated",
      "Output follows the sample style",
    ],
  },
  {
    id: "cx-app",
    title: "CX App Vibe Coding",
    tool: "Google AI Studio",
    outcome:
      "Build a simple customer experience app from a clear use case and app logic.",
    color: "#ED4551",
    icon: Sparkles,
    concept: {
      title: "Do not start with “make me an app”",
      text: "Before building, define the app logic. A good CX app starts with a clear job, clear input, clear data, and clear output.",
    },
    appLogic: [
      {
        title: "What does your app do?",
        text: "One clear sentence: when the agent inputs X, the app does Y.",
      },
      {
        title: "What input does it need?",
        text: "Text, voice, number, image, or multiple fields.",
      },
      {
        title: "What data does it pull?",
        text: "Maps, search results, policy document, order details, or customer notes.",
      },
      {
        title: "What output does it give?",
        text: "Email draft, voice response, bullet points, yes/no answer, or next-best action.",
      },
    ],
    ideas: [
      {
        title: "CX Call Simulator",
        tech: "Voice Live API",
        description:
          "Gemini acts as an angry customer so agents can practice handling escalations safely.",
      },
      {
        title: "Speak-to-Draft Assistant",
        tech: "Voice to Text",
        description:
          "Agent speaks a rough solution and the app turns it into a polished customer email.",
      },
      {
        title: "Voice Policy Oracle",
        tech: "Voice Query",
        description:
          "Agent asks a policy question out loud and gets back the approved resolution script.",
      },
      {
        title: "Route Disruption Finder",
        tech: "Google Maps Data",
        description:
          "Agent enters a delayed order pin code and the app checks route issues to explain the delay.",
      },
      {
        title: "Competitor Price Checker",
        tech: "Google Search Data",
        description:
          "Agent enters a product name and the app checks whether a competitor price claim is valid.",
      },
    ],
    steps: [
      {
        title: "Pick a CX use case",
        instruction:
          "Think of a customer experience problem where a small app can help an agent respond better or faster.",
        details: [
          "Use your own idea if you have one.",
          "Otherwise, pick one of the sample ideas.",
        ],
        success: "You have one clear CX app idea.",
      },
      {
        title: "Define the app logic",
        instruction: "Write the app logic before you start building.",
        details: [
          "What does the app do?",
          "What input does it need?",
          "What data does it pull?",
          "What output does it give back?",
        ],
        success: "You can explain the app in one clear sentence.",
      },
      {
        title: "Open Google AI Studio",
        instruction: "Open Google AI Studio and start building the app.",
        details: [
          "Keep the first version simple.",
          "Focus on one useful workflow, not too many features.",
        ],
        success: "The first version of the app is created.",
      },
      {
        title: "Test with a realistic CX scenario",
        instruction:
          "Use a customer complaint, escalation, policy query, delivery delay, or price-match example to test the app.",
        details: [
          "Check whether the input works.",
          "Check whether the output is useful for the agent.",
        ],
        success:
          "The app gives a usable customer experience response.",
      },
      {
        title: "Refine the app",
        instruction: "Improve only what is needed after testing.",
        details: [
          "Fix unclear output.",
          "Improve the UI if required.",
          "Make the response easier for a customer-facing agent to use.",
        ],
        success: "The app is ready to show.",
      },
    ],
    checklist: [
      "Use case is clear",
      "Input is defined",
      "Data source is decided",
      "Output format is clear",
      "App runs with a test scenario",
    ],
  },
];

export function getActivity(id: string): Activity | undefined {
  return activities.find((a) => a.id === id);
}

// Choose readable foreground (ink or white) for a given brand bg
export function fgFor(bg: string): string {
  const light = ["#FFCE00", "#FFF6CF", "#F68A29", "#23CE6B", "#3699FC"];
  return light.includes(bg.toUpperCase()) ? "#221D23" : "#FFFFFF";
}
