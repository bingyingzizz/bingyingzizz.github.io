# nth roots　`thm.nth-root`
English entry · root `../`
[in graph](../#n=thm.nth-root)　·　[Chinese page (authoritative)](./thm.nth-root.md)

⚠ The two estimates go in opposite directions: raising uses the **binomial theorem** (**one cannot keep only the first-order term**: from the binomial expansion $ (b+h)^{n} - b^{n} = h\sum_{k\ge1}\binom{n}{k} b^{n-k} $, take $0 < h \le 1$ and then make $h$ small enough), while lowering uses **Bernoulli** ($(1 - h/b)^{n} \ge 1 - nh/b$).

This is where `thm.binomial` and `thm.bernoulli` are first genuinely used in the graph.

⚠ Uniqueness rests on **strict monotonicity**: $0 \le u < v \implies u^{n} < v^{n}$ (factorization $v^{n} - u^{n} = (v-u)(v^{n-1} + \cdots + u^{n-1}) > 0$).

> continued in nodes/thm.nth-root.en.4.md
