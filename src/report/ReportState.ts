import { FlowState } from '../flow/Flow';

export interface ReportState extends FlowState {
	// meta
	id: string;
	appVersion: string;
	modelId: string;
	modelVersion: string;
	flowId: string;

	// setup
	year: number;
	eventId: string;
	matchId: string;
	teamId: string;
}
