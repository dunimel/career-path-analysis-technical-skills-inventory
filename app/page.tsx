import TechnicalSkillsInventory from "../technical-skills-inventory"
import LearningResources from "../learning-resources"
import GapAnalysis from "../gap-analysis"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Technical Skills Inventory for Social Impact Tech Roles</h1>
        <div className="bg-blue-50 p-4 rounded-md mb-8">
          <h2 className="text-lg font-semibold mb-2">How to use this tool:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Rate your current skill level for each technology (1-4)</li>
            <li>Review the gap analysis for your target career path</li>
            <li>Explore the free learning resources to address your skill gaps</li>
            <li>Use the "Generate Learning Plan" button to create a personalized roadmap</li>
            <li>Click "Export Assessment" to save your skills inventory as a PDF</li>
          </ol>
        </div>
        <TechnicalSkillsInventory />
        <GapAnalysis />
        <LearningResources />
      </div>
    </main>
  )
}
