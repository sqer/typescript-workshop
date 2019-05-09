class Logger {
  log(): void {
   console.log("Log error in console");
  }
}

class Cache {
  cache(): void {
    console.log("Cache saved!");
  }
}

function logOrCache(object: Logger | Cache): void {
  if (object instanceof Logger) {
    (<Logger>object).log();
  } else {
    (<Cache>object).cache();
  }
}

function unionTypeApp() {
  logOrCache(new Cache());
  logOrCache(new Logger());
}

export { unionTypeApp };