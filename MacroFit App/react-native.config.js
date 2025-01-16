module.exports = {
  // ...existing code...
  dependencies: {
    // ...existing code...
    "react-native-sqlite-storage": {
      platforms: {
        android: {
          sourceDir: "../node_modules/react-native-sqlite-storage/platforms/android-native",
          packageImportPath: "import io.liteglue.SQLitePluginPackage;",
          packageInstance: "new SQLitePluginPackage()"
        }
      }
    }
    // ...existing code...
  }
  // ...existing code...
};
