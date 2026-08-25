# Google Drive Resume PDF Auto-Sync Setup Guide

This guide walks you through setting up automated synchronization between Tyler Lindow's personal website resume and a PDF file in Google Drive.

Whenever new resume changes are merged and deployed live to production ([tlindow.github.io](https://tlindow.github.io)), GitHub Actions automatically:
1. Builds the production site.
2. Deploys to GitHub Pages.
3. Renders a high-fidelity PDF with headless Chromium (`Space Mono` typography, Tinker rainbow accents, and exact `@media print` layout).
4. Updates the target PDF in Google Drive in-place (or uploads a new copy), preserving existing share links.

---

## 1. Create a Google Cloud Service Account

A Google Cloud Service Account allows GitHub Actions and local scripts to authenticate securely with Google Drive without browser popups or expiring tokens.

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one (e.g. `tlindow-resume-sync`).
3. Enable the **Google Drive API**:
   - Navigate to **APIs & Services** > **Library**.
   - Search for **Google Drive API** and click **Enable**.
4. Create a Service Account:
   - Navigate to **APIs & Services** > **Credentials**.
   - Click **Create Credentials** > **Service Account**.
   - Name: `resume-gdrive-sync`
   - Click **Done**.
5. Generate a JSON Key:
   - Click on your newly created Service Account.
   - Go to the **Keys** tab > **Add Key** > **Create new key**.
   - Choose **JSON** and click **Create**.
   - A `.json` key file will download to your computer.

---

## 2. Share Your Google Drive File or Folder

1. Open [Google Drive](https://drive.google.com/).
2. Locate or create the folder / PDF file you want to keep synced:
   - **Option A (Update Existing File In-Place - Recommended)**: If you already have a PDF in Google Drive whose shareable link you want to preserve, open the file, click **Share**, and paste the Service Account email address (e.g., `resume-gdrive-sync@project-id.iam.gserviceaccount.com`) as an **Editor**. Copy the **File ID** from the URL (`https://drive.google.com/file/d/<FILE_ID>/view`).
   - **Option B (Create in Folder)**: Create a folder (e.g. `Resume`), click **Share**, and share the folder with the Service Account email as **Editor**. Copy the **Folder ID** from the URL (`https://drive.google.com/drive/folders/<FOLDER_ID>`).

---

## 3. Configure GitHub Repository Secrets

To enable automated synchronization in CI/CD whenever the site is pushed live:

1. Open your repository on GitHub: `https://github.com/tlindow/tlindow`.
2. Navigate to **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret** and add:

| Secret Name | Description | Value |
|---|---|---|
| `GDRIVE_SERVICE_ACCOUNT_KEY` | *(Required)* Service Account Credentials | The entire contents of your downloaded `.json` key file. |
| `GDRIVE_FILE_ID` | *(Optional)* Target File ID | The ID of your existing Google Drive PDF file (for in-place updates). |
| `GDRIVE_FOLDER_ID` | *(Optional)* Target Folder ID | The ID of the target Google Drive folder (if creating a new file). |

Once these secrets are set, every push to `main` that deploys to GitHub Pages will automatically update your Google Drive resume PDF!

---

## 4. Local Testing & CLI Usage

You can also run the synchronization locally from your terminal:

### A. Local Environment File Setup
Create or update `site/.env.local`:
```bash
GDRIVE_SERVICE_ACCOUNT_KEY='{"type": "service_account", "project_id": "...", ...}'
GDRIVE_FILE_ID="your-google-drive-file-id"
```

### B. Export Local PDF Only (No Google Drive Upload)
```bash
npm run export:pdf
```
Generates `site/public/Tyler_Lindow_Resume.pdf`.

### C. Test Google Drive Sync (Dry Run)
```bash
npm run sync:gdrive -- --dry-run
```
Verifies your credentials and target Google Drive access without modifying any files.

### D. Full Live Sync
```bash
npm run sync:gdrive
```
Generates the PDF and uploads/updates it directly in Google Drive.
