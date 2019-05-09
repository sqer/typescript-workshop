interface Loggable {
  log(): void;
}

interface Cacheable {
  cache(): void;
}

type LogOrCache = Loggable | Cacheable;

function logOrCache(object: LogOrCache): void {

}

function typeAliasesApp() {
  //logOrCache(object);
}

/*
 * $Required
 * 1. Implement logOrCache function
 * 2. Use logOrCache function in typeAliasesApp
 * 3. Define new type LoggableType with function log as in Loggable interface
 */