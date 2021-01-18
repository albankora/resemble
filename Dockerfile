FROM node:12-slim

# Create server directory
WORKDIR /app

# Install server dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install

# Bundle server source
COPY . .

CMD [ "npm", "run", "dev" ]
