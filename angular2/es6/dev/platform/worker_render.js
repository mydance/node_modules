export { WORKER_SCRIPT, WORKER_RENDER_PLATFORM, initializeGenericWorkerRenderer, WORKER_RENDER_APPLICATION_COMMON } from 'angular2/src/platform/worker_render_common';
export { WORKER_RENDER_APPLICATION, WebWorkerInstance } from 'angular2/src/platform/worker_render';
export { ClientMessageBroker, ClientMessageBrokerFactory, FnArg, UiArguments } from '../src/web_workers/shared/client_message_broker';
export { ReceivedMessage, ServiceMessageBroker, ServiceMessageBrokerFactory } from '../src/web_workers/shared/service_message_broker';
export { PRIMITIVE } from '../src/web_workers/shared/serializer';
export * from '../src/web_workers/shared/message_bus';
import { WORKER_RENDER_APPLICATION } from 'angular2/src/platform/worker_render';
/**
 * @deprecated Use WORKER_RENDER_APPLICATION
 */
export const WORKER_RENDER_APP = WORKER_RENDER_APPLICATION;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX3JlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FDRSxhQUFhLEVBQ2Isc0JBQXNCLEVBQ3RCLCtCQUErQixFQUMvQixnQ0FBZ0MsUUFDM0IsNENBQTRDLENBQUM7QUFDcEQsU0FBUSx5QkFBeUIsRUFBRSxpQkFBaUIsUUFBTyxxQ0FBcUMsQ0FBQztBQUNqRyxTQUNFLG1CQUFtQixFQUNuQiwwQkFBMEIsRUFDMUIsS0FBSyxFQUNMLFdBQVcsUUFDTixpREFBaUQsQ0FBQztBQUN6RCxTQUNFLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsMkJBQTJCLFFBQ3RCLGtEQUFrRCxDQUFDO0FBQzFELFNBQVEsU0FBUyxRQUFPLHNDQUFzQyxDQUFDO0FBQy9ELGNBQWMsdUNBQXVDLENBQUM7T0FDL0MsRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFDQUFxQztBQUU3RTs7R0FFRztBQUNILGFBQWEsaUJBQWlCLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge1xuICBXT1JLRVJfU0NSSVBULFxuICBXT1JLRVJfUkVOREVSX1BMQVRGT1JNLFxuICBpbml0aWFsaXplR2VuZXJpY1dvcmtlclJlbmRlcmVyLFxuICBXT1JLRVJfUkVOREVSX0FQUExJQ0FUSU9OX0NPTU1PTlxufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX3JlbmRlcl9jb21tb24nO1xuZXhwb3J0IHtXT1JLRVJfUkVOREVSX0FQUExJQ0FUSU9OLCBXZWJXb3JrZXJJbnN0YW5jZX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXInO1xuZXhwb3J0IHtcbiAgQ2xpZW50TWVzc2FnZUJyb2tlcixcbiAgQ2xpZW50TWVzc2FnZUJyb2tlckZhY3RvcnksXG4gIEZuQXJnLFxuICBVaUFyZ3VtZW50c1xufSBmcm9tICcuLi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL2NsaWVudF9tZXNzYWdlX2Jyb2tlcic7XG5leHBvcnQge1xuICBSZWNlaXZlZE1lc3NhZ2UsXG4gIFNlcnZpY2VNZXNzYWdlQnJva2VyLFxuICBTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3Rvcnlcbn0gZnJvbSAnLi4vc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9zZXJ2aWNlX21lc3NhZ2VfYnJva2VyJztcbmV4cG9ydCB7UFJJTUlUSVZFfSBmcm9tICcuLi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3NlcmlhbGl6ZXInO1xuZXhwb3J0ICogZnJvbSAnLi4vc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9tZXNzYWdlX2J1cyc7XG5pbXBvcnQge1dPUktFUl9SRU5ERVJfQVBQTElDQVRJT059IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfcmVuZGVyJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgV09SS0VSX1JFTkRFUl9BUFBMSUNBVElPTlxuICovXG5leHBvcnQgY29uc3QgV09SS0VSX1JFTkRFUl9BUFAgPSBXT1JLRVJfUkVOREVSX0FQUExJQ0FUSU9OO1xuIl19