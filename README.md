## BLiT Businesses Community React Apps
This is an Open Source project under the MIT License intended for educational purposes. BLiT provides an API endpoint and free static hosting to by utilized contributors. This project aims to help developers learn the concepts of consuming APIs and contributing to Open Source.

Endpoint: https://blacklatinoit.com/api/businesses

### How to contribute:

1. Fork _binarywhisperer/blit-businesses_ repository to _your-github-account/blit-businesses_ ( _Done at https://github.com/binarywhisperer/blit-businesses_ )
2. Clone project locally. `git pull origin your-github-account/blit-businesses`
3. Open project locally for editing in your IDE or text editor of choice.
4. Create a new branch. `git checkout -b branch-name` ( _It is best practice to avoid pushing to master at all cost._ )
5. Navigate to the ***/blit-businesses/community*** directory. `cd community`
6. Create a new Create React App project. `npx create-react-app your-name-here` 
7. Edit ***.gitignore*** change `/build` to `#/build`. ( _WARNING! Normally you don't commit these files to your repository, but the static hosting provided by BLiT does not provide a build step option yet._ )
8. Edit your project by watching local files. `npm run start`
9. Make your page. Refer to ***/blit-businesses/community/myiah*** or other projects in the ***/community*** directory for inspiration.
10. BUILD YOUR FINAL PROJECT FILES! `npm run build` ( _WARNING! Normally automated as part of your build process. See note after #7_ ) 
11. Commit your changes to your fork of the repository. `git add .` then `git commit -am "Detailed commit messages save lives"` then `git push origin branch-name`
12. Merge your `branch-name` into your `master`
13. Create Pull Request from your `master` into `binarywhisperer/blit-businesses`

#### Once merged, your changes will be live at and you will have successfully contributed to our open source project.

Live: https://static.blacklatinoit.com/your-name-here/build