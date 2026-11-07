# 单纯逼近　`thm.simplicial-approximation`　·　说明
根 `../`

**证明分两层**：先证「星条件 $\Longrightarrow$ 单纯映射且同伦」，再证「重分够细就能满足星条件」。

**引理 1（星条件）**：设 $g : \operatorname{Vert}(K) \to \operatorname{Vert}(L)$ 满足

$$f\big(\operatorname{st}_{K}(v)\big) \;\subseteq\; \operatorname{st}_{L}\big(g(v)\big) \qquad \forall v .$$

则 (i) $g$ 把 $K$ 的每个单纯形送到 $L$ 的一个单纯形，因而是单纯映射；(ii) $|g| \simeq f$。

证明 (i)：设 $v_{0}, \ldots, v_{p}$ 张成 $K$ 的单纯形 $\sigma$，取内点 $x \in \sigma^{\circ}$。对每个 $i$，$x \in \operatorname{st}_{K}(v_{i})$，故 $f(x) \in \operatorname{st}_{L}(g(v_{i}))$。于是

$$f(x) \;\in\; \bigcap_{i=0}^{p} \operatorname{st}_{L}\big(g(v_{i})\big).$$

而 $L$ 中若干顶点的星之交非空，当且仅当这些顶点张成一个单纯形（$\bigcap \operatorname{st}(w_{i})$ 正是以 $\{w_{i}\}$ 为顶点集的单纯形的内部，若它非空则这个单纯形存在）。故 $\{g(v_{0}), \ldots, g(v_{p})\}$ 张成 $L$ 的单纯形，$g$ 是单纯映射。

> 续见 notes/thm.simplicial-approximation.2.md
