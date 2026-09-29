import { clsx } from "clsx";
import { ProjectMetric } from "@/types/content";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  /**
   * Single-column list for narrow containers (the evidence column of a
   * project card). The default grid is for full-width contexts like the
   * case study header.
   */
  compact?: boolean;
}

/**
 * Deliberately just numbers and labels — no icons, no color-coding by
 * "good/bad." Per the constitution ("show evidence before making
 * claims"), the metrics are the claim's evidence; they don't need
 * decoration to look credible. Values are set in the mono face so they
 * read as measurements, not marketing copy.
 */
export function ProjectMetrics({ metrics, compact }: ProjectMetricsProps) {
  return (
    <dl
      className={clsx(
        compact
          ? "space-y-3"
          : "grid grid-cols-1 gap-x-6 gap-y-4 min-[420px]:grid-cols-2 sm:grid-cols-3"
      )}
    >
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt className="text-xs text-text-tertiary">{metric.label}</dt>
          <dd className="mt-0.5 font-mono text-sm text-text-primary">
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
