#!/bin/bash

# Aakash Singh Portfolio - Setup Script
# This script checks prerequisites and sets up the project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Aakash Portfolio - Setup Script    ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo ""

# Check Node.js
echo -e "${YELLOW}Checking Node.js...${NC}"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓ Node.js installed: ${NODE_VERSION}${NC}"
    
    # Extract major version
    NODE_MAJOR=$(echo $NODE_VERSION | cut -d. -f1 | sed 's/v//')
    if [ "$NODE_MAJOR" -lt 14 ]; then
        echo -e "${RED}✗ Node.js version must be >= 14.0.0${NC}"
        exit 1
    fi
else
    echo -e "${RED}✗ Node.js not found. Please install Node.js >= 14.0.0${NC}"
    echo -e "  Download from: https://nodejs.org/"
    exit 1
fi

# Check npm
echo -e "${YELLOW}Checking npm...${NC}"
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}✓ npm installed: v${NPM_VERSION}${NC}"
else
    echo -e "${RED}✗ npm not found${NC}"
    exit 1
fi

echo ""

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
else
    echo -e "${RED}✗ Failed to install dependencies${NC}"
    exit 1
fi

echo ""

# Build CSS
echo -e "${YELLOW}Building production CSS...${NC}"
npm run build-css

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ CSS built successfully${NC}"
else
    echo -e "${RED}✗ Failed to build CSS${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   Setup Complete! 🎉                  ║${NC}"
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo ""
echo -e "  1. Start development server:"
echo -e "     ${YELLOW}npm start${NC}"
echo ""
echo -e "  2. In a separate terminal, watch SASS files:"
echo -e "     ${YELLOW}npm run dev${NC}"
echo ""
echo -e "  3. Open your browser:"
echo -e "     ${YELLOW}http://localhost:8000${NC}"
echo ""
echo -e "${BLUE}Happy coding! 💻${NC}"
echo ""
