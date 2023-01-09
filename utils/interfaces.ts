/**
 * The result of a validation.
 * 
 * The following interface is implemented on the method
 * @property {} success - 
 * `true` if the function was successfully executed event has been validated. 
 * `false` if the function was successfully executed but the event has not been validated (e.g. the post does not have enough likes).
 * `null` if the function did not execute successfully due to some error.
 * 
 * @property {} errors -
 * `undefined` if `success` is `true`.
 * Some little explanation if `success` is `false` (e.g. "The post does not have enough likes. Current count: 485.").
 * The error that caused the execution to fail if `success` is `null`.
 */
interface ValidationResult {
    success: boolean | null,
    errors?: {
        detail?: string | undefined;
        status?: number | undefined;
        title: string;
        type: string;
    }[] | undefined,
}