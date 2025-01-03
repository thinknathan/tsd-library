/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Cross-Context Defold Event System
 * @see {@link https://github.com/Insality/defold-event|Github Source}
 * @noResolution
 */
declare module 'event.event' {
	interface LoggerInstance {
		trace(this: any, message: string, data?: {}): void;
		debug(this: any, message: string, data?: {}): void;
		info(this: any, message: string, data?: {}): void;
		warn(this: any, message: string, data?: {}): void;
		error(this: any, message: string, data?: {}): void;
	}
	export function set_logger(logger: LoggerInstance): void;
	/**
	 * Generate a new event instance. This instance can then be used to subscribe to and trigger events.
	 */
	export function create(
		this: void,
		callback: (this: any) => void,
		callback_context?: any,
	): EventInstance;
	class EventInstance {
		/**
		 * Subscribe a callback to the event. The callback will be invoked whenever the event is triggered.
		 */
		subscribe(callback: (this: any) => void, callback_context?: any): void;
		/**
		 * Remove a previously subscribed callback from the event.
		 */
		unsubscribe(callback: (this: any) => void, callback_context?: any): void;
		/**
		 * Determine if a specific callback is currently subscribed to the event.
		 */
		is_subscribed(
			callback: (this: any) => void,
			callback_context?: any,
		): boolean;
		/**
		 * Trigger the event, causing all subscribed callbacks to be executed.
		 */
		trigger(...args: any[]): void;
		/**
		 * Check if the event has no subscribed callbacks.
		 */
		is_empty(): boolean;
		/**
		 * Remove all callbacks subscribed to the event, effectively resetting it.
		 */
		clear(): void;
	}
}
