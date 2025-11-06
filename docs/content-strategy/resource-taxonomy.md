# Resource Taxonomy & Metadata Standards

## Top-Level Categories
1. **Sermons**
2. **Devotionals & Bible Studies**
3. **Outreach & Cell Reports**
4. **Training Manuals & Courses**
5. **Announcements & Events**
6. **Partner & Giving Resources**

## Subcategories & Tags
- Sermons: by series, speaker, service type, scripture focus.
- Devotionals: by theme (faith, healing, growth), duration (7-day, 30-day).
- Reports: attendance, evangelism, follow-up, impact stories.
- Training: leadership, new converts, departmental guides.
- Announcements: services, conferences, special programs.
- Giving: partnership updates, testimonies, financial reports.

## Metadata Fields
- Title
- Description/summary (max 160 characters for SEO)
- Author/speaker
- Date recorded/published
- Scripture references
- Department/Ministry (youth, women, evangelism, etc.)
- Format (video, audio, PDF, text)
- Tags (minimum 3)
- Access level (public, members, leaders, admin)

## File Naming Conventions
- `category_subcategory_title_date.ext`
- Example: `sermons_faith-series_living-by-faith_2024-02-18.mp3`

## Governance
- Content steward assigned per client to maintain data hygiene.
- Quarterly audit to merge duplicates, archive outdated materials.
- Version history maintained in Supabase or integrated CMS.

## AI Enablement
- Use metadata to prime Claude’s summarization/tagging.
- Require transcript or summary for each sermon to feed AI pipelines.
- Store AI-generated summaries with manual review tag before publishing.
