this.state.selectedImages.forEach((item, i) => {
    data.append("doc[]", {
      uri: item.uri,
      type: "image/jpeg",
      name: item.filename || `filename${i}.jpg`,
    });
  });