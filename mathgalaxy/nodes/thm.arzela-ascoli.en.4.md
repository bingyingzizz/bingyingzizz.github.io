# Arzelà–Ascoli theorem　`thm.arzela-ascoli`
English entry · root `../`
[in graph](../#n=thm.arzela-ascoli)　·　[Chinese page (authoritative)](./thm.arzela-ascoli.md)

First take $K$ such that $j \le N$ implies $|g_{k}(x_{j}) - g_{l}(x_{j})| < \varepsilon$ ($k, l \ge K$), then for arbitrary $x$ choose the nearest $x_{j}$ and use equicontinuity to bound $|g_{k}(x) - g_{l}(x)|$ by $3\varepsilon$.

∎

⭐ **Each hypothesis governs one thing**: boundedness guarantees "at each point there is a convergent subsequence", while equicontinuity guarantees "the same subsequence converges at all points simultaneously". Dropping either one gives a counterexample ($f_{n}(x) = x^{n}$ is bounded but not equicontinuous; $f_{n}(x) = n$ is equicontinuous but not uniformly bounded).

> continued in nodes/thm.arzela-ascoli.en.5.md
