FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY . .
EXPOSE 8080
ENTRYPOINT ["dotnet", "InWeb.FileProtectionServer.dll"]
# ENTRYPOINT ["dotnet", "InWeb.FileProtectionServer.dll", "--urls", "http://0.0.0.0:8080"]
