import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  sync(): Promise<any>;
  isFailedUpdate(packageHash: string): Promise<boolean>;
  allow(): void;
  clearPendingRestart(): void;
  disallow(): void;
  restartApp(onlyIfUpdateIsPending: boolean): void;
  downloadUpdate(updatePackage: Object, notifyProgress: boolean): Promise<void>;
  getConfiguration(): Promise<object>;
  getUpdateMetadata(updateState: number): Promise<object>;
  getNewStatusReport(): void;
  installUpdate(updatePackage: Object, installMode: number, minimumBackgroundDuration: number): Promise<object>;
  getLatestRollbackInfo(): Promise<string | null>;
  setLatestRollbackInfo(packageHash: string): Promise<string | null>;
  isFirstRun(packageHash: string): Promise<boolean | null>;
  notifyApplicationReady(): Promise<string | null>;
  recordStatusReported(statusReport: Object): void;
  saveStatusReportForRetry(statusReport: Object): void;
  downloadAndReplaceCurrentBundle(remoteBundleUrl: string): void;
  clearUpdates(): void;
}

export default TurboModuleRegistry.get<Spec>("RTNCodePush") as Spec | null;