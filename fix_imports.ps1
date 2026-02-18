
$filesFull = @(
    "src/app/bento-grid-1/page.tsx",
    "src/app/bento-grid-2/page.tsx",
    "src/app/bento-grid-3/page.tsx",
    "src/app/bento-grid-4/page.tsx",
    "src/app/bento-grid-6/page.tsx",
    "src/app/feature-1/page.tsx",
    "src/app/feature-2/page.tsx",
    "src/app/feature-selection/page.tsx",
    "src/app/auto-feature-selection/page.tsx",
    "src/app/footer-1/page.tsx",
    "src/app/hero-3/page.tsx",
    "src/app/hero-4/page.tsx",
    "src/app/hero-5/page.tsx",
    "src/app/horizontal-cta/page.tsx",
    "src/app/interactive-product-grid/page.tsx",
    "src/app/logo-slider/page.tsx",
    "src/app/navbar-2/page.tsx",
    "src/app/stats-section/page.tsx",
    "src/app/vertical-testimonials/page.tsx",
    "src/app/alternating-carousel/page.tsx",
    "src/app/accordion-faq-1/page.tsx",
    "src/app/community-cta/page.tsx",
    "src/app/faq-premium/page.tsx"
)

foreach ($relativePath in $filesFull) {
    $path = Join-Path "c:\Users\hugoz\Desktop\library_test" $relativePath
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        # Regex to find default import and change to named
        # Matches: import ComponentName from '@/path/to/component';
        # Replaces with: import { ComponentName } from '@/path/to/component';
        $newContent = $content -replace "import\s+([a-zA-Z0-9_]+)\s+from\s+'(@\/components\/[^']+)'", "import { `$1 } from '`$2'"
        
        if ($content -ne $newContent) {
            Set-Content -Path $path -Value $newContent -Encoding UTF8
            Write-Host "Updated $relativePath"
        } else {
            Write-Host "No change for $relativePath"
        }
    } else {
        Write-Host "File not found: $path"
    }
}
