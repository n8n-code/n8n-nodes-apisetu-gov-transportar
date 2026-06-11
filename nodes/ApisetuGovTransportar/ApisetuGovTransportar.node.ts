import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovTransportar implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Transportar',
		name: 'N8nDevApisetuGovTransportar',
		icon: { light: 'file:./apisetu-gov-transportar.svg', dark: 'file:./apisetu-gov-transportar.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'DL and RC from Parivahan Sewa are available on DigiLocker.',
		defaults: { name: 'Apisetu Gov Transportar' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovTransportarApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
