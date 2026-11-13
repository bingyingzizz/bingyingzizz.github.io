# Hahn–Banach　`thm.hahn-banach`
English entry · root `../`
[in graph](../#n=thm.hahn-banach)　·　[Chinese page (authoritative)](./thm.hahn-banach.md)

**Step 2: Zorn.** Consider all objects "$g$ defined on a subspace $N \supseteq M$, linear, $g|_M = f$, and $g \le p$ on $N$", ordered by extension ($g_1 \preceq g_2$ when $g_2$ has larger domain and agrees on $g_1$ with $g_1$). The union of a totally ordered subfamily is again such an object (domains are unioned; linearity and $\le p$ are checked pointwise), so `lem.zorn` gives a maximal element $F$. If $\operatorname{dom} F \ne X$, take $x_0 \notin \operatorname{dom} F$ and extend again by Step 1, contradicting maximality. Hence $F$ is defined on all of $X$. $\blacksquare$

> continued in nodes/thm.hahn-banach.en.5.md
