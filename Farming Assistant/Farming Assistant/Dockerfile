#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Farming Assistant/FarmingAssistant.csproj", "Farming Assistant/"]
RUN dotnet restore "Farming Assistant/FarmingAssistant.csproj"
COPY . .
WORKDIR "/src/Farming Assistant"
RUN dotnet build "FarmingAssistant.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FarmingAssistant.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FarmingAssistant.dll"]