import { type SubmitEvent, useCallback, useId, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

export function APITester() {
	const methodId = useId();
	const endpointId = useId();
	const responseId = useId();
	const [response, setResponse] = useState("");

	const testEndpoint = useCallback(async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const form = e.currentTarget;
			const formData = new FormData(form);
			const endpoint = formData.get("endpoint") as string;
			const url = new URL(endpoint, location.href);
			const method = formData.get("method") as string;
			const res = await fetch(url, { method });

			const data: unknown = await res.json();
			setResponse(JSON.stringify(data, null, 2));
		} catch (error) {
			setResponse(String(error));
		}
	}, []);

	return (
		<div className="flex flex-col gap-6">
			<form onSubmit={testEndpoint} className="flex items-center gap-2">
				<Label htmlFor={methodId} className="sr-only">
					Method
				</Label>
				<Select name="method" defaultValue="GET">
					<SelectTrigger className="w-[100px]" id={methodId}>
						<SelectValue placeholder="Method" />
					</SelectTrigger>
					<SelectContent align="start">
						<SelectItem value="GET">GET</SelectItem>
						<SelectItem value="PUT">PUT</SelectItem>
					</SelectContent>
				</Select>
				<Label htmlFor={endpointId} className="sr-only">
					Endpoint
				</Label>
				<Input
					id={endpointId}
					type="text"
					name="endpoint"
					defaultValue="/api/hello"
					placeholder="/api/hello"
				/>
				<Button type="submit" variant="secondary">
					Send
				</Button>
			</form>
			<Label htmlFor={responseId} className="sr-only">
				Response
			</Label>
			<Textarea
				value={response}
				id={responseId}
				readOnly={true}
				placeholder="Response will appear here..."
				className="min-h-[140px] font-mono resize-y"
			/>
		</div>
	);
}
