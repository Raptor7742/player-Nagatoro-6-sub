const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Arrête de me chauffer, Nagatoro  - épisode 6 VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/ijiranaide-nagatorocarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m210.syncusercontent.com/mfs-60:daf880583755db15465756026a598510=============================/p/épisode%206.mp4?allowdd=0&datakey=Wv+5N6IqX24Bfo7qhRRZN2OrK5gL8orRIw0iXwuI1WOov6yqRlBqGM+zuXZ98GxlFf8lXLS6U5he3uNciKbrl5eN/LURHMHGA0Tyv3RTYeEtQIJoGUZBM6KbR9SzeY45HH+N5Ev0NVb3mOXxnQT+BNA1N2SIf8Jp2xmYCKkQv54Aa0ns9muAHE3yPgRZ4yxSbS7OV5t5vD9LyPHZxL8oN08bybZ2bBz4HSs6WnDjrKkj+hyu1fc4u6X4M2YqL9muKPGnAd1qqpxIfGPR9zLRgu7OoC3KGnmp2UHjAzTaW26kUCvBIGQkcONYFOV5FkhHC24DrPmaldx+BoelYgYqvA&engine=ln-2.3.7.3&errurl=bF/aOUI5/pFQZsgBfao8AqhlDULaUv4mk9O8VnXZXBMNVfbA3PwHbuQ9eBugrpzjbppyke1aeHemeQDoVGpikJscOcPxQsi9/aLn++3Li2bJTCBSLSCAv22D6tF2ZtxT9lAPyQyqOKhS86FJPiZbLPQDDPdEkoEUN5a3pwEcNYtWjI2TVCyjkGrvag4TbBA28CWCB+5jYXe1y35VNmWRjXxkQjHR4m0vf5Al+xqlwJ1ITU05m2YApr7wvmSbTwvFQUtvuekVkOoaNGK9ECR5T4lLSu+dLS/CHBPqLpOEq1071IEsnjTPwr/c49I8gJQGIZqnvaNWnJLOpRzYsWQdBg==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJUMzJUE5cGlzb2RlJTIwNi5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnJUMzJUE5cGlzb2RlJTIwNi5tcDQ7&ipaddress=1458994159&linkcachekey=b44fbbb70&linkoid=652380000&mode=101&sharelink_id=8937747520000&timestamp=1672608944599&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=d952fef9049b62a68d73978abdf0690c3f5ad37f&cachekey=60:daf880583755db15465756026a598510=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
