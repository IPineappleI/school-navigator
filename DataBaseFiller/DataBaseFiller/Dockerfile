FROM mcr.microsoft.com/dotnet/runtime:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["DataBaseFiller/DataBaseFiller.csproj", "DataBaseFiller/"]
RUN dotnet restore "DataBaseFiller/DataBaseFiller.csproj"
COPY . .
WORKDIR "/src/DataBaseFiller"
RUN dotnet build "DataBaseFiller.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DataBaseFiller.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DataBaseFiller.dll"]
