FROM node:20

WORKDIR /app

# Set NODE_ENV to "production"
ENV NODE_ENV=production

# Copy server and client package.json and package-lock.json files
COPY server/package.json server/package-lock.json ./server/
COPY client/package.json client/package-lock.json ./client/

# Install dependencies for both server and client
RUN cd server && npm install & cd ..
RUN cd client && npm install
RUN npm build client
RUN cd ..

# Copy the server and client application files
COPY server ./server
COPY client ./client

# Expose the port your server is listening on (assuming ports 3000 and 5000)
EXPOSE 3000
EXPOSE 5000

# Start both client and server applications
CMD ["sh", "-c", "cd server && npm start & cd client && npm start"]