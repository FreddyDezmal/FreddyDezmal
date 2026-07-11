import { ProjectMetric } from "@/types/content";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
}

/**
 * Deliberately just numbers and labels — no icons, no color-coding by
 * "good/bad." Per the constitution ("show evidence before making
 * claims"), the metrics are the claim's evidence; they don't need
 * decoration to look credible.
 */
export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt className="text-xs text-text-tertiary">{metric.label}</dt>
          <dd className="mt-0.5 text-sm font-medium text-text-primary">
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
