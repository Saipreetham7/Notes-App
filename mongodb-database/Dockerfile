# Use the official MongoDB image as the base
FROM mongo:latest

# Set environment variables for the root user
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=secret

# Optional: Copy custom initialization scripts into the image
COPY init-db.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017

# Use the default entrypoint provided by the base MongoDB image
CMD ["mongod"]
