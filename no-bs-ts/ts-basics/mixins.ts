function myLogfunction() {
  return (str: string) => {
    console.log(str)
  }
}

// const logger = myLogfunction();

function createLoggerClass() {
  return class MyLogerClass {
    private completeLog: string = '';
    log(str: string) {
      console.log(str);
      this.completeLog += str + "\n"
    }
    dumpLog() {
      return this.completeLog;
    }
  }
}

const MyLogger = createLoggerClass();