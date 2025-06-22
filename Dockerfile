# Build stage
FROM eclipse-temurin:21-alpine AS builder

WORKDIR /app

COPY mvnw ./
COPY .mvn ./.mvn/
COPY pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY src ./src
RUN ./mvnw package -DskipTests

# Final stage
FROM eclipse-temurin:21-alpine

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
