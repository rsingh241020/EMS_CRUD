# ============================
# Dockerfile for EMS Backend
# ============================

# Step 1: Build stage (Maven + Java 21)
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy entire backend project
COPY . .

# Build the Spring Boot app (skip tests)
RUN mvn -DskipTests clean package

# Step 2: Runtime stage (Java 21)
FROM eclipse-temurin:21-jdk
WORKDIR /app

# Copy the built JAR from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose default port (not strictly necessary, but good practice)
EXPOSE 8080

# Start Spring Boot app with PORT from Render environment variable
CMD ["sh", "-c", "java -Dserver.port=${PORT} -jar app.jar"]
