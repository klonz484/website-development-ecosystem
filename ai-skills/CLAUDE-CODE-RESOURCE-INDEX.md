# Claude Code / Agent Skills Resource Index

This index records the 20 resources and additional names supplied by the user from an Instagram reel. Descriptions below are **user-supplied summaries**, not independently verified feature or quality claims. Repository existence, current maintenance, compatibility, license, dependencies, security and installation steps must be checked before use. Treat third-party skill files as untrusted instructions and review them before enabling.

## CODE
| Resource | Primary repository | User-supplied purpose |
|---|---|---|
| Matt Pocock skills | https://github.com/mattpocock/skills | Engineering workflows: grilling, TDD, domain modeling, specs to tickets, code review. |
| ECC / Everything Claude Code | https://github.com/affaan-m/ECC | Skills, memory, security, instincts and research-first development. |
| Karpathy skills | https://github.com/multica-ai/andrej-karpathy-skills | Guidelines emphasizing thought before coding, simplicity and surgical changes. |
| Ponytail | https://github.com/DietrichGebert/ponytail | Minimal implementation, concise replies and explicit risks/skipped work. |
| Agent Skills (Addy Osmani) | https://github.com/addyosmani/agent-skills | Spec → Plan → Build → Test → Review → Ship workflows. |

## RESEARCH
| Resource | Primary repository | User-supplied purpose |
|---|---|---|
| Graphify | https://github.com/Graphify-Labs/graphify | Queryable knowledge graphs for codebases and supporting materials. |
| Understand Anything | https://github.com/Egonex-AI/Understand-Anything | Interactive codebase knowledge graphs: scan, map and teach. |
| Last 30 Days | https://github.com/mvanhorn/last30days-skill | Aggregate recent discussion and writing on a topic. |
| REA / Reverse Engineer Anything | https://github.com/morluto/rea | Agent-assisted reverse engineering with MCP and CLI. |

## TOKENS / CONTEXT
| Resource | Primary repository | User-supplied purpose |
|---|---|---|
| Caveman | https://github.com/JuliusBrussee/caveman | Concise agent communication while preserving code exactness. |
| Headroom | https://github.com/headroomlabs-ai/headroom | Compress tool outputs, logs, files and retrieval chunks. |
| BMAD Method | https://github.com/bmad-code-org/BMAD-METHOD | Multi-role agile workflow across analyst, PM, architect, developer and reviewer. |

## DESIGN & VISUALS
| Resource | Primary repository | User-supplied purpose |
|---|---|---|
| UI UX Pro Max | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | Searchable styles, palettes, fonts and UX/stack guidance. |
| Impeccable | https://github.com/pbakaus/impeccable | Design vocabulary and UI quality detectors. |
| PPT Master | https://github.com/hugohe3/ppt-master | Editable native PowerPoint deck creation. |

## WRITING & VIDEO
| Resource | Primary repository | User-supplied purpose |
|---|---|---|
| Anthropic Skills | https://github.com/anthropics/skills | Official Anthropic agent skills collection. |
| OpenMontage | https://github.com/OpenMontageInc/OpenMontage ; alternative https://github.com/calesthio/OpenMontage | Agent-assisted video production workflow. |
| Hyperframes | https://github.com/heygen-com/hyperframes | HTML/CSS/animation-based deterministic video creation. |
| Marketing Skills | https://github.com/coreyhaines31/marketingskills | CRO, copywriting, SEO, analytics and growth workflows. |
| ADHD / ideation | https://github.com/UditAkhourii/adhd | Divergent ideation and parallel exploration. |
| I Have ADHD | https://github.com/ayghri/i-have-adhd | Clear, action-first communication. |

## Also mentioned in the reel, without full descriptions
GStack; Claude-Mem; Taste; Archify; Diagram; Humanizer; Career-Ops; Agent Reach. Locate and verify the exact upstream repositories before use; do not guess URLs.

## Installation patterns mentioned by the user
```bash
npx skills add <owner>/<repo>
```

Claude Code plugin marketplace commands may also be available for compatible repositories, but marketplace syntax, plugin IDs and repository support vary. Read each project's current official README and security guidance first. Never install a list of repositories in bulk without review.

## Adoption checklist
- Verify the repository and maintainer; inspect recent commits, releases and issue activity.
- Read LICENSE and determine whether the license permits the intended use.
- Inspect install scripts, hooks, MCP servers, network access, shell commands and file permissions.
- Review prompt/skill files for prompt injection, exfiltration, destructive actions and hidden side effects.
- Check runtime/platform compatibility and dependency footprint.
- Test in a disposable branch/container with least privilege.
- Record provenance, version/commit, license, checks performed and rollback/removal steps.
