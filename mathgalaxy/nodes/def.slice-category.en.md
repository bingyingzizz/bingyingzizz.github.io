# slice category　`def.slice-category`
English entry · root `../`
[in graph](../#n=def.slice-category)　·　[Chinese page (authoritative)](./def.slice-category.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 15 · definition · cluster Presheaves and Yoneda (`cat.yoneda`) · Category Theory

## Statement · **draft**
Let $\mathcal{C}$ be a category and $T$ a presheaf on $\mathcal{C}$. The **slice category** $\mathcal{C}/T$ (also written $\mathcal{C}_{T}$) is defined as follows:

1. objects are: an object of $\mathcal{C}$, say $X$, together with a section $s \in T(X)$, i.e. pairs $(X, s)$;
2. a morphism from $(X, s)$ to $(X', s')$ is determined by the condition $T(f)(s') = s$, namely $f : X \to X'$.

> continued in nodes/def.slice-category.en.2.md
