import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "cursorlistmyproduct" });

export const IMAGE_PIPELINE_EVENT = "listmyproduct/image-pipeline.run";
export const APLUS_PIPELINE_EVENT = "listmyproduct/aplus-pipeline.run";
export const COPY_PIPELINE_EVENT = "listmyproduct/copy-pipeline.run";
export const VIDEO_PIPELINE_EVENT = "listmyproduct/video-pipeline.run";
export const PLAYBOOK_PIPELINE_EVENT = "listmyproduct/playbook-pipeline.run";
export const BATCH_PIPELINE_EVENT = "listmyproduct/batch-pipeline.run";
