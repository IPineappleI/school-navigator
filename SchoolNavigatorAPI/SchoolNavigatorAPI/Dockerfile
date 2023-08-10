FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["SchoolNavigatorAPI/SchoolNavigatorAPI.csproj", "SchoolNavigatorAPI/"]
RUN dotnet restore "SchoolNavigatorAPI/SchoolNavigatorAPI.csproj"
COPY . .
WORKDIR "/src/SchoolNavigatorAPI"
RUN dotnet build "SchoolNavigatorAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SchoolNavigatorAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SchoolNavigatorAPI.dll"]
